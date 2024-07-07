require("dotenv").config();
require("./conn/conn")

const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const User = require("./routes/user");
const Books = require('./routes/book');
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order")

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

//user routes
app.use("/api/v1/", User)
app.use("/api/v1/", Books)
app.use("/api/v1/", Favourite)
app.use("/api/v1/", Cart)
app.use("/api/v1/", Order)

app.get("/", (req, res)=>{
    res.send("HII")
})

app.listen(PORT, ()=>{
    console.log("Listining on Port", PORT)
})