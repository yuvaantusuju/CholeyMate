'use client'
import ReactPlayer from 'react-player'
import usePlayerStore from '../store/usePlayerStore'
import { useEffect } from 'react'

export default function Player() {
  const { current, playing, setPlaying, setPlayed, play } = usePlayerStore()

  useEffect(() => {}, [current])

  if (!current) return <div className="w-80 p-4 bg-black/60">No track playing</div>

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-black/70 p-4 rounded">
      <div className="font-bold">{current.title}</div>
      <div className="text-sm mb-2">{current.artist}</div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${current.videoId}`} playing={playing} controls width="100%" height="64px" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
    </div>
  )
}
