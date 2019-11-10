const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const Routes = require("./routers");
const path = require("path");
const cookieParser = require("cookie-parser");
// const sending = require("../helpers/sending");
const process = require("process");
const morgan = require("morgan");
// const moment = require("moment");
const useragent = require("express-useragent");

console.log("Starting app at:", process.cwd());
console.log("Enviroment:", process.env.NODE_ENV);
console.log("Server is listening on port:", process.env.PORT || 3000);

// Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, PATCH, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, providerName, providerInfo, X-Requested-With"
  );
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

// viewBag
// app.locals.viewBag = {
//   moment: moment
// };

// Middlerware to handle JSON
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: true, limit: "2mb", parameterLimit: 1000 })
);
app.use(express.static(path.join(process.cwd(), "assets")));
app.use(useragent.express());

// app.use(flash()); // use connect-flash for flash messages stored in session

// Log Request - response
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms"
    ].join(" ");
  })
);

// App Routes
Routes(app);

// catch 404 and 500
app.use((req, res, next) => {
  let err = new Error("Page not found!!!");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  let errorCode = err.status || 500;
  if (errorCode != 404) {
    console.error("errorMessage:", err);
    // sending.sendToChat("errorMessage. " + err, null, req);
  }

  return res.status(errorCode).json({
    message: errorCode == 404 ? "Page not found!!!" : "Internal Server Error.",
    statusCode: errorCode
  });
});

// Exit handler
// Catches ctrl+c event
process.on("SIGINT", haveToExitHandler.bind(null, { exitType: "SIGINT" }));

// Catches uncaught exceptions
process.on(
  "uncaughtException",
  haveToExitHandler.bind(null, { exitType: "uncaughtException" })
);

// Do something when app is closing
process.on("exit", beforeExitHandler.bind(null, { clean: true }));

function haveToExitHandler(options, err) {
  if (err) {
    console.error("haveToExitHandler:");
    console.error("err.message: ", err.message);
    console.error("err.stack: ", err.stack);
  }
  if (options.exitType === "uncaughtException") {
    // return sending.sendToChat("haveToExitHandler. " + err, null, null, () => {
    //   return process.exit(1);
    // });
  }
  return process.exit(0);
}
function beforeExitHandler(options, err) {
  if (err) {
    console.error("beforeExitHandler:");
    console.error("err.message: ", err.message);
    console.error("err.stack: ", err.stack);
  }
  if (options.clean) {
    console.log("___app is now exit!");
    console.log("___GOODBYE!");
  }
}
module.exports = server;
