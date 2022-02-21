import { app } from "./app";
import { createClass } from "./endpoints/createClass"
import { createStudent } from "./endpoints/createStudent"
import { createTeacher } from "./endpoints/createTeacher";
import { getActiveClassesByModul } from "./endpoints/getActiveClasses";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import { getStudenteByName } from "./endpoints/getStudentByName";
import { updateClassModul } from "./endpoints/updateClassModul";
import { updateStudentClass } from "./endpoints/updateStudentClass";
import { updateTeacherClass } from "./endpoints/updateTeacherClass";


app.post("/class", createClass)
app.get("/class", getActiveClassesByModul)
app.put("/class/:id", updateClassModul)
app.post("/student", createStudent)
app.get("/student", getStudenteByName)
app.put("/student/:id", updateStudentClass)
app.post("/teacher", createTeacher)
app.get("/teacher", getAllTeachers)
app.put("/teacher/:id", updateTeacherClass)