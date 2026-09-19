import { motion } from "framer-motion";
import { CheckCircle2, RefreshCw, ArrowRight, ShieldCheck, Sparkles, FolderDown } from "lucide-react";
import { EcosystemStage } from "@/data/ecosystemData";

interface EcosystemCardProps {
  stage: EcosystemStage;
  onAdvance: () => void;
  onScrollToCelebrityPlus: () => void;
}

export default function EcosystemCard({
  stage,
  onAdvance,
  onScrollToCelebrityPlus,
}: EcosystemCardProps) {
  const isFinalStage = stage.id === 12;

  return (
    <motion.div
      key={stage.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-between rounded-2xl border border-[#d8d0c4] bg-[#fbf8f2] p-6 sm:p-8 shadow-md"
    >
      {/* Dossier Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d8d0c4]/60 pb-5">
          <div className="flex items-center gap-3">
            <span className="font-condensed text-3xl sm:text-4xl font-bold tracking-tight text-[#d26a3a]">
              Stage {stage.step}
            </span>
            <span className="rounded-full bg-[#1f4136]/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#1f4136]">
              {stage.category} Phase
            </span>
          </div>
          <span className="font-condensed text-xs uppercase tracking-[0.12em] text-[#5a6b61]">
            Benchmark Protocol · CASEAC-ENG-{stage.step}
          </span>
        </div>

        {/* Title and Summary */}
        <h3 className="mt-5 font-display text-2xl sm:text-3xl font-normal leading-snug text-[#1d3029]">
          {stage.name}
        </h3>
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#5a6b61]">
          {stage.summary}
        </p>

        {/* Analytical 3-Tier Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* Tier 1: Inputs & Ingested Assets */}
          <div className="rounded-xl border border-[#d8d0c4]/80 bg-[#ffffff] p-4.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#d26a3a]">
              <Sparkles size={14} />
              <span className="eyebrow text-[#d26a3a]">01 / Ingestion</span>
            </div>
            <p className="mt-2 text-[0.72rem] text-[#5a6b61]">What CASEAC brings into focus:</p>
            <ul className="mt-3 space-y-1.5 text-xs text-[#1d3029]">
              {stage.inputs.map((inp, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d26a3a] shrink-0" />
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 2: Applied Professional Process */}
          <div className="rounded-xl border border-[#d8d0c4]/80 bg-[#ffffff] p-4.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#1f4136]">
              <ShieldCheck size={14} />
              <span className="eyebrow text-[#1f4136]">02 / Process</span>
            </div>
            <p className="mt-2 text-[0.72rem] text-[#5a6b61]">Clinical &amp; enterprise operations:</p>
            <ul className="mt-3 space-y-1.5 text-xs text-[#1d3029]">
              {stage.actions.map((act, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1f4136] shrink-0" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 3: Verified Outputs & Artifacts */}
          <div className="rounded-xl border border-[#d8d0c4]/80 bg-[#ffffff] p-4.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-[#7f9b76]">
              <FolderDown size={14} />
              <span className="eyebrow text-[#7f9b76]">03 / Artifacts</span>
            </div>
            <p className="mt-2 text-[0.72rem] text-[#5a6b61]">Concrete outcomes delivered:</p>
            <ul className="mt-3 space-y-1.5 text-xs text-[#1d3029]">
              {stage.outputs.map((out, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="mt-0.5 text-[#1f4136] shrink-0" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regenerative Loopback Notice */}
        {isFinalStage ? (
          <div className="mt-6 rounded-xl border border-[#e7b44a]/60 bg-[#e7b44a]/15 p-4 text-xs text-[#1f4136]">
            <div className="flex items-center gap-2">
              <RefreshCw size={17} className="animate-spin-slow text-[#d26a3a] shrink-0" />
              <span className="leading-relaxed">
                <strong>Perpetual Cycle Completed:</strong> All generated venture surplus, graduated community leadership, and verified evidence feed back directly into Stage 01 (IDENTIFY) to seed the next generation.
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex items-center justify-between text-xs text-[#5a6b61]">
            <span className="flex items-center gap-1">
              <RefreshCw size={12} className="text-[#d26a3a]" />
              Sequential lifecycle transition: Proceeding to Stage {stage.id === 11 ? "12" : (stage.id + 1).toString().padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      {/* Dossier Footer Controls */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#d8d0c4]/60 pt-5">
        <button
          onClick={onScrollToCelebrityPlus}
          className="text-xs font-bold uppercase tracking-[0.12em] text-[#d26a3a] hover:underline"
        >
          Explore “Celebrity +” Thematic Vectors &rarr;
        </button>

        <button
          onClick={onAdvance}
          className="button-press inline-flex items-center gap-2 rounded-full bg-[#1f4136] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#fff8ee] hover:bg-[#315d4c]"
        >
          {isFinalStage ? "Loop to Stage 01" : "Advance to Next Stage"} <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
