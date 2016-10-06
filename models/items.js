'use strict';
module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define('items', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    tag: DataTypes.TEXT,
    picture_location: DataTypes.TEXT

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        items.hasMany(models.transactions)
      }
    }
  });
  return items;
};
