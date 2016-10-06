'use strict';
var model = require('../models')
class Items_Controller{
  constructor(){

  }
  static get_item(add,callback){
    model.items.findAll({
      attributes: ['name','category','price','tag','picture_location'],
      where:{
        id: add.id
      }
    }).then(function(result){
      callback(result)
    })
  }
  static get_items(callback){
    model.items.findAll({
      attributes: ['name','category','price','tag','picture_location']
    }).then(function(result){
      callback(result)
    })
  }
  static add_item(add, callback){
    model.items.create({
      name: add.name,
      category: add.category,
      price: add.price,
      tag: add.tag,
      picture_location: add.picture_location
    }).then(function(result){
      callback(result)
    })
  }
  static update_item(add,callback){
    model.items.update({
      name: add.name,
      category: add.category,
      price: add.price,
      tag: add.tag,
      picture_location: add.picture_location
    },
    {where:{
      id: add.id
    }}).then(function(result){
      callback(result)
    })
  }
  static delete_item(add,callback){
    model.items.destroy({
      where:{
        id: add.id
      }
    }).then(function(result){
      callback(result)
    })
  }
}
module.exports = Items_Controller
