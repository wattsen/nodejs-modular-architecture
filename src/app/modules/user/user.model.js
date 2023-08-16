const { Schema, model, ObjectId, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const { userRoles } = require("./user.enum");
const config = require("../../../config");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String },
    avatar: { type: String },
    role: {
      type: String,
      enum: [userRoles.Admin, userRoles.Client],
      default: userRoles.Client,
    },

    // mappings
    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }],
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    saved: [{ type: ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  },
);

// Hash Password
userSchema.pre("save", async function () {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.BCRYPT_SALT_ROUNDS),
  );
});

// Method: Check User Existance
userSchema.statics.isUserExist = async function (email) {
  const userExist = await User.findOne({ email });

  return userExist;
};

// Method: Check Password Match
userSchema.statics.isPasswordMatch = async function (incomingPass, actualPass) {
  const passwordMatched = await bcrypt.compare(incomingPass, actualPass);

  return passwordMatched;
};

const User = model("User", userSchema);

module.exports = User;
