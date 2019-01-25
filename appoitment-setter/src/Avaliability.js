import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./App.css";

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
        time: "9:00 a.m",
        timebooked: false
      },
      {
        time: "10:00 a.m",
        timebooked: false
      },
      {
        time: "11:00 a.m",
        timebooked: false
      },
      {
        time: "12:00 p.m",
        timebooked: false
      },
      {
        time: "1:00 p.m",
        timebooked: false
      },
      {
        time: "2:00 p.m",
        timebooked: false
      },
      {
        time: "3:00 p.m",
        timebooked: false
      },
      {
        time: "4:00 p.m",
        timebooked: false
      },
      {
        time: "5:00 p.m",
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

          {/* Modal Code for React-strap */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Please enter your name and number to confirm your{" "}
                    {this.state.timeslot} appointment
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span onClick={this.clearInput} aria-hidden="true">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    onChange={this.handleInput}
                    value={this.state.newUser.name}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="modal-body">
                  <input
                    onChange={this.handleInput}
                    value={this.state.newUser.number}
                    name="number"
                    type="text"
                    placeholder="Your Number"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    onClick={this.handleSubmit}
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Book Apppointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeslot: state.timeslot
});

export default connect(mapStateToProps)(Avaliability);
