"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Arrow = ({ className, style, onClick, direction }: any) => (
  <button
    type="button"
    className={className}
    style={{
      ...style,
      display: "block",
      background: "#c68642",
      borderRadius: "50%",
      border: "none",
      width: 35,
      height: 35,
      left: direction === "left" ? -45 : undefined,
      right: direction === "right" ? -45 : undefined,
    }}
    onClick={onClick}
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    {direction === "left" ? "‹" : "›"}
  </button>
);

const ImageCarousel: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState(0);
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    swipe: true,
    touchMove: true,
    touchThreshold: 8,
    accessibility: true,
    focusOnSelect: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    afterChange: (current: number) => setFocusedIdx(current),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={src + idx} className="px-2">
            <div
              className={`rounded-xl overflow-hidden bg-white shadow-lg ${
                idx === focusedIdx ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (idx === focusedIdx) setModalOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`Rock feature ${idx + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-[400px] sm:h-[400px]"
                draggable={false}
                priority={idx < 3}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal for focused image */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-xl shadow-2xl p-4 max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-black"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              tabIndex={0}
            >
              &times;
            </button>
            <Image
              src={images[focusedIdx]}
              alt={`Rock feature focused`}
              width={1200}
              height={900}
              className="object-cover w-full h-auto rounded-lg"
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
