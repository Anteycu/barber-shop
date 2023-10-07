import { Container } from "./container";
import { CustomNavLink } from "./customNavLink";
import { Logo } from "./logo";
export function Header() {
  return (
    <header className="pt-8 pb-8">
      <Container>
        <div className="flex justify-between items-baseline">
          <Logo />
          <nav className="flex gap-20">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/barbers">Barbers</CustomNavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
