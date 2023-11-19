const Joi = require("joi");

// JOI schema for the StudentFilter
const studentFilterSchema = Joi.object({
  query: Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(1).optional(),
    offset: Joi.number().integer().min(0).optional(),
    sort_by: Joi.string().optional(),
    sort_order: Joi.string().valid("asc", "desc").optional(),
    is_deleted: Joi.boolean().optional(),
  }),
});

const removestudentschema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
});

const showstudentschema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
});

// JOI schema for the CreateStudent
const createstudentschema = Joi.object({
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    studentname: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

// JOI schema for the UpdateStudent
const updatestudentschema = Joi.object({
  params: Joi.object({ id: Joi.number().integer().required() }),
  body: Joi.object({
    first_name: Joi.string().optional(),
    last_name: Joi.string().optional(),
    studentname: Joi.string().optional(),
    password: Joi.string().optional(),
  }),
});

// JOI schema for the Login
const loginSchema = {
  body: Joi.object({
    studentname: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  studentFilterSchema,
  createstudentschema,
  updatestudentschema,
  removestudentschema,
  showstudentschema,
  loginSchema,
};
