const router = require('express').Router();
const UsersRoutes = require('./UsersRoutes');
const ThoughtsRoutes = require('./thoughtsRoutes');

router.use('/Users', UsersRoutes);
router.use('/thoughts', ThoughtsRoutes);

module.exports = router;
