import './App.css';
import Character from './components/character'

function App() {
  return (
    <div className="frame">
      <div className="camera">
        <div className="map pixel-art">
          <Character />
        </div>
      </div>
    </div>
  );
}

export default App;
