const db = require("../../db/index");
const bcryptjs = require("bcryptjs");
const { NotFoundError } = require("../../shared/error");

module.exports.editStudent = async ({ id, ...changes }) => {
  const student = await db("students").where({ id, is_deleted: false }).first();

  if (!student) throw new NotFoundError("Student not found");

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
