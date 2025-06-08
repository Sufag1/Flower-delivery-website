const express = require("express");
const router = express.Router();
const {
  userSignUp,
  userLogin,
  getAllUsers,
} = require("../controllers/userControllers");

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/", getAllUsers);

module.exports = router;
