import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
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
      {/* Subtle ambient gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,180,74,0.12),transparent_50%)]" />

      <div className="container grid min-h-[640px] items-stretch gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
        {/* Left Content Column */}
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
              <span className="h-px w-8 bg-[#e7b44a]" />
              <span className="eyebrow text-[#e7b44a]">
                Social Entrepreneurship &amp; Direct Action
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-display max-w-[700px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-normal leading-[1.08] tracking-[-0.015em] text-[#fff8ee]"
            >
              Empowering communities through{" "}
              <em className="italic text-[#e7b44a] font-normal">
                sustainable enterprise.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-6 max-w-[520px] text-base sm:text-lg font-normal leading-relaxed text-[#d9e5da]"
            >
              <strong>Celebrity Aid Social Entrepreneurship Action Center</strong>{" "}
              bridges cultural influence, venture philanthropy, and grassroots
              grit to incubate local enterprises and build lasting dignity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onScrollTo("work")}
                className="button-press inline-flex items-center gap-2 rounded-full bg-[#e7b44a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1d3029] shadow-md hover:bg-[#f0c667]"
              >
                Explore The Work <MoveRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onScrollTo("get-involved")}
                className="button-press inline-flex items-center gap-2 rounded-full border border-[#718f7e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] hover:border-[#e7b44a] hover:text-[#e7b44a]"
              >
                Partner With CASEAC <ArrowUpRight size={15} />
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
                1,846+
              </p>
              <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#b5c7b8]">
                Entrepreneurs &amp; Neighbors Supported
              </p>
            </div>
            <p className="max-w-[210px] text-right text-xs leading-relaxed text-[#b5c7b8]">
              Community-owned solutions, accountable to every voice on the ground.
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
            alt="Entrepreneurs and community members collaborating warmly"
            className="absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply opacity-85 grayscale-[10%] transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f4136]/90 via-[#1f4136]/20 to-transparent" />

          {/* Floating Quote Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 rounded-xl border border-white/15 bg-[#1f4136]/75 p-5 backdrop-blur-md"
          >
            <p className="max-w-[280px] text-xs sm:text-sm leading-relaxed text-[#fff8ee]">
              “We don’t just offer charity. We build the infrastructure for neighbors to become owners.”
            </p>
            <span className="shrink-0 font-condensed text-[0.7rem] uppercase tracking-[0.15em] text-[#e7b44a]">
              — Benjamin Lwahas, Founder
            </span>
          </motion.div>

          {/* Calligraphic Logo Badge */}
          <motion.div
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#fff8ee] p-1.5 shadow-xl border border-[#e7b44a]/40"
          >
            <LogoImage size="md" />
          </motion.div>
        </motion.div>
      </div>

      {/* Note: "Scroll to explore" removed per user request */}
    </section>
  );
}
