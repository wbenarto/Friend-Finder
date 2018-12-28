const express = require("express");
const path = require("path");

//Setting up Express connection
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log(`We liveeee baybeehh at ${PORT}`);
})