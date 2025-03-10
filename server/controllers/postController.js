import PostModel from "../models/postModel.js";
import UserModel from "../models/userModel.js";

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    await PostModel.findByIdAndDelete(postId);
    res.status(201).json(postId);
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
    ).populate("creator");
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

    const post = await PostModel.findById(newPost._id)
      .populate("creator")
      .exec();

    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const savePost = async (req, res) => {
  const { userId, postId } = req.body;

  try {
    await UserModel.findByIdAndUpdate(
      userId, //user id
      { $push: { savedPosts: postId } },
      { new: true }
    );

    res.status(201).json("Post saved");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const posts = await PostModel.find({ title })
      .sort({ _id: -1 }) //latest post first
      .populate("creator")
      .exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getAllPosts = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 5;
    const stIndex = (Number(page) - 1) * LIMIT; //skips earlier fetched posts
    const totalPosts = await PostModel.countDocuments({});

    const posts = await PostModel.find({})
      .sort({ _id: -1 }) //latest post first
      .limit(LIMIT)
      .skip(stIndex)
      .populate("creator")
      .exec();

    res
      .status(200)
      .json({ data: posts, noOfPages: Math.ceil(totalPosts / LIMIT) });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCreatorProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const profile = await UserModel.findById(userId)
      .populate("posts")
      .populate("savedPosts");

    res.status(200).json(profile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
