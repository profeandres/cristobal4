import { Router } from "express";
import {
  createNoticia,
  getNoticia,
  getNoticias,
  removeNoticia,
  updateNoticia,
} from "../controllers/noticias.controller.js";

const router = Router();

router.get("/noticias", getNoticias);
router.get("/noticias/:id", getNoticia);
router.post("/noticias", createNoticia);
router.put("/noticias/:id", updateNoticia);
router.delete("/noticias/:id", removeNoticia);

export default router;
