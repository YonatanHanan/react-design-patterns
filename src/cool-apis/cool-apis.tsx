import { useState, useRef, useEffect } from "react";
import ImageWorker from "./image-worker?worker";
import { randomEffects } from "./image";
import Loader from "../common/Loader/loader";
import { InteractionIndicator } from "./InteractionIndicator";

const imageWorker = new ImageWorker();

export const CoolApis = () => {
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [useWorker, setUseWorker] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    imageWorker.onmessage = (event: MessageEvent<ImageData[]>) => {
      applyNewImage(event.data);
    };
  }, []);

  const applyNewImage = (imageData: ImageData[]) => {
    Promise.allSettled<string>(
      imageData.map((image) => {
        return new Promise((res, rej) => {
          const canvas = canvasRef.current;
          if (!canvas) {
            return;
          }
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return;
          }
          ctx.putImageData(image, 0, 0);
          canvas.toBlob((blob) => {
            if (blob) {
              const imageUrl = URL.createObjectURL(blob);
              res(imageUrl);
            } else {
              rej(null);
            }
          });
        });
      })
    ).then((urls) => {
      setProcessedUrl(
        urls.filter((u) => u.status === "fulfilled").map((u) => u.value)
      );
      setIsLoading(false);
    });
  };

  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImageUrl(reader.result);
          processImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (src: string | ArrayBuffer) => {
    setIsLoading(true);
    const img = new Image();
    img.src = src.toString();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      if (useWorker) {
        imageWorker.postMessage(imageData);
      } else {
        const newImageData = [
          randomEffects(imageData, "brightness"),
          randomEffects(imageData, "invert"),
          randomEffects(imageData, "shift"),
          randomEffects(imageData, "tint"),
        ];
        applyNewImage(newImageData);
      }
    };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <label>
          <input
            type="checkbox"
            checked={useWorker}
            onChange={() => setUseWorker((w) => !w)}
          />
          Use Worker
        </label>
        <button
          onClick={() => {
            if (imageUrl) {
              processImage(imageUrl);
            }
          }}
        >
          restart
        </button>
        <InteractionIndicator />
        {isLoading && <Loader />}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {imageUrl && (
          <img src={imageUrl as string} alt="Original" width={200} />
        )}
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        {processedUrl.map((url, i) => {
          return <img key={i} src={url} alt="Grayscale" width={200} />;
        })}
      </div>
    </div>
  );
};
