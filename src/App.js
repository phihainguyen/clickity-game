import React, { Component } from "react";
import ImageCard from "./components/imagecards";
import Wrapper from "./components/Wrapper";
import Images from "./images.json";
// import "./App.css";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Images,
    clicked: false,
    score: 0,
    losses: 0,
    guesses: 0
  };

  render() {
    const shuffledImages = shuffleArray(this.state.Images);
    return (
      <div>
        <div>
          <h1>Clicky Game</h1>
        </div>
        <Wrapper>
          {shuffledImages.map((element, i) => (
            <ImageCard key={i} name={element.name} image={element.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;
