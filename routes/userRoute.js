const express = require("express");
const {
  getAllUser,
  getSingleUser,
  createUser,
} = require("../controllers/userController");
const router = express.Router();

// get all users
router.get("/user", getAllUser);

//get single user
router.get("/user/:_id", getSingleUser);

router.post("/user/create-user", createUser);

module.exports = router;
