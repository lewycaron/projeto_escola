export class Login {
    
    public id: number
    public email: string
    public password: string

    constructor(id:number, name: string, email: string, password: string) {
        this.id = id,
        this.email = email,
        this.password = password
    }

}