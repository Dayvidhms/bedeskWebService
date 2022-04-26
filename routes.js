const express = require("express");
const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('bedesk', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./Entities/User.js')(sequelize);

const router = express.Router();

router.post('/', async function (req, res) {

  console.log(req.body);

  const user = User.build({name: req.body.name,
      surname: req.body.surName,
      mail: req.body.mail,
      user: req.body.user,
      password: req.body.password,
      tipo: req.body.tipo
      });

  try{
    await User.sync();
    await user.save();
    console.log('salvou com sucesso');
  }catch(error){
    console.error('erro ao salvar: ' + error);
  }
  });

module.exports = router;