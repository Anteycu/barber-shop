import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/barbers">Barbers</NavLink>
    </nav>
  );
}
