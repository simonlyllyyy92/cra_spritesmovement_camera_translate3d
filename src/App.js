import './App.css';
import Character from './components/character'

function App() {
  return (
    <div className="frame">
      <div className="corner_topleft"></div>
      <div className="corner_topright"></div>
      <div className="corner_bottomleft"></div>
      <div className="corner_bottomright"></div>

      <div className="camera">
        <div className="map pixel-art">
          <Character />
        </div>
      </div>
    </div>
  );
}

export default App;
