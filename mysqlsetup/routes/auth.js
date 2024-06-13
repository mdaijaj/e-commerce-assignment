const authController = require("../controller/auth_controller");
const {verifySignUp} = require("../middleware/index");
// const { upload } = require("../middleware/upload");
// const {upload_docs}=require("../middleware/New_candidate_onboarding")

module.exports = app => {
  app.post("/api/v1/auth/signup", authController.signup);
  app.post("/api/v1/auth/signin", authController.signin);
  app.post("/api/v1/auth/logout", authController.logout);
  app.post("/api/v1/auth/forgetPassword", authController.forgetPassword);
  app.get("/api/v1/auth/registrationall", authController.alluserlist);
};