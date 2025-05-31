<div align='center'>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </div>

  <h2 align="center">CrackWithAI: A job interview preparation platform powered by Vapi AI Voice agents</h2>

  <h4 align="justify">
    No more awkward mirror rehearsals or begging friends to play pretend recruiter. Just talk to our smart AI like you’re on a real call, and get helpful feedback immediately. It’s interview prep made easy, chill, and actually kind of fun.
  </h4>

  <h2 align="start">Tech Stack</h2>
  <p align="start">• Next.js </p> 
  <p align="start">• PostgreSQL</p>
  <p align="start">• Tailwind CSS</p>
  <p align="start">• Typescript</p>
  <p align="start">• Vapi AI</p>
  <p align="start">• Shadcn/ui</p>
  <p align="start">• Google Gemini</p>
  <p align="start">• Zod</p>
</div>

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/sada7070/CrackWithAI.git
cd CrackWithAI
```

**Installation**

Install the project dependencies using pnpm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
DATABASE_URL=

JWT_SECRET=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
```

Replace the placeholder values with your actual **[PostgreSQL](https://www.postgresql.org/)**, **[Vapi](https://vapi.ai/?utm_source=youtube&utm_medium=video&utm_campaign=jsmastery_recruitingpractice&utm_content=paid_partner&utm_term=recruitingpractice)** credentials.

**Running the Project**

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

