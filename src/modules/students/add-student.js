const db = require("../../db");
const { BadRequestError } = require("../../shared/error/index");

module.exports.addStudent = async (payload) => {
  const existing = db("students")
    .where({ studentname: payload.studentname })
    .first();

  if (existing) throw new BadRequestError("studentname already existit");

  return db("students").insert(payload).returning("*");
};
