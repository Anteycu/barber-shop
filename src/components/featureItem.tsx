interface Props {
  children: string;
  title: string;
  src: string;
  order?: string;
}

export const FeatureItem = ({ children, title, src, order }: Props) => {
  return (
    <div
      className={`flex ${order} justify-around items-center mb-20 text-lg font-medium text-yellow-900`}
    >
      <img className="w-1/3 rounded-3xl" src={src} alt="Barber works" />
      <div className="w-1/3">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};
