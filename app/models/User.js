const { DataTypes } = require('sequelize');

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
  
  mail: {
    type: DataTypes.STRING(100),
    allowNull:false,
    unique:true
  },
  user: {
    type:DataTypes.STRING(50),
    allowNull:false,
    unique:true
  },

  password: DataTypes.STRING,
  tipo: DataTypes.INTEGER(2)
},
{
  freezeTableName: true,
  timestamps: true
});
return User;
};