import { Barber } from "../domains/barber/types";
import { BarberItem } from "../components/barberItem";

type Props = {
  barbers: Barber[];
};

export const BarbersList = ({ barbers }: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-y-20 gap-x-40">
        {barbers.map((barber: Barber) => (
          <BarberItem key={barber.id} barber={barber} />
        ))}
      </ul>
    </div>
  );
};
