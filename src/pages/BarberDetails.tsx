import { getBarberById } from "../domains/barber/fakeBarberApi";
import { Link, useParams } from "react-router-dom";
import { Barber } from "../domains/barber/types";
import { Button } from "../components/button";
import { Container } from "../components/container";

export const BarberDetails = () => {
  const { id } = useParams();
  const barber: Barber | undefined = getBarberById(id);
  if (!barber) {
    return (
      <section className="pt-8 pb-8">
        <Container>
          <p>We haven`t such barber</p>
        </Container>
      </section>
    );
  }
  return (
    <section className="pt-8 pb-8">
      <Container>
        <div className="grid grid-cols-2 gap-20 text-xl font-medium text-yellow-900">
          <img
            className="place-self-center"
            src="https://picsum.photos/id/832/400/300"
            alt="Barber"
          />
          <div>
            <h2 className="text-3xl text-yellow-800">{barber.name}</h2>
            <p>Hairdresser-colorist</p>
            <p> Services</p>
            <ul>
              {barber.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <Link className="col-span-2 place-self-center w-1/4" to="booking">
            <Button className="red">Booking</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
