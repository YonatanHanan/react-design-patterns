import { ReactNode, useState } from "react";

export const Toggle = ({
  button,
  on,
  off,
}: {
  button: ReactNode;
  on?: ReactNode;
  off?: ReactNode;
}) => {
  const [showing, setShowing] = useState(false);

  return (
    <div>
      <button onClick={() => setShowing((s) => !s)}>{button}</button>
      {showing && on}
      {!showing && off}
    </div>
  );
};
