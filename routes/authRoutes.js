
const express = require("express");
const router = express.Router();
const { login, register, logout, verifyEmail, showMe, autoLogout } = require("../controllers/authController");
const authenticateUser = require("../middleware/authentication");
const { createUserLimiter } = require("../utils");

const tenMinutes = 1000 * 60 * 10;

router.post("/register", register);
router.post("/login", login);
router.delete("/logout",authenticateUser, logout);
router.delete("/autoLogout",autoLogout);
router.post('/verify-email', createUserLimiter(tenMinutes,2), verifyEmail);
router.get('/showMe',authenticateUser,showMe);

module.exports = router;