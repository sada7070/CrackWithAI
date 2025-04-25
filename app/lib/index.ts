interface Interviews {
    id: string;
    userId: string;
    role: string;
    type: string;
    techstack: string[];
    level: string;
    questions: string[];
    createdAt: string;
}
export const dummyInterviews: Interviews[] = [
    {
        id: "1",
        userId: "user1",
        role: "Frontend developer",
        type: "technical",
        techstack: ["react", "nextjs", "typescript", "tailwindCSS"],
        level: "fresher",
        questions: ["what is react"],
        createdAt: "2025-04-25T10:00:00Z",    
    },  {
        id: "2",
        userId: "user2",
        role: "fullstack developer",
        type: "technical",
        techstack: ["nodejs", "nextjs", "typescript", "tailwindCSS"],
        level: "senior",
        questions: ["what is nodejs"],
        createdAt: "2025-03-21T10:30:20Z",    
    }
]