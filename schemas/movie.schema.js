const Joi = require('joi');

const id = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getMovieSchema = Joi.object({
  id: id.required(),
});

const queryMovieSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  getMovieSchema,
  queryMovieSchema,
};
