type Stock = {
  name: string;
  price: number;
};

const generateRandomStocks = (numStocks: number): Stock[] => {
  const stockNames = [
    "Apple",
    "Google",
    "Amazon",
    "Tesla",
    "Microsoft",
    "Facebook",
    "Netflix",
    "Twitter",
    "Snapchat",
    "Nvidia",
  ];

  const generateRandomPrice = (min: number, max: number): number => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2)); // Generate a random price between min and max
  };

  const generateStock = (): Stock => {
    const randomName =
      stockNames[Math.floor(Math.random() * stockNames.length)]; // Randomly pick a stock name
    const price = generateRandomPrice(1, 10); // Price between $100 and $3500
    return { name: randomName, price };
  };

  // Generate an array of stocks, allowing for repeated names
  return Array.from({ length: numStocks }, generateStock);
};
export const stocksData: Stock[] = generateRandomStocks(50);
