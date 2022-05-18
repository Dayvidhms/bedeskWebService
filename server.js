const express = require("express");

const userRouter = require("./routes");

const app = express();

const port = 3000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
  