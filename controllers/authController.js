const User = require("../models/UserModel");
const Token = require("../models/TokenModel");
const crypto = require("crypto");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationEmail,
} = require("../utils");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide name and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid credentials");
  }
  const passwordCheck = await user.comparePassword(password);
  if (!passwordCheck) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError("This account is not verified");
  }
  const tokenUser = createTokenUser(user);

  let refreshToken = "";
  const existingToken = await Token.findOne({ user: user._id });
  const thirtyDays = 1000 * 60 * 60 * 24 * 30;
  const expirationTime = new Date(Date.now() + thirtyDays);
  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken, expiresAt:expirationTime });
    res.status(StatusCodes.OK).json({ user: tokenUser });
    return;
  }
  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id, expires:expirationTime };

  const token = await Token.create(userToken);

  attachCookiesToResponse({ res, user: tokenUser, refreshToken, expires:expirationTime });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    throw new CustomError.BadRequestError(
      "Please Provide Email,Password and Name"
    );
  }
  const isFirstAccount = (await User.countDocuments({})) < 2;
  if (!isFirstAccount) {
    throw new CustomError.BadRequestError("Admin has already been registered");
  }
  const role = "admin";
  const verificationToken = crypto.randomBytes(40).toString("hex");
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  });
  const origin = "http://localhost:5173";
  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });
  res.status(StatusCodes.CREATED).json({ user: { name, email } });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Verification Failed");
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError("Verification Failed");
  }

  user.isVerified = true;
  user.verifiedDate = Date.now();
  user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email Verified" });
};

const logout = async (req, res) => {
  console.log(req.user.userId);
  await Token.findOneAndDelete(req.user.userId);
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

const autoLogout = async (req,res) => {
   const token = await Token.findOneAndDelete({user:req.body.userId});
   if (token) {
     throw new CustomError.BadRequestError("Cannot perform a log out");
   }
   res.status(StatusCodes.OK).json({ msg: "user logged out" });
}

const showMe = async (req,res) => {
  const userId = req.user.userId;
  res.status(StatusCodes.OK).json({ msg: 'Welcome Back'});
}

module.exports = { login, register, logout, verifyEmail, showMe,autoLogout };
