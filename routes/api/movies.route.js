const express = require('express');

const MoviesService = require('../../services/movies.service');
const validatorHandler = require('../../middlewares/validator.handler');
const {
  getMovieSchema,
  queryMovieSchema,
} = require('../../schemas/movie.schema');

const router = express.Router();
const service = new MoviesService();

router.get(
  '/',
  validatorHandler(queryMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const movies = await service.find(req.query);
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  validatorHandler(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await service.findOne(id);
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
