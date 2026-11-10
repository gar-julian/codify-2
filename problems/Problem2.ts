//Problem 2
import { Student } from "../types";

// Function that returns an array of students given names and ages
export function arrayOfStudents(names: string[], ages: number[]): Student[] {
    return names.map((name, i) => ({name, age: ages[i]})) 
}

export default arrayOfStudents

// Example
// arrayOfStudents(names, ages));
// Expected output:
// [
//     { name: "Joe", age: 50 },
//     { name: "Schmo", age: 60 }
// ]