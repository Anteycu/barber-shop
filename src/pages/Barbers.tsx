import { BarberItem } from "../components/barber";
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
          <ul>
            {barbers.map((barber: Barber) => (
              <BarberItem key={barber.id} barber={barber} />
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
