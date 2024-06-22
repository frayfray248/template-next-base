import React from 'react'

const Paragraph = ({ children } : { children : React.ReactNode}) => {
  return (
    <p className='text-center text-lg mb-16'>{children}</p>
  )
}

export default Paragraph