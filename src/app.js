const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cors());

app.use("/api/v1/auth", authRoutes);

module.exports = app;
