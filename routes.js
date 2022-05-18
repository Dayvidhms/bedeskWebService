const express = require("express");
const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('bedesk', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./Entities/User.js')(sequelize);

const router = express.Router();

router.post('/inserirUsuario', async function (req, res) {

  const user = User.build({name: req.body.name,
      surname: req.body.surname,
      mail: req.body.mail,
      user: req.body.user,
      password: req.body.password,
      tipo: req.body.tipo
      });

  try{
    await User.sync();
    await user.save();
    res.send(true);
  }catch(error){
    console.error('erro ao salvar: ' + error);
    res.send(false);
  }
  });

  router.post('/login', async function(req, res){

    const user = await  User.findOne({
      where:{user: req.body.user, password: req.body.password}})
    if(user === null){
      res.send(false);
    }else{
      res.send(true);
    }
  });

module.exports = router;