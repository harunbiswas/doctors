import { BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";
import Roots from "./roots/Roots";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Roots />
      </BrowserRouter>
    </div>
  );
}

export default App;
