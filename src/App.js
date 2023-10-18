import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";import Index from "./components/Index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
