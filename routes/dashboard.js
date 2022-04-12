import express from "express";
import { getFunction } from "../controllers/movieget.js";
import { postFunction } from "../controllers/moviePost.js";
import { updateMovie } from "../controllers/moivePut.js";
import { deleteMovie } from "../controllers/movieDelete.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";


const router = express.Router();
router.use(helmet());
router.use(cookieParser());


router.get("/", getFunction); //Read Operation Routes

router.post("/", postFunction); //Create Operation Routes

router.put("/edit/:id", updateMovie); //Update Operation Routes

router.delete("/delete/:id", deleteMovie); //Delet Operation Routes.

export const DashRouter = router;
