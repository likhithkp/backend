const userModel = require("../models/user");

const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
    return;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userById = await userModel.findById(id);
    res.send(userById);
    return;
  } catch (error) {
    console.log(error);
  }
};

const postUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.send(newUser);
    return;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToBeUpdated = await userModel.findByIdAndUpdate(id, req.body);
    if (!userToBeUpdated) {
      res.send("User not found!");
      return;
    } else {
      const updatedUser = await userModel.findById(id);
      res.send(updatedUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      res.send("You cannot delete the user which doesn't exits");
      return;
    } else {
      res.send(deletedUser);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
};
