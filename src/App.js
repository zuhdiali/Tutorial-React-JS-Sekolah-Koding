import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  render() {
    return <div> {this.state.time} Detik</div>;
  }

  // lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    // update state time setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start="0" />
      </header>
    </div>
  );
}

export default App;
