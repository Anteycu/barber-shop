import { Barb } from "../components/barber";
import { Barber } from "../domains/barber/types";

export function Barbers({ barbArr }: { barbArr: Barber[] }) {
  return (
    <>
      <ul>
        {barbArr.map((barber: Barber) => (
          <Barb key={barber.id} {...barber} />
        ))}
      </ul>
    </>
  );
}
