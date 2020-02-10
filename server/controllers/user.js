const { User } = require('../models')
const jwt = require('jsonwebtoken')
const axios = require('axios');

class UserController {
  static login(req, res, next) {
    let user = {
      email: req.body.email,
      password: req.body.password
    }

    User
      .findOne({
        where: {
          email: user.email,
          password: user.password
        }
      })
      .then(user => {
        let token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_TOKEN)
        res.status(200).json(token)
      })
      .catch(err => {
        console.log(err, '< catch error login')
        next(err)
      })
  }

  static register(req, res, next) {
    let user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    User
      .create(user)
      .then(user => {
        let token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_TOKEN)
        res.status(201).json(token)
      })
      .catch(err => {
        console.log(err, '< catch error register')
        next(err)
      })
  }

  static randomUser(req, res, next) {
    axios({
      method: 'GET',
      url: 'https://randomuser.me/api/',
    })
      .then(result => {
        console.log(result.data.results)
        let user = {
          name: result.data.results[0].name.first,
          email: result.data.results[0].email,
          password: result.data.results[0].login.password
        }
        res.status(200).json(user)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }

}

module.exports = UserController