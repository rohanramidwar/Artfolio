import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    displayName: String,
    email: String,
    profilePic: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostModel",
      },
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
