const express = require("express")
const path = require("path")
const members = require("./Members")
const logger = require("./middleware/logger")
const app = express()

// Init middleware
// app.use(logger)

// Lets create a route!

// Gets all members
app.get("/api/members", (req, res) => res.json(members))

// Get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id))

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `Member ${req.params.id} not found` })
  }
})
//youtu.be/L72fhGm1tfE?t=2251
//Set static folder
https: app.use(express.static(path.join(__dirname, "public")))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
/*
https://youtu.be/L72fhGm1tfE?t=998


Nodemon to reload automatically, dev Dependency (not for prodcut)
npm i -D nodemon
need to put this in package
"start": "node index",
"dev": "nodemon index"


*/

/*
How to put everything on Github using terminal
https://www.youtube.com/watch?v=2hM5viLMJpA&t=210s


*/
