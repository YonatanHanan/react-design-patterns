import React, { useState } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
};

const items: Item[] = [
  { id: 1, name: "Item 1", category: "A" },
  { id: 2, name: "Item 2", category: "B" },
  { id: 3, name: "Item 3", category: "A" },
  { id: 4, name: "Item 4", category: "C" },
];

export const ContainerPresentationComponentsBad = () => {
  const [filter, setFilter] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    setFilteredItems(
      newFilter ? items.filter((item) => item.category === newFilter) : items
    );
  };

  return (
    <div>
      <h1>Items</h1>
      <label htmlFor="filter">Filter by Category: </label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
        <option value="C">Category C</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - Category {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};
