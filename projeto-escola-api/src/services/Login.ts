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
    correctPassword: boolean

    constructor(email: string, password: string){
        this.email = email
        this.password = password
        this.setDatabase()
        this.setEmailExists()
    }
    setDatabase(): any {
        this.database = new ProjetoEscola()
    }
    setEmailExists() {
        this.emailExists = this.database.login.find(i => i.email === this.email) ? true : false
    }
    setLoginModel() {
        const model = this.database.login.find(i => i.email === this.email)
        this.loginModel = new LoginModel(model!.id, model!.email, model!.password)
    }
    setCorrectPassword() {
        this.correctPassword = this.loginModel.password == this.password ? true : false
    }
}