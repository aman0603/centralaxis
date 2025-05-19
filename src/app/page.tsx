import { HeroSection } from "@/components/sections/HeroSection";
import {
  AIFeatureSection,
  MonitoringSection,
  NetworkSection,
  AssetManagementSection,
  SinglePaneSection,
  ComplianceSection,
  DataCenterPlanningSection,
} from "@/components/sections/FeatureSections";
import { ResourceManagementSection } from "@/components/sections/ResourceManagementSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FutureCTASection, BookDemoSection } from "@/components/sections/CTASection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCarousel />
      <AIFeatureSection />
      <MonitoringSection />
      <NetworkSection />
      <AssetManagementSection />
      <SinglePaneSection />
      <ComplianceSection />
      <DataCenterPlanningSection />

      <FutureCTASection />

      <ResourceManagementSection />

      <BookDemoSection />

      <FAQSection />
    </>
  );
}
