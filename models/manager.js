'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define('Manager', {
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {});
  Manager.associate = function(models) {
    // associations can be defined here
  };
  return Manager;
};