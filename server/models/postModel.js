import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    artImg: String,
    title: String,
    desc: String,
    category: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("PostModel", postSchema);
export default PostModel;
