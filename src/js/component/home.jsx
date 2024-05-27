import React, { Component } from "react";
import SecondsCounter from "./SecondsCounter";
import TimeList from "./TimeList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedTimes: [],
    };
  }

  setSavedTimes = (newTimes) => {
    this.setState({ savedTimes: newTimes });
  };

  render() {
    const { savedTimes } = this.state;
    return (
      <>
        <SecondsCounter savedTimes={savedTimes} setSavedTimes={this.setSavedTimes} />
        <TimeList savedTimes={savedTimes} />
      </>
    );
  }
}

export default Home;
