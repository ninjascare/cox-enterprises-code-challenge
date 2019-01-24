import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <h1>
            Welcome! <br /> please choose a time slot to arrive for your
            appointment
          </h1>
          <div class="form-group">
            <label for="exampleFormControlSelect2">
              Choose appointment time
            </label>
            <br />
            <select
              multiple
              className="form-control"
              id="exampleFormControlSelect2"
              style={{
                width: 700
              }}
            >
              <option data-toggle="modal" data-target="#exampleModalCenter">
                9:00 am
              </option>
              <option>10:00 am</option>
              <option>11:00 am</option>
              <option>12:00 pm</option>
              <option>1:00 pm</option>
              <option>2:00 pm</option>
              <option>3:00 pm</option>
              <option>4:00 pm</option>
              <option>5:00 pm</option>
            </select>
          </div>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input type="text" />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
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

export default App;
