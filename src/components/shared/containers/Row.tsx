// react
import React from 'react'

const Row = ({
    children,
    breakPoint,
    gap = 'none',
    justify = "center",
    items = "center",
    className = ""
}: {
    children: React.ReactNode,
    breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    gap? : 'none' | '16' | '8' | '4',
    justify? : 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly',
    items? : 'start' | 'end' | 'center' | 'baseline' | 'stretch',
    className?: string
}) => {

    const gapClass = {
        '16': 'gap-16',
        '8': 'gap-8',
        '4': 'gap-4',
        'none': ''
    }

    const breakPointClass = {
        'sm': 'sm:flex-row',
        'md': 'md:flex-row',
        'lg': 'lg:flex-row',
        'xl': 'xl:flex-row',
        '2xl': '2xl:flex-row'
    }

    const justifyClass = {
        'start': 'justify-start',
        'end': 'justify-end',
        'center': 'justify-center',
        'between': 'justify-between',
        'around': 'justify-around',
        'evenly': 'justify-evenly'
    }

    const itemsClass = {
        'start': 'items-start',
        'end': 'items-end',
        'center': 'items-center',
        'baseline': 'items-baseline',
        'stretch': 'items-stretch'
    }

    return (
        <div className={`flex ${breakPoint ? `flex-col ${breakPointClass[breakPoint]}` : 'flex-row'} flex-wrap ${justifyClass[justify]} ${itemsClass[items]} ${gapClass[gap]} ${className}`}>
            {children}
        </div>
    )
}

export default Row