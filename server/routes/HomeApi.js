import { Router } from "express";
import { HomeGet } from '../controllers/HomeApiController.js'
const router2 = Router();

router2.get('/', HomeGet)

export default router2;