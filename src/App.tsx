import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Barbers } from "./pages/Barbers";
import { BarberDetails } from "./pages/BarberDetails";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { BookingItem } from "./components/bookingItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="/barbers/:id" element={<BarberDetails />} />
        <Route path="/barbers/:id/booking" element={<Form />} />
        <Route path="/barbers/:id/booking/bookings" element={<BookingItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
