import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { prismaClient } from "@/app/lib/db";
import bcrypt from "bcryptjs";

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    const parsedData = signinSchema.safeParse(body);

    if(!parsedData.success) {
        return NextResponse.json({
            error: parsedData.error.flatten().fieldErrors,
        }, {
            status: 422,
        });
    }

    const userExist = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.email,
        }
    });

    if(!userExist) {
        return NextResponse.json({
            message: "Invalid Email.",
        }, {
            status: 401,
        });
    }

    const passwordMatched = await bcrypt.compare(parsedData.data.password, userExist.password);

    if(!passwordMatched) {
        return NextResponse.json({
            message: "Wrong password."
        }, {
            status: 401,
        });
    }

    const token = jwt.sign({
        userId: userExist.id,
        firstName: userExist.firstName,
    }, process.env.JWT_SECRET!);

    const res = NextResponse.json({
        success: true
    }, {
        status: 200,
    });

    res.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        path: '/',
    });

    return res;
}