// create new router instance
const router = require('express').Router();
// import router user and thoughts routes
const UsersRoutes = require('./users');
const ThoughtsRoutes = require('./thought');
// defines end point for the user and thoughts routes
router.use('./users', UsersRoutes);
router.use('./thoughts', ThoughtsRoutes);

module.exports = router;
