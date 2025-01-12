import { randomEffects } from "./image";

console.log("worker loaded");

self.onmessage = (event) => {
  const imageData = event.data;
  const newImageData = [
    randomEffects(imageData, "tint"),
    randomEffects(imageData, "invert"),
    randomEffects(imageData, "brightness"),
    randomEffects(imageData, "shift"),
  ];
  self.postMessage(newImageData);
};
