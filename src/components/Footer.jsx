import React from 'react'

function Footer() {
  const date=new Date();
  
  return (
    <div className='footer'>
        <p>🎥🎬🍿🎦📽🎞</p>
        <p>All rights reserved</p>
        <p>{date.getMonth()+1} {date.getFullYear()}</p>
    </div>
  )
}

export default Footer