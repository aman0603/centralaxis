"use client";

import { useEffect, useRef, useState } from "react";

// Define the logo data
const logos = [
  {
    name: "Nvidia",
    url: "https://ext.same-assets.com/619634254/3739776114.svg"
  },
  {
    name: "AMD",
    url: "https://ext.same-assets.com/619634254/1042689903.svg"
  },
  {
    name: "Cisco",
    url: "https://ext.same-assets.com/619634254/927098863.svg"
  },
  {
    name: "Dell",
    url: "https://ext.same-assets.com/619634254/3090256379.svg"
  },
  {
    name: "Schneider Electric",
    url: "https://ext.same-assets.com/619634254/3577591324.svg"
  },
  {
    name: "Intel",
    url: "https://ext.same-assets.com/619634254/3726285320.svg"
  },
  {
    name: "Lenovo",
    url: "https://ext.same-assets.com/619634254/319316314.svg"
  },
  {
    name: "Supermicro",
    url: "https://ext.same-assets.com/619634254/837513161.svg"
  }
];

export function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % logos.length);
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center gap-10 py-14 md:py-[72px]">
      <h2 className="text-dark-text-tertiary text-center tracking-tight opacity-80">
        Seamless integrations with any data center hardware
      </h2>
      <div className="no-scrollbar flex max-w-full justify-center overflow-auto">
        <div className="logoCarousel overflow-hidden">
          <div className="from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-r xl:hidden" />
          <div className="from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-l xl:hidden" />
          <div
            ref={carouselRef}
            className="logoTrack "
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="inline-flex items-center justify-center min-w-[120px] mx-6"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}