'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Task.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `Task created at ${new Date()}`
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "undone"
    },
    userId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User, {foreignKey: "userId", targetKey: 'id'});
  }
  return Task;
};
