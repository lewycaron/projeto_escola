import { Router } from "express";
import { LoginController } from "./controllers/LoginController";
const router = Router()
router.post("/login/student", function(req, res){ new LoginController(req, res).student() })
router.post("/login/teacher")
router.post("/login/parent")
router.post("/login/administrator")
export { router }