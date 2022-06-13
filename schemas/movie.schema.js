const Joi = require('joi');

const id = Joi.number().integer();
const release_year = Joi.number().integer().min(1894);
const title = Joi.string().min(3).max(200);
const original_title = Joi.string().min(3).max(225);
const romanised_title = Joi.string().min(3).max(225);
const wiki_url = Joi.string().uri();
const screenwriter = Joi.string().min(3).max(225);
const producer = Joi.string().min(3).max(225);
const music = Joi.string().min(3).max(200);
const duration = Joi.number().integer().min(5);
const audience_score = Joi.number().integer().max(5);
const cover = Joi.string().uri();
const description = Joi.string().min(3).max(1000);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getMovieSchema = Joi.object({
  id: id.required(),
});

const createMovieSchema = Joi.object({
  release_year: release_year.required(),
  title: title.required(),
  original_title: original_title.required(),
  romanised_title: romanised_title.required(),
  wiki_url: wiki_url.optional(),
  screenwriter: screenwriter.required(),
  producer: producer.required(),
  music: music.optional(),
  duration: duration.required(),
  audience_score: audience_score.required(),
  cover: cover.optional(),
  description: description.required(),
});

const updateMovieSchema = Joi.object({
  release_year: release_year,
  title: title,
  original_title: original_title,
  romanised_title: romanised_title,
  wiki_url: wiki_url,
  screenwriter: screenwriter,
  producer: producer,
  music: music,
  duration: duration,
  audience_score: audience_score,
  cover: cover,
  description: description,
});

const queryMovieSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  getMovieSchema,
  createMovieSchema,
  updateMovieSchema,
  queryMovieSchema,
};
