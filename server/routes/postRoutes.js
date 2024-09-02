import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  getCreatorProfile,
  getFilteredPosts,
  getPostsBySearch,
  savePost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/search", getPostsBySearch);
router.get("/:category", getFilteredPosts);
router.put("/edit-post", editPost);
router.put("/save-post", savePost);
router.delete("/delete-post/:postId", deletePost);
router.get("/creator/:userId", getCreatorProfile);
export default router;
