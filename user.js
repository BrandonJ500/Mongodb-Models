const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    addresses: [
        {
            street:String,
            city:String,
            state:String,
            country:String
    }   
    ]
})

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter"
    })
    u.addresses.push({
        street:"123 Seame St.",
        city: "New York",
        state: "NY",
        country: "USA"
    })
    const res = await u.save();
    console.log(res);
}
const addAddress = async(id) => {
    const user = await User.findById(id);
       user.addresses.push(
        {
        street:"99 3rd St.",
        city: "New York",
        state: "NY",
        country: "USA"
       }
    )
   const res = await user.save();
   console.log(res);
}
addAddress("644df802ce2aee76075ee40a");