const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set:v => v === "" ? "https://unsplash.com/photos/blue-wooden-2-story-house-during-daytime-Nj3jP7hn5HA" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = mongoose.model("Listing", listingSchema)
module.exports = Listing;