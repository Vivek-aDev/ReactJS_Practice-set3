export const Cartoon = ({ cartoons }) => {
  const filteredCartoons = cartoons.filter(({ magnitude }) => magnitude > 5);

  return (
    <div>
      <h2>Cartoons With magnitude greater than 5</h2>
      <ul>
        {filteredCartoons.map(({ id, name, superpower, magnitude }) => (
          <li key={id}>
            <p>
              <strong>Name:</strong>
              {name}
            </p>
            <p>
              <strong>Superpower:</strong>
              {superpower}
            </p>
            <p>
              <strong>Magnitude:</strong>
              {magnitude}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
