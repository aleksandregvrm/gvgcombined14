const express = require("express");
const router = express.Router();
const {
  changeUserPassword,
  updateUser,
  subscribeUserEmail,
  getAllSubscribedEmails,
  sendUserMessage,
  deleteSubscribedEmail,
} = require("../controllers/userController");
const authenticateUser = require("../middleware/authentication");
const { createUserLimiter } = require("../utils");

const twoMinutes = 1000 * 60 * 2;

router.post("/update-user",  updateUser);
router.post("/change-password", authenticateUser, changeUserPassword);
router.post(
  "/subscribe-email",
  createUserLimiter(twoMinutes, 3),
  subscribeUserEmail
);
router.get("/subscribed-emails",getAllSubscribedEmails);
router.delete("/subscribed-emails/:email",deleteSubscribedEmail);
router.post("/user-message", createUserLimiter(twoMinutes, 2), sendUserMessage);

module.exports = router;
