const express = require("express");
const httpValidator = require("../../shared/validator");
const { liststudents, listStudents } = require("./list-students");
const { showStudent } = require("./show-student");
const { editStudent } = require("./edit-student");
const { removeStudent } = require("./remove-student");
const { addStudent } = require("./add-student");
const {
  studentFilterSchema,
  showstudentschema,
  updatestudentschema,
  removestudentschema,
  createstudentschema,
  loginSchema,
} = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getstudents = async (req, res, next) => {
  try {
    // httpValidator({ query: req.query }, studentFilterSchema);

    const result = await listStudents();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getStudent = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showstudentschema);

    const result = await showStudent({ id: req.params.id });

    return res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchStudent = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, updatestudentschema);

    const result = await editStudent(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteStudent = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, removestudentschema);

    const result = await removeStudent(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postStudent = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, createstudentschema);

    const result = await addStudent(req.query);

    return res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudent,
  getstudents,
  patchStudent,
  postStudent,
  deleteStudent,
};
