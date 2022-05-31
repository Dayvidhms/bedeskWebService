const express = require("express");
const userController = require("../app/controllers/UserController");

const userRouter = express.Router();

userRouter.post('/usuario/inserir', async function(req, res){
  const user = {name: req.body.name,
    surname: req.body.surname,
    mail: req.body.mail,
    user: req.body.user,
    password: req.body.password,
    tipo: req.body.tipo
  };

  let result = await userController.createUser(user);
  
  if(result != null){
    res.send(false);
  }else{
    res.send(true);
  }
});
  
userRouter.post('/usuario/login', async function(req, res){

  let usuario = req.body.user;
  let password = req.body.password;

  let result = await userController.loginUsuario(usuario, password);

  if(result===null){
    res.send({value: 0});
  }else{
    res.send({userId: result.id, tipo: result.tipo});
  }
});

userRouter.get('/usuario/loggedUser', async function(req, res){
  let result = await userController.getUser(req.query.id);

  res.send(result.dataValues);
});

module.exports = userRouter;