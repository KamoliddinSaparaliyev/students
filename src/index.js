const express = require("express");
const config = require("./shared/config");
const studentsRoute = require("./modules/students/_api");
const errorMiddlewareFunc = require("./shared/error/handle");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/students/", studentsRoute);

app.use(errorMiddlewareFunc);

app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti`);
});
