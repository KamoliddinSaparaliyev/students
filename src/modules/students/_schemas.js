const Joi = require("joi");
const { idValid } = require("../../shared/schemas");

// JOI schema for the StudentFilter
const studentFilterSchema = {
  query: Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(1).optional(),
    offset: Joi.number().integer().min(0).optional(),
    sort_by: Joi.string().optional(),
    sort_order: Joi.string().valid("asc", "desc").optional(),
  }),
};

//RemoveStudent
const removeStudentSchema = {
  ...idValid,
};

//ShowStudent
const showStudentSchema = {
  ...idValid,
};

//UploadAvatar
const uploadAvatarSchema = {
  ...idValid,
};

// JOI schema for the CreateStudent
const createStudentSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    address_id: Joi.number().integer().positive().required(),
    univer_id: Joi.number().integer().positive().required(),
    created_at: Joi.date().iso(),
    updated_at: Joi.date().iso(),
  }),
};

// JOI schema for the UpdateStudent
const updateStudentSchema = {
  ...idValid,
  body: Joi.object({
    full_name: Joi.string(),
    age: Joi.number().integer().min(0),
    address_id: Joi.number().integer().positive(),
    univer_id: Joi.number().integer().positive(),
    updated_at: Joi.date().iso(),
  }).min(1),
};

module.exports = {
  studentFilterSchema,
  createStudentSchema,
  updateStudentSchema,
  removeStudentSchema,
  showStudentSchema,
  uploadAvatarSchema,
};
