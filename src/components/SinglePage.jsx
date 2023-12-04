import React, { useState } from "react";

function SinglePage({ show }) {
  const [showById,setShowById]=useState(null)
  const getCast = async function (id) {
    if(!showById){
      const res = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
      const idShow = await res.json();
      setShowById(idShow)
      console.log(idShow)
    } else{
       setShowById(null);
    }
      
  
    
  };
  return (
    <div>
      <div className="container-single">
        <div className="img">
          <img src={show.image?.original} alt="Movie" />
        </div>
        <div className="container-text">
          <h2>{show.name}</h2>
          <div>
            {show.genres.map((m) => {
              return <span>{m}</span>;
            })}
          </div>
          <p>
            {show.summary
              .replaceAll("<p>", " ")
              .replaceAll("<i>", " ")
              .replaceAll("<b>", " ")
              .replaceAll("</p>", " ")
              .replaceAll("<i>", " ")
              .replaceAll("</i>", " ")
              .replaceAll("</b>", " ")}
          </p>
          <button className="btn" onClick={() => getCast(show.id)}>Cast</button>
          <div className="cast-card">
            {
              showById?.filter((_,i)=>i<4)?.map((cast)=>{
               
                return <div >
                  <img src={cast.person.image.medium} alt="" />
                  <p>{cast.person.name}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
