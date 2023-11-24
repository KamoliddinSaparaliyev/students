const db = require("../../db");

module.exports.addStudent = async (payload) => {
  console.log(payload);
  return db("students").insert(payload).returning("*");
};
