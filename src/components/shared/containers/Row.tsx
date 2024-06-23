import React from 'react'

const Row = ({
    children,
    breakPoint,
    gap = "theme"
}: {
    children: React.ReactNode,
    breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    gap? : 'theme' | '16' | '8' | '4'
}) => {

    const gapClass = {
        'theme': 'row-gap',
        '16': 'gap-16',
        '8': 'gap-8',
        '4': 'gap-4'
    }

    return (
        <div className={`flex ${breakPoint ? `flex-col ${breakPoint}:flex-row` : 'flex-row'} flex-wrap justify-center items-center ${gapClass[gap]}`}>
            {children}
        </div>
    )
}

export default Row