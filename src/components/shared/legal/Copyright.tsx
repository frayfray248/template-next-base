import React from 'react'

const Copyright = ({ owner="" } : { owner? : string}) => {
  return (
    <span>&copy; Copyright {owner} {new Date().getFullYear()}</span>
  )
}

export default Copyright