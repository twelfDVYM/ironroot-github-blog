"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const images = [
  "https://twelfDVYM.github.io/host/IronRoot1.jpg",
  "https://twelfDVYM.github.io/host/IronRoot0.jpg",
  "https://twelfDVYM.github.io/host/IronRoot3.jpg",
  "https://twelfDVYM.github.io/host/IronRoot2.jpg",
  "https://twelfDVYM.github.io/host/IronRoot4.jpg",
  "https://twelfDVYM.github.io/host/IronRoot8.jpg",
  "https://twelfDVYM.github.io/host/IronRoot5.jpg",
  "https://twelfDVYM.github.io/host/IronRoot6.jpg",
  "https://twelfDVYM.github.io/host/IronRoot7.jpg",
  "https://twelfDVYM.github.io/host/IronRoot9.jpg",
];

const ImageCarousel: React.FC = () => {
  const [current, setCurrent] = useState(1); // Center image index
  const touchStartX = useRef<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prev();
    if (deltaX < -50) next();
    touchStartX.current = null;
  };

  // Infinite scroll logic for prev/next
  const prev = () => {
    setIsZoomed(false);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const next = () => {
    setIsZoomed(false);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Get 3 images: left, center, right (with wrap-around)
  const getVisibleImages = () => {
    const leftIdx = (current - 1 + images.length) % images.length;
    const rightIdx = (current + 1) % images.length;
    return [images[leftIdx], images[current], images[rightIdx]];
  };
  const visibleImages = getVisibleImages();

  return (
    <div
      className="relative w-full max-w-7xl flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Prefetch all images (hidden) */}
      {images.map((src, idx) => (
        <Image
          key={src + idx}
          src={src}
          alt={`Prefetch ${idx}`}
          width={10}
          height={10}
          style={{ display: "none" }}
          priority={false}
          draggable={false}
        />
      ))}
      {/* Prev Button - hidden on mobile */}
      <button
        onClick={prev}
        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 hidden sm:block"
        aria-label="Previous"
      >
        &#8592;
      </button>
      {/* Carousel Images */}
      <div className="flex w-full max-w-7xl justify-center items-center gap-4">
        {visibleImages.map((src, idx) => (
          <div
            key={src}
            className={`transition-all duration-700 ease-in-out will-change-transform ${
              idx === 1
                ? isZoomed
                  ? "scale-150 z-20 shadow-2xl"
                  : "scale-105 z-10 shadow-2xl"
                : "scale-90 opacity-70 z-0"
            } rounded-xl overflow-hidden bg-white`}
            style={{
              width: idx === 1 ? 500 : 400,
              height: idx === 1 ? 400 : 300,
              cursor: idx === 1 ? "pointer" : "default",
            }}
            onClick={idx === 1 ? () => setIsZoomed((z) => !z) : undefined}
          >
            <Image
              src={src}
              alt={`Rock feature ${current - 1 + idx + 1}`}
              width={500}
              height={400}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Next Button - hidden on mobile */}
      <button
        onClick={next}
        className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 hidden sm:block"
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;
