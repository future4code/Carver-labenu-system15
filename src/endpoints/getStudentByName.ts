import { Request, Response } from "express"
import { getStudentByNameDataBase } from "../services/getStudentsByNameDataBase"

export const getStudenteByName = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {
        const name = req.query.name as string

        const result = await getStudentByNameDataBase(name)

        res.status(200).send(result)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}