const express = require('express');

const UserService = require('../../services/users.service');
const validatorHandler = require('../../middlewares/validator.handler');
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
  infoUserMovieSchema,
} = require('../../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json({
        message: 'created',
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.status(200).json({
        message: 'User updated',
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.status(200).json({
        message: `User ${id} deleted`,
        rta,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/user-movie',
  validatorHandler(infoUserMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const movieInfo = await service.addUserMovie(body);
      res.status(201).json(movieInfo);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
