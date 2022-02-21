import { teachersType } from "../class";
import { connection } from "../data/connection";

export const getTeacherByIdDataBase = async(id:string):Promise<teachersType> => {
    const result:teachersType[] = await connection("teachers")
        .select()
        .where("id", id)

    return result[0]
}