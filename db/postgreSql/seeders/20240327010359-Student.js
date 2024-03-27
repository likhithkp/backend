'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.bulkInsert(
    "Student",
    [
      {
        firstName : 'Shiba',
        lastName : 'Kumar',
        age : 18,
        gender : 'Male',
        studentId : 'c069672d-2d6a-4980-a9e5-9e230c0c6000'
      },  {
        firstName : 'Likhith',
        lastName : 'K.P.',
        age : 18,
        gender : 'Male',
        studentId : 'c069672d-2d6a-4980-a9e5-9e230c0d6000'
      },  {
        firstName : 'Henry',
        lastName : 'Kumar',
        age : 18,
        gender : 'Female',
        studentId : 'c069672d-2d6a-4980-a9e5-9e230c0a6000'
      },
    ]
   )
  },
};
