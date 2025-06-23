const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Connection error:", error.message);
  }
}

startServer();
