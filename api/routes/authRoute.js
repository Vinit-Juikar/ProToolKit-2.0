const router = require("express").Router();
const {
  registerController,
  loginController,
  logoutController,
  alluser,
} = require("../controllers/authController");

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// logout
router.post("/logout", logoutController);

//test alluser
router.get("/alluser", alluser);

module.exports = router;
