import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  getCreatorProfile,
  getFilteredPosts,
  getPostsBySearch,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/search", getPostsBySearch);
router.get("/:category", getFilteredPosts);
router.put("/edit-post", editPost);
router.delete("/delete-post/:postId", deletePost);
router.get("/creator/:creator", getCreatorProfile);
export default router;
