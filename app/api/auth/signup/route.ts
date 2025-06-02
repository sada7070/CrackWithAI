import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { prismaClient } from "@/app/lib/db";
import dotenv from 'dotenv';
dotenv.config();

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(20),
    firstName: z.string().max(25),
    lastName: z.string().max(25)
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    const parsedData = signupSchema.safeParse(body);

    if(!parsedData.success) {
        return NextResponse.json({
            error: parsedData.error.flatten().fieldErrors,              // returns the exact error
        }, {
            status: 422,
        });
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 5);

    try{
        await prismaClient.user.create({
            data: {
                email: parsedData.data.email,
                password: hashedPassword,
                firstName: parsedData.data.firstName,
                lastName: parsedData.data.lastName
            }
        });

        return NextResponse.json({
            message: "Signup succussful.",
        }, {
            status: 200
        });
    } catch {
        return NextResponse.json({
            message: "Email already exist."
        }, {
            status: 409
        });
    }
}