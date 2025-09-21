import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import CardImage from './card-image'

export function MeusGostosSection(){
    return(
        <section 
            id="faq" 
            className="bg-slate-50 dark:bg-transparent w-10/12 space-y-6 py-8 md:py-12 lg-py-24 px-8 mt-4 mb-4 rounded-lg">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3-xl leading-[1.1] sm:text-3xl md:text-6xl">Gostos pessoais</h2>
            </div>
            <div className='mx-auto text-center md:max-w-[58rem]'>
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Filmes</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
                                <CardImage src="/filmes/inception.jpg" alt="Inception" title="Inception"/>
                                <CardImage src="/filmes/kingsman.jpg" alt="Kingsman" title="Kingsman"/>
                                <CardImage src="/filmes/bullet-train.webp" alt="Trem-bala" title="Trem-bala"/>
                                <CardImage src="/filmes/sherek-2.jpg" alt="Sherek 2" title="Sherek 2"/>
                                <CardImage src="/filmes/matrix.jpg" alt="Matrix" title="Matrix"/>
                                <CardImage src="/filmes/aliens.png" alt="Alien - O resgate" title="Alien - O resgate"/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr />
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='item-2'>
                        <AccordionTrigger>Livros</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
                                <CardImage src="/livros/jurassic-park.png" alt="Jurassic Park" title="Jurassic Park"/>
                                <CardImage src="/livros/o-mundo-perdido.png" alt="O mundo perdido" title="O mundo perdido"/>
                                <CardImage src="/livros/o-guia-do-mochileiro.png" alt="o guia do mochileiro das galáxias" title="o guia do mochileiro das galáxias"/>
                                <CardImage src="/livros/surgido-das-sombras.png" alt="Alien - Surgido das sombras" title="Alien - Surgido das sombras"/>
                                <CardImage src="/livros/mar-de-angustia.png" alt="Alien - mar de angústia" title="Alien - mar de angústia"/>
                                <CardImage src="/livros/rio-de-sofrimento.png" alt="Alien - Rio de sofrimento" title="Alien - Rio de sofrimento"/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr />
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='item-3'>
                        <AccordionTrigger>Animes</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
                                <CardImage src="/animes/shingeki.jpg" alt="Shingeki no kyojin" title="Shingeki no kyojin"/>
                                <CardImage src="/animes/demon_slayer.jpg" alt="Demon slayer" title="Demon slayer"/>
                                <CardImage src="/animes/jujutsu.jpg" alt="Jujutsu kaisen" title="Jujutsu kaisen"/>
                                <CardImage src="/animes/vinland.webp" alt="Vinland saga" title="Vinland saga"/>
                                <CardImage src="/animes/bleach.jpg" alt="Bleach" title="Bleach"/>
                                <CardImage src="/animes/boku-no-hero-academia.jpg" alt="Boku no hero" title="Boku no hero"/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr />
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='item-4'>
                        <AccordionTrigger>Jogos</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
                                <CardImage src="/jogos/alien_isolation_capa.png" alt="Alien isolation" title="Alien isolation"/>
                                <CardImage src="/jogos/cyberpunk2077.avif" alt="Cyperpunk 2077" title="Cyperpunk 2077"/>
                                <CardImage src="/jogos/tlou2.jpg" alt="The last of us pt 2" title="The last of us pt 2"/>
                                <CardImage src="/jogos/halo.png" alt="Halo" title="Halo"/>
                                <CardImage src="/jogos/shadow_of_war.png" alt="Middle earth: Shadow of war" title="Middle earth: Shadow of war"/>
                                <CardImage src="/jogos/Escape_from_Tarkov.jpg" alt="Escape from Tarkov" title="Escape from Tarkov"/>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr />
            </div>
        </section>
    )
}