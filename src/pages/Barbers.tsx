import { Container } from "../components/container";
import { BARBERS } from "../domains/barber/constants";
import { BarbersList } from "../components/barbersList";

export function Barbers() {
  return (
    <div>
      <section className="pt-8 pb-8">
        <Container>
          <div className="w-1/2 mx-auto mb-20 font-medium text-center">
            <h1 className="text-3xl text-yellow-800">Our Barbers</h1>
            <p className="text-lg text-yellow-900">
              Meet the masterful craftsmen of Chocolate Woods. Our experts are
              trained in the latest techniques and inspired by both British and
              Ukrainian barbering traditions.
            </p>
          </div>
          <BarbersList barbers={BARBERS} />
        </Container>
      </section>
    </div>
  );
}
