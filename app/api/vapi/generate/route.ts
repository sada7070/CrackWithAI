import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { google } from "@ai-sdk/google";
import { userMiddleware } from "../../middleware/userAuth/route";
import { prismaClient } from "@/app/lib/db";

const generateSchema = z.object({
    type: z.string(),
    role: z.string(),
    level: z.string(),
    techStack: z.string(),
    num_of_questions: z.string(),
}) 

export async function POST(req: NextRequest) {
    const body = await req.json();

    const parsedData = generateSchema.safeParse(body);

    if(!parsedData.success) {
        return NextResponse.json({
            error : parsedData.error.flatten().fieldErrors,
        }, {
            status: 422,
        });
    }

    const { userId } = await userMiddleware(req);

    if(!userId){
        return NextResponse.json({
            message: "Invalid token."
        }, {
            status: 500,
        });
    }

    // asking gemini to generate interview questions based on the given data.
    try{
        // generateText() returns an object with a property called text, and we're destructuring that property and renaming it to questions.
        const { text: questions } = await generateText({
            model: google('gemini-2.0-flash-001'),
            prompt: `Prepare questions for a job interview.
                    The job role is ${parsedData.data.role}.
                    The job experience level is ${parsedData.data.level}.
                    The tech stack used in the job is: ${parsedData.data.techStack}.
                    The focus between behavioural and technical questions should lean towards: ${parsedData.data.type}.
                    The amount of questions required is: ${parsedData.data.num_of_questions}.
                    Please return only the questions, without any additional text.
                    The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
                    Return the questions formatted like this:
                    ["Question 1", "Question 2", "Question 3"]
                    
                    Thank you!
                `,
        });
        
        // adding everything to db so it csn be used later to take interview.
        const aiResponse = await prismaClient.generate.create({
            data: {
                type: parsedData.data.type,
                role: parsedData.data.role,
                level: parsedData.data.level,
                techStack: parsedData.data.techStack,
                num_of_questions: parsedData.data.num_of_questions,
                questions: JSON.parse(questions),
                userId
            }
        });

        return NextResponse.json({
            aiResponse
        });

    } catch(error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}