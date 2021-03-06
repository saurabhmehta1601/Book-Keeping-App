const express = require("express");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const usersRoute = express.Router();
const generateToken = require("../utils/generateToken");
const authMiddleware = require("../middlewares/authMiddleware");

// Register
usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      throw new Error("User with given email already exists");
    }
    const createdUser = await User.create({ name, email, password });
    res.send({
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      token: generateToken(createdUser.id),
    });
  })
);

// Login
usersRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user && (await user.isPasswordMatch(password))) {
      res.status(200);
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid credentials");
    }
  })
);

// update user
usersRoute.put("/update", (req, res) => {
  res.send("user update request made");
});

// delete user
usersRoute.delete("/:id", (req, res) => {
  res.send("deleted user request made");
});

// fetch users
usersRoute.get("/", authMiddleware, (req, res) => {
  res.send("fetched users");
});

usersRoute.get(
  "/profile",
  authMiddleware,
  asyncHandler(async (req, res) => {
    try {
      const user= await User.findById(req.user._id).populate('books')
      
      if (!user) {
        throw new Error("You do not have any profile yet");
        res.status(200);
      }

      res.send(user);
    } catch (error) {
      res.status(500);
      console.log("Error on server is ", error);
      throw new Error("Internal Server error");
    }
  })
);

module.exports = usersRoute;
