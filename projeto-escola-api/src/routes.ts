import { Router } from "express";
import { LoginController } from "./controllers/Login";
const router = Router()
router.get("/test", function(req, res){ res.status(200).json({
    'message' : 'Working, tested!'
}) })
router.post("/login/student", function(req, res){ new LoginController(req, res, 'Students Login').student() })
router.post("/login/teacher")
router.post("/login/parent")
router.post("/login/administrator")
export { router }