import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>This is JSX element</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Car brand='ford'/>
        </a>
      </header>
    </div>
  );
}
const ele=<Car brand="ford"/>
function Car(props){
  return(
    <h1>This is a {props.brand}!</h1>
  );
}

export default App;
