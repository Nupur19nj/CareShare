const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(express.json());

const auth = require("./routes/auth");
app.use("/api/v1", auth);

module.exports = app;
