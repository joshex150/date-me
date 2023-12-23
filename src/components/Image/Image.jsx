import React, { useEffect, useState } from "react";

const ImageRem = ({ src, alt, className, onClick, loading, width, height }) => {
  const [cachedSrc, setCachedSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = new Image();
        image.src = src;

        image.onload = () => {
          setCachedSrc(src); // Update cachedSrc when the image is successfully loaded
        };
        image.onerror = (error) => {
          console.error("Error loading image:", error);
        };
      } catch (error) {
        console.error("Error creating image:", error);
      }
    };

    loadImage();
  }, [src]);

  return (
    <img
      src={cachedSrc || src}
      alt={alt}
      className={`${className} border-0 outline-0`}
      onClick={onClick}
      loading={loading}
      width={width}
      height={height}
    />
  );
};

export default ImageRem;
