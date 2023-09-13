 // cropUtils.js

export const AREA_UNITS = {
    PX: "px",
    PERCENT: "%",
  };
  
  export async function getCroppedImg(imageSrc, pixelCrop, unit) {
    const image = new Image();
    image.src = imageSrc;
  
    return new Promise((resolve, reject) => {
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
  
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
  
        ctx.drawImage(
          image,
          pixelCrop.x * scaleX,
          pixelCrop.y * scaleY,
          pixelCrop.width * scaleX,
          pixelCrop.height * scaleY,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
  
        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/jpeg");
      };
  
      image.onerror = (error) => {
        reject(error);
      };
    });
  }
  