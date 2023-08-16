const Wish = require("./wish.model");

const getAllWishes = async (userId) => {
  const wishes = await Wish.find({ userId }).populate("posts");
  return wishes;
};
const getAllWishesByUserIdAndWishName = async (userId, wishName) => {
  try {
    const wishes = await Wish.find({ user: userId, _id: wishName })
      .populate({
        path: "posts",
      })
      .lean();
    return wishes[0].posts;
  } catch (error) {
    // Handle any errors that occur during the database query
    throw new Error("Error while fetching wishes: " + error.message);
  }
};

const createWish = async (userId, wishData) => {
  try {
    // Assuming wishData contains the wish name and post references
    const newWish = new Wish({
      name: wishData.name,
      user: userId,
      posts: wishData.posts,
    });

    const savedWish = await newWish.save();
    return savedWish;
  } catch (error) {
    // Handle any errors that occur during the database save
    throw new Error("Error while creating wish: " + error.message);
  }
};

const addPostToWish = async (userId, wishId, postId) => {
  try {
    const wish = await Wish.findOne({ _id: wishId, user: userId });

    if (!wish) {
      throw new Error("Wish not found for the user.");
    }

    wish.posts.push(postId);
    const updatedWish = await wish.save();
    return updatedWish;
  } catch (error) {
    // Handle any errors that occur during the database update
    throw new Error("Error while adding post to wish: " + error.message);
  }
};
const deleteWish = async (userId, wishId) => {
  try {
    // Check if the wishlist exists and belongs to the user
    const wish = await Wish.findOne({ _id: wishId, user: userId });

    if (!wish) {
      throw new Error("Wishlist not found for the user.");
    }

    // Delete the wishlist
    await wish.remove();

    return wish;
  } catch (error) {
    // Handle any errors that occur during the database deletion
    throw new Error("Error while deleting wishlist: " + error.message);
  }
};

exports.WishService = {
  getAllWishes,
  getAllWishesByUserIdAndWishName,
  createWish,
  addPostToWish,
  deleteWish,
};
