import { Router } from "express";
import { getMessage, postMessage} from "../controllers";


const router = Router();

router.get("/:queue_name", getMessage);

router.post("/:queue_name", postMessage);

export default router;
