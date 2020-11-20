import './App.css';
import Map from './components/map'

function App() {
  return (
    <div className="frame">
      <div className="corner_topleft"></div>
      <div className="corner_topright"></div>
      <div className="corner_bottomleft"></div>
      <div className="corner_bottomright"></div>

      <div className="camera">
        <Map />
      </div>
    </div>
  );
}

export default App;
