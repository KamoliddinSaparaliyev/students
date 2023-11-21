const db = require("../../db");
const { NotFoundError } = require("../../shared/error");

module.exports.showStudent = async ({ id }) => {
  const student = await db("students").where({ id }).first();

  if (!student) throw new NotFoundError("Student not Found");

  return student;
};
