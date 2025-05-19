"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = " ",
}: CTASectionProps) {
  return (
    <section
  className={`container relative mx-auto flex flex-col items-center gap-10 px-6 justify-center ${className}`}
  style={{
    backgroundColor:"#0000",
  }}
>
    <div className="feature-section-card relative flex-col items-center justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10 overflow-hidden"
    style={{
      background: 'none', // Remove direct background
    }}>
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/619634254/229291453.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          filter: ' blur(2px)',
          height:"250px"
        }}
      />
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{title}</h2>
      {subtitle && <p className="text-centralaxis-light text-lg mb-8 text-center">{subtitle}</p>}

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href={buttonLink}>
          <Button className="btn-primary text-lg">{buttonText}</Button>
        </Link>
        {secondaryButtonText && secondaryButtonLink && (
          <Link href={secondaryButtonLink}>
            <Button
              variant="outline"
              className="text-lg border-centralaxis-teal text-centralaxis-teal hover:text-white hover:bg-centralaxis-teal"
            >
              {secondaryButtonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
</section>
  );
}

export function FutureCTASection() {
  return (
    <>  
    <section className="container relative mx-auto flex flex-col items-center gap-6 px-6 py-14 md:py-[72px] ">
      <article className="bg-accent-500/10  flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            We've Built the Future of Data Centers
          </h4>
          <p className="text-centralaxis-light mb-8">Contact our team for a demo</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
          <Link href="https://calendly.com/margarita-centralaxis/30min">
            <Button className="ring-control bg-accent-500 hover:bg-accent-600 border-accent-600 inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5">Set Up a Time</Button>
          </Link>
          <Link href="/learn-more">
            <Button
              variant="outline"
              className=" inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-border px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
            >
              Learn More
            </Button>
          </Link>
        </div>

      </article>
    </section>
    
        
    </>
  );
}

export function BookDemoSection() {
  return (
    

    <CTASection
      title="Book a Demo"
      subtitle="See how CentralAxis can revolutionize your data center operations."
      buttonText="Schedule Now"
      buttonLink="https://calendly.com/margarita-centralaxis/30min"

    />
  );
}
