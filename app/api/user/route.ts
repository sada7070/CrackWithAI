// route to get user info

import { NextRequest, NextResponse } from "next/server";
import { userMiddleware } from "../middleware/route";
import { prismaClient } from "@/app/lib/db";

export async function GET(req: NextRequest) {
    const { userId } = await userMiddleware(req);

    if(!userId) {
        return NextResponse.json({
            message: "Unauthorized"
        }, {
            status: 401,
        });
    }

    const response = await prismaClient.user.findUnique({
        where: {
            id: userId
        }
    });

    if(!response) {
        return NextResponse.json({
            message: "User not found"
        }, {
            status: 404,
        });
    }

    
    return NextResponse.json({
        message: "User found",
        firstName: response.firstName,
        userId
    }, {
        status: 200,
    });
}