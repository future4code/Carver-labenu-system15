class Users{
    private id:string
    private name:string
    private email:string
    private birthDate:string
    private classId:string

    constructor(id:string, name:string, email:string, birthDate:string, classId:string){
        this.id = id
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.classId = classId
    }

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getBirthDate(){
        return this.birthDate
    }

    public getClassId(){
        return this.classId
    }

    public setClassId(classId:string):string{
        return this.classId = classId
    }
}

export class Students extends Users{
 
    private hobbies:string[]

    constructor(id:string, name:string, email:string, birthDate:string, classId:string, hobbies:string[]){
        super(id, name, email, birthDate, classId)
        this.hobbies = hobbies
    }

    public getHobbies(){
        return this.hobbies
    }
}

export class Teachers extends Users{
    
    private skills:SKILLS

    constructor(id:string, name:string, email:string, birthDate:string, classId:string, skills:SKILLS){
        super(id, name, email, birthDate, classId)
        this.skills = skills
    }

    public getSkills(){
        return this.skills
    }
}

export enum SKILLS{
    JS,
    CSS,
    REACT,
    TYPESCRIPT,
    POO
}

export class Class{
    private id:string
    private name:string
    private modul:number

    constructor(id:string, name:string, modul:number){
        this.id = id
        this.name = name
        this.modul = modul
    }

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getModul(){
        return this.modul
    }

    public setModul(modul:number):number{
        return this.modul = modul
    }
}

export type classType = {
    id:string,
    name:string,
    modul:number
}

export type teachersType = {
    id:string,
    name:string,
    email:string,
    birthDate:string,
    classId:string,
    skills:SKILLS
}

export type studentsType = {
    id:string,
    name:string,
    email:string,
    birthDate:string,
    classId:string,
    hobbies:string[]
}