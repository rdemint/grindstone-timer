import Head from 'next/head'
import Hero from '../components/Hero'
import Timer from '../components/Timer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grindstone Timer</title>
        <meta name="description" content="A hangboarding interval timer" />
        <link rel="icon" href="/raines_fav.png" />
      </Head>

      <main className="bg-slate-900">
        <Hero />
        <Timer />
      </main>
    </div>
  )
}
