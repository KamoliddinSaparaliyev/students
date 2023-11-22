const db = require("../../db/index");
const { BadRequestError } = require("../../shared/error");

module.exports.listStudents = async () => {
  try {
    const students = await db("students")
      .limit(10)
      .offset(1)
      .select(
        "students.id as student_id",
        "students.full_name",
        "students.age",
        "universities.name as university_name",
        "address.street",
        "address.postal_code",
        "images.filename as avatar"
      )
      .leftJoin("universities", "students.univer_id", "universities.id")
      .leftJoin("address", "students.address_id", "address.id")
      .leftJoin("images", "students.id", "images.student_id");

    return students;
  } catch (error) {
    throw new BadRequestError("Error fetching students from the database.");
  }
};
