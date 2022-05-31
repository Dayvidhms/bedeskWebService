const express = require("express");
const chamadoController = require("../app/controllers/ChamadoController");
const historicoController = require("../app/controllers/HistoricoController");

const chamadoRouter = express.Router();

chamadoRouter.post('/chamado/inserir', async function (req, res) {
  const chamado = {
    chamado: req.body.chamado,
    date: req.body.date,
    userId: req.body.usuario,
    area: req.body.area,
    status: req.body.status,
    nivel: req.body.nivel,
    descricao: req.body.descricao
  };

  let result = await chamadoController.createChamado(chamado);
   
  if(result.id != null){
    const historico = {
      descricaoAcao: "Chamado criado.",
      date: req.body.date,
      userId: req.body.usuario,
      chamadoId: result.id
    }

    await historicoController.createHistorico(historico);
    res.send(true);
  }else{
    res.send(false);
  }
});

chamadoRouter.post('/chamado/atualizar', async function(req, res){

  let reqObject = req.body;
  let statusChanged = reqObject.statusChanged;
  console.log(reqObject);

  const chamado = {
    id: reqObject.id,
    chamado:reqObject.chamado,
    area: reqObject.area,
    status: reqObject.status,
    nivel: reqObject.nivel,
    descricao: reqObject.descricao
  };

  let result = await chamadoController.updateChamado(chamado);

  if(result == true){
    if(statusChanged == true){
      const historico = {
        descricaoAcao: "Chamado alterado.",
        date: req.body.date,
        userId: req.body.usuario,
        chamadoId: result.id
      }

      await historicoController.createHistorico(historico);
      res.send(true);
    }else{
      res.send(true);
    }
  }else{
    res.send(false);
  }


});

chamadoRouter.get('/chamado/userChamados', async function(req, res){
  let userId = req.query.userId;

  let result = await chamadoController.getUserChamados(userId);
  res.send(result);
});

chamadoRouter.get('/chamado/chamados', async function(req, res){
  let result = await chamadoController.getChamados();
  res.send(result);
});

module.exports = chamadoRouter;