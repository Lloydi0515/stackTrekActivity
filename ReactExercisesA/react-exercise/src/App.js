import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import MainProducts from "./components/MainProducts.jsx";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <MainProducts /> */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<MainProducts />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
