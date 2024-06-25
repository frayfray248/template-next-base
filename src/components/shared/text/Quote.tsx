// next
import React from 'react'

import Paragraph from '@/components/shared/text/Paragraph'

const Quote = ({ children, author }: { children: React.ReactNode, author: string }) => {

    const beforeClass = "before:opacity-75 before:font-serif before:content-['\\201C'] before:text-8xl before:absolute before:-top-12 before:-left-6 before:transform before:translate-x-2 before:translate-y-2 before:text-accent"

    const afterClass = "after:font-serif after:content-['\\201D'] after:text-8xl after:absolute after:-bottom-24 after:-right-6 after:text-accent after:opacity-75 after:transform after:-translate-x-2 after:-translate-y-2"

    return (
        <div className='max-w-sm m-8'>
            <blockquote className='relative mb-12' >
                <Paragraph className={`${beforeClass} ${afterClass}`}>
                    {children}
                </Paragraph>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2">
                &#8212; {author}
            </figcaption>
        </div>
    )
}

export default Quote