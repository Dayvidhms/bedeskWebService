const express = require("express");

const userRouter = require("./routes/userDao");
const chamadoRouter = require("./routes/chamadoDao");

const app = express();

const port = 3000;

const db = require("./app/models");
const run = async () => {
};

/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});*/

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(userRouter);
app.use(chamadoRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
  