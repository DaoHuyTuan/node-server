require("dotenv").config();
// Start Postgres
// require("../models/index");

// Start Server
if (process.env.NODE_ENV === "production") {
  const serverProduction = require("./server.production");
  serverProduction.listen(process.env.PORT || 5000);
} else {
  const serverDevelopment = require("./server.development");
  serverDevelopment.listen(process.env.PORT || 3000);
}
