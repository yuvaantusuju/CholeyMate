'use client'
import { use } from 'react'
import usePlayerStore from '../store/usePlayerStore'
import axios from 'axios'

export default function SongCard({ song }: any) {
  const play = usePlayerStore(s => s.play)
  const addLiked = async () => {
    try { await axios.post('/api/like', song) } catch (e) {}
  }

  return (
    <div className="bg-white/5 p-4 rounded">
      <div className="font-bold">{song.title}</div>
      <div className="text-sm mb-2">{song.artist}</div>
      <div className="flex gap-2">
        <button onClick={() => play(song)} className="p-2 bg-green-600 rounded">Play</button>
        <button onClick={addLiked} className="p-2 bg-red-600 rounded">♥</button>
      </div>
    </div>
  )
}
