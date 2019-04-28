import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div>
        <img
          alt={props.name}
          src={props.image}
          onClick={() => props.handleHeroClick(props.id)}
          className="img-container"
        />
      </div>
    </div>
  );
}

export default ImageCard;
