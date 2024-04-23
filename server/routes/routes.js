import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);

export default router;
