
export function IntroSection(){
    return (
        <section id="intro" className="items-center flex flex-col w-10/12 md:py-12 lg:py-24">
            <svg 
                viewBox='0 0 1024 1024'
                className='absolute left-1/4 top-full md:top-1/2 -z-10 h-[16rem] w-[16rem] sm:h-[24rem] sm:w-[24rem] md:h-[40rem] md:w-[40rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] md:left-1/3 md:-ml-40 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
                aria-hidden='true'> 
                <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#7775D6" />
                        <stop offset="1" stopColor="#E935C1" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
                    Desenvolvedor
                <br />
                <span className="text-primary">Full-stack</span>
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Landing page feita com Nextjs 15, Tailwindcss e Radix-ui. Hospedada na Vercel.
                </p>
            </div>
        </section>
    )
}