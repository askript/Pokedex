import './App.css';
import index from './img/index.png'
import Allpokemons from './component/Allpokemons';


function App() {
  return (
      <main>
        <div className="img">
        <img  src={index} alt="Pokedex" />
        </div>
        <div className="App">
          <Allpokemons className="App2"/>
        </div>
      </main>
  );
}

export default App;
