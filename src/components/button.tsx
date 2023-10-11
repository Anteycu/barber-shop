import { cn } from "../utilities/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  type = "button",
  ...restProps
}: Props) => {
  return (
    <button
      {...restProps}
      className={(cn("p-1 text-xl font-medium text-yellow-900"), className)}
      type={type}
    >
      {children}
    </button>
  );
};
