const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// middlewere
app.use(express.json())
app.use(cors())
// database connection
mongoose.connect(process.env.LOCAL_DATABASE).then(() => {
    console.log('db conneted');
})

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Tour Management Route Working")
})

const tourRoute = require("./routes/tours.routes");

app.use("/api/v1/tours", tourRoute)
app.use("/api/v1/tour", tourRoute)

app.all("*", (req, res) => {
    res.send("No Route Found")
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})