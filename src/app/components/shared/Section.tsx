import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='max-w-4xl mx-auto'>
            {children}
        </section>
    )
}

export default Section