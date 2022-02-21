import { classType } from "../class";
import { connection } from "../data/connection";

export const getActiveClassesByModulDataBase = async():Promise<classType[]> => {
    const result:classType[] = await connection("class")
        .select()
        .where("modul", "<>", 0)
        
    return result
}