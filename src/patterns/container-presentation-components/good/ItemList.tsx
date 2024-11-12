import { memo } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
};

type ItemsListProps = {
  items: Item[];
};

export const ItemsList = ({ items }: ItemsListProps) => {
  console.log("\tItemsList render");

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Category {item.category}
        </li>
      ))}
    </ul>
  );
};

export const BetterItemsList = memo(({ items }: ItemsListProps) => {
  console.log("\tBetterItemsList render");

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Category {item.category}
        </li>
      ))}
    </ul>
  );
});
