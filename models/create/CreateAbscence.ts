export class Abscence {

    public id: number
    public studentId: number 
    public date: number 

    constructor(id:number, studentId: number) {
        this.id = id
        this.studentId = studentId
        this.date = this.getCurrentDate()
    }

    private getCurrentDate(): number {
        return Date.now()
    }

}