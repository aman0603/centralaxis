"use client";

import { FeatureSection } from "./FeatureSection";

export function AIFeatureSection() {
  return (
    <div className="bg-black pb-0px px-6 ">
      <div className="container mx-auto">
        <div className=" text-center mb-0 p-8">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-centralaxis-purple bg-opacity-20 text-centralaxis-purple rounded-full">
              Built for AI
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Modernizing the Digital Backbone</h2>
          <p className="text-centralaxis-light mt-4 max-w-3xl mx-auto">
            Data center software (DCI M, BMS and EPMS) has stagnated. We've built a better way.
          </p>
        </div>
      </div>
    </div>
  );
}

export function MonitoringSection() {
  const features = [
    {
      title: "Real-time performance metrics and predictive analytics",
      description: "",
    },
    {
      title: "Automated alerts and intelligent incident response",
      description: "",
    },
    {
      title: "Comprehensive reporting and trend analysis",
      description: "",
    },
  ];

  return (
    <FeatureSection
      title="Advanced Monitoring"
      description="CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability."
      features={features}
      imageSrc="https://ext.same-assets.com/619634254/3606668741.png"
      imageAlt="Advanced Monitoring Dashboard"
      videoSrc="https://ext.same-assets.com/619634254/1427140442.mp4"
    />
  );
}

export function NetworkSection() {
  const features = [
    {
      title: "Real-time network performance monitoring and bandwidth optimization",
      description: "",
    },
    {
      title: "Automated network security and threat detection",
      description: "",
    },
    {
      title: "Advanced network diagnostics and troubleshooting tools",
      description: "",
    },
  ];

  return (
    <FeatureSection
      title="Network Management and Monitoring"
      description="Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure."
      features={features}
      imageSrc="https://ext.same-assets.com/619634254/1912034288.png"
      imageAlt="Network Management Dashboard"
      videoSrc="https://ext.same-assets.com/619634254/267310492.mp4"
      imageRight={true}
      darkBackground={true}
    />
  );
}

export function AssetManagementSection() {
  const features = [
    {
      title: "Automated inventory tracking and lifecycle management",
      description: "",
    },
    {
      title: "Intelligent ticketing based on asset health and performance",
      description: "",
    },
    {
      title: "Efficient resource allocation and optimization",
      description: "",
    },
  ];

  return (
    <FeatureSection
      title="Asset Management"
      description="Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease."
      features={features}
      imageSrc="https://placeholder.com/800x600"
      imageAlt="Asset Management Dashboard"
      videoSrc="https://ext.same-assets.com/619634254/2611537920.mp4"
    />
  );
}

export function SinglePaneSection() {
  const features = [
    {
      title: "Comprehensive visibility across all of your colocation infrastructure",
      description: "",
    },
    {
      title: "Customizable interface tailored to your specific operational requirements and priorities",
      description: "",
    },
    {
      title: "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management",
      description: "",
    },
  ];

  return (
    <FeatureSection
      title="A Single Pane of Glass"
      description="A unified view across all of your BMS and EPMS systems, tailored to your needs."
      features={features}
      imageSrc="https://placeholder.com/800x600"
      imageAlt="Single Pane Dashboard"
      videoSrc="https://ext.same-assets.com/619634254/410961373.mp4"
      imageRight={true}
      darkBackground={true}
    />
  );
}

export function ComplianceSection() {
  const features = [
    {
      title: "Track data for EU, US, and global regulatory standards",
      description: "",
    },
    {
      title: "We guarantee compliance and handle every step between monitoring and reporting",
      description: "",
    },
  ];

  return (
    <FeatureSection
      title="Built-In Compliance"
      description="CentralAxis provides compliance as a service for data centers."
      features={features}
      imageSrc="https://placeholder.com/800x600"
      imageAlt="Compliance Dashboard"
      videoSrc="https://ext.same-assets.com/619634254/3258802258.mp4"
    />
  );
}

export function DataCenterPlanningSection() {
  const features = [
    {
      title: "Model new architectures and see detailed implications on power and cooling needs",
      description: "",
    },
    {
      title: "Design unique specifications for your data center",
      description: "",
    },
    {
      title: "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability",
      description: "",
    },
  ];

  return (
    <FeatureSection
      title="Data Center Planning"
      description="Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever."
      features={features}
      imageSrc="https://placeholder.com/800x600"
      imageAlt="Data Center Planning Dashboard"
      videoSrc="https://ext.same-assets.com/619634254/95504460.mp4"
      imageRight={true}
      darkBackground={true}
    />
  );
}
