import { SKILLS, studentsType } from "../class";
import { connection } from "../data/connection";

export const getStudentByNameDataBase = async(name:string):Promise<studentsType[]> => {
    const result:studentsType[] = await connection("students")
        .select()
        .where("name", name)

    return result
}