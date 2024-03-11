// We are importing the express library
// We use express to create an application object that represents our server
const express = require("express");
const server = express();
const port = 3000;


// Tell Express to look for ejs files when we use the render function
// templates are by default looked for in the views folder
server.set("view engine", "ejs")

// We create a "route" for the root url "/" what will render a template
server.get("/", (request, response) => {
  // the render function takes two arguments
  // 1. the file to look for in the views to use as the template
  // 2. an object of data to make available to the template
  response.render("index", {
      cheese: "gouda",
      bread: "rye"
  })
})

// Tell our server to start listening for requests on the given port
// Second argument is a function we can use to post a message we are up and running!
server.listen(port, () => {
  console.log(`Server Listening on Port ${port}`)
})