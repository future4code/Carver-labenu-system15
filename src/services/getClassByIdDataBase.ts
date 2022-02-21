import { classType } from "../class";
import { connection } from "../data/connection";

export const getClassByIdDataBase = async(id:string):Promise<classType> => {
    const result:classType[] = await connection("class")
        .select()
        .where("id", id)

    return result[0]
}