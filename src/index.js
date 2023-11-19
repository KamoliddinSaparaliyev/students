const express = require("express");
const config = require("./shared/config");
const usersRouter = require("./modules/students/_api");
const errorMiddlewareFunc = require("./shared/error/handle");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(errorMiddlewareFunc);

app.use("/api/v1", usersRouter);

app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti`);
});
