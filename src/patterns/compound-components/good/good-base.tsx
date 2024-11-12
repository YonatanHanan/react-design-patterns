import {
  createContext,
  useState,
  useContext,
  ReactNode,
  ReactElement,
  ComponentProps,
} from "react";

// Define the shape of the context
interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

// Create a context with a default value of `undefined`
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

interface ToggleProps {
  children: ReactNode;
}

// Main component exported for use in project
export const Toggle = ({ children }: ToggleProps) => {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn(!on);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Define compound components with typed props
interface ToggleChildProps {
  children: ReactNode;
}

// Compound component attached to main component
Toggle.On = function ToggleOn({
  children,
}: ToggleChildProps): ReactElement | null {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error("Toggle components must be used within a Toggle provider");

  return context.on ? <>{children}</> : null;
};

// Compound component attached to main component
Toggle.Off = function ToggleOff({
  children,
}: ToggleChildProps): ReactElement | null {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error("Toggle components must be used within a Toggle provider");

  return !context.on ? <>{children}</> : null;
};

// Compound component attached to main component
Toggle.Button = function ToggleButton(
  props: ComponentProps<"button">
): ReactElement {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error("Toggle components must be used within a Toggle provider");

  return <button onClick={context.toggle} {...props} />;
};

Toggle.Panel = function TogglePannel({
  children,
}: ToggleChildProps): ReactElement | null {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error("Toggle components must be used within a Toggle provider");

  return !context.on ? <>{children}</> : null;
};
