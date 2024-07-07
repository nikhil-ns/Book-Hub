const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        default : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1720078590~exp=1720082190~hmac=be3a0d1e005e1b7261007f17ecff8f92bf837e6e24ba04dc8246a51a33a1c355&w=740"
    },
    role : {
        type : String,
        default : "user",
        enum : ["user", "admin"]
    },
    favourites : [
        {
            type : mongoose.Types.ObjectId,
            ref : "books"
        },
    ],
    cart : [
        {
            type : mongoose.Types.ObjectId,
            ref : "books"
        },
    ],
    orders : [
        {
            type : mongoose.Types.ObjectId,
            ref : "order"
        },
    ]
}, {timestamps : true});

module.exports = mongoose.model("user", user);
