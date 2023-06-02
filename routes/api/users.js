const router = require('express').Router();
const {
  getusers,
  getSingleusers,
  createusers,
  deleteusers,
  addThoughts,
    removeThoughts
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getusers).post(createusers);

// /api/users/:usersId
router.route('/:usersId').get(getSingleusers).delete(deleteusers);

// /api/users/:usersId/thoughts
router.route('/:usersId/thoughts').post(addthoughts);

// /api/users/:usersId/thoughts/:thoughtsId
router.route('/:usersId/thoughts/:thoughtsId').delete(removethoughts);

module.exports = router;

  