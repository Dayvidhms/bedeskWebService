const db = require("../models");
const Chamado = db.chamado;
const User = db.user;

exports.createChamado = (chamado) => {
    let date = chamado.date.slice(0,10);

    return Chamado.create({
      chamado: chamado.chamado,
      date: date,
      area: chamado.area,
      status: chamado.status,
      nivel: chamado.nivel,
      descricao: chamado.descricao,
      userId: chamado.userId
    })
      .then((chamado) => {
        //console.log(">> Created tutorial: " + JSON.stringify(chamado, null, 4));
        return chamado;
      })
      .catch((err) => {
        console.log(">> Error while creating chamado: ", err);
        return err;
      });
  };

  exports.updateChamado = async (chamado) => {

    return Chamado.update(chamado, {fields: ['chamado', 'area', 'status', 'nivel', 'descricao'], where: {id: chamado.id}})
    .then(()=>{
      return true;
    })
    .catch(() => {
      return false;
    });

  };

  exports.getUserChamados = (userId)=>{
    return Chamado.findAll({
      attributes:[
        ['id', 'codigo'], 
        ['date', 'data'],
        'descricao',
        'nivel',
        'status'
      ],

      where:{
        userId: userId
      },
      include: {
        model: User,
        attributes: [['name', 'user']]
      }
    });
  };

  exports.getChamados = ()=>{
    return Chamado.findAll({
      attributes:[
        'chamado',
        ['id', 'codigo'], 
        ['date', 'data'],
        'descricao',
        'nivel',
        'status',
        'area'
      ],
      include: {
        model: User,
        attributes: [['name', 'user']]
      }
    });
  };