import React from "react";
import ButtonColumn from "./ButtonColumn";

const players = ["O", "X"];
const pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turns: players[1],
      theWinnerIndex: null,
      theWinner: null
    };
  }

  switchTurns = () => {
    console.log("Switch Turns");
    if (this.state.turns === "X") {
      this.setState({
        turns: players[0]
      });
    } else if (this.state.turns === "O") {
      this.setState({
        turns: players[1]
      });
    }
  };

  determineWinner = () => {
    let indexWinner = null;
    let theWinner = null;

    for (let index = 0; index < pattern.length; index++) {
      const element = pattern[index];

      let finalResult = true;

      const results = [];

      for (let index2 = 0; index2 < element.length; index2++) {
        const element2 = element[index2];
        const theButton = document.querySelector("#Button-ID-" + element2);

        results.push(theButton.innerHTML);
      }

      for (let index2 = 0; index2 < results.length; index2++) {
        const element2 = results[index2];

        if (element2 === "") {
          finalResult = false;
          break;
        }

        if (element2 !== results[0]) {
          finalResult = false;
          break;
        }
      }

      if (finalResult === true) {
        indexWinner = index;
        theWinner = results[0];
        break;
      }
    }

    if (indexWinner !== null) {
      this.setState(
        {
          theWinnerIndex: indexWinner,
          theWinner: theWinner
        },
        () => {
          this.setColorForTheWinnerIndex();
        }
      );
    }
  };

  setColorForTheWinnerIndex = () => {
    pattern[this.state.theWinnerIndex].forEach(element => {
      const theButton = document.querySelector("#Button-ID-" + element);
      theButton.style.color = "#1B5E20";
      theButton.style.backgroundColor = "#C8E6C9";
    });

    setTimeout(() => {
      alert("Selamat " + this.state.theWinner + " Menang!!!");
    }, 200);
  };

  resetAll = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div class="Board">
          <div class="Row-Board">
            <div class="Row-Column">
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={0}
              />
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={1}
              />
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={2}
              />
            </div>
          </div>
          <div class="Row-Board">
            <div class="Row-Column">
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={3}
              />
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={4}
              />
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={5}
              />
            </div>
          </div>
          <div class="Row-Board">
            <div class="Row-Column">
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={6}
              />
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={7}
              />
              <ButtonColumn
                turns={this.state.turns}
                switchTurns={this.switchTurns}
                determineWinner={this.determineWinner}
                btnId={8}
              />
            </div>
          </div>
        </div>
        <button onClick={this.resetAll}>Mulai Baru</button>
      </div>
    );
  }
}

export default Board;
