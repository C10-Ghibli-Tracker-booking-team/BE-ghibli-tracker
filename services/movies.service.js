const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class MoviesService {
  async find(query) {
    const options = {
      // include: ['category'],
      where: {},
    };

    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const movies = await models.Movie.findAll(options);
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

  async create(data) {
    const newMovie = await models.Movie.create(data);
    return newMovie;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = MoviesService;
