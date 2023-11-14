import logo from './logo.svg';
import './App.css';
import MiComponente from './componentes/MiComponente';
import NavBar from './componentes/NavBar';


const  App=()=> {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hola
        </a>
        <MiComponente/>
      </header>
    </div>
  );
}

export default App;
