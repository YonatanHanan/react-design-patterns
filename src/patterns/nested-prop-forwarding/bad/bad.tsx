import { ComponentProps, ReactNode } from "react";
import styles from "../nested-prop-forwarding.module.css";

function Text({
  children,
  textProps,
}: {
  children?: ReactNode;
  textProps: ComponentProps<"span">;
}) {
  return (
    <span className="text-primary" {...textProps}>
      {children}
    </span>
  );
}

function Button({
  children,
  textProps,
  buttonProps,
}: {
  children: ReactNode;
  textProps: ComponentProps<typeof Text>;
  buttonProps: ComponentProps<"button">;
}) {
  return (
    <button {...buttonProps}>
      <Text {...textProps}>{children}</Text>
    </button>
  );
}

export const NestedPropForwardingBad = () => {
  return (
    <Button
      buttonProps={{
        onClick: () => {
          console.log("wow");
        },
      }}
      textProps={{ textProps: { className: styles.red } }}
    >
      Button with red text
    </Button>
  );
};
