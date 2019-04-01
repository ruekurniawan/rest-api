const { User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class Controller {
  static register(req, res) {
    let newUser = {
      username : req.body.username,
      password : bcrypt.hashSync(req.body.password, 10),
      role : req.body.role
    }
    User
      .create(newUser)
      .then((user) => {
        console.log('masuk', user)
        res.status(201).json({
          user,
          msg : 'Succes registrasi data'
        })
      })
      .catch(err => {
        res.status(500).json({
          err,
          msg : 'This Error'
        })
      })
  }

  static login(req, res) {
    User
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(user => {
        if(user) {
          if(bcrypt.compareSync(req.body.password, user.password)) {
            let playload = {
              id : user.id,
              username : user.username,
              role : user.role
            }
            let token = jwt.sign(playload, process.env.JWT_SECRET)
            res.status(200).json({
              token,
              msg: `Success Login`
            })
          } else {
            res.status(404).json({
              msg: 'Invalid Username / Password'
            })
          }
        } else {
          res.status(404).json({
            msg: 'Invalid Username / Password'
          })
        }
      })
  }

  static verify(req, res) {
    User
      .findOne({
        where : {
          username : req.authentication.username
        }
      })
      .then(user => {
        if(user) {
          res.status(200).json(user)
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    User
    .findAll()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({
        msg : `Error`
      })
    })
  }
  
  static findOne(req, res) {
    User
    .findOne(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
  
  static create(req, res) {
    User
    .create({
      username : req.body.username,
      password : req.body.password,
      role : req.body.role
    })
    .then(() => {
      res.status(200).json({
        msg : `Success create Data`
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
  
  static remove(req, res) {
    User
      .destroy({
        where : {
          id: req.params.id
        }
      })
      .then(() => { 
        res.status(200).json({
          msg : `Success Delete Data`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    console.log(req.params);
    
    User
      .update({
        username : req.body.username,
        role: req.body.role
      },{
        where : {
          id: req.params.id
        }
      })
      .then(() => {
        res.status(200).json({
          msg : `Success Update Data`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = Controller