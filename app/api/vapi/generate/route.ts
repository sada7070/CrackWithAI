import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { userMiddleware } from "../../middleware/userAuth/route";
import { prismaClient } from "@/app/lib/db";

export function GET() {
    return Response.json({
        message: "succuss"
    },{
        status:200,
    });
}

export async function POST(request: Request) {
    const req = request as NextRequest;

    const { type, role, level, techstack, num_of_questions } = await request.json();
    // const { userId } = await userMiddleware(req);
    // console.log("userid is:", userId);

    // if(!userId) {
    //     return NextResponse.json({
    //         message: "Unauthorized"
    //     }, {
    //         status: 401,
    //     });
    // }

    // asking gemini to generate interview questions based on the given data.
    try{
        // generateText() returns an object with a property called text, and we're destructuring that property and renaming it to questions.
        const { text: questions } = await generateText({
            model: google('gemini-2.0-flash-001'),
            prompt: `Prepare questions for a job interview.
                    The job role is: ${role}.
                    The job experience level is: ${level}.
                    The tech stack used in the job is: ${techstack}.
                    The focus between behavioural and technical questions should lean towards: ${type}.
                    The amount of questions required is: ${num_of_questions}.
                    Please return only the questions, without any additional text.
                    The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
                    Return the questions formatted like this:
                    ["Question 1", "Question 2", "Question 3"]
                    
                    Thank you!
                `,
        });
        
        // adding everything to db so it csn be used later to take interview.
        await prismaClient.generate.create({
            data: {
                type: type,
                role: role,
                level: level,
                techStack: techstack,
                num_of_questions: num_of_questions,
                questions: JSON.parse(questions),
                userId: "ad3e8bc1-8251-4558-95de-d3ea4e6c950e",
            }
        });

        return NextResponse.json({
            message: "success", 
        });

    } catch(error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        });
    }
}