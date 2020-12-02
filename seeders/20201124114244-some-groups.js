"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("groups", [
      {
        imageUrl: "https://adn2.fcupdate.nl/news/132068.jpg",
        userId: 1,
        maxUsers: 4,
        description:
          "Booked 4 tickets for the upcoming Champions League match but one of our friends is having an urgent matter to solve..",
        date: "2020-02-24",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://res.cloudinary.com/dmqbltypk/image/upload/v1606858022/portfolio/tqblbmy7g8vej1oj8rmo.jpg",
        userId: 2,
        maxUsers: 6,
        description:
          "Ready to live the party of your life? Then join us on our trip to Roskilde Festival 🤘",
        date: "2020-11-25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F11%2F03%2Fuk-second-lockdown-beer-waste-FT-BLOG1120.jpg",
        userId: 3,
        maxUsers: 5,
        description:
          "3 bored friends who are looking for outgoing people to have some drinks",
        date: "2020-01-14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://image.shutterstock.com/image-photo/young-beautiful-woman-riding-bicycle-260nw-705887014.jpg",
        userId: 4,
        maxUsers: 6,
        description: "Looking for cycling enthusiasts for an Amsterdam tour",
        date: "2020-12-29",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imageUrl:
          "https://www.crushpixel.com/big-static7/preview4/man-explorer-looking-map-top-34562.jpg",
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
