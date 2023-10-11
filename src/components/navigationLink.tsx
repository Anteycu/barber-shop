import { NavLink } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

export const NavigationLink = ({ children, to }: Props) => {
  return (
    <NavLink
      to={to}
      className="text-lg font-medium text-yellow-950 no-underline active:text-yellow-600 active:underline "
    >
      {children}
    </NavLink>
  );
};
