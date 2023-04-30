const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect("mongodb://localhost:27017/relationshipDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongo connected");
}).catch(err=>{
    console.log("oh no mongo connection error!");
    console.log(err);
})

const productSchema = new Schema({
    name:String,
    price:Number,
    season: {
        type:String,
        enum: ["Spring", "Summer", "Fall","Winter"]
    }
});
const farmSchema = new Schema({
    name:String,
    city:String,
    products: [{type: Schema.Types.ObjectId, ref: "Product"}]
})

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);


// Product.insertMany([
//     {name: "Goddess Melon", price: 9.99, season: "Summer"},
//     {name: "Sugar Baby Watermelon", price: 4.99, season: "Summer"},
//     {name: "Asparagus", price: 3.99, season: "Spring"}
// ])
const makeFarm = async() => {
    const farm = new Farm({name: "Full Belly Farms", city: "Guidan, CA"})
    const melon = await Product.findOne({name: "Goddess Melon"})
    farm.products.push(melon)
    await farm.save();
    console.log(farm)
}
makeFarm();