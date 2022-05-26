export class Response {
    api: "REST API - Projeto Escola"
    service: string
    data: any
    constructor(service: string, data?: any) {
        this.service = service
        this.data = data
    }
}