import Image from 'next/image'

export default function Hero() {
    return (
                    <div className='flex flex-col w-full text-center'>
                        <div className='px-8 max-3xl'>
                            <h1 className='text-4xl text-slate-200 pt-8'>back to the grindstone.</h1>
                            <h2 className='text-slate-300 text-md pt-4'>Interval timer for hangboarding</h2>
                        </div>
                        <Image src='/grindstone_hero3.jpg' height='2252' width='4000'/>
                    </div>
)
}