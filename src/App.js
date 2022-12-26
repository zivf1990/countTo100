import { Component } from "react";
import Game from "./components/Game";
import NewPlayer from "./components/NewPlayer";
import "./App.css";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          playerName: "player1",
          playerScores: [],
          playerActive: false,
          // playerResign: false,
          sessionMoves: 0,
          sessionPoints: Math.round(Math.random() * 59 + 40),
          activeClass: "player-active",
        },
        {
          playerName: "player2",
          playerScores: [],
          playerActive: true,
          // playerResign: false,
          sessionMoves: 0,
          sessionPoints: Math.round(Math.random() * 59 + 40),
          activeClass: "",
        },
      ],
      currentIndex: 0,
    };
  }

  changeTurns = () => {
    const maxTurns = this.state.players.length;
    // const players = [...this.state.players];

    this.setState(() => {
      if (this.state.currentIndex + 1 < maxTurns) {
        return { currentIndex: this.state.currentIndex + 1 };
      } else {
        return { currentIndex: 0 };
      }
    });

    return this.state.currentIndex;
  };

  createNewPlayer = (username) => {
    let newPlayer = {
      playerName: username,
      playerScores: [],
      playerActive: true,
      // playerResign: false,
      sessionMoves: 0,
      sessionPoints: Math.round(Math.random() * 59 + 40),
    };

    let players = [...this.state.players];
    players.push(newPlayer);

    this.setState({ players });
  };

  resign = (playerName) => {
    let players = [...this.state.players];
    const player = players.find((player) => player.playerName === playerName);
    // player.playerResign = true;

    let currentIndex = this.state.currentIndex;
    if (players.indexOf(player) === players.length - 1) {
      currentIndex = 0;
    }

    console.log("resigning player: ", playerName);
    console.log(currentIndex);

    players.splice(players.indexOf(player), 1);

    players.forEach((player, index) => {
      if (index !== currentIndex) player.activeClass = "player";
      else player.activeClass = "player player-active";
    });

    this.setState({ players, currentIndex });
  };

  render() {
    return (
      <>
        <Game
          players={this.state.players}
          resign={this.resign}
          changeTurns={this.changeTurns}
          currentIndex={this.state.currentIndex}
        />

        <div className="new-players">
          <NewPlayer createNewPlayer={this.createNewPlayer} />
        </div>
      </>
    );
  }
}

export default App2;
