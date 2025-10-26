import Sidebar from '../../components/Sidebar'
import Player from '../../components/Player'
import { prisma } from '../../lib/prisma'

// Server component: fetch liked songs for demo user
export default async function LikedPage() {
  const user = await prisma.user.findUnique({ where: { username: 'choley_gang' }, include: { liked: true } })
  const liked = user?.liked || []

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl mb-4">Liked Songs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liked.map(s => (
            <div key={s.id} className="bg-white/5 p-4 rounded">
              <div className="font-bold">{s.title}</div>
              <div className="text-sm">{s.artist}</div>
            </div>
          ))}
        </div>
      </main>
      <Player />
    </div>
  )
}
