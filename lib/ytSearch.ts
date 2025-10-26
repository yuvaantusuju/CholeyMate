export async function ytSearch(q: string) {
  const key = process.env.YOUTUBE_API_KEY
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(q)}&key=${key}`
  const res = await fetch(url)
  return res.json()
}
