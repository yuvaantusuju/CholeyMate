import create from 'zustand'

type Song = { title: string; artist: string; videoId: string }

type State = {
  current: Song | null
  playing: boolean
  play: (s: Song) => void
  setPlaying: (p: boolean) => void
  setPlayed: (t: number) => void
}

const usePlayerStore = create<State>(set => ({
  current: null,
  playing: false,
  play: (s) => set(() => ({ current: s, playing: true })),
  setPlaying: (p) => set(() => ({ playing: p })),
  setPlayed: (t) => set(() => ({} as any))
}))

export default usePlayerStore
