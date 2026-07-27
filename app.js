const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require ("path")

const MONGO_URL = "mongodb://127.0.0.1:27017/nestify"

main()
    .then(() => {
        console.log("connection sucessful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.send("Root is working")
})

app.get("/listing",async (req, res) => {
    const allListings = await Listing.find({})
    res.render("listing/index.ejs", {allListings});
    });

// app.get("/testlistings", async(req,res) =>{
//     let sampleListing = new Listing({
//         title: "My Villa",
//         description: "By the bitch",
//         price: 1200,
//         location: "Gazipur",
//         country: "Bangladesh"
//     })
// await sampleListing.save();
// console.log("Successful");
// res.send("Successfull");
// })

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

