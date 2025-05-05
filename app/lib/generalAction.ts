import { prismaClient } from "./db";

interface Interview {
    id: string;
    role: string;
    level: string;
    questions: string[];
    techstack: string[];
    createdAt: string;
    userId: string;
    type: string;
}

// to get all the interviews by userId
export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
    const interviews = await prismaClient.generate.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return interviews as unknown as Interview[] | null;
}

/*---------------------------------------------------------------------------------------------------------------------------- */

// to get a specific interview by its id
export async function getInterviewById(id: string): Promise<Interview |null> {
    const interview = await prismaClient.generate.findUnique({
      where: {
        id
      }
    });

    return interview as unknown as Interview | null;
}

/*---------------------------------------------------------------------------------------------------------------------------- */

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export async function getUserFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value

  if (!token) return null

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string, firstName: string }
  } catch (err) {
    return null
  }
}