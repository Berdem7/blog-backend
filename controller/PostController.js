const Post = require("../models/Post");

const get_posts = (req, res, next) => {
  Post.find({}, null, { sort: { created_at: -1 } }, function (err, data) {
    if (err) next;
    res.json(data);
  });
};

const create_posts = async (req, res, next) => {
  const reqBody = req.body;
  let newPost = new Post({
    title: reqBody.title,
    url: reqBody.url,
    description: reqBody.description,
  });
  newPost
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch(next);
  res.send("Success");
};

const delete_posts = (req, res, next) => {
  Post.findOneAndRemove({ _id: req.params.id }, function (err, data) {
    if (err) next;
    res.send("deleted");
  });
};

module.exports = {
  get_posts,
  create_posts,
  delete_posts,
};
