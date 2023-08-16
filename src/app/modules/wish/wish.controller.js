const { WishService } = require("./wish.service");

const getAllWishes = async (req, res) => {
  const wishes = await WishService.getAllWishes();

  res.json(wishes);
};

const getAllWishesByName = async (req, res) => {
  const userId = req.params.id;
  const wishId = req.params.wishId;
  const wishes = await WishService.getAllWishesByUserIdAndWishName(
    userId,
    wishId,
  );

  res.json(wishes);
};
const createWish = async (req, res) => {
  const userId = req.params.id;
  const wishData = req.body; // Assuming wish data is sent in the request body

  try {
    const newWish = await WishService.createWish(userId, wishData);
    res.json(newWish);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new wish." });
  }
};

const addPostToWish = async (req, res) => {
  const userId = req.params.id;
  const wishId = req.params.wishId;
  const postId = req.body.postId; // Assuming the post ID is sent in the request body

  try {
    const updatedWish = await WishService.addPostToWish(userId, wishId, postId);
    res.json(updatedWish);
  } catch (error) {
    res.status(500).json({ error: "Failed to add the post to the wish." });
  }
};

const deleteWish = async (req, res) => {
  const authUserId = req.user._id;
  const wishId = req.params.wishId;

  try {
    const deletedWish = await WishService.deleteWish(authUserId, wishId);
    res.json(deletedWish);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete wishlist." });
  }
};

exports.WishController = {
  getAllWishes,
  getAllWishesByName,
  addPostToWish,
  createWish,
  deleteWish,
};
