require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();
const path = require("path");
// --

// other packages
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimiter = require("express-rate-limit");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// --

// database
const connectDB = require("./db/connect");
// --

// middlewares
const errorHandlerMiddleware = require("./middleware/errorHandler");
const notFoundMiddleware = require("./middleware/notFound");
// --

// routers
const authRouter = require("./routes/authRoutes");
const productsRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
// --

const limiter = rateLimiter({
  windowMs: 1000 * 60 * 2,
  max: 2000, 
  message: "Too many requests from this IP, please try again later",
});

app.set("trust proxy", 1);
app.use(limiter);
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "https://www.facebook.com"],
        scriptSrc: [
          "'self'",
          "https://res.cloudinary.com",
          "https://connect.facebook.net",
          "data:",
        ],
        imgSrc: [
          "'self'",
          "*",
          "https://scontent.cdninstagram.com",
          "https://res.cloudinary.com",
          "data:",
        ],
        mediaSrc: [
          "'self'",
          "*",
          "https://scontent.cdninstagram.com",
          "https://res.cloudinary.com",
          "data:",
        ],
      },
    },
  })
);
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static("./public-front/dist"));
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/user", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public-front/dist", "index.html"));
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5002;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`the app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
