'use strict';
var model = require('../models')
class Transactions_Controller{
  static get_transaction(add){
    model.transactions.findAll({
      where:{
        id: add.id
      }
    }).then(function(result){
      let query_result = []
      result.forEach((val)=>{
        let transaction_object = {
          id: val.dataValues.id,
          boughtAt: val.dataValues.boughtAt,
          amount: val.dataValues.amount,
          total: val.dataValues.total,
          userId: val.dataValues.userId,
          itemId: val.dataValues.itemId
        }
        query_result.push(transaction_object)
      })

      return JSON.stringify(query_result)
    })
  }
  static get_transactions(){
    model.transactions.findAll({

    }).then(function(result){
      let query_result = []
      result.forEach((val)=>{
        let transaction_object = {
          id: val.dataValues.id,
          boughtAt: val.dataValues.boughtAt,
          amount: val.dataValues.amount,
          total: val.dataValues.total,
          userId: val.dataValues.userId,
          itemId: val.dataValues.itemId
        }
        query_result.push(transaction_object)
      })

      return JSON.stringify(query_result)
    })
  }
  static add_transaction(add){
    model.transactions.create({
      boughtAt: val.dataValues.boughtAt,
      amount: val.dataValues.amount,
      total: val.dataValues.total,
      userId: val.dataValues.userId,
      itemId: val.dataValues.itemId
    })
  }
  static update_transaction(add){
    model.transactions.update({
      boughtAt: val.dataValues.boughtAt,
      amount: val.dataValues.amount,
      total: val.dataValues.total,
      userId: val.dataValues.userId,
      itemId: val.dataValues.itemId
      where:{
        id: add.id
      }
    })
  }
  static delete_transaction(add){
    model.transactions.destroy({
      where:{
        id: add.id
      }
    })
  }
}

module.exports = Transactions_Controller
