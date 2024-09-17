import { Router } from "express";
import { createDegree } from "../controllers/degress.controller.js";
const router=Router()
router.post("/",createDegree);
export default router