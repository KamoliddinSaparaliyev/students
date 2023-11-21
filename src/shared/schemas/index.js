const Joi = require("joi");

module.exports.idValid = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};
