"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group.belongsToMany(models.tag, {
        through: "groupTag",
        foreignKey: "groupId",
      });
      group.belongsTo(models.user, { as: "owner", foreignKey: "userId" });
      group.belongsToMany(models.user, {
        through: "groupMember",
        foreignKey: "groupId",
        as: "member",
      });
      group.hasMany(models.groupComment);
    }
  }
  group.init(
    {
      imageUrl: DataTypes.STRING,
      maxUsers: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },

      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "group",
    }
  );
  return group;
};
