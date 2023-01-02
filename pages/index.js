import Head from 'next/head'
import Hero from '../components/Hero'
import Timer from '../components/Timer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grindstone Timer</title>
        <meta name="description" content="A hangboarding interval timer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900">
        <Hero />
        <Timer />
      </main>
    </div>
  )
}
