const SubscribeEmail = require("../models/SubscribeModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const sendEmail = require("../utils/sendEmail");

const updateUser = async (req, res) => {
  res.send("updated user");
};
const changeUserPassword = async (req, res) => {};
const getAllSubscribedEmails = async (req, res) => {
  const subscribedEmails = await SubscribeEmail.find({});
  if(!subscribedEmails){
    throw new CustomError.BadRequestError('There was an error with getting the emails');
  }
  const emailList = subscribedEmails.map((user)=>user.email);
  res
    .status(StatusCodes.OK)
    .json({
      emails: emailList,
      subscriptionCount: emailList.length,
    });
};
const subscribeUserEmail = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const duplicateEmailUser = await SubscribeEmail.findOne( {email} );
  if (duplicateEmailUser) {
    throw new CustomError.BadRequestError(
      `This email has already been subscribed try another one`
    );
  }
  await SubscribeEmail.create({ email });
  res.status(StatusCodes.CREATED).json({ msg: "You are subscribed to GVG" });
};
const deleteSubscribedEmail = async ( req, res ) => {
  const {email} = req.params;
  if(!email){
    throw new CustomError.BadRequestError("Please provide an email");
  } 
  const deletedEmail = await SubscribeEmail.findOne({email});
  if(!deletedEmail){
    throw new CustomError.BadRequestError("There has been an error with deletion");
  }
  await SubscribeEmail.findOneAndDelete(email);
  res.status(StatusCodes.OK).json({msg:"Email Deleted"})

}
const sendUserMessage = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    throw new CustomError.BadRequestError(
      `Please provide name,email and message`
    );
  }
  const HomeEmail = "Office@geovending.ge";
  const html = `<p>${message}</p>`;
  sendEmail({
    to: HomeEmail,
    subject: `message from ${name}, with an email of - ${email}`,
    html,
  });
  res.status(StatusCodes.OK).json({ msg: "Message sent succesfully" });
};
module.exports = {
  updateUser,
  changeUserPassword,
  subscribeUserEmail,
  getAllSubscribedEmails,
  deleteSubscribedEmail,
  sendUserMessage,
};
