import { motion } from "framer-motion";
import { ArrowUpRight, Coins, HeartHandshake, Users } from "lucide-react";

interface ActionCardsProps {
  onScrollTo: (id: string) => void;
  onOpenGiveModal: () => void;
}

export default function ActionCards({
  onScrollTo,
  onOpenGiveModal,
}: ActionCardsProps) {
  return (
    <section
      id="get-involved"
      className="scroll-mt-20 bg-[#d26a3a] text-[#fff8ee]"
      aria-labelledby="involved-heading"
    >
      <div className="container py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-3 text-[#1d3029]">
              Get Involved · Take Action
            </div>
            <h2
              id="involved-heading"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-[-0.015em] text-[#fff8ee]"
            >
              Enterprise is a movement we build{" "}
              <em className="italic text-[#e7b44a] font-normal">together.</em>
            </h2>
          </motion.div>
          <p className="max-w-[440px] text-base leading-relaxed text-[#fff0dd]">
            Whether you bring industry mentorship, institutional partnerships,
            cultural amplification, or vital grant capital, your contribution
            becomes part of a lasting economic engine.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Action 01: Time & Skills */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#e5946f]/70 bg-[#bc5a32] p-8 shadow-md transition-all duration-300 hover:border-[#fff8ee]/50"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#e7b44a] text-[#1d3029] shadow-sm">
                  <Users size={22} />
                </div>
                <span className="eyebrow text-[#f7cfbb]">01 / Mentorship &amp; Time</span>
              </div>

              <h3 className="mt-8 font-display text-2xl sm:text-3xl font-normal leading-snug tracking-tight text-[#fff8ee]">
                Share your skills &amp; strategic network.
              </h3>
              <p className="mt-4 max-w-[420px] text-sm sm:text-base leading-relaxed text-[#ffe5d6]">
                Guide emerging entrepreneurs through financial modeling, brand
                storytelling, supply chain navigation, or join our on-the-ground
                action crews during local pop-ups.
              </p>
            </div>

            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onScrollTo("contact-forms")}
                className="button-press inline-flex items-center gap-2 rounded-full border border-[#f3b69b] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] transition-all hover:bg-[#fff8ee] hover:text-[#bc5a32]"
              >
                Volunteer / Apply as Mentor <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.article>

          {/* Action 02: Capital & Grants */}
          <motion.article
            id="give"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#315d4c] bg-[#1f4136] p-8 shadow-md transition-all duration-300 hover:border-[#e7b44a]/60"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#e7b44a] text-[#1d3029] shadow-sm">
                  <Coins size={22} />
                </div>
                <span className="eyebrow text-[#a9c2ae]">02 / Seed Capital &amp; Grants</span>
              </div>

              <h3 className="mt-8 font-display text-2xl sm:text-3xl font-normal leading-snug tracking-tight text-[#fff8ee]">
                Catalyze sustainable livelihoods.
              </h3>
              <p className="mt-4 max-w-[420px] text-sm sm:text-base leading-relaxed text-[#d9e5da]">
                Your recurring philanthropic gift or targeted grant provides
                equity-free startup equipment, licensing micro-grants, and runway
                for grassroots leaders to thrive.
              </p>
            </div>

            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenGiveModal}
                className="button-press inline-flex items-center gap-2 rounded-full bg-[#e7b44a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1d3029] shadow-md transition-all hover:bg-[#f0c667]"
              >
                Give / Seed a Grant <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
