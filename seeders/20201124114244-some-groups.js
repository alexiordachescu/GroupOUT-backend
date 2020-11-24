"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("groups", [
      {
        imageUrl: "",
        userId: 1,
        maxUsers: 4,
        description:
          "Booked 4 tickets for the upcoming Champions League match but one of our friends is having an urgent matter to solve..",
        date: "2020-11-24",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl: "",
        userId: 2,
        maxUsers: 3,
        description:
          "We are 2 expats looking for locals to show us the ins and outs of Amsterdam :-)",
        date: "2020-11-25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl: "",
        userId: 3,
        maxUsers: 5,
        description:
          "3 bored friends who are looking for outgoing people to have some drinks",
        date: "2020-11-25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl: "",
        userId: 4,
        maxUsers: 6,
        description: "Looking for cycling enthusiasts for an Amsterdam tour",
        date: "2020-12-12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl: "",
        userId: 1,
        maxUsers: 4,
        description:
          "We are looking for 1 other person to join us on a mountain hiking session",
        date: "2020-12-25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("groups", null, {});
  },
};
