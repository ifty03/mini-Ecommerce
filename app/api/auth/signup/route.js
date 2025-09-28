import { NextResponse } from 'next/server'
import { createUser } from '@/lib/users'

export async function POST(request) {
    try {
        const { name, email, password } = await request.json()

        // Validation
        if (!name || !email || !password) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
        }

        if (password.length < 6) {
            return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 })
        }

        if (!email.includes('@')) {
            return NextResponse.json({ message: 'Invalid email format' }, { status: 400 })
        }

        const user = await createUser(email, password, name)
        return NextResponse.json({ message: 'User created successfully', user }, { status: 201 })
    } catch (error) {
        if (error.message === 'User already exists') {
            return NextResponse.json({ message: 'User already exists with this email' }, { status: 400 })
        }

        console.error('Signup error:', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}