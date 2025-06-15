import Slider from "react-slick";
import React from "react";

export default function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  };

  return (
    <div className="my-10">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="px-4">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-md mx-auto max-h-[480px] object-contain"
            />
            {img.caption && (
              <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-2">{img.caption}</p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
