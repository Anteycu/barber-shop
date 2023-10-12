import { Link } from "react-router-dom";
import { Barber } from "../domains/barber/types";

type Props = {
  barber: Barber;
};

export function BarberItem({ barber: { name, services, id } }: Props) {
  return (
    <div className="text-base font-medium">
      <Link className="text-yellow-900 no-underline" to={id}>
        <h2 className="text-xl text-yellow-800">{name}</h2>
        <p>Hairdresser-colorist</p>
        <p> Services</p>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}
