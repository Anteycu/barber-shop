import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Barbers } from "./pages/Barbers";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/barbers">Barbers</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
