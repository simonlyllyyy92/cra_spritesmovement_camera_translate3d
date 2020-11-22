import './App.css';
import Camera from './components/camera'

function App() {
  return (
    <div className="frame">
      <div className="corner_topleft"></div>
      <div className="corner_topright"></div>
      <div className="corner_bottomleft"></div>
      <div className="corner_bottomright"></div>
      <Camera />
    </div>
  );
}

export default App;
