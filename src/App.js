import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetials from "./test/MovieDetials";
import Test from "./test/Test";
import Created from "./test/Created";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Test />} />
          <Route path="/movieDetials/:id" element={<MovieDetials />} />
          <Route path="/addMovie" element={<Created />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
