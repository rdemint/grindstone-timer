import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grindstone Timer</title>
        <meta name="description" content="A hangboarding interval timer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-900">
        <h1 className="text-2xl text-slate-200">
          A hangboard timer.
        </h1>
      </main>
    </div>
  )
}
