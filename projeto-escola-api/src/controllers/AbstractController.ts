import { Request as ExpressRequest, Response as ExpressResponse} from "express"
import { Login } from "../services/validation/Login"
import { Response } from "../services/response/Response"
export abstract class Controller {
    response: Response = new Response()
    req: ExpressRequest
    requestBody: Login
    res: ExpressResponse
    constructor(req: ExpressRequest, res: ExpressResponse) {
        this.req = req
        this.requestBody = req.body
        this.res = res
    }
    protected setResponse(service: string, data: any){
        this.response.service = service
        this.response.data = data
    }

}