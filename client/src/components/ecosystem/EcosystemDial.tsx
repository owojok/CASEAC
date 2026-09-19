import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCw, Compass } from "lucide-react";
import { ECOSYSTEM_STAGES, EcosystemStage } from "@/data/ecosystemData";

interface EcosystemDialProps {
  activeStage: EcosystemStage;
  onSelectStage: (id: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const QUADRANTS = [
  { name: "Discovery", range: "01 – 03", color: "text-[#d26a3a]", bg: "bg-[#d26a3a]" },
  { name: "Architecture", range: "04 – 06", color: "text-[#1f4136]", bg: "bg-[#1f4136]" },
  { name: "Execution", range: "07 – 09", color: "text-[#e7b44a]", bg: "bg-[#e7b44a]" },
  { name: "Evolution", range: "10 – 12", color: "text-[#7f9b76]", bg: "bg-[#7f9b76]" },
];

export default function EcosystemDial({
  activeStage,
  onSelectStage,
  onPrev,
  onNext,
}: EcosystemDialProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-[#d8d0c4] bg-[#ffffff] p-6 shadow-sm">
      {/* Astrolabe Header & Quadrant Indicators */}
      <div className="w-full flex items-center justify-between border-b border-[#d8d0c4]/60 pb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1f4136]">
          <Compass size={16} className="text-[#d26a3a]" />
          <span>Compass Astrolabe</span>
        </div>
        <span className="font-condensed text-xs font-semibold text-[#5a6b61]">
          Coordinate {activeStage.step} of 12
        </span>
      </div>

      {/* Quadrant Legend Bar */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
        {QUADRANTS.map((q) => {
          const isCurrentCategory = activeStage.category === q.name;
          return (
            <div
              key={q.name}
              className={`rounded-lg border px-2.5 py-1.5 text-center transition-all ${
                isCurrentCategory
                  ? "border-[#1f4136] bg-[#1f4136]/5 shadow-xs"
                  : "border-[#d8d0c4]/50 bg-transparent opacity-65"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${q.bg}`} />
                <p className={`text-[0.68rem] font-bold uppercase tracking-wider ${q.color}`}>
                  {q.name}
                </p>
              </div>
              <p className="text-[0.62rem] text-[#5a6b61]">{q.range}</p>
            </div>
          );
        })}
      </div>

      {/* The Radial Astrolabe Interactive Ring */}
      <div className="relative my-6 flex h-64 w-64 sm:h-72 sm:w-72 items-center justify-center select-none">
        {/* Outer Surveyor Boundary with Cardinal Hairlines */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[#d8d0c4]" />
        <div className="absolute inset-4 rounded-full border border-[#1f4136]/15" />
        <div className="absolute inset-10 rounded-full border border-[#d26a3a]/20" />

        {/* Cardinal benchmark ticks (N, S, E, W) */}
        <span className="absolute top-1 text-[0.62rem] font-bold text-[#8c978e]">N</span>
        <span className="absolute bottom-1 text-[0.62rem] font-bold text-[#8c978e]">S</span>
        <span className="absolute right-1.5 text-[0.62rem] font-bold text-[#8c978e]">E</span>
        <span className="absolute left-1.5 text-[0.62rem] font-bold text-[#8c978e]">W</span>

        {/* 12 Stage Nodes arranged in a circle */}
        {ECOSYSTEM_STAGES.map((stage, index) => {
          const total = ECOSYSTEM_STAGES.length;
          // Calculate angle: start at top (-90 degrees)
          const angleDeg = (index / total) * 360 - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          const radius = 104; // radius in pixels
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          const isActive = stage.id === activeStage.id;

          return (
            <motion.button
              key={stage.id}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectStage(stage.id)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className={`absolute flex h-7 w-7 items-center justify-center rounded-full text-[0.65rem] font-bold transition-all ${
                isActive
                  ? "bg-[#d26a3a] text-[#fff8ee] ring-4 ring-[#d26a3a]/20 shadow-md z-20 scale-110"
                  : "bg-[#ffffff] text-[#1d3029] border border-[#d8d0c4] hover:border-[#1f4136] z-10"
              }`}
              title={`${stage.step} ${stage.name}`}
              aria-label={`Select stage ${stage.step} ${stage.name}`}
            >
              {stage.step}
            </motion.button>
          );
        })}

        {/* Center Astrolabe Hub displaying Active Focus */}
        <div className="relative z-10 flex flex-col items-center justify-center rounded-full bg-[#1f4136] p-4 text-center text-[#fff8ee] shadow-xl w-32 h-32 border-2 border-[#e7b44a]/40">
          <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#e7b44a]">
            Active Phase
          </span>
          <span className="font-condensed text-2xl font-bold leading-none text-[#fff8ee] mt-0.5">
            Stage {activeStage.step}
          </span>
          <span className="text-[0.68rem] font-medium text-[#d9e5da] line-clamp-1 mt-1 max-w-[90px]">
            {activeStage.name}
          </span>
          <div className="mt-1 flex items-center gap-1 text-[0.58rem] text-[#e7b44a]">
            <RotateCw size={10} className="animate-spin-slow" />
            <span>Perpetual</span>
          </div>
        </div>
      </div>

      {/* Dial Controls */}
      <div className="w-full flex items-center justify-between border-t border-[#d8d0c4]/60 pt-4">
        <button
          onClick={onPrev}
          className="button-press inline-flex items-center gap-1.5 rounded-full border border-[#d8d0c4] px-3.5 py-1.5 text-xs font-semibold text-[#1d3029] hover:bg-[#eae4db]"
        >
          <ArrowLeft size={13} /> Prev Stage
        </button>
        <span className="text-[0.72rem] text-[#5a6b61]">
          Click any node to navigate
        </span>
        <button
          onClick={onNext}
          className="button-press inline-flex items-center gap-1.5 rounded-full bg-[#1f4136] px-3.5 py-1.5 text-xs font-semibold text-[#fff8ee] hover:bg-[#315d4c]"
        >
          Next Stage <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
