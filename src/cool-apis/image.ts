export const grayScaleImage = (imageData: ImageData) => {
  for (let i = 0; i < imageData.data.length; i += 4) {
    const avg =
      (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
    imageData.data[i] = avg; // Red
    imageData.data[i + 1] = avg; // Green
    imageData.data[i + 2] = avg; // Blue
  }

  return imageData;
};

export type Effect = "tint" | "brightness" | "shift" | "invert";

export const randomEffects = (imageData: ImageData, effectType: Effect) => {
  const newImageData = structuredClone(imageData);
  for (let i = 0; i < newImageData.data.length; i += 4) {
    switch (effectType) {
      case "tint": // Random Tint
        newImageData.data[i] += Math.random() * 50 - 25; // Red
        newImageData.data[i + 1] += Math.random() * 50 - 25; // Green
        newImageData.data[i + 2] += Math.random() * 50 - 25; // Blue
        break;

      case "invert": // Random Invert
        if (Math.random() > 0.5) {
          newImageData.data[i] = 255 - newImageData.data[i]; // Red
          newImageData.data[i + 1] = 255 - newImageData.data[i + 1]; // Green
          newImageData.data[i + 2] = 255 - newImageData.data[i + 2]; // Blue
        }
        break;

      case "brightness": {
        // Random Brightness
        const brightnessFactor = Math.random() * 1.5;
        newImageData.data[i] *= brightnessFactor; // Red
        newImageData.data[i + 1] *= brightnessFactor; // Green
        newImageData.data[i + 2] *= brightnessFactor; // Blue
        break;
      }

      case "shift": {
        // Color Shift
        const temp = newImageData.data[i];
        newImageData.data[i] = newImageData.data[i + 1]; // Red <- Green
        newImageData.data[i + 1] = newImageData.data[i + 2]; // Green <- Blue
        newImageData.data[i + 2] = temp; // Blue <- Red
        break;
      }

      default:
        break;
    }

    // Ensure values stay within [0, 255]
    newImageData.data[i] = Math.min(255, Math.max(0, newImageData.data[i]));
    newImageData.data[i + 1] = Math.min(
      255,
      Math.max(0, newImageData.data[i + 1])
    );
    newImageData.data[i + 2] = Math.min(
      255,
      Math.max(0, newImageData.data[i + 2])
    );
  }
  return newImageData;
};
