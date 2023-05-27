const express = require("express")
const path = require("path")
const logger = require("./middleware/logger")
const engine = require("express-handlebars").engine
const engine = require("express-handlebars").engine

const app = express()

// Init middleware
// app.use(logger)

// Handlebars middleware
// app.engine("handlebars", exphbs({ defaultLayout: "main" }))
// app.set("view engine", "handlebars")
const hbs = create({
  defaultLayout: "main",
})

// Register `hbs.engine` with the Express app.
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
app.set("views", "./views")

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Homepage ROUTE
app.get("/", (req, res) => res.render("index"))
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
