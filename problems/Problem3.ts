// Problem 3
import { Professor, Class, Student } from "../types";

// Function that returns the names of all students a professor teaches in increasing order by age
export function studentsTaughtByProf(professor: Professor): string[] {
    const allStudents = professor.classes.flatMap((c) => c.students) 

    const unique = new Map<string, Student>() 
    for (const student of allStudents) {
        unique.set(student.name, student) 
    }

    const sorted = [...unique.values()].sort((a, b) => a.age - b.age) 

    return sorted.map((s) => s.name)
}

export default studentsTaughtByProf