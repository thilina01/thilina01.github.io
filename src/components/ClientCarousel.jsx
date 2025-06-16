import React from "react";
import Slider from "react-slick";
import clients from "../data/clients.json";

export default function ClientCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: Math.min(clients.length, 4),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="px-4 md:px-16 lg:px-32 py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-8">Trusted By</h2>
      <Slider {...settings}>
        {clients.map((client, idx) => (
          <div key={idx} className="h-40 flex items-center justify-center">
            <div className="text-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 max-h-16 mx-auto object-contain grayscale hover:grayscale-0 transition mb-2"
              />
              <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {client.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
