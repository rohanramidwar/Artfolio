import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  getProfile,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.get("/profile/:id", getProfile);

export default router;
