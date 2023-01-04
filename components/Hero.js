import Image from 'next/image'

export default function Hero() {
    return (
                    <div className='flex flex-col w-full text-center mt-8 pb-8 bg-hero-pattern bg-cover bg-top bg-fixed mix-blend-lighten h-96'>
                        <div className='px-6 max-5xl'>
                            <h1 className='text-4xl text-slate-50 pt-8'>back to the grindstone.</h1>
                            <h2 className='text-xl text-slate-100 text-md pt-4'>an interval timer for hangboarding</h2>
                        </div>
                        
                    </div>
)
}