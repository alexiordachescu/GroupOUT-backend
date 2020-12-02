"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("groupComments", [
      {
        groupId: 1,
        userId: 1,
        comment: "Haha, still waiting for one more guys...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        groupId: 1,
        userId: 2,
        comment: "Yeah, the kickoff is in 2 months :-(",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("groupComments", null, {});
  },
};
