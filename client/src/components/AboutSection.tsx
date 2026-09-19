import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

interface AboutSectionProps {
  onScrollTo: (id: string) => void;
  onOpenReportModal: () => void;
}

export default function AboutSection({
  onScrollTo,
  onOpenReportModal,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="container scroll-mt-20 py-20 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-3.5 flex items-center gap-2 text-[#d26a3a]">
            <Sparkles size={15} />
            <span>Origin &amp; Discipline</span>
          </div>
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
          >
            Clinical empathy. <br />
            <em className="italic text-[#d26a3a]">Enterprise</em> architecture.
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#5a6b61]">
            Conceived by <strong>Benjamin Lwahas</strong> — a licensed clinical social
            work consultant, human-centered design specialist, and impact investor —
            <strong>CASEAC</strong> unites clinical frontline empathy with rigorous enterprise architecture.
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5a6b61]">
            Our role is to supply the catalytic fuel — seed micro-capital, prominent
            cultural advocacy, human-centered operational coaching, and institutional
            channels — to transform community grit into generational economic dignity.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-md bg-[#e7e1d7] px-2.5 py-1 text-xs font-semibold text-[#1f4136]">
              Clinical Social Work
            </span>
            <span className="rounded-md bg-[#e7e1d7] px-2.5 py-1 text-xs font-semibold text-[#1f4136]">
              Social Forensics
            </span>
            <span className="rounded-md bg-[#e7e1d7] px-2.5 py-1 text-xs font-semibold text-[#1f4136]">
              Venture Philanthropy
            </span>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-t-2 border-[#1f4136] bg-[#fbf8f2]/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#1f4136]">
                <TrendingUp size={16} />
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.12em]">
                  2026 Impact Blueprint
                </p>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5a6b61]">
                A rigorous audit of program outcomes, capital efficiency, seed
                grant deployment, and founder retention across 14 hubs.
              </p>
              <button
                onClick={onOpenReportModal}
                className="group mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#1f4136] hover:text-[#d26a3a]"
              >
                View Impact Report
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            <div className="rounded-xl border-t-2 border-[#1f4136] bg-[#fbf8f2]/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#1f4136]">
                <ShieldCheck size={16} />
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.12em]">
                  The Council &amp; Fellows
                </p>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5a6b61]">
                An interdisciplinary circle of cultural leaders, economists,
                licensed social workers, neighborhood organizers, and active fellows.
              </p>
              <button
                onClick={() => onScrollTo("contact-forms")}
                className="group mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#1f4136] hover:text-[#d26a3a]"
              >
                Join Fellowship
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

          {/* Founder Quote Callout */}
          <div className="mt-10 rounded-xl border-l-4 border-[#e7b44a] bg-[#fbf8f2] p-6 shadow-sm">
            <p className="font-display text-xl sm:text-2xl italic font-normal leading-relaxed text-[#1f4136]">
              “When we pair clinical empathy and human-centered design with real
              venture capital and cultural reach, we don&apos;t just alleviate poverty —
              we build community sovereignty.”
            </p>
            <div className="mt-4">
              <p className="font-condensed text-sm font-bold uppercase tracking-[0.1em] text-[#1d3029]">
                Benjamin Lwahas
              </p>
              <p className="text-[0.72rem] font-medium text-[#5a6b61] leading-relaxed">
                Founder, CASEAC · Licensed Clinical Social Work Consultant · Human-Centered Design Specialist · Impact Investor
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
