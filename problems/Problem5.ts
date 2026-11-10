// Problem 5

// Function that counts occurrences of a specific item in an array using generics

function countOccurrences<T>(arr: T[], item: T): number {
    let total: number = 0
    for (const index of arr) {
        if (index === item) {
            total += 1 
        }
    }

    return total
}

export default countOccurrences

