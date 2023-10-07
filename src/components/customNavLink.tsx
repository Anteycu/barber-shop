import { NavLink } from "react-router-dom";

interface Props {
  children: string;
  to: string;
}

export const CustomNavLink = ({ children, to }: Props) => {
  return (
    <NavLink
      to={to}
      className="text-lg font-medium text-yellow-950 no-underline active:text-yellow-600 active:underline "
    >
      {children}
    </NavLink>
  );
};
