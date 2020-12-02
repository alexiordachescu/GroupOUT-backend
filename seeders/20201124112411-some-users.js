"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Alex",
          lastName: "Iordachescu",
          email: "a@a.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl:
            "https://res.cloudinary.com/dmqbltypk/image/upload/v1606666284/portfolio/ism40e8vz58v4lszetsz.jpg",
          description:
            "This dynamic man has wide gray eyes that are like two silver coins. His fine, straight, beige hair is worn in a style that reminds you of a monk's cowl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Chris",
          lastName: "Jones",
          email: "c@c.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "This gentleman makes you think of an industrious beaver. He has deep-set brown eyes that are like two bronze coins.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Samantha",
          lastName: "Watson",
          email: "s@s.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "This girl makes you think of a raging river. She has hooded emerald eyes. Her fine, straight, blue hair is worn in a style that reminds you of a rooster's crest.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Monica",
          lastName: "James",
          email: "m@m.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "This lady makes you think of a fluttering hummingbird. She has round violet eyes that are like two windows on the evening sky.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Philip",
          lastName: "Rudick",
          email: "p@p.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "This angry guy has deep-set cobalt-blue eyes. His silky, straight, yellow hair is short and is worn in a carefully-crafted style.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Max",
          lastName: "Meyer",
          email: "ma@ma.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "Standing 4'8 tall, and statuesque with tan skin, this man has a very aggressive feel about him.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Karine",
          lastName: "Bentley",
          email: "k@k.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "She has stern dark brown eyes and her short, straight, black hair is worn combed over.",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Lucas",
          lastName: "van Thiel",
          email: "l@l.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          imageUrl: "http://google.com",
          description:
            "Standing short and solidly-built with golden-brown skin, this man has an attractive feel about him.",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
