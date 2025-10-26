import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black/50 p-4 min-h-screen">
      <h1 className="text-xl font-bold mb-6">CholeyMate</h1>
      <nav className="space-y-2">
        <Link href="/">Home</Link>
        <Link href="/liked">Liked</Link>
        <Link href="/recently">Recently</Link>
      </nav>
    </aside>
  )
}
