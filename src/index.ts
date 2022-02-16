import { app } from "./app";
import { createClass } from "./endpoints/createClass"
import { getActiveClasses } from "./endpoints/getActiveClasses"
import { updateClassModul } from "./endpoints/updateClassModul"
import { createStundent } from "./endpoints/createStudent"
import { getStudentByName } from "./endpoints/getStudentByName"
import { updateStudentclass } from "./endpoints/updateStudentClass"
import { createTeacher } from "./endpoints/createTeacher"
import { getAllteachers } from "./endpoints/getAllTeachers"
import { updateTeacherClass } from "./endpoints/updateTeacherClass"

app.post("/class", createClass)
app.get("/class", getActiveClasses)
app.put("/clas/:id", updateClassModul)
app.post("/student", createStudent)
app.get("/student", getStudentByName)
app.put("/student", updateStudentClass)
app.post("/teacher", createTeacher)
app.get("/teacher", getAllTeachers)
app.put("/class", updateTeacherClass)