'use client'

// next
import * as NextImage from 'next/image'

// react
import React from 'react'

const Image = ({ src, alt, width, className="" } : { src : string | NextImage.StaticImageData, alt : string, width? : number, className? : string }) => {
  return (
    <NextImage.default className={`w-full ${className}`} src={src} alt={alt} width={width}  />
  )
}

export default Image