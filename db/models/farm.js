'use strict';
module.exports = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', {
    name: DataTypes.STRING,
    rup: DataTypes.STRING,
    phone: DataTypes.STRING,
    addres: DataTypes.STRING,
  }, {});
  Farm.associate = function(models) {
    // associations can be defined here
  };
  return Farm;
};