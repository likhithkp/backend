const express = require("express");
const Router = express.Router();
const getAllUsers = require("../../src/controllers/rest/getUsers");

Router.get('/get',getAllUsers);

module.exports = Router;