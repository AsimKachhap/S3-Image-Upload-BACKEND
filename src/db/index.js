const mongoose = require("mongoose");

const connectDB = async function () {
  try {
    connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MONOGODB CONNECTED!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
