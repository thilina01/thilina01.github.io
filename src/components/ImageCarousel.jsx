import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageCarousel({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  };

  const slides = images.map(img => ({
    src: img.src,
    description: img.caption || "",
    alt: img.alt || ""
  }));

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="my-10 max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="cursor-pointer" onClick={() => openLightbox(idx)}>
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-md max-h-[400px] w-full object-contain mx-auto"
            />
            {img.caption && (
              <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-2">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </Slider>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={slides}
        />
      )}
    </div>
  );
}
