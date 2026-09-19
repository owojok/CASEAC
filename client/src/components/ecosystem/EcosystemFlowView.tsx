import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, RotateCw } from "lucide-react";
import { ECOSYSTEM_STAGES } from "@/data/ecosystemData";

interface EcosystemFlowViewProps {
  activeStageId: number;
  onSelectStage: (id: number) => void;
}

const CATEGORY_COLORS: Record<string, { border: string; badge: string; text: string }> = {
  Discovery: { border: "border-[#d26a3a]/40", badge: "bg-[#d26a3a]/10", text: "text-[#d26a3a]" },
  Architecture: { border: "border-[#1f4136]/40", badge: "bg-[#1f4136]/10", text: "text-[#1f4136]" },
  Execution: { border: "border-[#e7b44a]/60", badge: "bg-[#e7b44a]/20", text: "text-[#1d3029]" },
  Evolution: { border: "border-[#7f9b76]/50", badge: "bg-[#7f9b76]/15", text: "text-[#1f4136]" },
};

export default function EcosystemFlowView({
  activeStageId,
  onSelectStage,
}: EcosystemFlowViewProps) {
  return (
    <div className="rounded-2xl border border-[#d8d0c4] bg-[#ffffff] p-6 sm:p-8 shadow-sm">
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#d8d0c4]/60 pb-4">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-normal text-[#1d3029]">
            Panoramic Systems Blueprint
          </h3>
          <p className="mt-1 text-xs text-[#5a6b61]">
            Comprehensive transformation architecture from initial discovery to perpetual community reinvestment.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#1f4136] font-semibold self-start sm:self-center">
          <RotateCw size={13} className="animate-spin-slow text-[#d26a3a]" />
          <span>Click any stage to inspect dossier</span>
        </div>
      </div>

      {/* 12-Stage Matrix with Connected Flow */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ECOSYSTEM_STAGES.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          const colors = CATEGORY_COLORS[stage.category] || CATEGORY_COLORS.Discovery;

          return (
            <motion.article
              key={stage.id}
              whileHover={{ y: -3 }}
              onClick={() => onSelectStage(stage.id)}
              className={`relative flex flex-col justify-between rounded-xl border p-4.5 cursor-pointer transition-all ${
                isSelected
                  ? "border-[#d26a3a] bg-[#fbf8f2] shadow-md ring-2 ring-[#d26a3a]/20"
                  : `bg-[#ffffff] ${colors.border} hover:border-[#1d3029] hover:shadow-sm`
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-condensed text-xl font-bold text-[#d26a3a]">
                    {stage.step}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider ${colors.badge} ${colors.text}`}>
                    {stage.category}
                  </span>
                </div>

                <h4 className="mt-2.5 font-display text-lg font-normal text-[#1d3029]">
                  {stage.name}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#5a6b61] line-clamp-2">
                  {stage.summary}
                </p>

                {/* Micro Outputs Tag */}
                <div className="mt-3 pt-3 border-t border-[#d8d0c4]/40 flex items-center gap-1 text-[0.68rem] text-[#1f4136]">
                  <CheckCircle2 size={12} className="text-[#1f4136] shrink-0" />
                  <span className="truncate">{stage.outputs[0]}</span>
                </div>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-3 flex items-center justify-between text-[0.65rem] text-[#8c978e]">
                <span>Stage {stage.id} of 12</span>
                <span className="text-[#d26a3a] font-bold">
                  {idx === 11 ? "Loops to 01 ⟳" : "Proceeds ↓"}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Regenerative Loop Banner */}
      <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#1f4136]/5 p-3.5 text-center text-xs text-[#1f4136] border border-[#1f4136]/10">
        <RotateCw size={14} className="text-[#d26a3a] shrink-0" />
        <span>
          <strong>Perpetual Cascade:</strong> Inputs flow through all 12 operational stages, producing measurable value and regenerating back into Stage 01.
        </span>
      </div>
    </div>
  );
}
