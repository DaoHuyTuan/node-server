const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require("../../../models/test");
const _ = require("lodash");
// const utils = require("../helpers/utility");
// const postgresHelper = require("../helpers/postgres");
const {
  HTTP_CODE_SUCCESS,
  MESSAGE_INTERNAL_SERVER_CLIENT,
  HTTP_CODE_INTERNAL_SERVER_ERROR
} = require("../../../configs/constant");
const getQueryTest = () => {
  const query = "SELECT * FROM test";
  return query;
};
module.exports = {
  getTestData: async (req, res) => {
    try {
      let queryPost = getQueryTest();

      let data = await db.sequelize.query(queryPost);
      data = _.get(data, "0");
      return res.success(
        data,
        "test API successfull",
        HTTP_CODE_SUCCESS,
        null,
        false
      );
    } catch (err) {
      return res.error(
        MESSAGE_INTERNAL_SERVER_CLIENT,
        HTTP_CODE_INTERNAL_SERVER_ERROR,
        {
          message: `${MESSAGE_INTERNAL_SERVER_CLIENT}+ ERROR ${e}`,
          channel: "error"
        }
      );
    }
  }
};
