import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./components/Index";
import Works from "./components/Works";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/works" element={<Works/>} />
          <Route exact path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
