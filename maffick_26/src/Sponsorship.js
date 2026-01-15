import fest from "./img/fest.png";
import maffick from "./img/maffick.png";
import techno from "./img/techno-logo.png";

function App() {
  return (
    <div className="sp-container" style={{padding:"100px",display:"flex"}}>
      <img src={fest} width="100px" height="100px" />
      <img src={maffick} width="100px" height="100px" />
      <img src={techno} width="100px" height="100px" />
      <img src={fest} width="100px" height="100px" />
      <img src={maffick} width="100px" height="100px" />
      <img src={techno} width="100px" height="100px" />
    </div>
  );
}

export default App;
