import { Request, Response } from "express"
import { Students, Teachers } from "../class"
import { createTeacherDataBase } from "../services/createTeacherDataBase"

export const createTeacher = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const {name, email, birthDate, classId, skills} = req.body
        const id = Date.now().toString()
        const newTeacher = new Teachers(id, req.body.name, req.body.email, req.body.birthDate, req.body.classId, req.body.skills)

        await createTeacherDataBase(newTeacher.getId(), newTeacher.getName(), newTeacher.getEmail(), newTeacher.getBirthDate(), newTeacher.getClassId(), newTeacher.getSkills())

        res.status(201).send("The teacher was created sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}