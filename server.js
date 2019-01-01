const express = require("express");


//Setting up Express connection
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));

// require("./routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log(`We liveeee baybeehh at ${PORT}`);
})