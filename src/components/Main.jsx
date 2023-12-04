import React from 'react'
import Card from './Card'

function Main({movies,setShow}) {
  return (
    <div className='main'>
        {
            movies.map(mov=>{
                return <Card mov={mov} key={mov.id} setShow={setShow}/>
            })
        }
    </div>
  )
}

export default Main