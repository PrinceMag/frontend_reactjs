import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="Prince">
          <p>I am here</p>
        </Greet>
        <Greet name="Talent">
          <button>Action</button>
        </Greet>
        <Greet name="Elon"/>
        <Welcome name="Prince" />
      </header>
    </div>
  );
}

export default App;
