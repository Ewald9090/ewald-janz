import {
  BrowserRouter as Router,
  Routes,
  Route,
  Naviga
} from "react-router-dom";
import Index from "./components/Index";
import Works from "./components/Works";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/works" element={<Works/>} />
          <Route path="/works/paintings" element={<Works category={"paintings"}/>} />
          <Route path="/works/drawings" element={<Works category={"drawings"}/>} />
          <Route path="/works/collages" element={<Works category={"collages"}/>} />
          <Route path="/works/object" element={<Works category={"object"}/>} />
          <Route exact path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
