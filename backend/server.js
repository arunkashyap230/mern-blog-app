const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors
const userRoutes = require("./routes/userRoutes");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS
app.use("/api/auth", userRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/xyz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error(err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
