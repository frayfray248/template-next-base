import React from 'react'

const Section = ({ 
    children, 
    width='none', 
    height='none',
    bgColor='base-100',
    className='',
    id=''
}: { 
    children: React.ReactNode, 
    width? : 'none' | 'full' | 'lg' | 'md' | 'sm',
    height? : 'none' | 'screen' | 'lg' | 'md' | 'sm' | 'xs',
    bgColor? : 'base-100' | 'base-200' | 'base-300' | 'neutral',
    className?: string
    id?: string
}) => {

    const widthClasses = {
        'full': 'w-full',
        'lg': 'max-w-6xl',
        'md': 'max-w-4xl',
        'sm': 'max-w-xl',
        'none': ''
    }

    const heightClasses = {
        'screen': 'min-h-screen',
        'lg': 'min-h-96',
        'md': 'min-h-80',
        'sm': 'min-h-64',
        'xs': 'min-h-48',
        'none': ''
    }

    const backgroundClasses = {
        'base-100': 'bg-base-100',
        'base-200': 'bg-base-200',
        'base-300': 'bg-base-300',
        'neutral': 'bg-neutral'
    }

    const textColorClass = bgColor === 'neutral' ? 'text-neutral-content' : 'text-base-content'

    return (
        <section id={id} className={`${widthClasses[width]} ${heightClasses[height]} ${backgroundClasses[bgColor]} ${textColorClass} mx-auto flex flex-col justify-center items-center relative ${className}`}>
            {children}
        </section>
    )
}

export default Section