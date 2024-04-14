import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    displayName: String,
    email: String,
    profilePic: String,
  },
  { timestamps: true }
);

const userDB = mongoose.model("users", userSchema);
export default userDB;
