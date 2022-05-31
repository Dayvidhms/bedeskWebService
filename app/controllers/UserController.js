const db = require("../models");
const User = db.user;

exports.createUser = (user) => {

    return User.create({
      name: user.name,
      surname: user.surname,
      mail: user.mail,
      user: user.user,
      password: user.password,
      tipo: user.tipo
    })
      .then((user) => {
        //console.log(">> Created user: " + JSON.stringify(user, null, 4));
        //return user;
      })
      .catch((err) => {
        //console.log(">> Error while creating user: ", err);
        return err;
      });
  };

  exports.loginUsuario = (usuario, senha) =>{
    return User.findOne({where:{user:usuario, password: senha}});
  };

  exports.getUser = (id) =>{
    return User.findByPk(id);
  }