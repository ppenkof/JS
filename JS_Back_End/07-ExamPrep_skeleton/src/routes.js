import { Router } from "express";
import homeController  from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";

const router = Router();

router.use(homeController);

//todo add routes here


router.use(errorController);

export default router;