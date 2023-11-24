const db = require("../../db/index");
const { showStudent } = require("./show-student");

module.exports.editStudent = async ({ id, ...changes }) => {
  await showStudent({ id });

  return (
    await db("students")
      .where({ id })
      .update({ ...changes })
      .returning("*")
  )[0];
};
