import { Request, Response } from "express"
import { Students } from "../class"
import { getStudentByIdDataBase } from "../services/getStudentByIdDataBase"
import { updateStudentClassDataBase } from "../services/updateStudentClassDataBase"


export const updateStudentClass = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const id = req.params.id as string
        const classId = req.body.classId as string
        const newStudent = await getStudentByIdDataBase(id)
        const updatedStudent = new Students(newStudent.id, newStudent.name, newStudent.email, newStudent.birthDate, newStudent.classId, newStudent.hobbies)
        const result = await updateStudentClassDataBase(updatedStudent.getId(), updatedStudent.setClassId(classId))
        
        res.status(200).send("The class was updated sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}