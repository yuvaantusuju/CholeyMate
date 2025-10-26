'use client'
import { useState } from 'react'
import axios from 'axios'
import SongCard from '../components/SongCard'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Player from '../components/Player'

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const search = async (e?: any) => {
    if (e) e.preventDefault()
    const res = await axios.get(`/api/search?q=${encodeURIComponent(query)}`)
    const items = res.data.items || []
    const mapped = items.map((it: any) => ({
      videoId: it.id.videoId,
      title: it.snippet.title,
      artist: it.snippet.channelTitle
    }))
    setResults(mapped)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Navbar />
        <form onSubmit={search} className="mb-6">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search YouTube for songs" className="p-2 rounded w-full text-black" />
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map(r => <SongCard key={r.videoId} song={r} />)}
        </div>
      </main>
      <Player />
    </div>
  )
}
