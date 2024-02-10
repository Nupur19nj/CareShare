const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

// Setting up config file
dotenv.config({ path: "./config/config.env" });

// Connecting to DB
connectDatabase();
const server = app.listen(process.env.PORT, () => {
  //   console.log("hii");
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
