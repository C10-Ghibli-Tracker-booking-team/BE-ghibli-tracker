const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);
const avatar = Joi.string().uri();
const status = Joi.boolean();
const userId = Joi.number().integer();
const movieId = Joi.number().integer();
const user_rating = Joi.number().integer().max(5);
const seen_movie = Joi.boolean();
const favorite_movie = Joi.boolean();

const getUserSchema = Joi.object({
  id: id.required(),
});

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  avatar: avatar.optional(),
  role: role.optional(),
  status: status.optional(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
  role: role,
  avatar: avatar,
  status: status,
});

const infoUserMovieSchema = Joi.object({
  userId: userId.required(),
  movieId: movieId.required(),
  user_rating: user_rating.optional(),
  seen_movie: seen_movie.optional(),
  favorite_movie: favorite_movie.optional(),
});

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
  infoUserMovieSchema,
};
