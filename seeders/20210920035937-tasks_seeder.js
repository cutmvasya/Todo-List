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
     await queryInterface.bulkInsert('Tasks', [
      {
        title: "Ujian",
        description: "belajar",
        status: "undone",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
       title: "menghafal",
       description: "juz 30",
       status: "undone",
       userId: 7,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      title: "jalan-jalan",
      description: "biar senang",
      status: "done",
      userId: 6,
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
     await queryInterface.bulkDelete('Tasks', null, {});
  }
};
