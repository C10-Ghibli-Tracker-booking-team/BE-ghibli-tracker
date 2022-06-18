const express = require('express');
const moviesRouter = require('./api/movies.route');
const usersRouter = require('./api/users.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/movies', moviesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
