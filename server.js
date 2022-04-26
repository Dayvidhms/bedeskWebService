const express = require("express");

const userRouter = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRouter);

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  