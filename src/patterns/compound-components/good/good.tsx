import { Toggle } from "./good-base";

export const CompoundComponentsGood = () => {
  return (
    <div>
      <Toggle>
        <Toggle.Button>Toggle</Toggle.Button>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
      </Toggle>

      <hr />

      <Toggle>
        <Toggle.Button>Toggle</Toggle.Button>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>

        <Toggle>
          <Toggle.Button>Toggle 2</Toggle.Button>
          <Toggle.On>2 The button is on</Toggle.On>
          <Toggle.Off>2 The button is off</Toggle.Off>
        </Toggle>
      </Toggle>
    </div>
  );
};
