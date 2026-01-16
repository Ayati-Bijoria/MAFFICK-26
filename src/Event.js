import App3 from "./App3";
import './Event.css';
import deshaj from './img/deshaj.jpeg';
import beatstorm from './img/Beat_storm.jpeg';
import anveshan from './img/Anvesham.jpeg';
function App() {
  return (
    <>
      <div className="flip-container">
        <div className="flip-row">
          <App3 imgsrc={beatstorm} front="BEAT STORM" back="ROBAROO 16 Jan 1:15pm-1:30pm" />
          <App3 imgsrc={anveshan} front="ANVESHAN-treasure HUNT" back="ROBOTICS CLUN 23-25Jan LRC"/>
          <App3 imgsrc={deshaj} front="deshaj 1.0" back="24 01"/>
        </div>
      </div>
    </>
  );
}

export default App;
