// We are importing the express library
// We use express to create an application object that represents our server
const express = require("express")
const server = express()
const port = 3000;


// Tell our server serve the assets in public folder statically
server.use(express.static("public"))

// Tell our server to start listening for requests on the given port
// Second argument is a function we can use to post a message we are up and running!
server.listen(port, () => {
  console.log(`Server Listening on Port ${port}`)
})