import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface StorySpotlightProps {
  onScrollTo: (id: string) => void;
}

const imageBase = "https://images.unsplash.com/";

export default function StorySpotlight({ onScrollTo }: StorySpotlightProps) {
  return (
    <section
      id="story"
      className="scroll-mt-20 border-y border-[#d8d0c4] bg-[#e7e1d7]/60 py-20 lg:py-28 overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative mx-auto max-w-[500px]">
            {/* Decorative border frame */}
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-[#d26a3a]" />

            <img
              src={`${imageBase}photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=88`}
              alt="Community entrepreneurs gathering around strategic planning session"
              className="relative z-10 aspect-[4/3] sm:aspect-[4/5] w-full rounded-xl object-cover shadow-lg grayscale-[10%]"
            />

            {/* Floating Metric Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 z-20 rounded-xl bg-[#e7b44a] p-5 shadow-xl"
            >
              <div className="flex items-center gap-2 text-[#1d3029]">
                <CheckCircle2 size={17} />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em]">
                  CASEAC Venture Cohort
                </span>
              </div>
              <p className="mt-2 font-condensed text-4xl sm:text-5xl font-semibold leading-none text-[#1d3029]">
                92%
              </p>
              <p className="mt-1.5 max-w-[170px] text-xs font-medium leading-tight text-[#1d3029]">
                of incubated initiatives reach operating break-even in 120 days.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Story Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="eyebrow mb-3.5 text-[#d26a3a]">
            Venture in the Spotlight
          </div>
          <h2
            id="story-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug tracking-[-0.015em] text-[#1d3029]"
          >
            “We weren’t looking for a handout. We needed a{" "}
            <em className="italic text-[#d26a3a]">launching pad.</em>”
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#385047]">
            When Amina and her neighbors founded a community kitchen in Southbank,
            they had the culinary mastery and frontline trust, but lacked commercial
            kitchen licenses and seed inventory capital.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5a6b61]">
            Through the <strong>Celebrity Aid Social Entrepreneurship Action Center</strong>,
            they received an equity-free $15,000 launch grant, matched mentorship
            with experienced restaurateurs, and media spotlight from our celebrity
            partners. Today, their cooperative employs 24 youth and feeds over 600
            seniors each week.
          </p>

          {/* Social Proof Quote Author */}
          <div className="mt-8 flex items-center gap-4 border-t border-[#d8d0c4] pt-5">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1f4136] font-condensed text-base font-bold text-[#e7b44a]">
              A.K.
            </div>
            <div>
              <p className="text-sm font-bold text-[#1d3029]">
                Amina Kamara &amp; Co-op Team
              </p>
              <p className="text-xs text-[#5a6b61]">
                Co-Founder, Southbank Culinary Collective · 2025 CASEAC Grantee
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => onScrollTo("get-involved")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#1f4136] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] transition-all hover:bg-[#315d4c]"
            >
              Support the next founder
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
