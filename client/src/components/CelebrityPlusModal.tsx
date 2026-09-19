import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Sparkles, Shield, Briefcase, TrendingUp } from "lucide-react";
import { CelebrityPlusSector } from "@/data/celebrityPlusData";

interface CelebrityPlusModalProps {
  sector: CelebrityPlusSector | null;
  onClose: () => void;
  onPartnerSelect: (sectorName: string) => void;
}

export default function CelebrityPlusModal({
  sector,
  onClose,
  onPartnerSelect,
}: CelebrityPlusModalProps) {
  if (!sector) return null;

  const handlePartner = () => {
    onPartnerSelect(sector.name);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1d3029]/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#d8d0c4] bg-[#fbf8f2] p-6 sm:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 text-[#5a6b61] hover:bg-[#eae4db] hover:text-[#1d3029] transition-colors"
            aria-label="Close sector details modal"
          >
            <X size={20} />
          </button>

          {/* Eyebrow & Category */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#1f4136]/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#1f4136]">
              {sector.category}
            </span>
          </div>

          {/* Sector Title & Subtitle */}
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-normal text-[#1d3029]">
            {sector.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-[#d26a3a]">
            {sector.subtitle}
          </p>

          {/* Equation Formula Callout */}
          <div className="mt-5 rounded-xl border border-[#e7b44a]/40 bg-[#e7b44a]/10 p-4">
            <p className="font-condensed text-xs uppercase tracking-[0.12em] font-bold text-[#1f4136]">
              Operational Blueprint Formula:
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#1d3029]">
              <strong>Influence + Professional Expertise + Social Work Process + Resources</strong> $\to$ <strong>Measurable Impact</strong>
            </p>
          </div>

          {/* Four Pillar Operational Vectors */}
          <div className="mt-6 space-y-4">
            {/* 1. Catalyst (Celebrity Vector) */}
            <div className="rounded-xl border border-[#d8d0c4] bg-[#ffffff] p-4.5">
              <div className="flex items-center gap-2 text-[#d26a3a]">
                <Sparkles size={16} />
                <h3 className="font-condensed text-xs font-bold uppercase tracking-[0.12em]">
                  01 / The Catalyst (Influence &amp; Public Trust)
                </h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1d3029]">
                {sector.catalyst}
              </p>
              <p className="mt-1 text-[0.72rem] text-[#5a6b61]">
                Represents credibility, network leverage, and systemic distribution rather than mere media celebrity.
              </p>
            </div>

            {/* 2. Professional Social Work Process */}
            <div className="rounded-xl border border-[#d8d0c4] bg-[#ffffff] p-4.5">
              <div className="flex items-center gap-2 text-[#1f4136]">
                <Shield size={16} />
                <h3 className="font-condensed text-xs font-bold uppercase tracking-[0.12em]">
                  02 / The Social Work Process (Clinical Discipline)
                </h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1d3029]">
                {sector.socialWorkProcess}
              </p>
              <p className="mt-1 text-[0.72rem] text-[#5a6b61]">
                Ensures human dignity, trauma-informed care, safeguarding, and ecological assessment.
              </p>
            </div>

            {/* 3. Enterprise Value-Creation Mechanism */}
            <div className="rounded-xl border border-[#d8d0c4] bg-[#ffffff] p-4.5">
              <div className="flex items-center gap-2 text-[#bc5a32]">
                <Briefcase size={16} />
                <h3 className="font-condensed text-xs font-bold uppercase tracking-[0.12em]">
                  03 / The Value-Creation Mechanism (Enterprise)
                </h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1d3029]">
                {sector.enterpriseMechanism}
              </p>
              <p className="mt-1 text-[0.72rem] text-[#5a6b61]">
                Provides financial resilience, self-sustaining revenue, and non-extractive community ownership.
              </p>
            </div>

            {/* 4. Measurable Destination */}
            <div className="rounded-xl border border-[#d8d0c4] bg-[#ffffff] p-4.5">
              <div className="flex items-center gap-2 text-[#7f9b76]">
                <TrendingUp size={16} />
                <h3 className="font-condensed text-xs font-bold uppercase tracking-[0.12em]">
                  04 / Measurable Impact Destination
                </h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1d3029]">
                {sector.measurableImpact}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#d8d0c4]/60 pt-5">
            <button
              onClick={onClose}
              className="text-xs font-bold uppercase tracking-[0.12em] text-[#5a6b61] hover:text-[#1d3029]"
            >
              Close Window
            </button>
            <button
              onClick={handlePartner}
              className="button-press inline-flex items-center gap-2 rounded-full bg-[#1f4136] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] shadow-sm hover:bg-[#315d4c]"
            >
              Partner on this Sector <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
