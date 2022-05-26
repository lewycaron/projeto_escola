import { Login as LoginModel } from "../models/Login"
import * as fs from "fs"
import { ProjetoEscola } from "../database/ProjetoEscola"
import { Response } from "./response/Response"
export class Login {

    email: string
    password: string
    database: ProjetoEscola
    loginModel: LoginModel
    emailExists: boolean
    response: Response

    constructor(email: string, password: string){
        this.email = email
        this.password = password
        this.database = this.loadDatabase()
        this.emailExists = this.verifyEmail()
        this.response = new Response('Login')
    }
    loadDatabase(): any {
        return new ProjetoEscola
    }
    verifyEmail() {
        if (this.database.login.find(i => i.email === this.email)) {
            this.response.data = "Email wasn't found"
            return true
        } else {
            return false
        }
    }
    fetchByEmail() {
        if (this.database.login.find(i => i.email === this.email)) {
            return 
        }
    }
    setLoginModel(model: LoginModel) {
        this.loginModel = model
    }
    verifyPassword() {
        if (this.loginModel.password == this.password) {
            return 'Correct Password.'
        } else {
            return 'Wrong Password.'
        }
    }
}