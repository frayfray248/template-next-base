import Image from 'next/image'

import React from 'react'

const Thumbnail = ({ src, alt, href }: { src: string, alt: string, href: string }) => {
    return (
        <a className='relative' href={href} target="_blank" rel="noopener noreferrer">
            <img className="object-cover w-80 h-80 rounded-picture-radius " src={src} alt={alt} />
            <div className='w-full h-full absolute top-0 left-0 rounded-picture-radius bg-gradient-to-t from-base-200 opacity-0 hover:opacity-100 transition'>
                <div className='flex justify-center items-center w-full h-full'>
                    <p className='text-white text-2xl font-bold'>View Project</p>
                </div>
            </div>
        </a>
    )
}

export default Thumbnail