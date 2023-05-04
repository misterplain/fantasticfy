const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const fetchDataRoute = require("./routes/fetchDataRoute");

const app = express();

app.use(express.json());
app.use(cors("*"));

//routes
app.use("/api", fetchDataRoute);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));