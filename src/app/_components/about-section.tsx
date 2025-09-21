import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon, YoutTubeIcon } from '@/components/social-icons'

type SocialLinkProps = React.ComponentProps<typeof Link> & {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}

export function AboutSection(){
    return(
        <section id="about" className="items-center flex flex-col w-10/12 md:py-12 lg:py-24 my-4">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
                <div className="lg:pl-20 flex justify-center">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image 
                            src="/avatar.jpg" 
                            alt="Leandro velez" 
                            width={800} 
                            height={800} 
                            quality={95} 
                            priority={true}
                            className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
                            />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start pl-4">
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
                        @Leandrovelez
                    </h1>
                    <p className="mt-6 text-base text-muted-foreground">
                        Desenvolvedor Full-stack, estusiasta de tecnologia, fã de ficcção, fantasia
                        e animes. Pai de gatos!
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-6">
                        <SocialLink href="https://instagram.com/le.velez" target="_blank" icon={InstagramIcon}/>
                        <SocialLink href="https://github.com/Leandrovelez" target="_blank" icon={GitHubIcon}/>
                        <SocialLink href="https://www.linkedin.com/in/leandrovelez/" target="_blank" icon={LinkedInIcon}/>
                        <SocialLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank" icon={YoutTubeIcon}/>
                    </div>
                </div>
            </div>
        </section>
    )
}