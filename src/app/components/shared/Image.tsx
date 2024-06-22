'use client'

// next
import * as NextImage from 'next/image'

// react
import React from 'react'

const Image = ({ src, alt } : { src : string, alt : string }) => {
  return (
    <NextImage.default src={src} alt={alt} width={500} height={500} />
  )
}

export default Image