import React from 'react';
import './App.css';
import ClickPic from './clickPic';


const wins = 0;
const losses = 0;

const clickHandler = () => {
  this.setState({clicked: true})
  console.log(this.state);
}

const App = () => {

    return (
      <div id="wrapper">
        <div className="jumbotron">
          <h1>Clicking Game</h1>
          <p>Click on each picture only once to win the game.</p>
          <p>Click on one picture twice before they are all clicked and YOU LOSE!</p>          
        </div>

        <div>
          <div>
            <h2>Wins: {wins}</h2>
          </div>
          <div>
            <h2>Losses: {losses}</h2>
          </div>
        </div>

        <ClickPic click={clickHandler()} imgUrl='https://i.pinimg.com/originals/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg'/>
        <ClickPic click={clickHandler()} imgUrl='https://www.planwallpaper.com/static/images/6984999-cool-lights_cJkYD47.jpg'/>
        <ClickPic click={clickHandler()} imgUrl='https://orig00.deviantart.net/18de/f/2013/115/8/0/neon_wolf__night_vision__by_l0n3lyw0lf1996-d62ysrt.jpg'/>
        <ClickPic click={clickHandler()} imgUrl='http://jinnanyang.com/data/out/55/585837049-cool-lion-wallpaper.jpg'/>
      </div>
    )
}

export default App;
