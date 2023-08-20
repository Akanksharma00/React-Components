import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import AccordianHome from "./Components/Accordian/AccordianHome";
import ButtonHome from "./Components/Button/ButtonHome";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/accordian" element={<AccordianHome />} />
          <Route path="/button" element={<ButtonHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
