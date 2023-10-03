import { Barber } from "../domains/barber/types";
export function Barb({ name, services }: Barber) {
  return (
    <>
      <h2>{name}</h2>
      <p>Hairdresser-colorist</p>
      <ul>
        Services
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </>
  );
}
