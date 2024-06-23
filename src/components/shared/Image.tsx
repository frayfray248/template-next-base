'use client'

// next
import * as NextImage from 'next/image'

// react
import React from 'react'

const Image = ({ src, alt } : { src : string | NextImage.StaticImageData, alt : string }) => {
  return (
    <NextImage.default className='w-full' src={src} alt={alt}  />
  )
}

export default Image