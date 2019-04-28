import React, { Component } from "react";
import ImageCard from "./components/imagecards";
import Wrapper from "./components/Wrapper";
import heroes from "./images.json";
import Header from "./components/header";
import "./App.css";

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
class Hero extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes,
    clicked: false,
    score: 0,
    losses: 0,
    guesses: [],
    maxScore: 0
  };
  handleHeroClick = heroId => {
    const newState = { ...this.state };
    if (newState.guesses.includes(heroId)) {
      newState.losses = newState.losses + 1;
      newState.score = 0;
      newState.guesses = [];
    } else {
      newState.score = newState.score + 1;
      newState.guesses.push(heroId);
    }
    newState.heroes = shuffleArray(newState.heroes);
    if (newState.score > newState.maxScore) {
      newState.maxScore = newState.score;
    }

    this.setState(newState);
  };
  render() {
    const shuffledImages = shuffleArray(this.state.heroes);
    return (
      <div className="body">
        <Header
          score={this.state.score}
          losses={this.state.losses}
          maxScore={this.state.maxScore}
        />
        <Wrapper>
          {shuffledImages.map(hero => (
            <ImageCard
              key={hero.id}
              id={hero.id}
              handleHeroClick={this.handleHeroClick}
              name={hero.name}
              image={hero.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default Hero;
