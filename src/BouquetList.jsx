export const BouquetWithRoses = ({ bouquet }) => {
  const bouquetWithRoses = bouquet.find(({ flowers }) =>
    flowers.includes("rose")
  );

  const expensiveBoquet = bouquet.filter(({ price }) => price > 2000);

  return (
    <div>
      <h2>Bouquet List</h2>
      {bouquetWithRoses && (
        <p>
          Price of bouquet with roses :{" "}
          <strong>{bouquetWithRoses.price}</strong>
        </p>
      )}
      <hr />
      <div>
        <h2>Expensive Flowers</h2>
        <ol>
          {expensiveBoquet.map(({ id, flowers }) => (
            <p key={id}>
              {flowers.map((flowers) => (
                <p key={flowers}>{flowers}</p>
              ))}
            </p>
          ))}
        </ol>
      </div>
    </div>
  );
};
