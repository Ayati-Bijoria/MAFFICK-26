import App3 from "./App3";
import './Event.css';
import deshaj from './img/deshaj.jpeg';
function App() {
  return (
    <>
      <div className="flip-container">
        <div className="flip-row">
          <App3 imgsrc={deshaj} front="deshaj 1.0" back="24 01"/>
          <App3 imgsrc={deshaj} front="deshaj 1.0" back="24 01"/>
          <App3 imgsrc={deshaj} front="deshaj 1.0" back="24 01"/>
        </div>
      </div>
    </>
  );
}

export default App;
