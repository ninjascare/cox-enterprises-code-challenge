import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./App.css";
import Modal from "./components/Modal";

const TimeTable = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid black;
  margin: 10vh 25vw 0vh 25vw;
  .timeslot {
    border: 1px solid black;
    width: 30vw;
    text-align: center;
  }
`;

class App extends Component {
  state = {
    timeslot: "",
    newUser: {
      name: "",
      number: ""
    },
    blankUser: {
      name: "",
      number: ""
    },
    availableTimes: [
      "9:00 a.m.",
      "10:00 a.m.",
      "11:00 a.m.",
      "12:00 p.m.",
      "1:00 p.m.",
      "2:00 p.m.",
      "3:00 p.m.",
      "4:00 p.m.",
      "5:00 p.m."
    ],
    timebooked: false
  };

  activateModal = e => {
    if (e.target.style.backgroundColor !== "red") {
      e.target.style.backgroundColor = "red";
      let value = e.target.innerHTML;
      this.setState({ timeslot: value });
      this.setState({ timebooked: false });
    }
  };

  handleInput = e => {
    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  changeColor = () => {
    if (this.state.timebooked === true) {
      console.log("let's change to red");
    } else {
      console.log("let's do nothing");
    }
  };

  handleSubmit = e => {
    this.setState(prevState => ({
      timebooked: !prevState.timebooked
    }));
    this.changeColor();
  };

  render() {
    const returnTimes = this.state.availableTimes.map((timeslot, i) => {
      return (
        <div
          key={i}
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={this.activateModal}
          className="timeslot"
          id={i}
        >
          {timeslot}
        </div>
      );
    });

    return (
      <div className="jumbotron App">
        <h1>
          Welcome! <br /> please choose a time slot to arrive for your
          appointment
        </h1>
        <div className="board">
          <TimeTable>
            <div>{returnTimes}</div>
          </TimeTable>
        </div>
        <Modal {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeslot: state.timeslot
});

export default connect(mapStateToProps)(App);
