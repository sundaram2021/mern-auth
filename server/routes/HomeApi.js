import { Router } from "express";
import { HomeGet } from '../controllers/HomeApiController.js'
const router = Router();

router.get('/user', HomeGet)
// router.post('/user', HomePost)