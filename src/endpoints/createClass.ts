import { Request, Response } from "express"
import { Class, classType } from "../class"
import { createClassDataBase } from "../services/createClassDataBase"

export const createClass = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const {name, modul} = req.body
        const id = Date.now().toString()
        const newClass = new Class(id, req.body.name, req.body.modul)

        const result = await createClassDataBase(newClass.getId(), newClass.getName(), newClass.getModul())

        res.status(201).send(result)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}
