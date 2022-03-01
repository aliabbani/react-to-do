import { BrowserRouter as Router, Route , Link, Routes} from "react-router-dom";
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import './functionBased/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoContainer />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;