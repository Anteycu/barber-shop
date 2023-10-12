import { SERVICES } from "./constants";
import { Container } from "../container";
import { Service } from "./types";

export const Services = () => {
  return (
    <section className="pt-8 pb-8 text-lg font-medium text-yellow-900">
      <Container>
        <h2 className="text-2xl text-yellow-800">Our services</h2>
        <ul>
          {SERVICES.map(({ title, description, id }: Service) => (
            <li key={id}>
              <h3 className="text-xl">{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
