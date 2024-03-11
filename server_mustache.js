// We are importing the express library
// We use express to create an application object that represents our server
// import mustache-express
const express = require("express");
const server = express();
const mustache = require('mustache-express')
const port = 3000;


// We Tell Express to Look for mustache files when we use the render function
// templates are by default looked for in the views folder
server.engine('mustache', mustache()) //Change the view engine
server.set("view engine", "mustache")

// We create a "route" for the root url "/" what will render a template
server.get("/", (request, response) => {
    // the render function takes two arguments
    // 1. the file to look for in the views to use as the template
    // 2. an object of data to make available to the template
    response.render("index", {
        cheese: "munster",
        bread: "wheat"
    })
})

// Tell our server to start listening for requests on the given port
// Second argument is a function we can use to post a message we are up and running!
server.listen(port, () => {
  console.log(`Server Listening on Port ${port}`)
})