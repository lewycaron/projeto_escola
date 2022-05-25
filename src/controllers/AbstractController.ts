import { Request, Response } from "express"
export abstract class Controller {
    req: Request
    res: Response
    constructor(req: any, res: any) {
        this.req = req
        this.res = res
    }
}