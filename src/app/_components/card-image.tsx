'use client'
import Image from "next/image"
import { useState } from "react"

export default function CardImage({src, alt, title, fill, ...props}: {src: string, alt: string, title: string, fill?: boolean}) {
    const [loading, setLoading] = useState(true);
    return(
        <div className='relative overflow-hidden rounded-lg border bg-background py-4 px-2 w-full'>
            <div className='flex h-[180px] flex-col justify-center items-center rounded-md p-2 w-[800px]'>
                {fill ? 
                    <Image src={src} alt={alt} className={`aspect-square rounded-lg object-cover size-max sm:size-40 md:size-40 
                        ${ loading ? 
                            'scale-110 blur-2xl grayscale' : 
                            'scale-100 blur-0 grayscale-0 transition-all duration-500' 

                        }`} fill  
                        onLoadingComplete={() => setLoading(false)}/>
                : 
                    <Image src={src} alt={alt} className={`aspect-square rounded-lg object-cover size-max sm:size-40 md:size-40 
                        ${ loading ? 
                            'scale-110 blur-2xl grayscale' : 
                            'scale-100 blur-0 grayscale-0 transition-all duration-500' 

                        }`} width={800} height={800} quality={90}  {...props} />
                }
                <div className='absolute space-y-2 items-center justify-center text-center mt-2 bottom-0 left-1/2 -translate-x-1/2 bg-black opacity-70 px-2 py-1  w-full'>
                    <h3 className='font-bold'>{ title }</h3>
                </div>
            </div>
        </div>
    )
}