const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require("../../controllers/thoughtController");

// /api/courses
router.route("/").get(getAllThoughts).post(createThought);

// api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put("updateThought")
  .delete("deleteThought");

router.route("/:thoughtId/reactions").post(addThoughtReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtReaction);

module.exports = router;
