import React, { Component } from "react";

export default class modal extends Component {
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
    return (
      <div>
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
                  type="tel"
                  name="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Format: 123-456-7890"
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
    );
  }
}
