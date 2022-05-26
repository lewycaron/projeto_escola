export class DisciplineREsource {

    public id: number
    public disciplineId: number
    public teacherId: number
    public file: File

    constructor(id: number, disciplineId: number, teacherId: number, file: File) {
        this.id = id,
        this.disciplineId = disciplineId
        this.teacherId = teacherId,
        this.file = file
    }
}