const router = require("express").Router();
const {
  getAllThoughts,
  getThought,
  newThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require("../../controllers/thoughtController");

// /api/courses
router.route("/").get(getThoughts).post(newThought);

// api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThought)
  .put("updateThought")
  .delete("deleteThought");

router.route("/:thoughtId/reactions").post(addThoughtReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtReaction);

module.exports = router;
