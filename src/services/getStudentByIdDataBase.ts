import { studentsType } from "../class";
import { connection } from "../data/connection";

export const getStudentByIdDataBase = async(id:string):Promise<studentsType> => {
    const result:studentsType[] = await connection("students")
        .select()
        .where("id", id)

    return result[0]
}