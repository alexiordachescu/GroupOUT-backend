"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tags", [
      { name: "Walk", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dance", createdAt: new Date(), updatedAt: new Date() },
      { name: "Music", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sports", createdAt: new Date(), updatedAt: new Date() },
      { name: "Drinks", createdAt: new Date(), updatedAt: new Date() },
      { name: "Photography", createdAt: new Date(), updatedAt: new Date() },
      { name: "Coffee", createdAt: new Date(), updatedAt: new Date() },
      { name: "Shopping", createdAt: new Date(), updatedAt: new Date() },
      { name: "Cycling", createdAt: new Date(), updatedAt: new Date() },
      { name: "Travel", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dating", createdAt: new Date(), updatedAt: new Date() },
      { name: "Culture", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
