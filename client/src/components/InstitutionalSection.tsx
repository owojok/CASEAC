import { motion } from "framer-motion";
import { Compass, Sparkles, Target, Users2, ArrowUpRight } from "lucide-react";

interface InstitutionalSectionProps {
  onScrollTo: (id: string) => void;
}

export default function InstitutionalSection({ onScrollTo }: InstitutionalSectionProps) {
  return (
    <section
      id="institutional"
      className="scroll-mt-20 border-b border-[#d8d0c4] bg-[#fbf8f2] py-20 lg:py-28"
      aria-labelledby="institutional-heading"
    >
      <div className="container">
        {/* Eyebrow and Main Title */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-3.5 flex items-center gap-2 text-[#d26a3a]">
              <span className="h-2 w-2 rounded-full bg-[#d26a3a]" />
              <span>Institutional Identity &amp; Foundations</span>
            </div>
            <h2
              id="institutional-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
            >
              We do not simply give aid. <br />
              <em className="italic text-[#d26a3a]">We build the conditions</em> to solve together.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-[#5a6b61]">
              <strong>CASEAC</strong> identifies what society needs, discovers who and what can help,
              brings them together through professional social-work and entrepreneurial processes,
              and converts collective influence, capabilities, and resources into measurable social impact.
            </p>
            <p className="mt-2 font-condensed text-xs font-bold uppercase tracking-[0.16em] text-[#1f4136]">
              CASEAC — Turning Influence into Social Impact.
            </p>
          </motion.div>
        </div>

        {/* Vision, Mission, and Institutional Proposition Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Card 1: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-[#d8d0c4] bg-[#ffffff] p-8 shadow-sm transition-all hover:border-[#d26a3a]/60 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[#d26a3a]">Our Vision</span>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e7e1d7]/60 text-[#1f4136]">
                  <Compass size={20} />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal text-[#1d3029]">
                Globally Connected Innovation Ecosystem
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5a6b61]">
                To become a globally connected social innovation ecosystem with huge appetite that
                identifies, engages, and mobilizes the influence, capabilities, and resources of
                celebrated individuals, groups, communities, and institutions through social work,
                social entrepreneurship, and strategic partnerships to co-create sustainable solutions,
                unlock human and community potential, and catalyze enduring impact.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d8d0c4]/40 text-xs font-semibold text-[#1f4136]">
              Enduring &amp; Inclusive Impact
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-[#d8d0c4] bg-[#ffffff] p-8 shadow-sm transition-all hover:border-[#1f4136]/60 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[#1f4136]">Our Mission</span>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1f4136]/10 text-[#1f4136]">
                  <Target size={20} />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal text-[#1d3029]">
                Activating Co-Creators of Systemic Change
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5a6b61]">
                CASEAC identifies social challenges and the human, institutional, and community assets
                capable of addressing them; engages celebrated individuals, groups, communities, and
                institutions as co-creators of change; connects influence, knowledge, enterprise,
                technology, and resources; and applies social work and social entrepreneurship to design,
                activate, evaluate, and scale solutions that strengthen human potential.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#d8d0c4]/40 text-xs font-semibold text-[#1f4136]">
              Professional Social Work + Enterprise
            </div>
          </motion.div>

          {/* Card 3: Institutional Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-[#315d4c] bg-[#1f4136] p-8 text-[#fff8ee] shadow-md transition-all hover:border-[#e7b44a]/60 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[#e7b44a]">Institutional Proposition</span>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e7b44a] text-[#1d3029]">
                  <Sparkles size={20} />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal text-[#fff8ee]">
                Catalyzing Collective Value Creation
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#d9e5da]">
                CASEAC discovers social challenges, identifies the people and assets capable of
                addressing them, mobilizes influence and resources, and brings social work,
                entrepreneurship, innovation, evidence, and partnerships together to co-create
                sustainable social solutions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#466653] flex items-center justify-between">
              <button
                onClick={() => onScrollTo("ecosystem")}
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#e7b44a] hover:text-[#fff8ee] transition-colors"
              >
                <span>View The 12-Step Ecosystem</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
