import React from 'react'

export const Image = ({ src, alt } : { src : string, alt : string }) => (
    <figure><img src={src} alt={alt} /></figure>
)

export const Content = ({ children } : { children : React.ReactNode}) => (
    <div className="card-body">
        {children}
    </div>
)

export const Title = ({ children } : { children : React.ReactNode}) => (
    <h2 className="card-title">{children}</h2>
)

export const Actions = ({ children } : { children : React.ReactNode}) => (
    <div className="card-actions justify-end">
        {children}
    </div>
)

const Card = ({ children } : { children : React.ReactNode}) => {
    return (
        <div className="card w-64 bg-base-300 shadow-2xl">
            {children}
        </div>
    )
}

export default { Card, Image, Content, Title, Actions}