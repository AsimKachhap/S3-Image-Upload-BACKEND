const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name."],
    },

    email: {
      type: String,
      required: [true, "Please Prenter email."],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
