"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class groupTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  groupTag.init(
    {},
    {
      sequelize,
      modelName: "groupTag",
    }
  );
  return groupTag;
};
