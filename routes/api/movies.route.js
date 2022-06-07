const express = require('express');

const MoviesService = require('../../services/movies.service');
const validatorHandler = require('../../middlewares/validator.handler');
const {
  getMovieSchema,
  createMovieSchema,
  updateMovieSchema,
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

router.post(
  '/',
  validatorHandler(createMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMovie = await service.create(body);

      res.status(201).json({
        message: 'created',
        data: newMovie,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getMovieSchema, 'params'),
  validatorHandler(updateMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const movie = await service.update(id, body);
      res.status(200).json({
        message: 'Movie updated',
        movie,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.status(200).json({
        message: 'Movie deleted',
        rta,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
