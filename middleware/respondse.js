// const sending = require("../helpers/sending");
let {
  HTTP_CODE_SUCCESS,
  HTTP_CODE_INTERNAL_SERVER_ERROR
} = require("../configs/constant");

module.exports = app => {
  app.use((req, res, next) => {
    res.success = (
      data = null,
      message = "Request successful",
      code = HTTP_CODE_SUCCESS,
      slack = {},
      isSendToSlack = true
    ) => {
      // convert data if it isnt object
      if (typeof data !== "object") {
        data = { data };
      }
      if (Array.isArray(data)) {
        data = { data };
      }
      // only send message with get method when allow
      if (isSendToSlack) {
        // sending.sendToChat(
        //   slack.message || message,
        //   slack.channel || "log",
        //   req
        // );
      }
      let json = { status: true, message, ...data };
      if (req.adminAccount && req.adminAccount.isTokenExpired !== undefined) {
        json.isTokenExpired = req.adminAccount.isTokenExpired;
      }
      return res.status(code).json(json);
    };
    res.error = (
      message = "Request fail",
      code = HTTP_CODE_INTERNAL_SERVER_ERROR,
      slack = {},
      isSendToSlack = true
    ) => {
      let defaultChanel = code >= 500 ? "error" : "log";
      if (isSendToSlack) {
        // sending.sendToChat(
        //   slack.message || message,
        //   slack.channel || defaultChanel,
        //   req
        // );
      }
      return res.status(code).json({ status: false, message: message });
    };
    next();
  });
};
