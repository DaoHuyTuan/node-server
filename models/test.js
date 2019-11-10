"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const config = require("../configs/configs").POSTGRES;
// const sending = require("../helpers/sending");
const db = {};

let sequelize;
if (config.use_env_variable) {
  console.log("hello");
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,

    config
  );
  console.log(sequelize);
}
Sequelize.postgres.DECIMAL.parse = value => {
  return parseFloat(value);
};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    if (process.env.NODE_ENV !== "development") {
      //   sending.sendToChat(
      //     "Connection to POSTGRES has been established successfully.",
      //     "systemLog",
      //     null
      //   );
      console.log("Connection to POSTGRES has been established successfully.");
    }
  })
  .catch(err => {
    console.log("Unable to connect to the database:", err);
    // sending.sendToChat(
    //   "Unable to connect to POSTGRES. Error: " + err,
    //   "systemError",
    //   null
    // );
    console.log("Unable to connect to POSTGRES. Error: " + err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
