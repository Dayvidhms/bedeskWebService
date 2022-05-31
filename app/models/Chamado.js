const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
const Chamado = sequelize.define('Chamado', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
    null: true
  },
  chamado: DataTypes.TEXT('medium'),
  date: DataTypes.DATEONLY,
  area:DataTypes.INTEGER(2),
  status:DataTypes.INTEGER(2),
  nivel:DataTypes.INTEGER(2),
  descricao:DataTypes.TEXT('long'),

  
},{
  freezeTableName: true,
  timestamps: false
});
return Chamado;
};