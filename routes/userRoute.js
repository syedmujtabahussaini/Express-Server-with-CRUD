const express = require("express");
const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

// get all users
router.get("/user", getAllUser);

//get single user
router.get("/user/:_id", getSingleUser);

//create new User
router.post("/user/create-user", createUser);

//Edit user
router.put("/user/:_id", updateUser);
module.exports = router;
