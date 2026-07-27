const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require ("path")
const methodOverride = require("method-override");

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
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.send("Root is working")
})

//Index Route
app.get("/listing",async (req, res) => {
    const allListings = await Listing.find({})
    res.render("listing/index.ejs", {allListings});
    });


//New Route
app.get("/listing/new", (req,res) => {
    res.render("listing/new.ejs");
});


//Show Route
app.get("/listing/:id",async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/show.ejs",{listing});
});

//create route
app.post("/listing", async (req,res) => {
    const newListing = Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listing");
})

//edit route
app.get("/listing/:id/edit",async (req,res) =>{
    let {id} = req.params;
    const listing =await Listing.findById(id);
    res.render("listing/edit.ejs", { listing });
})

//update route
app.put("/listing/:id", async (req,res) => {
     let {id} = req.params;
     await Listing.findByIdAndUpdate(id, {...req.body.listing});
     res.redirect(`/listing/${id}`);
     
})

//delete route
app.delete("/listing/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listing");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

