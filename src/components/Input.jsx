import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


function Input({setMovies,setShow}) {
const[description,setDescription]=useState('');
const handleSubmit=async function(e){
    const shows=[];
    e.preventDefault();
    if(!description) return;
    const res=await fetch(`https://api.tvmaze.com/search/shows?q=${description}`);
    const result=await res.json();
 
    result.forEach(s=>{
        shows.push(s.show)
    })

    setMovies(shows)
    setDescription('')
    setShow(null)

}
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="search" variant="standard" value={description} onChange={(e)=>setDescription(e.target.value)}/>
       

        </form>
    </div>
  )
}

export default Input