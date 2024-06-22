import React from 'react'

const Col = ({ children } : { children : React.ReactNode }) => {
  return (
    <div className="flex-1">
      {children}
    </div>
  )
}

export default Col