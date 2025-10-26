import Sidebar from '../../components/Sidebar'
import Player from '../../components/Player'
import { prisma } from '../../lib/prisma'

export default async function RecentlyPage() {
  const songs = await prisma.song.findMany({ orderBy: { playedAt: 'desc' }, take: 20 })
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl mb-4">Recently Played</h2>
        <div className="space-y-2">
          {songs.map(s => (
            <div key={s.id} className="bg-white/5 p-3 rounded">
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
