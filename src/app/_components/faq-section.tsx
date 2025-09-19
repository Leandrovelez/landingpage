import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

export function FaqSection(){
    return(
        <section 
            id="faq" 
            className=" dark:bg-transparent container space-y-6 py-8 md:py-12 lg-py-24 my-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3-xl leading-[1.1] sm:text-3xl md:text-6xl">Gostos pessoais</h2>
            </div>
            <div className='mx-auto text-center md:max-w-[58rem]'>
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='2'>
                        <AccordionTrigger>Filmes</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Inception <br/>
                            Kingsman <br />
                            Bullet train <br />
                            Sherek 2 <br />
                            Matrix <br />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='2'>
                        <AccordionTrigger>Livros</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Jurassic park <br/>
                            Trilogia Alien <br/>
                            Guia do mochileiro das galáxias <br/>
                            Inferno (Dan Brown) <br/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='2'>
                        <AccordionTrigger>Animes</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Shingeki no kyojin <br/>
                            Demon slayer <br/>
                            Jujutsu kaisen <br/>
                            Vinland saga <br/>
                            Bleach <br/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='2'>
                        <AccordionTrigger>Jogos</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Alien isolation <br/>
                            Cyberpunk 2077 <br/>
                            The last of us pt 2 <br/>
                            Halo <br/>
                            Middle-earth: shadow of war <br/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}