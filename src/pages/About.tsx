import { Container } from "../components/container";
import { Services } from "../components/services";
export function About() {
  return (
    <div>
      <section className="pt-8 pb-8 text-lg font-medium text-yellow-900">
        <Container>
          <h1 className="text-2xl text-yellow-800">
            Mission of the Chocolate Woods
          </h1>
          <p>
            Our mission is to help beauty professionals save time. Thats why I
            want to create app that allows them to manage their clients easily.
            On the other hand to provide people with fast and easy way for
            booking beauty services from their favourite master.
          </p>
        </Container>
      </section>
      <Services />
    </div>
  );
}
