const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class MoviesService {
  async find(query) {
    const options = {
      include: ['category'],
      where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const movies = await models.Movie.findAll();
    return movies;
  }

  async findOne(id) {
    const movie = await models.Movie.findByPk(id);
    if (!movie) {
      throw boom.notFound('Movie Not Found');
    }
    if (movie.isBlock) {
      throw boom.conflict('Movie is block');
    }
    return movie;
  }
}

module.exports = MoviesService;
