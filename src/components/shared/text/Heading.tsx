import React from 'react'

const Heading = ({ type=1, children } : { type : 1 | 2 | 3 | 4 | 5 | 6, children : React.ReactNode }) => {

    const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements

    const sizes = [
        'text-5xl',
        'text-4xl',
        'text-3xl',
        'text-2xl',
        'text-xl',
        'text-lg'
    ]

  return (
    <HeadingTag className={`${sizes[type - 1]} font-bold text-center my-8`}>
      {children}
    </HeadingTag>
  )
}

export default Heading