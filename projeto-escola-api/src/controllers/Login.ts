import { Controller as AbstractController } from "./AbstractController"
import { Login as LoginService } from "../services/Login"
import { Response } from "../services/response/Response"
import { Request, Response as ExpressResponse } from "express"

export class LoginController extends AbstractController{
    
    constructor(req: Request, res: ExpressResponse, serviceDescription: string){
        super(req, res)
    }
    student(){
        this.response.service = 'Students Login'
        const login = new LoginService(this.requestBody.email, this.requestBody.password)
        if (login.emailExists === false) {
            this.response.data = "Email doesn't exists"
            this.res.status(400).json(this.response)
        }
    }
}