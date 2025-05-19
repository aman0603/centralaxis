"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoCarousel } from "./LogoCarousel";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
      <div
        className="border-x-gray-700 absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border"
        style={{
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderColor: 'var(--border-color)', // Assuming --border-color is defined
        }}
      >
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div
          className=" col-span-1 flex h-full items-center justify-center border-x border-border"
          style={{
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
            borderColor: 'var(--border-color)', // Assuming --border-color is defined
          }}
        />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      <figure
        className="bg-accent-500/40 pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]"
        style={{ backgroundColor: 'rgba(153, 102, 255, 0.4)' }} // Example color
      />
      <figure
        className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block"
        style={{ backgroundColor: 'var(--surface-primary)' }} // Assuming --surface-primary is defined
      />
      <figure
        className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block"
        style={{ backgroundColor: 'var(--surface-primary)' }} // Assuming --surface-primary is defined
      />
      <div
        className="dark:divide-dark-border relative z-10 flex flex-col divide-y divide-border pt-[35px]"
        style={{
          paddingTop: '35px',
          display: 'flex',
          flexDirection: 'column',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderColor: 'var(--border-color)', // Assuming --border-color is defined
        }}
      >
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold mb-4 text-text-primary dark:text-dark-text-primary">
              Data Center Management Software
            </h1>
            <p className="text-sm md:text-lg mb-6 max-w-3xl mx-auto text-text-tertiary dark:text-dark-text-tertiary">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </p>
            <p className="text-sm md:text-lg mb-8 text-centralaxis-light text-text-tertiary dark:text-dark-text-tertiary">
              Built for colocations, data centers, and cloud providers.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center px-4">
          <div className="flex w-full max-w-[100vw] flex-col items-center justify-start md:!max-w-[392px]">
            <Link href="https://calendly.com/margarita-centralaxis/30min">
              <Button className="rounded-none  px-20 py-6 text-white bg-accent-500  text-sm font-medium">Request Demo</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}