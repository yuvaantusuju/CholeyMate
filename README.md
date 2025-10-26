<<<<<<< HEAD
# CholeyMate — Spotify Clone

A demo Spotify-like web app built with Next.js, Tailwind, Prisma, NextAuth, Zustand, and react-player. Uses YouTube search for music playback via a secure server-side proxy.

## Quick start

1. Clone repo and `cd` into it.
2. Copy `.env.example` to `.env.local` and set your values.
3. Install dependencies: `npm install`.
4. Initialize Prisma DB and seed demo user:
   - `npx prisma migrate dev --name init`
   - `npm run prisma:seed`
5. Run dev server: `npm run dev`.
6. Open `http://localhost:3000`.

### Demo user
- username: `choley_gang`
- password: `welovebubu`

## Deploy to Vercel
1. Push repository to GitHub.
2. Import into Vercel.
3. Add environment variables on Vercel (YOUTUBE_API_KEY, DATABASE_URL, NEXTAUTH_SECRET).
4. Deploy.

## Notes
- This scaffold focuses on core features and is intended as a starting point.
- For production, secure environment variables, implement robust error handling, and follow best practices for database migrations and secrets management.
=======
# CholeyMate
>>>>>>> c77150425b4b24d1ed98edd04d7e5a2b001f683f
