import { useEffect, useState } from "react";
import { stocksData as initStocksData } from "./stock-data";

type Stock = {
  name: string;
  price: number;
};

const useStockFilter = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>(initStocksData);

  // Handle filtering logic
  useEffect(() => {
    const filtered = initStocksData.filter(
      (stock) => stock.price >= minPrice && stock.price <= maxPrice
    );
    setFilteredStocks(filtered);
  }, [minPrice, maxPrice]);

  const setPrice = (min: number, max: number) => {
    if (min < 0 || max < 0) {
      return;
    }
    if (max > min) {
      setMinPrice(min);
      setMaxPrice(max);
    } else {
      setMinPrice(min);
      setMaxPrice(max + 1);
    }
  };

  // Return necessary state and handlers
  return {
    minPrice,
    maxPrice,
    filteredStocks,
    setMinPrice: (price: number) => setPrice(price, maxPrice),
    setMaxPrice: (price: number) => setPrice(minPrice, price),
  };
};

export const CustomHooksGood = () => {
  const { minPrice, maxPrice, filteredStocks, setMaxPrice, setMinPrice } =
    useStockFilter();

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
