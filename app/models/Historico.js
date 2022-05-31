const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
const Historico = sequelize.define('Historico', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
    null: true
  },
  date: DataTypes.DATEONLY,
  descricaoAcao:DataTypes.TEXT('long'),

},{
  freezeTableName: true,
  timestamps: true
});
return Historico;
};