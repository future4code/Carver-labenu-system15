import { connection } from "../data/connection";

export const updateTeacherClassDataBase = async(id:string, classId:string):Promise<any> => {
    const result = await connection("teachers")
        .where("id", id)
        .update({classId:classId})
        
    return result
}