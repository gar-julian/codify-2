// Problem 4
import { Student, Athlete } from "../types";

// Function that converts all students into athletes with a default sport
export function allAthletes(students: (Student | Athlete)[], defaultSport: string): Athlete[] {
    const output: Athlete[] = [] 

    for (let person of students) {
        if ("sport" in person) { 
            output.push(person)
        } else {
            let sport_person = {...person, "sport": defaultSport}
            output.push(sport_person)
        }
    }

    return output
}

export default allAthletes;