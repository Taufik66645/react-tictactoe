import React from "react";

class ButtonColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      disable: false
    };
  }

  _onClick = () => {
    console.log("Ini di klik");

    this.props.switchTurns();

    this.setState(
      {
        text: this.props.turns,
        disable: true
      },
      () => {
        this.props.determineWinner();
      }
    );
  };

  render() {
    return (
      <button
        class="Button-Column"
        onClick={this._onClick}
        disabled={this.state.disable}
        id={"Button-ID-" + this.props.btnId}
      >
        {this.state.text}
      </button>
    );
  }
}

export default ButtonColumn;
