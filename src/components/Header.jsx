import React from 'react'
import Input from './Input'

function Header({setMovies,setShow}) {
  return (
    <div className='header'>
        <h1 onClick={()=>{
          setShow(null)
        }}>usePopcorn</h1>
        <Input setMovies={setMovies} setShow={setShow}/>
       
    </div>
  )
}

export default Header