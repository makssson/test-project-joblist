import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
