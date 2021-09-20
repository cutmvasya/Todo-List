'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
        username: "cutvasya",
        password: "cutvasya",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       username: "syayyidil",
       password: "syayyidil",
       gender: "male",
       createdAt: new Date(),
       updatedAt: new Date()
     }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
