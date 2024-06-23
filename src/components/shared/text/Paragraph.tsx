import React from 'react'

const Paragraph = ({ children } : { children : React.ReactNode}) => {
  return (
    <p className='text-lg my-4'>{children}</p>
  )
}

export default Paragraph