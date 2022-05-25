import { Login as LoginModel } from "../models/Login"
import * as fs from "fs"
import { ProjetoEscola } from "../database/ProjetoEscola"
export class Login {

    email: string
    password: string
    database: ProjetoEscola
    loginModel: LoginModel
    
    constructor(email: string, password: string){
        this.email = email
        this.password = password
        this.database = this.loadDatabase()
    }
    loadDatabase(): any {
        return new ProjetoEscola
    }
    fetchByEmail(){
        this.database.login.email
    }
    setLoginModel(model: LoginModel){
        this.loginModel = model
    }
    verifyPassword(){
        if (this.loginModel.password == this.password) {
            return 'Correct Password'
        } else {
            return 'Wrong Password'
        }
    }
}