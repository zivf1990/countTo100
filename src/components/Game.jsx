import { Component } from "react";
import Player from "./Player";

class Game extends Component {
  operate = (aritmicOp, playerName) => {
    console.log("operate");
    const players = [...this.props.players];
    const player = players.find((player) => player.playerName === playerName);

    //Check who's turn is it.
    if (players.indexOf(player) === this.props.currentIndex) {
      switch (aritmicOp) {
        case "*": {
          player.sessionPoints = player.sessionPoints * 2;
          break;
        }
        case "+": {
          player.sessionPoints = player.sessionPoints + 1;
          break;
        }
        case "-": {
          player.sessionPoints = player.sessionPoints - 3;
          break;
        }
        case "/": {
          player.sessionPoints = Math.round(player.sessionPoints / 2);
          break;
        }

        default: {
          console.log("default");
        }
      }

      player.sessionMoves++;
      let nextTurn = this.props.changeTurns() + 1;
      if (nextTurn === players.length) {
        nextTurn = 0;
      }
      console.log("currentIndex: ", nextTurn);

      players.forEach((player, index) => {
        if (index !== nextTurn) player.activeClass = "player";
        else player.activeClass = "player player-active";
      });

      this.setState({ players });
      console.log(this.props.players);

      //Checks if game has ended for the player.
      if (player.sessionPoints === 100) {
        this.gameOver(player, players);
      }
    }
  };

  gameOver = (player, players) => {
    player.playerScores.push(this.calcScore(player.sessionMoves));
    player.sessionMoves = 0;
    player.sessionPoints = Math.round(Math.random() * 40 + 40);

    this.setState({ players });
  };

  calcScore = (sessionMoves) => {
    console.log(sessionMoves);
    if (sessionMoves === 1) return 100;
    else if (sessionMoves > 10 && sessionMoves < 20) return 10;
    else if (sessionMoves > 20 && sessionMoves < 30) return 9;
    else if (sessionMoves > 30 && sessionMoves < 40) return 8;
    else if (sessionMoves > 40 && sessionMoves < 50) return 7;
    else if (sessionMoves > 50 && sessionMoves < 60) return 6;
    else if (sessionMoves > 60 && sessionMoves < 70) return 5;
    else if (sessionMoves > 70 && sessionMoves < 80) return 4;
    else if (sessionMoves > 80 && sessionMoves < 90) return 3;
    else if (sessionMoves > 90 && sessionMoves < 100) return 2;
    else return 1;
  };

  render() {
    return (
      <div className="players">
        {this.props.players.map((player) => (
          <Player
            key={Math.random()}
            playerName={player.playerName}
            playerScores={player.playerScores}
            playerActive={player.playerActive}
            sessionMoves={player.sessionMoves}
            sessionPoints={player.sessionPoints}
            operate={this.operate}
            resign={this.props.resign}
            activeClass={player.activeClass}
          />
        ))}
      </div>
    );
  }
}

export default Game;
