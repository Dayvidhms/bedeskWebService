const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.js")(sequelize, Sequelize);
db.chamado = require("./chamado.js")(sequelize, Sequelize);
db.historico = require("./Historico")(sequelize, Sequelize);

//fk chamado has one user
db.user.hasMany(db.chamado, { foreignKey: "userId" });
db.chamado.belongsTo(db.user, {
  foreignKey: "userId"
});

//fk historico has one user
db.user.hasMany(db.historico, {foreignKey: "userId"});
db.historico.belongsTo(db.user, {
  foreignKey: "userId"
});

//fk historico has one chamado
db.chamado.hasMany(db.historico, {foreignKey: "chamadoId"});
db.historico.belongsTo(db.chamado, {
  foreignKey: "chamadoId"
});

module.exports = db;