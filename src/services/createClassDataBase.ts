import { classType } from "../class";
import { connection } from "../data/connection";

export const createClassDataBase = async(id:string, name:string, modul:number):Promise<classType> => {
    
    const result:classType = await connection("class")
        .insert({
            id:id,
            name:name,
            modul:modul
        })
        .into("class")

    return result
}