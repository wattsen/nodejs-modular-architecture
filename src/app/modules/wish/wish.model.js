const { Schema, ObjectId, model } = require("mongoose");

const wishShema = new Schema({
  name: { type: String, required: true },
  user: { type: ObjectId, ref: "User", required: true },
  posts: [{ type: ObjectId, ref: "Post" }],
});

const Wish = model("Wish", wishShema);

module.exports = Wish;
