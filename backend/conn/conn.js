const mongoose = require("mongoose");
const URI = process.env.URI;

// mongoose.connect(URI)
// .then(()=> console.log("Connected to database"))
// .catch((err)=> console.log(err))

const conn = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
};

conn();