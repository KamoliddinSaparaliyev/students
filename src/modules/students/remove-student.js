const db = require("../../db/index");
const { NotFoundError } = require("../../shared/error/index");

module.exports.removeStudent = async ({ id }) => {
  const student = await db("students").where({ id, is_deleted: false }).first();
  if (!student) throw new NotFoundError("Student not found");

  return await db("students")
    .where({ id, is_deleted: false })
    .update({ is_deleted: true })
    .returning("*")
    .first();
};
