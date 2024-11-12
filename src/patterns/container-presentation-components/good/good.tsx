import { useCallback, useMemo, useState } from "react";
import { ItemsList, BetterItemsList } from "./ItemList";
import { ItemsFilters } from "./ItemFilters";
import { randomFromArray } from "../../../common/utils";

type Item = {
  id: number;
  name: string;
  category: string;
};

const items: Item[] = Array(1000)
  .fill(null)
  .map((_, i) => {
    return {
      id: i,
      name: "Item " + i,
      category: randomFromArray(["A", "B", "C"]),
    };
  });

export const ContainerPresentationComponentsGood = () => {
  const [filter, setFilter] = useState<string>("");
  const [showList, setShowList] = useState(false);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  console.log("parent render");

  return (
    <div>
      <h1>Items</h1>
      <button onClick={() => setShowList((s) => !s)}>wow</button>
      <ItemsFilters onChange={handleFilterChange} />
      {showList && <ItemsList items={filteredItems} />}
    </div>
  );
};

export const ContainerPresentationComponentsEvenBetter = () => {
  const [filter, setFilter] = useState<string>("");
  const [showList, setShowList] = useState(false);

  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  const filteredItems = useMemo(() => {
    return filter ? items.filter((item) => item.category === filter) : items;
  }, [filter]);

  console.log("parent render");

  return (
    <div>
      <h1>Items</h1>
      <button onClick={() => setShowList((s) => !s)}>wow</button>
      <ItemsFilters onChange={handleFilterChange} />
      {showList && <BetterItemsList items={filteredItems} />}
    </div>
  );
};
