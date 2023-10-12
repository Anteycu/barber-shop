import { Container } from "../container";
import { LINKS } from "./constants";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-8">
      <Container>
        <div className="flex gap-x-80 pl-20 text-lg font-medium text-yellow-900">
          {LINKS.map(({ title, links }) => (
            <div key={links[0].href}>
              <h3>{title}</h3>
              <ul className="list-none p-0 text-base">
                {links.map(({ text, href }) => (
                  <li key={href}>
                    <a
                      className="text-yellow-950 no-underline hover:text-yellow-600"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-lg font-bold text-yellow-900 text-center">
          &copy; 2023 Chocolate Woods
        </p>
      </Container>
    </footer>
  );
};
