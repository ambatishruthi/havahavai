import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AirportDetail from "./Components/AirportDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Airports/:id" element={<AirportDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
