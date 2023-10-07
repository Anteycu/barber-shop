import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-8">
      <Container>
        <div className="flex gap-x-80 pl-20 text-lg font-medium text-yellow-900">
          <div>
            <h3>Features</h3>
            <ul className="list-none p-0 text-base">
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Bookings
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Balance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul className="list-none p-0 text-base">
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  History
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul className="list-none p-0 text-base">
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-yellow-950 no-underline hover:text-yellow-600"
                  href=""
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-lg font-bold text-yellow-900 text-center">
          &copy; 2023 Chocolate Woods
        </p>
      </Container>
    </footer>
  );
};
