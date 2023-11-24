const express = require("express");
const config = require("./shared/config");
const errorMiddlewareFunc = require("./shared/error/handle");
const studentsRoute = require("./modules/students/_api");
const usersRoute = require("./modules/users/_api");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/students", studentsRoute);
app.use("/api/v1/users", usersRoute);

app.use(errorMiddlewareFunc);

app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti`);
});
