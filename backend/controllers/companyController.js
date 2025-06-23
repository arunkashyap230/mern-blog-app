// const express = require("express");
// const router = express.Router();

// // Import your model (if you're using MongoDB, for example)
// const Company = require("../models/Company"); // assuming you have a `Company` model

// // POST route to handle company creation
// router.post("/company", async (req, res) => {
//   try {
//     const companyData = req.body; // retrieve form data
//     const newCompany = new Company(companyData); // create new company instance
//     await newCompany.save(); // save the company to MongoDB
//     res.status(201).json({ message: "Company successfully saved!" });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving company", error });
//   }
// });

// module.exports = router;
