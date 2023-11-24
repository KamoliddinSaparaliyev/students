const Joi = require("joi");
const { idValid } = require("../../shared/schemas/index");

// JOI schema for the UserFilter
const userFilterSchema = {
  query: Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(1).optional(),
    offset: Joi.number().integer().min(0).optional(),
    sort_by: Joi.string().optional(),
    sort_order: Joi.string().valid("asc", "desc").optional(),
  }),
};

//RemoveUser
const removeUserSchema = Joi.object({
  ...idValid,
});

//ShowUser
const showUserSchema = {
  ...idValid,
};

//UploadAvatar
const uploadAvatarSchema = {
  ...idValid,
};

// JOI schema for the CreateUser
const createUserSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    address_id: Joi.number().integer().positive().required(),
    univer_id: Joi.number().integer().positive().required(),
    created_at: Joi.date().iso(),
    updated_at: Joi.date().iso(),
  }),
};

// JOI schema for the UpdateUser
const updateUserSchema = {
  ...idValid,
  body: Joi.object({
    full_name: Joi.string(),
    age: Joi.number().integer().min(0),
    address_id: Joi.number().integer().positive(),
    univer_id: Joi.number().integer().positive(),
    updated_at: Joi.date().iso(),
  }).min(1),
};

// JOI schema for the login
const loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  userFilterSchema,
  createUserSchema,
  updateUserSchema,
  removeUserSchema,
  showUserSchema,
  loginUserSchema,
};
