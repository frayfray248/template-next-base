import React from 'react'

const Row = ({ children } : { children : React.ReactNode}) => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-16'>
        {children}
    </div>
  )
}

export default Row