const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const PostController = require("../controller/PostController");

router.get("/posts", PostController.get_posts);
router.post("/posts", jsonParser, PostController.create_posts);
router.delete("/posts/:id", PostController.delete_posts);

module.exports = router;
