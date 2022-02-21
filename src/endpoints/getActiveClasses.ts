import { Request, Response } from "express"
import { getActiveClassesByModulDataBase } from "../services/getActiveClasesByModulDataBase"


export const getActiveClassesByModul = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {

        const result = await getActiveClassesByModulDataBase()
        res.status(200).send(result)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}