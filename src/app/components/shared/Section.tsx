import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='max-w-6xl min-h-screen mx-auto flex flex-col justify-center items-center gap-16 p-6'>
            {children}
        </section>
    )
}

export default Section