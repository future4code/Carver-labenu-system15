import { SKILLS } from "../class";
import { connection } from "../data/connection";

export const createTeacherDataBase = async(id:string, name:string, email:string, birthDate:String, classId:string, skills:SKILLS):Promise<void> => {
    await connection("teachers")
        .insert({
            id:id,
            name:name,
            email:email,
            birthDate:birthDate,
            classId:classId,
            skills:skills
        })
        .into("teachers")
}