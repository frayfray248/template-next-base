import React from 'react'

const Section = ({ 
    children, 
    width='theme', 
    height='theme',
    bgColor='primary',
    className='',
    id=''
}: { 
    children: React.ReactNode, 
    width? : 'theme' | 'screen' | 'lg' | 'md' | 'sm',
    height? : 'theme' | 'screen' | 'lg' | 'md' | 'sm' | 'xs',
    bgColor? : 'primary' | 'primary-content' | 'secondary' | 'secondary-content' | 'accent' | 'accent-content' | 'neutral' | 'neutral-content',
    className?: string
    id?: string
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
        'screen': 'min-h-screen',
        'lg': 'min-h-96',
        'md': 'min-h-80',
        'sm': 'min-h-64',
        'xs': 'min-h-48'
    }

    const borderClasses = {
        'theme' : 'section-border'
    }

    const backgroundClasses = {
        'primary' : 'bg-primary',
        'primary-content' : 'bg-primary-content',
        'secondary' : 'bg-secondary',
        'secondary-content' : 'bg-secondary-content',
        'accent' : 'bg-accent',
        'accent-content' : 'bg-accent-content',
        'neutral' : 'bg-neutral',
        'neutral-content' : 'bg-neutral-content'
    }

    return (
        <section id={id} className={`${widthClasses[width]} ${heightClasses[height]} ${backgroundClasses[bgColor]} mx-auto flex flex-col justify-center items-center p-section-padding relative ${className}`}>
            {children}
        </section>
    )
}

export default Section