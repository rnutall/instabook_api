const router = require("express").Router();
const {
  getThought,
  getThoughtById,
  createThought,
  removeThought,
  updateThoughtById,
  createReaction,
  removeReaction,
} = require("./users");

// route to POST thought
// Route to handle GET and POST requests for '/'

// Use router.route('/')
router
  .route("/")
  // Define the GET method
  .get(getThought)
  // Define the POST method
  .post(createThought);
//router.route('/').get(getThought).post(createThought);

// route to add and delete thought
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .post(updateThoughtById)
  .delete(removeThought),
  // post a reaction to thought
  router.route("./:thoughtId/reactions").post(createReaction);

//route to remove reaction to thought
router.route("/:thoughtId/reactions/:reactionsId").delete(removeReaction);

module.exports = router;
