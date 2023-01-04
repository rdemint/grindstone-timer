import Image from 'next/image'

export default function About() {
    return (
                <div className="flex justify-center max-w-3xl mx-auto">
                <div class="prose">
                    <Image src="/crown_jewel20_2mb.jpg" height={432} width={768} alt="A man rock climbing a large boulder." placeholder="blur" blurDataURL="/crown_jewel20_small_blur.jpg"/>
                    <div className='px-10 pt-10 flex flex-col space-y-8'>
                        <h2 className="text-slate-200 text-2xl">About me</h2>
                        <p>I have been climbing since 2012, but only in the past few years have I realized how important hangboard training is for overall climbing performance.</p>
                        <p>I hope this hangboard timer gives you one less excuse to train.</p>
                        <br/>
                        <p>Go send it! - Raines</p>
                    </div>
                </div>
                </div>
        
    )
}