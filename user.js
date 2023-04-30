const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    address: [
        {
            street:String,
            city:String,
            state:String,
            country: {
                type:String,
                required: true
        } 
    }   
    ]
})