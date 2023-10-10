import { BARBERS } from "./constants";
import { Barber } from "./types";

export const getBarbers = () => BARBERS;
export const getBarberById = (id: string | undefined) =>
  BARBERS.find((barber: Barber) => barber.id === id);
