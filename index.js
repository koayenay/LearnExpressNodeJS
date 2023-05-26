const express = require("express")
const path = require("path")
const logger = require("./middleware/logger")
const app = express()

// Init middleware
// app.use(logger)

//youtu.be/L72fhGm1tfE?t=2251
//Set static folder
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/members", require("./routes/api/members"))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
/*



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
