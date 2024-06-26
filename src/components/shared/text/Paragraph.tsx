import React from 'react'

const Paragraph = ({ 
    children, 
    size = "md",
    className=""
} : { 
    children : React.ReactNode,
    size? : "sm" | "md" | "lg",
    className? : string
}) => {

    const sizeClasses = {
        "sm": "text-sm my-1",
        "md": "text-base my-2",
        "lg": "text-lg my-4"
    }

  return (
    <p  className={`${sizeClasses[size]} ${className}`}>{children}</p>
  )

}

export default Paragraph