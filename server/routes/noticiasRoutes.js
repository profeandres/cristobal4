import { Router } from "express";
import {
  createNoticia,
  getNoticia,
  getNoticias,
  removeNoticia,
  updateNoticia,
} from "../controllers/noticias.controller.js";

const router = Router();

router.get("/", getNoticias);
router.get("/:id", getNoticia);
router.post("/", createNoticia);
router.put("/:id", updateNoticia);
router.delete("/:id", removeNoticia);

export default router;
