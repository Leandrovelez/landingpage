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
            className="bg-slate-200 dark:bg-transparent container space-y-6 py-8 md:py-12 lg-py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3-xl leading-[1.1] sm:text-3xl md:text-6xl">FAQ</h2>
            </div>
            <div className='mx-auto text-center md:max-w-[58rem]'>
                <Accordion type="single" collapsible className='w-full'>
                    <AccordionItem value='2'>
                        <AccordionTrigger>Módulo 2: Preparando o ambiente</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Criando nosso projeto e entendo a estrutura de pastas e arquivos.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}