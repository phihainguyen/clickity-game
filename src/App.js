import React from "react";
import ImageCard from "./components/imagecards";
import Wrapper from "./components/Wrapper";
import Images from "./images.json";
// import "./App.css";

function App() {
  return (
    <div>
      <div>
        <h1>Clicky Game</h1>
      </div>
      <Wrapper>
        {Images.map((element, i) => {
          return (
            <ImageCard key={i} name={element.name} image={element.image} />
          );
        })}
      </Wrapper>
    </div>
  );
}

export default App;
