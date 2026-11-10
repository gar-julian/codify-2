// Problem 6
import { User } from "../types";

// Function that verifies if a user has all required attributes
export function verifyUser(user: User | null | undefined): User | string[] {
    if (user == null) { 
        return ["id", "name", "address", "street", "city", "userData"]; 
    }

    const attributes: Record<string, unknown> = { 
        id: user.id, 
        name: user.name, 
        address: user.address,
        street: user.address?.street, 
        city: user.address?.city
    }

    const missing = Object.keys(attributes).filter((key) => attributes[key] == null) 

    return missing.length === 0 ? user : missing 
}

export default verifyUser