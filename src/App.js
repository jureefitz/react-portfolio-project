import Portfolio from './Portfolio';
import './App.css';

function App() {
  return (
  <div className="App">
   <div className="container">
    <div className="appborder">
     <Portfolio />
     </div>
    </div>
    <small>
      This project was coded by Juree Fitzgerald and is {" "}
      <a href="https://github.com/jureefitz/react-portfolio-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
     </small>
  </div>
  );
}

export default App;
