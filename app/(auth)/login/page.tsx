'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const submit = async (e: any) => {
    e.preventDefault()
    const res = await signIn('credentials', { redirect: false, username, password })
    if (res?.error) setErr(res.error)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={submit} className="bg-white/10 p-8 rounded w-96">
        <h1 className="text-2xl mb-4">CholeyMate — Login</h1>
        {err && <div className="text-red-400 mb-2">{err}</div>}
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username" className="w-full p-2 mb-2 text-black" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" className="w-full p-2 mb-4 text-black" />
        <button className="w-full p-2 bg-blue-600 rounded">Sign in</button>
      </form>
    </div>
  )
}
