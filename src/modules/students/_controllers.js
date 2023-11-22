const httpValidator = require("../../shared/validator");
const { listStudents } = require("./list-students");
const { showStudent } = require("./show-student");
const { editStudent } = require("./edit-student");
const { removeStudent } = require("./remove-student");
const { addStudent } = require("./add-student");
const { uploadAvatar } = require("./avatar-upload");
const {
  uploadAvatarSchema,
  showStudentSchema,
  updateStudentSchema,
  removeStudentSchema,
  createStudentSchema,
} = require("./_schemas");
const { BadRequestError } = require("../../shared/error");

const getStudents = async (req, res, next) => {
  try {
    const result = res.paginatedData ? res.paginatedData : await listStudents();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getStudent = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showStudentSchema);

    const result = await showStudent({ id: req.params.id });

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const patchStudent = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, updateStudentSchema);

    const result = await editStudent(req.query);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, removeStudentSchema);

    const result = await removeStudent(req.query);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const postStudent = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, createStudentSchema);

    const result = await addStudent(req.query);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const uploadStudentAvatar = async (req, res, next) => {
  try {
    if (!req.file)
      throw new BadRequestError("No file uploaded or upload error");

    httpValidator({ param: req.params }, uploadAvatarSchema);

    await uploadAvatar(req.params.id, req.file);

    return res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudent,
  getStudents,
  patchStudent,
  postStudent,
  deleteStudent,
  uploadStudentAvatar,
};
