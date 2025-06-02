"use server";

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

/*-------------------------------------------------------------------------------------------------------------------------------- */

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { feedbackSchema } from "@/constants";

interface CreateFeedbackParams {
  interviewId: string;
  userId: string;
  transcript: { role: string; content: string }[];
  feedbackId?: string;
}

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript } = params;

  // if the user retake the interview, we clear the previous feedback generated and update it with the new one.   
  try{
    // first clearing the cateforyScore table to avoid foreign key constraint voilated error.
    await prismaClient.categoryScore.deleteMany({
      where: {
        feedback: {
          interviewId
        }
      }
    });
    
    await prismaClient.feedback.deleteMany({
      where: {
        interviewId
      }
    });
  } catch(e) {
    console.error("Error: ", e);
  }
  

  try{
    const formattedTranscript = transcript.map((sentence: { role: string, content: string}) => (
      `- ${sentence.role}: ${sentence.content}\n`
    )).join('');

    const { object: { totalScore, categoryScores, strengths, areasForImprovement, finalAssessment }} = await generateObject({
      model: google('gemini-2.0-flash-001', {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. 
        Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
      `,
      system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
    });
    
    const feedback = await prismaClient.feedback.create({
      data: {
        interviewId,
        userId,
        totalScore,
        strengths,
        areasForImprovement,
        finalAssessment,
        categoryScores: {
          create: categoryScores,        //Without 'create', Prisma thinks you are passing an array of CategoryScore models directly
        },
      }
    });

    return {
      success: true,
      feedbackId: feedback.id
    }

  }catch(err) {
    console.error("Error saving feedback", err);
    return {
      success: false
    }
  }
}

/*------------------------------------------------------------------------------------------------------------------------------ */

import { Feedback } from "@/components/interviewCard";

interface GetFeedback {
  interviewId: string;
  userId: string;
}
export async function getFeedback(params: GetFeedback): Promise<Feedback | null> {
  const { interviewId, userId } = params;

  const res = await prismaClient.feedback.findFirst({
    where: {
      interviewId,
      userId
    },
    include: {
      categoryScores: true
    }
  });

  if(!res) {
    return null;
  }

  return res;
}