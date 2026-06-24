import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Stock Finance AI</h1>
      <p className="mt-4 text-lg text-gray-600">
        AI-powered stock and finance analytics platform
      </p>
    </main>
  )
}
