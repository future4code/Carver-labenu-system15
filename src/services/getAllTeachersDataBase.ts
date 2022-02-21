import { teachersType } from "../class";
import { connection } from "../data/connection";

export const getAllTeachersDataBase = async():Promise<teachersType[]> => {
    const result:teachersType[] = await connection("teachers")
        .select()
        .from("teachers")
        
    return result
}