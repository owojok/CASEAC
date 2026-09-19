import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, LayoutGrid, RotateCw, Sparkles } from "lucide-react";
import { ECOSYSTEM_STAGES, EcosystemStage } from "@/data/ecosystemData";
import EcosystemDial from "./ecosystem/EcosystemDial";
import EcosystemCard from "./ecosystem/EcosystemCard";
import EcosystemFlowView from "./ecosystem/EcosystemFlowView";

interface EcosystemSectionProps {
  onScrollTo: (id: string) => void;
}

export default function EcosystemSection({ onScrollTo }: EcosystemSectionProps) {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"dial" | "flow">("dial");

  const activeStage =
    ECOSYSTEM_STAGES.find((s) => s.id === activeStageId) || ECOSYSTEM_STAGES[0];

  const handleNext = () => {
    setActiveStageId((prev) => (prev >= ECOSYSTEM_STAGES.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveStageId((prev) => (prev <= 1 ? ECOSYSTEM_STAGES.length : prev - 1));
  };

  return (
    <section
      id="ecosystem"
      className="scroll-mt-20 border-b border-[#d8d0c4] bg-[#f4f0e8] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="ecosystem-heading"
    >
      <div className="container">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="eyebrow mb-3.5 flex items-center gap-2 text-[#1f4136]">
              <RotateCw size={15} className="animate-spin-slow text-[#d26a3a]" />
              <span>The 12-Stage Operational Engine</span>
            </div>
            <h2
              id="ecosystem-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
            >
              The Social Impact <br />
              <em className="italic text-[#d26a3a]">Ecosystem Lifecycle.</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5a6b61]">
              A perpetual circular architecture that identifies vulnerabilities, engages celebrated
              co-creators, applies clinical social work, and reinvests continuously into communities.
            </p>
          </motion.div>

          {/* View Mode Switcher Pills */}
          <div className="flex items-center gap-1.5 rounded-full border border-[#d8d0c4] bg-[#ffffff] p-1 shadow-sm self-start lg:self-end">
            <button
              onClick={() => setViewMode("dial")}
              className={`button-press inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all ${
                viewMode === "dial"
                  ? "bg-[#1f4136] text-[#fff8ee] shadow-sm"
                  : "text-[#5a6b61] hover:text-[#1d3029]"
              }`}
            >
              <Compass size={14} />
              <span>Radar Dial</span>
            </button>
            <button
              onClick={() => setViewMode("flow")}
              className={`button-press inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all ${
                viewMode === "flow"
                  ? "bg-[#1f4136] text-[#fff8ee] shadow-sm"
                  : "text-[#5a6b61] hover:text-[#1d3029]"
              }`}
            >
              <LayoutGrid size={14} />
              <span>Panoramic Flow</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {viewMode === "dial" ? (
              <motion.div
                key="dial-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start"
              >
                {/* Left: Compass Surveyor Dial */}
                <EcosystemDial
                  activeStage={activeStage}
                  onSelectStage={(id) => setActiveStageId(id)}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />

                {/* Right: Tactile Tactical Dossier Card */}
                <EcosystemCard
                  stage={activeStage}
                  onAdvance={handleNext}
                  onScrollToCelebrityPlus={() => onScrollTo("celebrity-plus")}
                />
              </motion.div>
            ) : (
              <motion.div
                key="flow-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <EcosystemFlowView
                  activeStageId={activeStageId}
                  onSelectStage={(id) => {
                    setActiveStageId(id);
                    setViewMode("dial");
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
