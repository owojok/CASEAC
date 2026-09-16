import { motion } from "framer-motion";
import { ArrowUpRight, Award, Megaphone, Coins, Compass } from "lucide-react";

interface ProgramsSectionProps {
  onScrollTo: (id: string) => void;
}

export default function ProgramsSection({ onScrollTo }: ProgramsSectionProps) {
  const pillars = [
    {
      num: "01",
      icon: Award,
      title: "Social Enterprise Incubation",
      tagline: "From Idea to Sustainable Revenue",
      description:
        "We provide emerging neighborhood founders with business coaching, operational tools, and co-working resources to turn local solutions into resilient community businesses.",
    },
    {
      num: "02",
      icon: Megaphone,
      title: "Celebrity & Cultural Advocacy",
      tagline: "Amplifying Frontline Realities",
      description:
        "By aligning influential cultural leaders with grassroots movements, we break media silence, rally bipartisan support, and direct crucial resources where they matter most.",
    },
    {
      num: "03",
      icon: Coins,
      title: "Direct Seed Grants & Action Aid",
      tagline: "Immediate Capital Without Red Tape",
      description:
        "Direct, non-extractive grants and emergency stabilization funds delivered directly to frontline operators, micro-cooperatives, and families navigating acute transition.",
    },
    {
      num: "04",
      icon: Compass,
      title: "Policy & Economic Access",
      tagline: "Rewriting Structural Barriers",
      description:
        "We leverage data from hundreds of ground interventions to challenge predatory lending, reform community procurement laws, and open institutional contracts to local talent.",
    },
  ];

  return (
    <section
      id="work"
      className="container scroll-mt-20 py-20 lg:py-32"
      aria-labelledby="programs-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-3.5 text-[#d26a3a]">
            Our Four Pillars of Action
          </div>
          <h2
            id="programs-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
          >
            Grassroots enterprise. <br />
            <em className="italic text-[#d26a3a]">Institutional</em> scale.
          </h2>
          <p className="mt-6 max-w-[420px] text-base leading-relaxed text-[#5a6b61]">
            Charity alone cannot outpace structural disparity. Celebrity Aid
            Social Entrepreneurship Action Center combines catalytic capital,
            broad cultural reach, and localized enterprise models that outlast
            traditional funding cycles.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onScrollTo("get-involved")}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1d3029] transition-colors hover:text-[#d26a3a]"
            >
              Learn how to partner
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </motion.div>

        {/* 4 Pillar Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-xl border border-[#d8d0c4] bg-[#fbf8f2] p-7 shadow-sm transition-all duration-300 hover:border-[#d26a3a]/60 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-condensed text-3xl font-semibold tracking-wide text-[#d26a3a]">
                      {pillar.num}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#e7e1d7]/60 text-[#1f4136] transition-colors group-hover:bg-[#d26a3a] group-hover:text-[#fff8ee]">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl sm:text-2xl font-normal leading-snug tracking-tight text-[#1d3029]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#7f9b76]">
                    {pillar.tagline}
                  </p>
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#5a6b61]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-[#d8d0c4]/40 text-xs font-semibold text-[#1f4136] transition-colors group-hover:text-[#d26a3a]">
                  <span>Explore pillar</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
