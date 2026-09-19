import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import ImpactStats from "@/components/ImpactStats";
import EcosystemSection from "@/components/EcosystemSection";
import CelebrityPlusSection from "@/components/CelebrityPlusSection";
import CelebrityPlusModal from "@/components/CelebrityPlusModal";
import ProgramsSection from "@/components/ProgramsSection";
import StorySpotlight from "@/components/StorySpotlight";
import ActionCards from "@/components/ActionCards";
import AboutSection from "@/components/AboutSection";
import ContactFormsSection from "@/components/ContactFormsSection";
import Footer from "@/components/Footer";
import GiveModal from "@/components/GiveModal";
import { CelebrityPlusSector } from "@/data/celebrityPlusData";

export default function Home() {
  const [giveModalOpen, setGiveModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<CelebrityPlusSector | null>(null);
  const [preselectedSectorName, setPreselectedSectorName] = useState<string>("");

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePartnerSelect = (sectorName: string) => {
    setPreselectedSectorName(sectorName);
    scrollToId("contact-forms");
  };

  return (
    <div id="top" className="min-h-screen bg-[#f4f0e8] text-[#1d3029] selection:bg-[#e7b44a] selection:text-[#1d3029]">
      {/* Header & Navigation */}
      <Navbar
        onOpenGiveModal={() => setGiveModalOpen(true)}
        onScrollTo={scrollToId}
      />

      {/* Main Narrative Experience */}
      <main>
        {/* 1. Hero Section: Turning Influence into Social Impact */}
        <HeroSection
          onScrollTo={scrollToId}
          onOpenGiveModal={() => setGiveModalOpen(true)}
        />

        {/* 2. Institutional Foundations: Vision, Mission & Institutional Proposition */}
        <InstitutionalSection onScrollTo={scrollToId} />

        {/* 3. Real Accountability & Verified Metrics */}
        <ImpactStats />

        {/* 4. The 12-Stage Dynamic Circular Lifecycle Engine */}
        <EcosystemSection onScrollTo={scrollToId} />

        {/* 5. The "Celebrity +" 32-Sector Intervention Architecture Explorer */}
        <CelebrityPlusSection onSelectSector={(sec) => setSelectedSector(sec)} />

        {/* 6. Four Pillars of Execution */}
        <ProgramsSection onScrollTo={scrollToId} />

        {/* 7. Verified Venture Spotlight */}
        <StorySpotlight onScrollTo={scrollToId} />

        {/* 8. Dual Action Pathways (Time / Capital) */}
        <ActionCards
          onScrollTo={scrollToId}
          onOpenGiveModal={() => setGiveModalOpen(true)}
        />

        {/* 9. About the Founder & Governance */}
        <AboutSection
          onScrollTo={scrollToId}
          onOpenReportModal={() => setGiveModalOpen(true)}
        />

        {/* 10. Direct Co-Creation & Dispatch Desk */}
        <ContactFormsSection preselectedSector={preselectedSectorName} />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={scrollToId}
        onOpenGiveModal={() => setGiveModalOpen(true)}
      />

      {/* Interactive Giving / Seed Capital Modal */}
      <GiveModal
        isOpen={giveModalOpen}
        onClose={() => setGiveModalOpen(false)}
      />

      {/* Deep-Dive Operational Blueprint Modal for Sectors */}
      <CelebrityPlusModal
        sector={selectedSector}
        onClose={() => setSelectedSector(null)}
        onPartnerSelect={handlePartnerSelect}
      />
    </div>
  );
}
