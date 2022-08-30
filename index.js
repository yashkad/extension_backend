const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const userRouter = require("./src/routers/main");

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
