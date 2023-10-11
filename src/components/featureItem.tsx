import { cn } from "../utilities/cn";
interface Props {
  children: React.ReactNode;
  title: string;
  src: string;
  className?: string;
}

export const FeatureItem = ({ children, title, src, className }: Props) => {
  return (
    <div
      className={cn(
        "flex justify-around items-center mb-40 text-xl font-medium text-yellow-900",
        className
      )}
    >
      <img className="w-1/2 rounded-3xl" src={src} alt="Barber works" />
      <div className="w-1/3">
        <h2 className="text-3xl">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};
