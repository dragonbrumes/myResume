var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

// auth0
const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")
require("dotenv").config()

// Import Mongoose
var mongoose = require("mongoose")
// Connect to Mongoose and set connection variable

/* contentSecurityPolicy */
// app.disable("x-powered-by")
// app.disable("Content-Security-Policy-Report-Only")
var app = express()

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js",
        "https://www.google-analytics.com/analytics.js"
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
        "https://fonts.googleapis.com/"
      ],
      imgSrc: ["'self'", "https://www.google-analytics.com/"],
      connectSrc: [
        "'self'",
        "https://lanteri.eu.auth0.com/.well-known/jwks.json",
        "http://localhost:3030/",
        "http://localhost:3000/",
        "https://cv.lanteri.fr"
      ],
      // fontSrc: [
      //   "'self'",
      //   "'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,100i,200i,300i,400i,500i"
      // ],
      fontSrc: [
        "'self'",
        "data: https://fonts.gstatic.com",
        "https://fonts.gstatic.com",
        "https://fonts.googleapis.com",
        "https://cdnjs.cloudflare.com/"
      ],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
      reportUri: "/report-violation"
    },
    // loose: false, // detect common mistakes in your directives and throw errors
    reportOnly: true, // set to true if you only want browsers to report errors, not block them
    setAllHeaders: false, // set to true if you want to set all headers
    safari5: false // set to true if you want to force buggy CSP in Safari 5
  })
)

/*** AUTH0 SECURITY */
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://lanteri.eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: "OCXxnvH4YMziUnwnOGXvLzzuID3fNGn5",
  issuer: `https://lanteri.eu.auth0.com/`,
  algorithms: ["RS256"]
})

/***** */

// console.log(
//   process.env.USER +
//     ":" +
//     process.env.PASSWORD +
//     process.env.URI +
//     process.env.DATABASE
// );

// mongoose.connect(
//   "mongodb://" +
//     process.env.USER +
//     ":" +
//     process.env.PASSWORD +
//     process.env.URI +
//     process.env.DATABASE,
//   { useNewUrlParser: true }
// );
mongoose.connect(
  "mongodb://resume:Digital500gb@ds235302.mlab.com:35302/resume",
  { useNewUrlParser: true }
)
// handling with db errors
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function() {
  console.log("connected to db!")
})

//
var indexRouter = require("./server/routes/index")
var usersRouter = require("./server/routes/users")
var experiencesRouter = require("./server/routes/experiences")

// middlewares
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "dist")))

// cors - for unknow reason it doesn't works on Gandi Simple Hosting
// var whitelist = [
//   "https://cv.lanteri.fr",
//   "http://4891adf519aa43cd89e48b169f5852af.testmyurl.ws",
//   "http://localhost:1234",
//   "http://localhost:3000",
//   "https://stephane.lanteri.fr"
// ]
// var corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("CV : Not allowed by CORS", new Date()))
//     }
//   }
// }

// allow distant client
app.use(
  cors({
    origin: "https://cv.lanteri.fr"
  })
)
// unique cors for Gandi Hosting
var corsOptions = {
  // origin: "https://cv.lanteri.fr"
  origin: "http://localhost:1234"
}

// Serve static assets
// app.use(express.static(path.resolve(__dirname, "./", "dist")))

// routes
app.use("/", indexRouter)
app.use("/", usersRouter)
app.use("/admin", cors(corsOptions), checkJwt, experiencesRouter)
app.use("/", cors(corsOptions), experiencesRouter)

// Handles any requests that don't match the ones above (place real routes ABOVE)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"))
})
// app.use("/admin", cors(corsOptions), checkJwt, experiencesRouter);
// app.use("/", cors(corsOptions), experiencesRouter);
console.log(process.env.PORT)
module.exports = app
