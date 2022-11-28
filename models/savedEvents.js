const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class savedEvents extends Model {}

// create fields/columns for Post model
savedEvents.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    party_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Party",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "savedEvents",
  }
);

module.exports = savedEvents;
