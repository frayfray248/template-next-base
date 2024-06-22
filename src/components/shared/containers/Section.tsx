import React from 'react'

const Section = ({ children, width='lg' }: { children: React.ReactNode, width? : 'screen' | 'lg' | 'md' | 'sm' }) => {

    const widthClass = {
        'screen': 'max-w-screen',
        'lg': 'max-w-6xl',
        'md': 'max-w-4xl',
        'sm': 'max-w-xl'
    }

    return (
        <section className={`${widthClass[width]} min-h-screen mx-auto flex flex-col justify-center items-center gap-16 p-6 relative`}>
            {children}
        </section>
    )
}

export default Section