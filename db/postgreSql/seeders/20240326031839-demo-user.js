"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: 6,
        firstName: "John",
        lastName: "Doe",
        email : "john@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        firstName: "Jane",
        lastName: "Smith",
        email : "Jane@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        firstName: "Michael",
        lastName: "Johnson",
        email : "Michael@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        firstName: "Emily",
        lastName: "Williams",
        email : "Emily@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        firstName: "David",
        lastName: "Brown",
        email : "David@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};