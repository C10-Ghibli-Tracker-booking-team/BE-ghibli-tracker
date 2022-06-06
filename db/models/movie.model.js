const { Model, DataTypes, Sequelize } = require('sequelize');
// const { CATEGORY_TABLE } = require('./category.model');

const MOVIE_TABLE = 'films'; // table name

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  release_year: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  original_title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  romanized_title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  wiki_url: {
    allowNull: false,
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
    type: DataTypes.NUMBER,
  },
  audience_score: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  cover: {
    allowNull: false,
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
  // categoryId: {
  //   field: 'category_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: CATEGORY_TABLE,
  //     key: 'id',
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL',
  // },
};

class Movie extends Model {
  // static associate(models) {
  //   this.belongsTo(models.Category, { as: 'category' });
  // }

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
