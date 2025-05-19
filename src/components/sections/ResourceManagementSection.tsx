"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";


const resourceCards = [
  {
    id: "resource-management",
    title: "Resource Management",
    icon: "https://ext.same-assets.com/619634254/2929883164.svg",
    description: "See all of your resources in one place, update issues, and dynamically plan your resources.",
  },
  {
    id: "deployment-automation",
    title: "Deployment Automation",
    icon: "https://ext.same-assets.com/619634254/2862076902.svg",
    description: "From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process.",
  },
  {
    id: "networking",
    title: "Networking",
    icon: "https://ext.same-assets.com/619634254/362086393.svg",
    description: "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
  },
  {
    id: "firmware-versioning",
    title: "Firmware Versioning",
    icon: "https://ext.same-assets.com/619634254/1692619779.svg", // Updated icon
    description: "Ensure that your firmware is always up to date and secure with our automated versioning system.",
  },
  {
    id: "digital-twins",
    title: "Digital Twins",
    icon: "https://ext.same-assets.com/619634254/3387612891.svg", // Updated icon
    description: "Plan capacity intelligently with our digital twin technology.",
  },
];

export function ResourceManagementSection() {
  return (
    <section className="bg-black section-paddingrelative relative flex flex-col items-center gap-10 py-14 lg:container md:py-[72px] lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28">
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
        <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
          <div className="flex flex-col items-start gap-3 self-start-2">
            <h3 className="bg-surface-secondary text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
              Built for Scale
            </h3>
            <div className="flex max-w-[800px] flex-col items-start justify-center gap-1 self-start">

              <h4 className="text-pretty text-left text-3xl font-medium md:text-4xl" title="Supercharge Team Productivity">Dynamic Resource Management</h4>
            </div>
            <p className="text-text-tertiary dark:text-dark-text-tertiary max-w-screen-md text-pretty text-left text-lg font-light md:text-xl">
              Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.
            </p>
          </div>
        </div>

      </div>
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {resourceCards.map((card) => (
            <Card
              key={card.id}
              className=" feature-card bg-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 p-4 lg:w-full lg:flex-row lg:p-5"
            >
              <div className="flex gap-4 mb-4">
                <div className="lex size-12 shrink-0 items-center justify-center rounded-full p-3" style={{ background: "#27272a" }}>
                  <Image src={card.icon} alt={card.title} width={20} height={20} color="transparent"/>
                </div>
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <p className="text-centralaxis-light">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
}