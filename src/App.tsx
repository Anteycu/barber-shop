import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Barbers } from "./pages/Barbers";
import { NotFound } from "./pages/NotFound";
import { BARBERS } from "./domains/barber/constants";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barbers" element={<Barbers barbers={BARBERS} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
