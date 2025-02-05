# Task Management Application

A simple Task Management application using Next.js with Server Actions. Users are able to create, view, edit, and delete tasks.

## Links
- Github - https://github.com/Vedant-T/Track-It
- Vercel - 

## Features

- Task operations (create, read, update, delete)
- Mark tasks as complete/incomplete
- Basic task details (title, description, due date)
- Data persistence using MongoDB
- Error handling and loading states

## Technical Requirements

- **Frontend:** Next.js
- **Backend:** Next.js Server Actions
- **Database:** MongoDB
- **Deployment:** Vercel
- **Languages & Tools:** TypeScript, Tailwind CSS

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vedant-T/Track-It.git
   cd track_it
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up environment variables:**
   Create a .env.local file in the root directory and add the following:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Publishable>
   CLERK_SECRET_KEY=<Secret Key>

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

   MONGODB_URI=<MongoDB URI>
4. **Run the development server:**
   ```bash
   npm run dev
Open http://localhost:3000 with your browser to see the result.