const { chamado } = require("../models");
const db = require("../models");

const Historico = db.historico;
const Chamado   = db.chamado;
const User      = db.user;

exports.createHistorico = (historico) => {
    let dataObj = new Date();

    let data = dataObj.getDate() + '-'

    return Historico.create({
      descricaoAcao: historico.descricaoAcao,
      date: data,
      userId: historico.userId,
      chamadoId: historico.chamadoId
    })
      .then((historico) => {
        //console.log(">> Created tutorial: " + JSON.stringify(chamado, null, 4));
        //return chamado;
      })
      .catch((err) => {
        console.log(">> Error while creating historico: ", err);
        return err;
      });
  };

  exports.getChamadoHistorico = (chamadoId)=>{
    return Chamado.findAll({
      attributes:[
        ['id', 'codigo'], 
        ['date', 'data'],
        'descricao',
        'nivel',
        'status'
      ],

      where:{
        chamadoId: chamadoId
      },
      include: {
        model: User,
        attributes: [['name', 'user']],

        model: Chamado
      }
    });
  };