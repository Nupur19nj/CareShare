const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

// register a user /api/v1/register
// register a user /api/v1/register
// exports.registerUser = catchAsyncErrors(async (req, res, next) => {
//   const { name, contact, password } = req.body;
//   try {
//     const user = await User.create({
//       name,
//       contact,
//       password,
//     });
//     sendToken(user, 200, res);
//   } catch (error) {
//     // Check if the error is a Mongoose validation error
//     if (error.name === "ValidationError") {
//       const errors = Object.values(error.errors).map((val) => val.message);
//       return next(new ErrorHandler(errors, 400));
//     }
//     // If the error is not a validation error, proceed with generic error handling
//     return next(new ErrorHandler(error.message, 400));
//   }
// });

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, contact, password } = req.body;
  console.log(req.body);
  const user = await User.create({
    name,
    contact,
    password,
  });
  console.log("HFIUSDF");
  sendToken(user, 200, res);
  // const token = user.getJwtToken();
  // res.status(201).json({
  //   success: true,
  //   token,
  // });
});

// login user /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { contact, password } = req.body;

  //   check if contact and password is entered
  if (!contact || !password) {
    return next(new ErrorHandler("Please enter contact and password", 400));
  }
  //   find user in db
  const user = await User.findOne({ contact }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid contact or password", 401));
  }
  //   check if password is correct
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid password", 401));
  }
  sendToken(user, 200, res);
  // const token = user.getJwtToken();
  // res.status(201).json({
  //   success: true,
  //   token,
  // });
});

// logout user => /api/v1/logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
