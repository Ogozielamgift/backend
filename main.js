const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./Config/db");
const contentRoutes = require("./routes/Content");
const bodyparser = require("body-parser");
const app = express();
connectDB();
const port = process.env.port;
// let productInfo = [
//   {
//     id: 1,
//     title: "title1",
//     firstName: "Chizoba",
//     lastName: "Kelechi",
//     age: 76,
//   },
//   {
//     id: 2,
//     title: "title2",
//     firstName: "Okoro",
//     lastName: "Chiemela",
//     age: 45,
//   },
//   {
//     id: 3,
//     title: "title3",
//     firstName: "chidinma",
//     lastName: "obi ",
//     age: 21,
//   },
// ];
// app.get("/", (req, res) => {
//   res.send("Choose another port");
// });
// app.get("/get", (req, res) => {
//   res.json(productInfo);
// });
app.use(cors());
app.use(bodyparser.json());
app.use("/Contents", contentRoutes);
app.listen(port, () => console.log(`server running on port ${port}`));
