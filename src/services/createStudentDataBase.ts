import { connection } from "../data/connection";

export const createStudentDataBase = async(id:string, name:string, email:string, birthDate:String, classId:string, hobbies:string[]):Promise<void> => {
    await connection("students")
        .insert({
            id:id,
            name:name,
            email:email,
            birthDate:birthDate,
            classId:classId,
            hobbies:hobbies
        })
        .into("students")
}