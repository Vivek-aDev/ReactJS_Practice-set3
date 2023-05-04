export const CartoonQtwo = ({ cartoons }) => {
  const filteredEvenCartoons = cartoons.filter(
    ({ magnitude }) => magnitude % 2 === 0
  );

  return (
    <div>
      <ul>
        {filteredEvenCartoons.map(({ id, name, superpower, magnitude }) => (
          <li key={id}>
            <h1>{name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
