const express = require("express");
const detenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error! Database not connected!", err));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
//app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Server is running port on ${port}`));
