-- CreateTable
CREATE TABLE "Generate" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "techStack" TEXT NOT NULL,
    "num_of_questions" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Generate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Generate" ADD CONSTRAINT "Generate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
