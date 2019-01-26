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
  border-radius: 50px;
  background-color: #abcdef;
  margin: 10vh 25vw 0vh 25vw;
  .timeslot {
    border: 1px solid black;
    border-radius: 100px;
    width: 30vw;
    text-align: center;
  }
`;

class Avaliability extends Component {
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
      {
        time: "9:00 am - 10:00 am",
        timebooked: false
      },
      {
        time: "11:00 am - 12:00 pm",
        timebooked: false
      },

      {
        time: "1:00 pm - 2:00 pm",
        timebooked: false
      },

      {
        time: "3:00 pm - 4:00 pm",
        timebooked: false
      },
      {
        time: "5:00 pm - 6:00 pm",
        timebooked: false
      }
    ]
  };

  activateModal = (e, i) => {
    let value = e.target.innerHTML;
    let updatedNewUser = { ...this.state.newUser };
    if (this.state.availableTimes[i].timebooked === false) {
      updatedNewUser["timeslot"] = value;
      this.setState({ timeslot: value, newUser: updatedNewUser });
    }
    e.target.style.backgroundColor = "red";
    this.setState({ newUser: updatedNewUser });
  };

  handleInput = e => {
    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = e => {
    this.setState(prevState => ({
      timebooked: !prevState.timebooked
    }));
  };

  render() {
    const returnTimes = this.state.availableTimes.map((timeslot, i) => {
      return (
        <div
          key={i}
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={e => this.activateModal(e, i)}
          className=" timeslot"
        >
          {timeslot.time}
        </div>
      );
    });

    return (
      <div className="jumbotron App">
        <h1>
          Welcome! <br /> Please choose a time slot to arrive for your
          appointment
        </h1>
        <div className="board">
          <TimeTable>
            <div>{returnTimes}</div>
          </TimeTable>
          <Modal {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeslot: state.timeslot
});

export default connect(mapStateToProps)(Avaliability);
