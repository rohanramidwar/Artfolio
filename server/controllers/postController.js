import PostModel from "../models/postModel.js";
import UserModel from "../models/userModel.js";

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    await PostModel.findByIdAndDelete(postId);
    res.status(201).json("Post deleted");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const { postId, artImg, title, desc, category } = req.body;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      {
        artImg,
        title,
        desc,
        category,
      },
      { new: true }
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getFilteredPosts = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await PostModel.find({ category })
      .sort({ _id: -1 }) //latest post first
      .populate("creator")
      .exec();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({})
      .sort({ _id: -1 }) //latest post first
      .populate("creator")
      .exec();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { creator, artImg, title, desc, category } = req.body;
  const newPost = new PostModel({
    creator,
    artImg,
    title,
    desc,
    category,
  });
  try {
    await newPost.save();
    await UserModel.findByIdAndUpdate(
      creator, //user id
      { $push: { posts: newPost._id } },
      { new: true }
    );
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
