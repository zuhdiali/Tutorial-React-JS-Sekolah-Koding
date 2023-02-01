import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// Komponen - Properties
function Biodata(props) {
  return <span> umurnya {props.age}</span>;
}

function Greeting(props) {
  return (
    <h1>
      {" "}
      Halo {props.name} - <Biodata age={props.age} />
    </h1>
  );
}

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

        {/* <Greeting name = "Zuhdi Ali Hisyam" age="21"/>
        <Greeting name = "Zuhdi Ali " age ="20"/>
        <Greeting name = "Zuhdi "/>  */}
        {/* <p>
          Zuhdi 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
