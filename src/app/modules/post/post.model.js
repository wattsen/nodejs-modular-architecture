const { Schema, ObjectId, model } = require("mongoose");

const PostSchema = new Schema(
  {
    imageUrl: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    author: {
      type: ObjectId,
      ref: "User",
    },
    likes: {
      type: Number,
      default: 0,
    },
    categories: [
      {
        type: ObjectId,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Post = model("Post", PostSchema);

module.exports = Post;
