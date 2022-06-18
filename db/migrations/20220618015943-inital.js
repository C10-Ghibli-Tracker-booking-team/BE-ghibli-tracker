'use strict';

const { MOVIE_TABLE } = require('../models/movie.model');
const { USER_TABLE } = require('../models/user.model');
const { USER_MOVIE_TABLE } = require('../models/user-movie.model');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(MOVIE_TABLE, {
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
    });

    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'general',
      },
      avatar: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
    });

    await queryInterface.createTable(USER_MOVIE_TABLE, {
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
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(MOVIE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(USER_MOVIE_TABLE);
  },
};
