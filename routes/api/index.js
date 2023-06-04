const router = require('express').Router();
const UsersRoutes = require('./user');
const ThoughtsRoutes = require('./thought');

router.use('/Users', UsersRoutes);
router.use('/thoughts', ThoughtsRoutes);

module.exports = router;
