const fetch = require('node-fetch');
const { models } = require('./libs/sequelize');

async function populateDb() {
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
    }

    createMovie();
  });
}

populateDb();
