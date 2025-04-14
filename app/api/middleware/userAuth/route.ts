import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequestData {
    userId?: string;
  }

export async function userMiddleware(req: NextRequest): Promise<AuthenticatedRequestData> {
    const token = req.headers.get("authorization");

    if (!token) {
        throw new Response(JSON.stringify({ 
            message: "Unauthorized. No token."
        }), { 
            status: 403
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        return { userId: decoded.userId };
    } catch (error) {
        throw new Response(JSON.stringify({
            message: "Unauthorized. Invalid token."
        }), {
            status: 403
        });
    }
}