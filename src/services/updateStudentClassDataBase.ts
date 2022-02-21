import { connection } from "../data/connection";

export const updateStudentClassDataBase = async(id:string, classId:string):Promise<any> => {
    const result = await connection("class")
        .where("id", id)
        .update({classId:classId})
        
    return result
}