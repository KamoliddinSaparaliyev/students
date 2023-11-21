const db = require("../../db");
const { BadRequestError } = require("../../shared/error/index");
const { showStudent } = require("./show-student");

module.exports.uploadAvatar = async (id, avatar) => {
  await showStudent({ id });

  return db("students").insert(payload).returning("*");
};
