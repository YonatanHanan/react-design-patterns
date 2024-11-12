import { ContainerPresentationComponentsBad } from "./bad/bad";
import {
  ContainerPresentationComponentsEvenBetter,
  ContainerPresentationComponentsGood,
} from "./good/good";

export const ContainerPresentationComponents = () => {
  return (
    <div>
      <ContainerPresentationComponentsBad />
      <ContainerPresentationComponentsGood />
      <ContainerPresentationComponentsEvenBetter />
    </div>
  );
};
