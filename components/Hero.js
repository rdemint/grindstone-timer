import Image from 'next/image'

export default function Hero() {
    return (
                    <div className='flex flex-col w-full text-center mt-8 pb-8'>
                        <div className='px-6 max-5xl'>
                            <h1 className='text-4xl text-amber-500 pt-8'>back to the grindstone.</h1>
                            <h2 className='text-xl text-[#D3CDCD] text-md pt-4'>an interval timer for hangboarding</h2>
                        </div>
                        <Image src='/grindstone_hero3.jpg' height='2252' width='4000' alt='wooden rock climbing training board'/>
                    </div>
)
}