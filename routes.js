const express = require("express");

const router = express.Router();


const userRouter = require('./routes/userDao');
//const chamadoRouter = require('./routes/chamadoDao');


router.use(userRouter);
//router.use(chamadoRouter);

module.exports = router;