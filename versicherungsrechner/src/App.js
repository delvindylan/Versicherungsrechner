import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <div className="bg-image">
    
      <Navbar />

      <header className="App-header">
          
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      </div>

    
      
    </div>
  );
}

export default App;
