const Post = require("./post.model");

const getAllPosts = async () => {
  const posts = Post.find();

  return posts;
};

const getPostById = async (id) => {
  const post = Post.findById(id);

  return post;
};

const createPost = async (userId, payload) => {
  const newPost = {
    title: payload.title,
    imageUrl: payload.imageUrl,
    description: payload.description,
    author: userId,
  };
  const post = await Post.create(newPost);

  return post;
};

const updatePost = async (_id, payload) => {
  const post = await Post.findOneAndUpdate({ _id }, payload);

  return post;
};

const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id);

  return post;
};

const getPostsByCategory = async (categoryId) => {
  const postsByCategories = await Post.find({
    categories: { $in: [categoryId] },
  });

  return postsByCategories;
};

exports.PostService = {
  getAllPosts,
  getPostById,
  updatePost,
  createPost,
  deletePost,
  getPostsByCategory,
};
