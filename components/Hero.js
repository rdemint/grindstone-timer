import Image from 'next/image'

export default function Hero() {
    return (
                    <div className='flex flex-col w-full text-center mt-8 pb-8 bg-hero-pattern bg-cover bg-top bg-fixed mix-blend-lighten h-128'>
                        <div className='px-6 max-5xl'>
                            <h1 className='text-2xl md:text-4xl text-slate-200 pt-8'>back to the grindstone.</h1>
                            <h2 className='text-sm md:text-lg text-slate-400 pt-4'>an interval timer for hangboarding</h2>
                        </div>
                        
                    </div>
)
}