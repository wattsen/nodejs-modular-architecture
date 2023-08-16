const { PostService } = require("./post.service");

const getAllPost = async (req, res) => {
  const post = await PostService.getAllPosts();

  res.json(post);
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  const post = await PostService.getPostById(id);

  res.json(post);
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const postData = req.body;

  const post = await PostService.updatePost(id, postData);
  res.json(post);
};

const createPost = async (req, res) => {
  const postData = req.body;
  const authUserId = req.user._id;

  const post = await PostService.createPost(authUserId, postData);

  res.json(post);
};

const deletePost = async (req, res) => {
  const id = req.params.id;

  const post = await PostService.deletePost(id);

  res.json(post);
};

const getPostsByCategory = async (req, res) => {
  const categoryId = req.params.id;
  console.log(categoryId);
  const post = await PostService.getPostsByCategory(categoryId);

  res.json(post);
};

module.exports.PostController = {
  getAllPost,
  getPostById,
  updatePost,
  createPost,
  deletePost,
  getPostsByCategory,
};
