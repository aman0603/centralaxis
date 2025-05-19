"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "colocation",
    question: "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    id: "security",
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    id: "pricing",
    question: "How does pricing work?",
    answer:
      "Depending on your requirements, we offer flexible pricing models.",
  },
  {
    id: "support",
    question: "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    id: "getting-started",
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
];

export function FAQSection() {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
      <div className="flex flex-col items-center gap-3 self-center">
        <h3 className="bg-surface-secondary text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">FAQs</h3>
        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">

          <h4 className="text-pretty text-center text-3xl font-medium md:text-4xl" title="Frequently asked questions">Frequently asked questions</h4>
          <p className="text-text-tertiary dark:text-dark-text-tertiary max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
            Find answers to common questions about our solutions.
          </p>

        </div>
      </div>
      <div className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        {faqs.map((faq) => (
          <div key={faq.id} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">{faq.question}</p>
            <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm leading-relaxed tracking-tight sm:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



