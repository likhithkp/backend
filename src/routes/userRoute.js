const express = require("express");
const Router = express.Router();
const getAllUsers = require("../../src/controllers/rest/getUsers");
const getAllStudents = require("../../src/controllers/rest/getStudent");

Router.get('/getUsers',getAllUsers);
Router.get('/getStudents',getAllStudents);

module.exports = Router;