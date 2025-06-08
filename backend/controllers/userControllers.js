const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const dotenv = require("dotenv");

// Creating a Token
const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// Sigining up a User
const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    const token = createToken(user._id);
    res.status(201).json({
      message: "Sign up successful",
      data: {
        Username: user.username,
        UserId: user._id,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login a user
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({
      message: "Login Successful",
      data: {
        Username: user.username,
        UserId: user._id,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res
      .status(200)
      .json({ "This is a request to get all users": users });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving users",
      error: error.message,
    });
  }
};

module.exports = { userSignUp, userLogin, getAllUsers };
