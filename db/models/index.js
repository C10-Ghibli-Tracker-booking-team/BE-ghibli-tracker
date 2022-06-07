const { User, UserSchema } = require('./user.model');
// const { Customer, CustomerSchema } = require('./customer.model');
// const { Category, CategorySchema } = require('./category.model');
const { Movie, MovieSchema } = require('./movie.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // Customer.init(CustomerSchema, Customer.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));

  // User.associate(sequelize.models);
  // Customer.associate(sequelize.models);
  // Movie.associate(sequelize.models);
}

module.exports = setupModels;
