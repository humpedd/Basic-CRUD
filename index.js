const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route.js')
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});


//routes
app.use("/api/products",productRoute);
app.get('/', (req, res) => {
    res.send("Hello sdasd");
});


mongoose.connect("mongodb+srv://humphreytarra:w8asWMHmGaX0IwMw@backenddb.g9wvayc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log("connected");
    })
    .catch(() => {
        console.log("connection Failed");
    });