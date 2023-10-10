import { Barber } from "../domains/barber/types";
import { BarberItem } from "../components/barberItem";

type Props = {
  barbers: Barber[];
};

export const BarbersList = ({ barbers }: Props) => {
  return barbers.map((barber: Barber) => (
    <BarberItem key={barber.id} barber={barber} />
  ));
};
