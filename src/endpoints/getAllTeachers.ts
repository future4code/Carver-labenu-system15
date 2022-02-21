import { Request, Response } from "express"
import { getAllTeachersDataBase } from "../services/getAllTeachersDataBase"


export const getAllTeachers = async(req:Request, res:Response):Promise<void> => {
    let errorCode = 404

    try {

        const result = await getAllTeachersDataBase()

        res.status(200).send(result)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}