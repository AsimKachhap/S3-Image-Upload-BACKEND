const dotenv = require("dotenv");
const app = require("./app.js");
const connectDB = require("./db/index.js");

const PORT = process.env.PORT || 8080;

dotenv.config();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER started on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONODB connection FAILED", error);
  });
