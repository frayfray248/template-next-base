import React from 'react'

const Col = ({ children, className="" } : { children : React.ReactNode, className? : string }) => {
  return (
    <div className={`flex-1 ${className}`}>
      {children}
    </div>
  )
}

export default Col