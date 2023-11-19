const db = require("../../db/index");
const { NotFoundError } = require("../../shared/error/index");

module.exports.showStudent = async ({ id }) => {
  const student = await db("students").where({ id, is_deleted: false }).first();
  if (!student) throw new NotFoundError("Student not Found");

  return student;
};
