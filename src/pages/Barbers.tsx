import { BarberItem } from "../components/barberItem";
import { Container } from "../components/container";
import { Barber } from "../domains/barber/types";

type Props = {
  barbers: Barber[];
};

export function Barbers({ barbers }: Props) {
  return (
    <div>
      <section className="pt-8 pb-8">
        <Container>
          <div className="w-1/2 mx-auto mb-20 font-medium text-center">
            <h1 className="text-3xl text-yellow-800">Our Barbers</h1>
            <p className="text-lg text-yellow-900">
              Meet the masterful craftsmen of Chocolate Woods. Our experts are
              trained in the latest techniques and inspired by both British and
              Ukrainian barbering traditions.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-y-20">
            {barbers.map((barber: Barber) => (
              <BarberItem key={barber.id} barber={barber} />
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
