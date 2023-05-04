export const CartoonQthree = ({ cartoons }) => {
  const filteredEvenCartoons = cartoons.filter(
    ({ superpower }) => superpower === "Intelligence"
  );

  return (
    <div>
      <ul>
        {filteredEvenCartoons.map(({ id, name, superpower, magnitude }) => (
          <li key={id}>
            <h1>
              {name}-{superpower}-{magnitude}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
