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
        {/* <div className='flex flex-col space-y-8 pt-24 pb-12 items-center sm:px-4 min-w-3xl'>
            <h2 className='text-2xl text-center'>Choose your hangboard</h2>
            <Link href="/workout" className='w-64 rounded bg-sky-500 p-2 text-slate-200 hover:bg-sky-600 text-center'>Simple interval timer</Link> 
            <Link href="/workout" className='w-64 rounded bg-sky-500 p-2 text-slate-200 hover:bg-sky-600 text-center'>Train Grindstone</Link>
            <Link href="/workout" className='w-64 rounded bg-sky-500 p-2 text-slate-200 hover:bg-sky-600 text-center'>Train Grindstone + Simpleboard</Link>
        </div> */}
        <Timer />
      </main>
    </div>
  )
}
