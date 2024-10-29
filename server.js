const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const DbConnection = require("./config/DbConnection.js");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoute.js");

dotenv.config();

//rest object
const app = express();

//MongoDb Connection
DbConnection();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", userRoutes);
// app.use("/user", require("./routes/userRoute.js"));

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`.bgRed);
});
