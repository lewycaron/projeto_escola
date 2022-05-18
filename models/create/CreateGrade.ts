export class Grade {

    public id: number
    public studentId: number
    public disciplineId: number
    public grade: number

    constructor(id:number, studentId: number, disciplineId: number, grade: number) {
        this.id = id,
        this.studentId = studentId
        this.disciplineId = disciplineId
        this.grade = grade
    }

}