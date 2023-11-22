const express = require("express");
const multer = require("multer");
const router = express.Router();

const authController = require("../controllers/authController.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "public/temp");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("photo"), authController.registerUser);

module.exports = router;
