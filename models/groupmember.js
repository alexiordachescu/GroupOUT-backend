"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class groupMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      groupMember.belongsTo(models.group);
      groupMember.belongsTo(models.user, {
        as: "member",
        foreignKey: "userId",
      });
    }
  }
  groupMember.init(
    {},
    {
      sequelize,
      modelName: "groupMember",
    }
  );
  return groupMember;
};
