const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql::memory:');

module.exports = (sequelize) =>{
const User = sequelize.define('User', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
    null: true
  },
  name: DataTypes.STRING(50),
  surname: DataTypes.STRING(50),
  mail: DataTypes.STRING(100),
  user: DataTypes.STRING(50),
  password: DataTypes.STRING,
  tipo: DataTypes.INTEGER(2)
},{
  freezeTableName: true,
  timestamps: true
});
return User;
};