const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { MOVIE_TABLE } = require('./movie.model');

const USER_MOVIE_TABLE = 'user_movie';

const UserMovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
  },
  movieId: {
    field: 'movie_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVIE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  user_rating: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  seen_movie: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  favorite_movie: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class UserMovie extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_MOVIE_TABLE,
      modelName: 'UserMovie',
      timestamps: false,
    };
  }
}

module.exports = { USER_MOVIE_TABLE, UserMovieSchema, UserMovie };
