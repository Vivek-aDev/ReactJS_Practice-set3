export const CarsCategories = ({ cars }) => {
  let categories = cars.reduce((acc, { category }) => {
    acc[category] ? (acc[category] += 1) : (acc[category] = 1);
    return acc;
  }, {});
  return (
    <div>
      <h2>Categories of Cars</h2>
      <p>
        {Object.keys(categories).map((category, index) => (
          <p key={index}>
            {category}: {categories[category]}
          </p>
        ))}
      </p>
    </div>
  );
};
