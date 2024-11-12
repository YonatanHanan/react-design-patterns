import { ComponentProps, ReactNode } from "react";
import styles from "../nested-prop-forwarding.module.css";

function Text({
  children,
  ...rest
}: {
  children?: ReactNode;
} & ComponentProps<"span">) {
  return (
    <span className="text-primary" {...rest}>
      {children}
    </span>
  );
}

// Button component uses `Text` component for its text
function Button({
  children,
  textProps,
  ...rest
}: {
  children: ReactNode;
  textProps: ComponentProps<typeof Text>;
} & ComponentProps<"button">) {
  return (
    <button {...rest}>
      {/* ✅ `textProps` are forwarded */}
      <Text {...textProps}>{children}</Text>
    </button>
  );
}

export const NestedPropForwardingGood = () => {
  return (
    <Button
      onClick={() => {
        console.log("wow");
      }}
      textProps={{ className: styles.red }}
    >
      Button with red text
    </Button>
  );
};
