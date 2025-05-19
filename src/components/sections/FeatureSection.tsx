"use client";

import React from "react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
  id?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  features: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
  imageRight?: boolean;
  videoSrc?: string;
  darkBackground?: boolean;
  className?: string;
}

export function FeatureSection({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  imageRight = false,
  videoSrc,
  darkBackground = false,
  className = "",
}: FeatureSectionProps) {
  return (
    <section
      className={`section-padding ${
        darkBackground ? "bg-black/30" : "bg-black"
      } ${className}`}
    >
      <div className="container">
        <div className="feature-section-card overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className={`w-full lg:w-1/2 ${imageRight ? "lg:order-last" : ""}`}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                {videoSrc ? (
                  <video
                    className="w-full h-auto rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              {subtitle && (
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-centralaxis-teal bg-opacity-20 text-centralaxis-teal rounded-full">
                    {subtitle}
                  </span>
                </div>
              )}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
              <p className="text-centralaxis-light mb-8">{description}</p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={`feature-${feature.id || feature.title}-${index}`}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-centralaxis-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{feature.title}</h3>
                      <p className="text-centralaxis-light">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
