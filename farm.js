const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongo connected");
}).catch(err=>{
    console.log("oh no mongo connection error!");
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    season: {
        type:String,
        enum: ["Spring", "Summer", "Fall","Winter"]
    }
});

const Product = mongoose.model("Product", productSchema);


Product.insertMany([
    {name: "Goddess Melon", price: 9.99, season: "Summer"},
    {name: "Sugar Baby Watermelon", price: 4.99, season: "Summer"},
    {name: "Asparagus", price: 3.99, season: "Spring"}
])