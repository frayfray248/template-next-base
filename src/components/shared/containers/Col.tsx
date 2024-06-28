import React from 'react'

const Col = (
    {
        children,
        className = "",
        stretch
    }: {
        children: React.ReactNode,
        className?: string,
        stretch?: boolean
    }) => {

    return (
        <div className={`flex-1 ${stretch ? "self-stretch" : ""} ${className}`}>
            {children}
        </div>
    )
}

export default Col