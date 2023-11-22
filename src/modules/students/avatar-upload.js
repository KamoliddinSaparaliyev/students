const db = require("../../db");
const { showStudent } = require("./show-student");

module.exports.uploadAvatar = async (id, avatar) => {
  const { filename, path } = avatar;
  await showStudent({ id });

  await db("images")
    .insert({ filename: `images/${filename}`, path, student_id: id })
    .returning("*");

  return { success: true, message: "File upload successfully" };
};
