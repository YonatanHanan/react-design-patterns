import { memo, useState } from "react";

export const ItemsFilters = memo(
  ({ onChange }: { onChange: (newFilter: string) => void }) => {
    console.log("\tItemsFilters render");

    const [filter, setFilter] = useState<string>("");

    const handleFilterChange = (newFilter: string) => {
      setFilter(newFilter);
      onChange(newFilter);
    };

    return (
      <div>
        <label htmlFor="filter">Filter by Category: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
          <option value="C">Category C</option>
        </select>
      </div>
    );
  }
);
