import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Barbers } from "./pages/Barbers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barbers" element={<Barbers />} />
      </Routes>
    </>
  );
}

export default App;
