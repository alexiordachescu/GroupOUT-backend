"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("groupTags", [
      { groupId: 1, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 2, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 3, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 4, tagId: 9, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 4, tagId: 11, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 5, tagId: 9, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("groupTags", null, {});
  },
};
