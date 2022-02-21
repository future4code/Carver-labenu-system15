import { Request, Response } from "express"
import { Class } from "../class"
import { getClassByIdDataBase } from "../services/getClassByIdDataBase"
import { updateClassModulDataBase } from "../services/updateClassModulDataBase"

export const updateClassModul = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const id = req.params.id as string
        const modul = Number(req.body.modul)
        const newClass = await getClassByIdDataBase(id)
        const updatedClass = new Class(newClass.id, newClass.name, newClass.modul)
        const result = await updateClassModulDataBase(updatedClass.getId(), updatedClass.setModul(modul))
        
        res.status(200).send("The Modul was updated sucessfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}