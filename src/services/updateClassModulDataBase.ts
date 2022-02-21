import { connection } from "../data/connection";

export const updateClassModulDataBase = async(id:string, modul:number):Promise<any> => {
    const result = await connection("class")
        .where("id", id)
        .update({modul: modul})
        
    return result
}