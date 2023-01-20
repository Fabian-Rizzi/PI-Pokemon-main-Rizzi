import React from "react";

export default function Card({ img, name, types }) {
  return (
    <div>
      <img src={img} alt="img not found" width="200px" height="250px" />
      <h2>{name}</h2>
      <h5>{types}</h5>
      {/* <h5>{types?.map((type) => {
        return (
          <span key={type}>{capitalizeStringWithTrim(type)}</span>
        )
      })}</h5> */}
    </div>
  );
}