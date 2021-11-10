import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FaB Auth stuff
        </p>
        <Facebook />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting started lol
        </a>
      </header>
    </div>
  );
}

export default App;
