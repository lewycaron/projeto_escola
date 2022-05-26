import { Controller } from "./AbstractController"
import { Login } from "../services/Login"
import { Request, Response } from "express"
export class LoginController extends Controller{
    
    constructor(req: Request, res: Response){
        super(req, res)
    }
    student(){
        const login = new Login(this.req.body.email, this.req.body.password)
        if (login.emailExists === false) {
            this.res.status(400).json(login.response)
        }
    }
}