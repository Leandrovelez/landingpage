'use client'
import Image from "next/image"
import { useState } from "react"

export default function CardImage({src, alt, title, fill, ...props}: {src: string, alt: string, title: string, fill?: boolean}) {
    const [loading, setLoading] = useState(true);
    return(
        <div className='relative overflow-hidden rounded-lg border bg-background py-4 px-2'>
            <div className='flex h-[180px] flex-col justify-center items-center rounded-md p-2'>
                {fill ? 
                    <Image src={src} alt={alt} className={`aspect-square rounded-lg object-cover size-40 sm:size-40 md:size-40 
                        ${ loading ? 
                            'scale-110 blur-2xl grayscale' : 
                            'scale-100 blur-0 grayscale-0 transition-all duration-500' 

                        }`} fill 
                        onLoadingComplete={() => setLoading(false)}/>
                : 
                    <Image src={src} alt={alt} className={`aspect-square rounded-lg object-cover size-40 sm:size-40 md:size-40 
                        ${ loading ? 
                            'scale-110 blur-2xl grayscale' : 
                            'scale-100 blur-0 grayscale-0 transition-all duration-500' 

                        }`} width={800} height={800} quality={90}  {...props} />
                }
                <div className='space-y-2 items-center justify-center text-center mt-2'>
                    <h3 className='font-bold'>{ title }</h3>
                </div>
            </div>
        </div>
    )
}