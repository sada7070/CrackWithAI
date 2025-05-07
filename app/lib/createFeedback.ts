"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { feedbackSchema } from "@/constants";
import { prismaClient } from './db';

interface CreateFeedbackParams {
  interviewId: string;
  userId: string;
  transcript: { role: string; content: string }[];
  feedbackId?: string;
}

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript } = params;

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
          create: categoryScores,        //Without create, Prisma thinks you are passing an array of CategoryScore models directly
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