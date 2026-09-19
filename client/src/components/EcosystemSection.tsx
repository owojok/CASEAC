import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, RefreshCw, Layers, CheckCircle2 } from "lucide-react";
import { ECOSYSTEM_STAGES, EcosystemStage } from "@/data/ecosystemData";

interface EcosystemSectionProps {
  onScrollTo: (id: string) => void;
}

export default function EcosystemSection({ onScrollTo }: EcosystemSectionProps) {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const activeStage = ECOSYSTEM_STAGES.find((s) => s.id === activeStageId) || ECOSYSTEM_STAGES[0];

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
        {/* Header and Cycle Formula */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="eyebrow mb-3.5 flex items-center gap-2 text-[#1f4136]">
            <RefreshCw size={15} className="animate-spin-slow text-[#d26a3a]" />
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
            An enduring impact architecture that connects problems to influence, embeds professional
            social work, incubates enterprise, and reinvests continuously into communities.
          </p>
        </motion.div>

        {/* 12-Step Horizontal Stepper Bar */}
        <div className="mt-12 overflow-x-auto pb-4 pt-1 scrollbar-none">
          <div className="flex min-w-[880px] items-center gap-1.5 rounded-2xl border border-[#d8d0c4] bg-[#ffffff] p-2 shadow-sm">
            {ECOSYSTEM_STAGES.map((stage) => {
              const isActive = stage.id === activeStage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-center transition-all ${
                    isActive
                      ? "bg-[#1f4136] text-[#fff8ee] shadow-sm font-bold"
                      : "text-[#5a6b61] hover:bg-[#eae4db]/60 hover:text-[#1d3029]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="font-condensed text-xs opacity-75">{stage.step}</span>
                  <span className="truncate text-xs uppercase tracking-[0.08em]">{stage.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Stage Detail Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-[#d8d0c4] bg-[#fbf8f2] p-6 sm:p-10 shadow-md"
            >
              {/* Stage Header */}
              <div className="flex flex-col gap-4 border-b border-[#d8d0c4]/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-condensed text-3xl font-bold text-[#d26a3a]">
                      Stage {activeStage.step}
                    </span>
                    <span className="rounded-full bg-[#1f4136]/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#1f4136]">
                      {activeStage.category} Phase
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl font-normal text-[#1d3029]">
                    {activeStage.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-[#5a6b61]">
                    {activeStage.summary}
                  </p>
                </div>

                {/* Stage Navigator Controls */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d0c4] bg-[#ffffff] text-[#1d3029] hover:bg-[#eae4db] transition-colors"
                    aria-label="Previous lifecycle stage"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="px-2 font-condensed text-xs font-semibold text-[#5a6b61]">
                    {activeStage.id} / 12
                  </span>
                  <button
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d0c4] bg-[#ffffff] text-[#1d3029] hover:bg-[#eae4db] transition-colors"
                    aria-label="Next lifecycle stage"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Three Breakdown Columns: Ingested -> Processed -> Generated */}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {/* Column 1: Ingested Context & Assets */}
                <div className="rounded-xl border border-[#d8d0c4]/80 bg-[#ffffff] p-5 shadow-sm">
                  <span className="eyebrow text-[#d26a3a]">01 / Assets &amp; Inputs</span>
                  <p className="mt-2 text-xs text-[#5a6b61]">What CASEAC brings into focus:</p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#1d3029]">
                    {activeStage.inputs.map((inp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d26a3a] shrink-0" />
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Professional Operations */}
                <div className="rounded-xl border border-[#d8d0c4]/80 bg-[#ffffff] p-5 shadow-sm">
                  <span className="eyebrow text-[#1f4136]">02 / CASEAC Process</span>
                  <p className="mt-2 text-xs text-[#5a6b61]">Applied social work &amp; enterprise actions:</p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#1d3029]">
                    {activeStage.actions.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1f4136] shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Concrete Deliverables */}
                <div className="rounded-xl border border-[#d8d0c4]/80 bg-[#ffffff] p-5 shadow-sm">
                  <span className="eyebrow text-[#7f9b76]">03 / Concrete Outputs</span>
                  <p className="mt-2 text-xs text-[#5a6b61]">Measurable artifacts &amp; value unlocked:</p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#1d3029]">
                    {activeStage.outputs.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="mt-0.5 text-[#1f4136] shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Loopback Note */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-[#1f4136]/5 p-4 border border-[#1f4136]/10 text-xs text-[#1f4136]">
                <div className="flex items-center gap-2">
                  <RefreshCw size={16} className="text-[#d26a3a] shrink-0" />
                  <span>
                    <strong>Continuous Regenerative Cycle:</strong> Stage 12 channels all value back into Stage 01, ensuring self-sustaining community sovereignty.
                  </span>
                </div>
                <button
                  onClick={() => onScrollTo("celebrity-plus")}
                  className="inline-flex items-center gap-1 font-bold uppercase tracking-[0.1em] text-[#d26a3a] hover:underline shrink-0"
                >
                  Explore Celebrity + Portfolio <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
