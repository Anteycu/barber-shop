export function Barber({ barber }: { barber: { id: string } }) {
  return (
    <>
      <h2>{barber.id}</h2>
      <p>Occupation</p>
      <ul>
        Services
        <li>Haircut</li>
        <li>Colorize</li>
      </ul>
    </>
  );
}
// props: {
//   id: string;
// }
