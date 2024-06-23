import React from 'react'

const Section = ({ 
    children, 
    width='theme', 
    height='theme' 
}: { 
    children: React.ReactNode, 
    width? : 'theme' | 'screen' | 'lg' | 'md' | 'sm',
    height? : 'theme' | 'screen'
}) => {

    const widthClasses = {
        'theme' : 'max-w-section-max-width',
        'screen': 'w-full',
        'lg': 'max-w-6xl',
        'md': 'max-w-4xl',
        'sm': 'max-w-xl'
    }

    const heightClasses = {
        'theme' : 'min-h-section-min-height',
        'screen': 'min-h-screen'
    }

    const borderClasses = {
        'theme' : 'section-border'
    }

    return (
        <section className={`${widthClasses[width]} ${heightClasses[height]} border-y-section-border mx-auto flex flex-col justify-center items-center p-section-padding relative`}>
            {children}
        </section>
    )
}

export default Section