import { Container } from "./container";
import { NavigationLink } from "./navigationLink";
import { Logo } from "./logo";
export function Header() {
  return (
    <header className="pt-8 pb-8">
      <Container>
        <div className="flex justify-between items-baseline">
          <Logo />
          <nav className="flex gap-20">
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/about">About</NavigationLink>
            <NavigationLink to="/barbers">Barbers</NavigationLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
