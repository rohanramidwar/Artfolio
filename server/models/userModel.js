import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: String,
    name: String,
    email: String,
    picture: String,
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
