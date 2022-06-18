const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const fetch = require('node-fetch');

class MoviesService {
  async find(query) {
    const options = {
      // include: ['category'],
      where: {},
    };

    const { limit, offset } = query;
    if (limit || offset) {
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

  async populateDb() {
    let getMoviesResponse = await fetch('https://ghibliapi.herokuapp.com/films');
    let movies = await getMoviesResponse.json();

    movies.map((mov) => {
      let data = {
        title: mov.title,
        original_title: mov.original_title,
        wiki_url:
          'https://en.wikipedia.org/w/index.php?search=' +
          mov.title.replaceAll(' ', '%'),
        romanised_title: mov.original_title_romanised,
        cover: mov.image,
        description: mov.description,
        screenwriter: mov.director,
        producer: mov.producer,
        music: mov.director,
        release_year: mov.release_date,
        duration: mov.running_time,
        audience_score: mov.rt_score,
      };

      async function createMovie() {
        await models.Movie.create(data);
        console.log('DB populated');
      }

      createMovie();
    });
  }
}

module.exports = MoviesService;
