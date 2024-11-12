type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  const style = {
    ...styles.variant[variant],
    ...styles.size[size],
  };

  return <button style={style}>{children}</button>;
};

const styles = {
  variant: {
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "gray",
    },
  },
  size: {
    sm: {
      minHeight: "10px",
    },
    md: {
      minHeight: "20px",
    },
    lg: {
      minHeight: "30px",
    },
  },
};
