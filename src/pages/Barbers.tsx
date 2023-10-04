import { BarberItem } from "../components/barber";
import { Barber } from "../domains/barber/types";

type Props = {
  barbers: Barber[];
};

export function Barbers({ barbers }: Props) {
  return (
    <div>
      <ul>
        {barbers.map((barber: Barber) => (
          <BarberItem key={barber.id} barber={barber} />
        ))}
      </ul>
    </div>
  );
}
