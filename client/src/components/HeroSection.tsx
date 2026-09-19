import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight, Sparkles } from "lucide-react";
import LogoImage from "./LogoImage";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
  onOpenGiveModal: () => void;
}

const imageBase = "https://images.unsplash.com/";

export default function HeroSection({
  onScrollTo,
  onOpenGiveModal,
}: HeroSectionProps) {
  return (
    <section
      className="relative border-b border-[#d8d0c4] bg-[#1f4136] text-[#fff8ee] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,180,74,0.14),transparent_50%)]" />

      <div className="container grid min-h-[640px] items-stretch gap-10 py-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col justify-between py-2"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 flex items-center gap-3 text-[#e7b44a]"
            >
              <Sparkles size={16} />
              <span className="eyebrow text-[#e7b44a]">
                The Social Impact Ecosystem · CASEAC
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-display max-w-[700px] text-[clamp(2.6rem,5vw,5.2rem)] font-normal leading-[1.08] tracking-[-0.015em] text-[#fff8ee]"
            >
              Turning influence into{" "}
              <em className="italic text-[#e7b44a] font-normal">
                enduring social impact.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-6 max-w-[540px] text-base sm:text-lg font-normal leading-relaxed text-[#d9e5da]"
            >
              <strong>We do not simply give aid.</strong> We build the conditions for people,
              communities, and institutions to create solutions together. We mobilize the influence,
              capabilities, and resources of celebrated leaders through professional social work
              and enterprise.
            </motion.p>

            {/* Quick Definition Callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.6 }}
              className="mt-5 max-w-[540px] rounded-xl border border-[#466653] bg-[#244b3f]/70 px-4 py-3 text-xs leading-relaxed text-[#b5c7b8]"
            >
              <span className="font-bold text-[#e7b44a]">The Principle:</span> In CASEAC, “Celebrity”
              represents <em>influence, visibility, expertise, networks, resources, and public trust</em> — not
              merely entertainment personalities.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onScrollTo("ecosystem")}
                className="button-press inline-flex items-center gap-2 rounded-full bg-[#e7b44a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1d3029] shadow-md hover:bg-[#f0c667]"
              >
                Explore The Ecosystem <MoveRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onScrollTo("celebrity-plus")}
                className="button-press inline-flex items-center gap-2 rounded-full border border-[#718f7e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] hover:border-[#e7b44a] hover:text-[#e7b44a]"
              >
                Celebrity + Portfolio <ArrowUpRight size={15} />
              </motion.button>
            </motion.div>
          </div>

          {/* Quick Metrics Bar in Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex items-end justify-between gap-6 border-t border-[#466653]/80 pt-5"
          >
            <div>
              <p className="font-condensed text-3xl sm:text-4xl font-semibold leading-none text-[#e7b44a]">
                32 Vectors
              </p>
              <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#b5c7b8]">
                “Celebrity +” Architecture
              </p>
            </div>
            <p className="max-w-[240px] text-right text-xs leading-relaxed text-[#b5c7b8]">
              From Child Protection &amp; Social Forensics to Climate &amp; Social Investment.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[440px] overflow-hidden rounded-2xl border border-[#466653]/40 shadow-2xl lg:min-h-0"
        >
          <div className="absolute inset-0 bg-[#d26a3a]" />
          <img
            src={`${imageBase}photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=88`}
            alt="Collaborative community impact roundtable"
            className="absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply opacity-85 grayscale-[10%] transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f4136]/95 via-[#1f4136]/30 to-transparent" />

          {/* Floating Quote Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 rounded-xl border border-white/15 bg-[#1f4136]/80 p-5 backdrop-blur-md"
          >
            <p className="max-w-[300px] text-xs sm:text-sm leading-relaxed text-[#fff8ee]">
              “Celebrity is the catalyst. Social work is the professional process. Entrepreneurship is the value mechanism.”
            </p>
            <span className="shrink-0 font-condensed text-[0.7rem] uppercase tracking-[0.15em] text-[#e7b44a]">
              — Benjamin Lwahas, Founder
            </span>
          </motion.div>

          {/* Brand Seal Badge */}
          <div className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#fff8ee] p-1.5 shadow-xl border border-[#e7b44a]/40">
            <LogoImage size="md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
