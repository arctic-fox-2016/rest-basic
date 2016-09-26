'use strict';
module.exports = function(sequelize, DataTypes) {
  var transactions = sequelize.define('transactions', {
    boughtAt: DataTypes.DATEONLY,
    amount: DataTypes.INTEGER,
    total: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        transactions.belongsTo(models.users,{onDelete: 'SET NULL'})
        transactions.belongsTo(models.items,{onDelete: 'SET NULL'})
      }
    }
  });
  return transactions;
};
