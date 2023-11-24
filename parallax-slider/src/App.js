import "./App.css";
import { Parallax } from "react-parallax";
import Woman from "./images/woman.jpg";
import City from "./images/city.jpg";
import Fly from "./images/fly.jpg";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <div className="text-content">scroll Down</div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={City}>
        <div className="content">
          
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={Fly}>
        <div className="content">
          
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={Woman}>
        <div className="content">
        <div className="text-content">scroll Up</div>
        </div>
      </Parallax>

      
    </div>
  );
}

export default App;
