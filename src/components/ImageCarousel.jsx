import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageCarousel({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const mainSlider = useRef();
  const thumbSlider = useRef();

  const settingsMain = {
    asNavFor: thumbSlider.current,
    ref: mainSlider,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (_, next) => setPhotoIndex(next),
  };

  const settingsThumbs = {
    asNavFor: mainSlider.current,
    ref: thumbSlider,
    slidesToShow: Math.min(images.length, 6),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true
  };

  const slides = images.map(img => ({
    src: img.src,
    description: img.caption || "",
    alt: img.alt || ""
  }));

  return (
    <div className="my-10 max-w-4xl mx-auto px-4">
      {/* Main Carousel */}
      <Slider {...settingsMain}>
        {images.map((img, idx) => (
          <div key={idx} className="cursor-pointer" onClick={() => setLightboxOpen(true)}>
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

      {/* Thumbnail Nav */}
      <div className="mt-6">
        <Slider {...settingsThumbs}>
          {images.map((img, idx) => (
            <div key={idx} className="px-1">
                <img
                src={img.src}
                alt={img.alt}
                className={`h-20 w-full object-contain bg-white dark:bg-slate-800 rounded-md border ${
                    idx === photoIndex ? "border-blue-500" : "border-transparent"
                }`}
                />
            </div>
          ))}
        </Slider>
      </div>

      {/* Lightbox Modal */}
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
