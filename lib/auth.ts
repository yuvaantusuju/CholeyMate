import { getServerSession } from 'next-auth/next'
import { authOptions } from '../app/api/auth/[...nextauth]/route'

export const getSession = async (req: Request) => {
  return await getServerSession(authOptions as any)
}
