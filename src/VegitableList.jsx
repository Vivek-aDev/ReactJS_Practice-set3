import { useState } from "react";

export const VegitableList = ({ vegetables }) => {
  const [highlightFresh, setHighlightFresh] = useState(false);

  const handleHighlightFreshClick = () => {
    setHighlightFresh(true);
  };

  return (
    <div>
      <h2>Vegitable List</h2>
      <ol>
        {vegetables.map(({ id, name, pickDate }) => (
          <li
            key={id}
            style={{
              color: highlightFresh && pickDate === "2023-03-30" ? "green" : {}
            }}
          >
            <p>Name: {name}</p>
            <p>PickDate: {pickDate}</p>
          </li>
        ))}
      </ol>
      <button onClick={handleHighlightFreshClick}>
        <b>Highlight Fresh Vegitables</b>
      </button>
    </div>
  );
};
