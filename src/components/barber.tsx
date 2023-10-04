import { Barber } from "../domains/barber/types";

type Props = {
  barber: Barber;
};

export function BarberItem({ barber: { name, services } }: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Hairdresser-colorist</p>
      <p> Services</p>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
