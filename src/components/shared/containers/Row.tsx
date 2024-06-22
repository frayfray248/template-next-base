import React from 'react'

const Row = ({ children, breakPoint } : { children : React.ReactNode, breakPoint? : 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) => {
  return (
    <div className={`flex ${breakPoint ? `flex-col ${breakPoint}:flex-row` : 'flex-row'} flex-wrap justify-center items-center gap-16`}>
        {children}
    </div>
  )
}

export default Row