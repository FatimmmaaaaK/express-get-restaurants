const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");
const seedRestaurant = require("./seedData");

const port = 3000;

//TODO: Create your GET Request Route Below: 

app.get('/restaurants', async(request, response)=> {
    const allRestaurants = await Restaurant.findAll();
    await response.json(allRestaurants);
});

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
    console.log(' http://localhost:3000/restaurants')
})
