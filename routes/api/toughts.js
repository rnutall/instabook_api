const router = require('express').Router();
const {
   getThought,
  // getSingleThought,
   createThought
  // updateThought
  // deleteThought
} = require('../../controllers/Thought');

// // /api/Thought
 router.route('/').get(getThought).post(createThought);

// // /api/Thought/:ThoughtId
const {
  getSingleThought,
}
// router
 router.route('/').get(getThought).post(createThought);
//   .get(getSingleThought
//   .put(updateThought
//   .delete(deleteThought;
//   .update(updateThought;

module.exports = router;
