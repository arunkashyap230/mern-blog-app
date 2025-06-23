const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Company = require("../models/Company");

// Signup route
router.post("/signup", async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      name,
      phone,
      email,
      password,
    });

    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

const jwt = require("jsonwebtoken");
// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/company", async (req, res) => {
  try {
    const companyData = req.body; // retrieve form data
    console.log("companyData " + companyData);
    const newCompany = new Company(companyData); // create new company instance
    console.log("companyData " + newCompany);
    await newCompany.save(); // save the company to MongoDB
    res.status(201).json({ message: "Company successfully saved!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving company", error });
  }
});

module.exports = router;
