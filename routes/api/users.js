const router = require('express').Router();
const {
  getUser,
  createUser,
  getSingletUser,
   deleteuser,
   
} = require('../../controllers/user');

// /api/users
router.route('/').get(getUser).post(createUser);

// // /api/users/:alluser
 const {
   getAllUsers,
 createAllUsers,
} = require('../../controllers/user');

 router.route('/:allUsers').get(getAllUsers).post(createAllUsers);

//api/users/:single User
const {
  getSingleUser,
createSingleUser,
} = require('../../controllers/user');


 router.route('/:singleUser').get(singleUser).post(singleUser);

 

// // /api/users/:usersId/thoughts/:thoughtsId
// router.route('/:usersId/thoughts/:thoughtsId').delete(removeusers);
// router.route('/:usersId/thoughts/:thoughtsId').update(removeusers);

module.exports = router;

  