import { useEffect, useState } from "react";
import { stocksData } from "./stock-data";

type Stock = {
  name: string;
  price: number;
};

export const CustomHooksBad = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>(stocksData);

  useEffect(() => {
    const filtered = stocksData.filter(
      (stock) => stock.price >= minPrice && stock.price <= maxPrice
    );
    setFilteredStocks(filtered);
  }, [minPrice, maxPrice]);

  return (
    <div>
      <h1>Stock Price Filter</h1>

      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </div>

      <h2>Filtered Stocks</h2>
      <ul>
        {filteredStocks.map((stock, i) => (
          <li key={i}>
            {stock.name}: ${stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};
