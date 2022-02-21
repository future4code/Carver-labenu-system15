import { Request, Response } from "express"
import { Teachers } from "../class"
import { getTeacherByIdDataBase } from "../services/getTeacherByIdDataBase"
import { updateTeacherClassDataBase } from "../services/updateTeacherClassDataBase"


export const updateTeacherClass = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const id = req.params.id as string
        const classId = req.body.classId as string
        const newTeacher = await getTeacherByIdDataBase(id)
        const updatedTeacher = new Teachers(newTeacher.id, newTeacher.name, newTeacher.email, newTeacher.birthDate, newTeacher.classId, newTeacher.skills)
        const result = await updateTeacherClassDataBase(updatedTeacher.getId(), updatedTeacher.setClassId(classId))
        
        res.status(200).send("The class was updated sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}