'use strict';
var model = require('../models')
class Users_Controller{
  static get_user(add){
    model.users.findAll({
      where:{
        id: add.id
      }
    }).then(function(result){
      let query_result = []
      result.forEach((val)=>{
        let user_object = {
          id: val.dataValues.id,
          name: val.dataValues.name,
          phone: val.dataValues.phone,
          address: val.dataValues.address,
          email: val.dataValues.email,
          password: val.dataValues.password
        }
        query_result.push(user_object)
      })

      return JSON.stringify(query_result)
    })
  }
  static get_users(){
    model.users.findAll({

    }).then(function(result){
      let query_result = []
      result.forEach((val)=>{
        let user_object = {
          id: val.dataValues.id,
          name: val.dataValues.name,
          phone: val.dataValues.phone,
          address: val.dataValues.address,
          email: val.dataValues.email,
          password: val.dataValues.password
        }
        query_result.push(user_object)
      })

      return JSON.stringify(query_result)
    })
  }
  static add_user(add){
    model.users.create({
      name: add.name,
      phone: add.phone,
      address: add.address,
      email: add.email,
      password: add.password
    })
  }
  static update_user(add){
    model.users.update({
      name: add.name,
      phone: add.phone,
      address: add.address,
      email: add.email,
      password: add.password,
      where:{
        id: add.id
      }
    })
  }
  static delete_user(add){
    model.users.destroy({
      where:{
        id: add.id
      }
    })
  }

}

module.exports = Users_Controller
