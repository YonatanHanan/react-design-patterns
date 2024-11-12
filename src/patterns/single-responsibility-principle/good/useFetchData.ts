import { useState, useEffect } from "react";

// ✅ Single responsibility: managing data
export function useFetchData() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return data;
}

// ✅ Single responsibility: managing data through react query
// export function useFetchData() {
//     return useQuery({
//       queryKey: ['data'],
//       queryFn: () => fetch('/api/data'),
//     });
//   }
