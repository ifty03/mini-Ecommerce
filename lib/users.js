import fs from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'

const usersFile = path.join(process.cwd(), 'data', 'users.json')

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
}

// Initialize users file if it doesn't exist
if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([], null, 2))
}

function getUsers() {
    try {
        const data = fs.readFileSync(usersFile, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

function saveUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2))
}

export async function createUser(email, password, name) {
    const users = getUsers()

    // Check if user already exists
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
        throw new Error('User already exists')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        email,
        name,
        password: hashedPassword,
        createdAt: new Date().toISOString()
    }

    users.push(newUser)
    saveUsers(users)

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser
    return userWithoutPassword
}

export async function validateUser(email, password) {
    const users = getUsers()
    const user = users.find(user => user.email === email)

    if (!user) {
        return null
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return null
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
}

export function getUserByEmail(email) {
    const users = getUsers()
    const user = users.find(user => user.email === email)
    if (user) {
        const { password: _, ...userWithoutPassword } = user
        return userWithoutPassword
    }
    return null
}