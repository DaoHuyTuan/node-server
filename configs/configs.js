require("dotenv").config();
let _config = (module.exports = {});
const postgresConfig = {
  host: "ec2-54-197-234-117.compute-1.amazonaws.com",
  port: process.env.PG_PORT,
  database: "ddhlkgndkh2qbp",
  username: "eafcdlgmxcyfkj",
  password: "5d61dfd454e3297bb16680e72aa9176d1598c3bbc16ea3f8035c145d4b0327ae",
  dialect: "postgres",
  dialectOptions: {
    ssl: true
  }
};
// console.log(process.env.PG_PORT);
_config.POSTGRES = {
  host: postgresConfig.host,
  port: postgresConfig.port,
  database: postgresConfig.database,
  username: postgresConfig.username,
  password: postgresConfig.password,
  dialect: postgresConfig.dialect,
  dialectOptions: {
    ssl: true
  },
  getConfig: () => {
    return `postgres://eafcdlgmxcyfkj:5d61dfd454e3297bb16680e72aa9176d1598c3bbc16ea3f8035c145d4b0327ae@ec2-54-197-234-117.compute-1.amazonaws.com:5432/ddhlkgndkh2qbp`;
  },
  PG_DEBUG:
    process.env.PG_DEBUG && process.env.PG_DEBUG === "true"
      ? console.log
      : false,
  SORT_BY_ID_DESC: ["id", "DESC"],
  SORT_BY_CREATEDAT_DESC: ["createdAt", "DESC"],
  PAGINATE_LIMIT: 20,
  MAX_PAGINATE_LIMIT: 30
};
