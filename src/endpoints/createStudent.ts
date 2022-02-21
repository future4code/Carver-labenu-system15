import { Request, Response } from "express"
import { Students } from "../class"
import { createStudentDataBase } from "../services/createStudentDataBase"

export const createStudent = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const {name, email, birthDate, classId, hobbies} = req.body
        const id = Date.now().toString()
        const newStudent = new Students(id, req.body.name, req.body.email, req.body.birthDate, req.body.classId, req.body.hobbies)

        await createStudentDataBase(newStudent.getId(), newStudent.getName(), newStudent.getEmail(), newStudent.getBirthDate(), newStudent.getClassId(), newStudent.getHobbies())

        res.status(201).send("The student was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}
