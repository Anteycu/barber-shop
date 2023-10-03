import { BARBERS } from "../domains/barber/constants";
import { Barber } from "../components/barber";

export function Barbers() {
  BARBERS.map((barber) => {
    <Barber barber={barber} />;
  });
  return (
    <>
      <Barber barber={{ id: "2" }} />
    </>
  );
}
