export class Event {

    public id: number
    public studentId: number
    public disciplineId?: number
    public date: number
    public description: string

    constructor(id: number, studentId: number, date: number, description: string) {
        this.id = id
        this.studentId = studentId
        this.date = date
        this.description = description
    }

}