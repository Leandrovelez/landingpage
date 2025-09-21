export default function CardImage({src, alt, title}: {src: string, alt: string, title: string}) {
    return(
        <div className='relative overflow-hidden rounded-lg border bg-background py-4 px-2'>
            <div className='flex h-[180px] flex-col justify-center items-center rounded-md p-2'>
                <img 
                    src={src} 
                    alt={alt} 
                    className="aspect-square rounded-lg object-cover size-40 sm:size-40 md:size-40"
                />
                <div className='space-y-2 items-center justify-center text-center mt-2'>
                    <h3 className='font-bold'>{ title }</h3>
                </div>
            </div>
        </div>
    )
}