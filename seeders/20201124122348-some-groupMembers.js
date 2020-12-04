"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("groupMembers", [
      { groupId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 2, userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 3, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 3, userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 3, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 4, userId: 4, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 5, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 5, userId: 6, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 5, userId: 7, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("groupMembers", null, {});
  },
};
