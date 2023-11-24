const db = require("../../db");
const { showStudent } = require("./show-student");

module.exports.removeStudent = async ({ id }) => {
  await showStudent({ id });

  return await db("students").where({ id }).del();
};
