import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import ProgramsSection from "@/components/ProgramsSection";
import StorySpotlight from "@/components/StorySpotlight";
import ActionCards from "@/components/ActionCards";
import AboutSection from "@/components/AboutSection";
import ContactFormsSection from "@/components/ContactFormsSection";
import Footer from "@/components/Footer";
import GiveModal from "@/components/GiveModal";

export default function Home() {
  const [giveModalOpen, setGiveModalOpen] = useState(false);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="top" className="min-h-screen bg-[#f4f0e8] text-[#1d3029] selection:bg-[#e7b44a] selection:text-[#1d3029]">
      {/* Header & Navigation */}
      <Navbar
        onOpenGiveModal={() => setGiveModalOpen(true)}
        onScrollTo={scrollToId}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section (Scroll to explore removed) */}
        <HeroSection
          onScrollTo={scrollToId}
          onOpenGiveModal={() => setGiveModalOpen(true)}
        />

        {/* 2. Impact Stats with Animated Number Counters */}
        <ImpactStats />

        {/* 3. Four Pillars of Action */}
        <ProgramsSection onScrollTo={scrollToId} />

        {/* 4. Verified Venture Spotlight */}
        <StorySpotlight onScrollTo={scrollToId} />

        {/* 5. Dual Action Pathways (Time / Capital) */}
        <ActionCards
          onScrollTo={scrollToId}
          onOpenGiveModal={() => setGiveModalOpen(true)}
        />

        {/* 6. About the Coalition & Governance */}
        <AboutSection
          onScrollTo={scrollToId}
          onOpenReportModal={() => setGiveModalOpen(true)}
        />

        {/* 7. Newsletter Dispatch & Volunteer Forms */}
        <ContactFormsSection />
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
    </div>
  );
}
