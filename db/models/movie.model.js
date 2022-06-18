const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  release_year: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  original_title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  romanised_title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  wiki_url: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  screenwriter: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  producer: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  music: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  duration: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  audience_score: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  cover: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Movie extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: 'Movie',
      timestamps: false,
    };
  }
}

module.exports = { Movie, MOVIE_TABLE, MovieSchema };
