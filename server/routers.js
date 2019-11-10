const express = require("express");
let multer = require("multer");
// const adminCtrl = require("../admin/admin");
// const roleCtrl = require("../admin/role");
// const languageCtrl = require("../admin/language");
// const imagesCtrl = require("../admin/images");
// const postCtrl = require("../admin/post");
// const popupCtrl = require("../admin/popup");
const middlewareResponse = require("../middleware/respondse");
const test = require("../api/v1/test/test");
// const paymentCtrl = require("../admin/payment");
// const menuCtrl = require("../admin/menu");
// const infoCtrl = require("../admin/info");
// const currencyCtrl = require("../admin/currency");
// const ticketCtrl = require("../admin/ticket");
// const addonsCtrl = require("../admin/addons");
// const hospitalityCtrl = require("../admin/hospitality");
// const airportCtrl = require("../admin/airport");
// const hotdealCtrl = require("../admin/hotdeal");
// const forgetCtrl = require("../admin/forgetpassword");
// const citypairCtrl = require("../admin/citypair");
// const auditlogCtrl = require("../admin/auditlog");
// const historyOfChangeCtrl = require("../admin/historychange");
// const templateCtrl = require("../admin/template");
module.exports = app => {
  const appRoutes = express.Router();
  const adminRoutes = express.Router();
  middlewareResponse(app);

  app.use("/", test.getTestData);
  // app.use(
  //   "/admin",
  //   [adminCtrl.validateLogin, require("../middleware/require_role")],
  //   [adminRoutes]
  // );
  // app.use("/api/v1", require("./api-v1-routes"));
  // // App Routes
  // appRoutes.get("/health-check", (req, res, next) => {
  //   return res.status(200).json({ status: true });
  // });
  // appRoutes.post("/login", adminCtrl.login);

  // // forgot password
  // appRoutes.post("/forgot-password", forgetCtrl.forgetPassword);
  // appRoutes.get("/forgot-password/:id", forgetCtrl.checkActiveCode);
  // appRoutes.patch("/forgot-password/:id", forgetCtrl.changePassword);

  // Admin routes
  // adminRoutes.get("/admins", adminCtrl.getList);
  // adminRoutes.get("/admins/access-token", adminCtrl.getDetailWithAccessToken);
  // adminRoutes.get("/admins/:id", adminCtrl.getDetail);
  // adminRoutes.post("/admins", adminCtrl.create);
  // // adminRoutes.put('/admins/:id', adminCtrl.createAdmin); // Updates
  // adminRoutes.patch("/admins/change-password", adminCtrl.changePassword);
  // adminRoutes.patch("/admins/:id", adminCtrl.update); // Partially updates
  // adminRoutes.patch("/admins/:id/update-password", adminCtrl.updatePassword);
  // adminRoutes.delete("/admins/:id", adminCtrl.delete); // deletes
  // adminRoutes.patch("/admins/active/:id", adminCtrl.activeAccount);
  // adminRoutes.post("/admins/refresh-token", adminCtrl.refreshToken);
  // adminRoutes.post("/logout", adminCtrl.logout);

  // // Role
  // adminRoutes.get("/roles", roleCtrl.getList);

  // // Image
  // adminRoutes.get("/images", imagesCtrl.getListImage);
  // adminRoutes.post("/images", multer({}), imagesCtrl.uploadImages);
  // adminRoutes.delete("/images", imagesCtrl.deleteImageInAlbum);
  // // Folder
  // adminRoutes.get("/folders", imagesCtrl.getListFolder);
  // adminRoutes.post("/folders", imagesCtrl.createFolder);
  // adminRoutes.delete("/folders/:id", imagesCtrl.deleteFolder);

  // // Language
  // adminRoutes.get("/language", languageCtrl.getList);
  // adminRoutes.get(
  //   "/language/type/:type",
  //   languageCtrl.getLanguageCreatedByType
  // );
  // adminRoutes.get("/language-default", languageCtrl.getLanguageDefault);
  // adminRoutes.post("/language", languageCtrl.create);
  // adminRoutes.patch("/language/:id", languageCtrl.update);
  // adminRoutes.patch("/language/:id/:status", languageCtrl.changeStatus);
  // adminRoutes.delete("/language/:id", languageCtrl.changeStatus);

  // // Post
  // adminRoutes.get("/post", postCtrl.getListPost);
  // adminRoutes.get("/post/versions", postCtrl.getListVersion);
  // adminRoutes.get("/post/:id", postCtrl.getDetailPost);
  // adminRoutes.get(
  //   "/post/language-group/:languageGroup",
  //   postCtrl.getPostByLanguageGroup
  // );
  // adminRoutes.post("/post", postCtrl.create);
  // adminRoutes.patch("/post/:id", postCtrl.update);
  // adminRoutes.patch(
  //   "/post/:id/action-puslish",
  //   postCtrl.changePublishingStatus
  // );
  // adminRoutes.patch("/post/:id/:status(active)", postCtrl.changeStatus);
  // adminRoutes.delete("/post/:id", postCtrl.changeStatus);

  // adminRoutes.post("/post/:id/notes", historyOfChangeCtrl.createNotes);
  // adminRoutes.get("/post/:id/type/:type", historyOfChangeCtrl.getList);

  // // Popup
  // adminRoutes.get("/popup/:languageId", popupCtrl.getPopupByLanguageId);
  // adminRoutes.post("/popup", popupCtrl.create);
  // adminRoutes.patch("/popup/:id", popupCtrl.update);
  // // adminRoutes.patch('/popup/active/:id', popupCtrl.activePopup); // active
  // // adminRoutes.delete('/popup/:id', popupCtrl.changeStatus); // delete

  // // Payment
  // adminRoutes.get("/payment", paymentCtrl.getList);
  // adminRoutes.post("/payment", paymentCtrl.create);
  // adminRoutes.patch("/payment/:id", paymentCtrl.update);
  // // adminRoutes.patch('/payment/:id/:status', paymentCtrl.changeStatus);
  // // adminRoutes.delete('/payment/:id', paymentCtrl.changeStatus);

  // // Currency
  // adminRoutes.get("/currency", currencyCtrl.getList);

  // // Info
  // adminRoutes.get("/info", infoCtrl.getInfoByLanguageId);
  // adminRoutes.post("/info", infoCtrl.create);
  // adminRoutes.patch("/info/:id", infoCtrl.update);
  // // adminRoutes.delete('/info/:id', infoCtrl.delete);

  // // Ticket
  // adminRoutes.get("/ticket", ticketCtrl.getList);
  // adminRoutes.post("/ticket", ticketCtrl.create);
  // adminRoutes.patch("/ticket/:id", ticketCtrl.update);

  // // TopBanner
  // adminRoutes.get("/topbanner", topbannerCtrl.getList);
  // adminRoutes.post("/topbanner", topbannerCtrl.create);
  // adminRoutes.patch("/topbanner/:id", topbannerCtrl.update);
  // adminRoutes.delete("/topbanner/:id", topbannerCtrl.delete);

  // // AddOn
  // adminRoutes.get("/addons", addonsCtrl.getList);
  // adminRoutes.post("/addons", addonsCtrl.create);
  // adminRoutes.patch("/addons/:id", addonsCtrl.update);
  // adminRoutes.delete("/addons/:id", addonsCtrl.delete);

  // // Hospitality
  // adminRoutes.get("/hospitality", hospitalityCtrl.getList);
  // adminRoutes.post("/hospitality", hospitalityCtrl.create);
  // adminRoutes.patch("/hospitality/:id", hospitalityCtrl.update);
  // adminRoutes.delete("/hospitality/:id", hospitalityCtrl.delete);

  // // Airport
  // adminRoutes.get("/airport", airportCtrl.getList);

  // // Template
  // adminRoutes.get("/template", templateCtrl.getList);

  // // Hotdeal
  // adminRoutes.get("/hotdeal", hotdealCtrl.getList);
  // adminRoutes.post("/hotdeal", hotdealCtrl.create);
  // adminRoutes.patch("/hotdeal/:id", hotdealCtrl.update);
  // adminRoutes.delete("/hotdeal/:id", hotdealCtrl.delete);

  // // menu
  // adminRoutes.get("/menu", menuCtrl.getListParentChildMenu);
  // adminRoutes.get(
  //   "/menu/language-group/:languageGroup",
  //   menuCtrl.getListByLanguageGroup
  // );
  // adminRoutes.get(
  //   "/menu/:type(page|list|menulist|link)",
  //   menuCtrl.getListByType
  // );
  // adminRoutes.get("/menu/:id", menuCtrl.getDetail);
  // adminRoutes.post("/menu", menuCtrl.create);
  // adminRoutes.patch("/menu", menuCtrl.updateLevel);
  // adminRoutes.patch("/menu/:id", menuCtrl.update);
  // adminRoutes.patch("/menu/:id/:status(active)", menuCtrl.changeStatus);
  // adminRoutes.delete("/menu/:id", menuCtrl.changeStatus);

  // // Citypair
  // adminRoutes.get("/citypair", citypairCtrl.getList);

  // // AuditLog
  // adminRoutes.get("/auditlog", auditlogCtrl.getList);
};
