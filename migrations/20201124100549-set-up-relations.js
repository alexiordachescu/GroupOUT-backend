"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("groupTags", "groupId", {
      type: Sequelize.INTEGER,
      references: {
        model: "groups",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("groupTags", "tagId", {
      type: Sequelize.INTEGER,
      references: {
        model: "tags",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("groups", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("groupMembers", "groupId", {
      type: Sequelize.INTEGER,
      references: {
        model: "groups",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("groupMembers", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("groupComments", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("groupComments", "groupId", {
      type: Sequelize.INTEGER,
      references: {
        model: "groups",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("groupTags", "groupId");
    await queryInterface.removeColumn("groupTags", "tagId");
    await queryInterface.removeColumn("groups", "userId");
    await queryInterface.removeColumn("groupMembers", "groupId");
    await queryInterface.removeColumn("groupMembers", "userId");
    await queryInterface.removeColumn("groupComments", "userId");
    await queryInterface.removeColumn("groupComments", "groupId");
  },
};
