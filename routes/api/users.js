const router = require("express").Router();
const {
  getUser,
  createUser,
  getUserById,
  updateUserById,
  removeUserById,
  addFriend,
  removeFriend,
  getThought,
  createThought
} = require("./thought");

// /api/users
router.route('/').get(getUser).post(createUser);

// // get user id, update user by id and remove user by id
router
  .route("/:userId")
  .get(getUserById, getThought)
  .post(updateUserById)
  .delete(removeUserById);

//POST/ DELETE friend route
router
  .route(":/userId/friends/:friendsId")
  .post(addFriend, createThought)
  .delete(removeFriend);

module.exports = router;
