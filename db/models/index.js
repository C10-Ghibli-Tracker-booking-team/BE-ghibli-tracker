const { User, UserSchema } = require('./user.model');
const { Movie, MovieSchema } = require('./movie.model');
const { UserMovie, UserMovieSchema } = require('./user-movie.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  UserMovie.init(UserMovieSchema, UserMovie.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));

  User.associate(sequelize.models);
  // Movie.associate(sequelize.models);
}

module.exports = setupModels;
