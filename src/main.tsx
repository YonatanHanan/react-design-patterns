import { setupFakeFetch } from "./common/fake-fetch.ts";
setupFakeFetch({
  mocks: {
    "/api/data": {
      body: JSON.stringify({ asd: "123" }),
      status: 200,
    },
  },
  delay: 1000,
});
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
