const db = require("../../db");
const { BadRequestError } = require("../../shared/error/index");

module.exports.addStudent = async (payload) => {
  return db("students").insert(payload).returning("*");
};
