import { Component } from "react";

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", newPlayerForm: false };
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ username: e.target.value });
  };

  createNewPlayerForm = () => {
    this.setState({ newPlayerForm: true });
  };

  createNewUse = () => {
    console.log();
  };

  render() {
    return (
      <>
        NewPlayer:
        {this.state.newPlayerForm ? (
          <>
            <button onClick={ this.createNewPlayerForm}>+</button>

            <input
              onChange={this.handleChange}
              placeholder="Enter your name"
            ></input>
            <button onClick={() => this.props.createNewPlayer(this.state.username)}>
              Add player
            </button>
          </>
        ) : (
          <>
            <button onClick={this.createNewPlayerForm}>+</button>
          </>
        )}
      </>
    );
  }
}

export default NewPlayer;
