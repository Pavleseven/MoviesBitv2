// import React, { useContext } from "react";
// import { appContext } from "./context";

function Card({ mov,setShow }) {
    console.log(mov)
//   const { setShow } = useContext(appContext);
  return (
    <div className="card" onClick={() => setShow(mov)}>
      <img src={mov.image?.medium} alt="" />
      <p>{mov.name}</p>
      {mov.rating.average ? (
        <p className="rating">{mov.rating.average}</p>
      ) : undefined}
    </div>
  );
}

export default Card;
