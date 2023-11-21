const db = require("../../db/index");
const bcryptjs = require("bcryptjs");
const { NotFoundError } = require("../../shared/error");
const { showStudent } = require("./show-student");

module.exports.editStudent = async ({ id, ...changes }) => {
  await showStudent({ id });

  let hashPassword = {};
  if (changes.password)
    hashPassword.password = await bcryptjs.hash(changes.password, 10);

  return (
    await db("students")
      .where({ id })
      .update({ ...changes, ...hashPassword })
      .returning("*")
  )[0];
};
