const userModel = require("../models/userModel");

const getAllUser = async (req, res) => {
  try {
    const allusers = await userModel.find({});
    if (allusers) {
      res.status(200).send({
        sucess: true,
        message: `fetch all ${allusers.length} users`,
        allusers,
      });
    }
  } catch (error) {
    res.status(400).send({
      sucess: false,
      message: "Error in finding all users",
      error: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { _id } = req.params;

    const user = await userModel.findById({ _id });
    if (user) {
      res.status(200).send({
        success: true,
        message: `fetch user with id of ${_id}`,
        user,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error in finding single user",
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await userModel.create({
      name,
      email,
    });
    res.status(201).send({
      success: true,
      message: "User Created Successful",
      newUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "fail to create user",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email } = req.body;
    const updateUser = await userModel.findById({ _id });
    updateUser.name = name || updateUser.name;
    updateUser.email = email || updateUser.email;
    const updatedUser = updateUser.save();
    res.status(200).send({
      success: true,
      message: "Record has been updated",
      updateUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "fail to update user",
      error: error.message,
    });
  }
};

module.exports = { getAllUser, getSingleUser, createUser, updateUser };
