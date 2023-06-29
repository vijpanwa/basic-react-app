import { useState } from "react";

interface ListGroupProps {
  cities: string[];
  heading: string;
  onSelectedItem: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectedItem }: ListGroupProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.length === 0 && <p>No item found</p>}
        {cities.map((city, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
