const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
      console.log(`MongoDB DB connected with HOST: ${con.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
module.exports = connectDatabase;
