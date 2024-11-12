import { Button } from "./button";

export const VariantPropsBad = () => {
  return (
    <div>
      <Button
        style={{
          minHeight: "30px",
          backgroundColor: "blue",
        }}
      >
        Primary Button
      </Button>
      <Button
        style={{
          minHeight: "20px",
          backgroundColor: "gray",
        }}
      >
        Secondary Button
      </Button>
    </div>
  );
};
