import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../../lib/prisma'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: { username: { label: 'Username' }, password: { label: 'Password', type: 'password' } },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) throw new Error('Missing')
        const user = await prisma.user.findUnique({ where: { username: credentials.username } })
        if (!user) throw new Error('User not found')
        const ok = await bcrypt.compare(credentials.password, user.password)
        if (!ok) throw new Error('Invalid password')
        return { id: user.id, name: user.username }
      }
    })
  ],
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
