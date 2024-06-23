import React from 'react'

const Heading = ({ 
    type=1, 
    children, 
    className="" } 
    : 
    { 
        type : 1 | 2 | 3 | 4 | 5 | 6, 
        children : React.ReactNode,
        className? : string
    }) => {

    const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements

    const sizes = [
        'text-6xl',
        'text-5xl',
        'text-4xl',
        'text-3xl',
        'text-2xl',
        'text-xl'
    ]

  return (
    <HeadingTag className={`${sizes[type - 1]} font-bold my-6 ${className}`}>
      {children}
    </HeadingTag>
  )
}

export default Heading