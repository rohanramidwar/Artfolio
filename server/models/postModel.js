import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    title: String,
    desc: String,
    artImg: String,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CommentModel",
      },
    ],
  },
  { timestamps: true }
);

const PostModel = mongoose.model("PostModel", postSchema);
export default PostModel;
