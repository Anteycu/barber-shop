import { Container } from "../components/container";
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
      <section className="pt-8 pb-8 text-lg font-medium text-yellow-900">
        <Container>
          <h2 className="text-2xl text-yellow-800">Our services</h2>
          <ul>
            <li>
              <h3 className="text-xl">Calendar</h3>
              <p>
                Useful instrument for planing your work time. Setting and
                understanding your vacant hours for different client orders.
              </p>
            </li>
            <li>
              <h3 className="text-xl">Balance</h3>
              <p>Help to count your great profit.</p>
            </li>
            <li>
              <h3>Online booking</h3>
              <p>
                Comfortable and intuitive feature to help clients booking
                services and seeing your vacant time.
              </p>
            </li>
            <li>
              <h3 className="text-xl">Client base</h3>
              <p>
                Accumulate information from registered users and helps beauty
                professionalists to keep in touch with their clients.
              </p>
            </li>
          </ul>
        </Container>
      </section>
    </div>
  );
}
