import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ArrowUpRight, Filter, XCircle } from "lucide-react";
import { CELEBRITY_PLUS_SECTORS, CelebrityPlusSector } from "@/data/celebrityPlusData";

interface CelebrityPlusSectionProps {
  onSelectSector: (sector: CelebrityPlusSector) => void;
}

const CATEGORIES = [
  "All Sectors",
  "Human Security & Protection",
  "Health & Care Systems",
  "Economic Dignity & Enterprise",
  "Planet, Tech & Horizon",
  "Culture, Youth & Learning",
  "Capital, Influence & Diaspora",
] as const;

export default function CelebrityPlusSection({ onSelectSector }: CelebrityPlusSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Sectors");

  const filteredSectors = useMemo(() => {
    return CELEBRITY_PLUS_SECTORS.filter((sector) => {
      const matchesCategory =
        selectedCategory === "All Sectors" || sector.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        sector.name.toLowerCase().includes(q) ||
        sector.subtitle.toLowerCase().includes(q) ||
        sector.catalyst.toLowerCase().includes(q) ||
        sector.socialWorkProcess.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section
      id="celebrity-plus"
      className="scroll-mt-20 border-b border-[#d8d0c4] bg-[#fbf8f2] py-20 lg:py-28"
      aria-labelledby="celebrity-plus-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-3.5 flex items-center gap-2 text-[#d26a3a]">
              <Sparkles size={15} />
              <span>CASEAC Intervention Architecture</span>
            </div>
            <h2
              id="celebrity-plus-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
            >
              The “Celebrity +” <br />
              <em className="italic text-[#d26a3a]">Social Impact Portfolio.</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-base sm:text-lg leading-relaxed text-[#5a6b61]"
          >
            “Celebrity” represents <strong>influence, visibility, expertise, networks, resources, and public trust</strong> — not merely entertainment personalities. It is the catalyst that enters any societal challenge through professional social work.
          </motion.p>
        </div>

        {/* The Equation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-[#315d4c] bg-[#1f4136] p-6 sm:p-8 text-[#fff8ee] shadow-lg"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="eyebrow text-[#e7b44a]">The Core Operational Formula</span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-normal text-[#fff8ee]">
                Celebrity + X = Influence + Professional Expertise + Social Work Process + Resources + Co-created Intervention + Measurable Impact
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[0.72rem] font-semibold text-[#b5c7b8]">
              <span className="rounded-md bg-[#315d4c] px-2.5 py-1">Catalyst: Influence</span>
              <span className="rounded-md bg-[#315d4c] px-2.5 py-1">Process: Social Work</span>
              <span className="rounded-md bg-[#315d4c] px-2.5 py-1">Mechanism: Enterprise</span>
            </div>
          </div>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <div className="mt-12 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a6b61]" />
              <input
                type="text"
                placeholder="Search by issue (e.g. Climate, Child Protection, Forensics)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[#d8d0c4] bg-[#ffffff] py-2.5 pl-10 pr-10 text-xs sm:text-sm text-[#1d3029] outline-none focus:border-[#d26a3a] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5a6b61] hover:text-[#1d3029]"
                >
                  <XCircle size={15} />
                </button>
              )}
            </div>

            <span className="text-xs font-semibold text-[#5a6b61] self-end sm:self-center">
              Showing {filteredSectors.length} of {CELEBRITY_PLUS_SECTORS.length} Sectors
            </span>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                    isSelected
                      ? "bg-[#1f4136] text-[#fff8ee] shadow-sm"
                      : "bg-[#eae4db]/70 text-[#5a6b61] hover:bg-[#eae4db] hover:text-[#1d3029]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 32 Sector Cards Grid */}
        <div className="mt-8">
          {filteredSectors.length === 0 ? (
            <div className="rounded-2xl border border-[#d8d0c4] bg-[#ffffff] p-12 text-center">
              <p className="font-display text-xl text-[#1d3029]">No matching sectors found</p>
              <p className="mt-2 text-xs text-[#5a6b61]">
                Try adjusting your search query or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Sectors");
                }}
                className="mt-4 rounded-full bg-[#1f4136] px-5 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#fff8ee]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSectors.map((sector) => (
                <motion.article
                  key={sector.id}
                  whileHover={{ y: -4 }}
                  onClick={() => onSelectSector(sector)}
                  className="group flex flex-col justify-between rounded-xl border border-[#d8d0c4] bg-[#ffffff] p-6 shadow-sm cursor-pointer transition-all hover:border-[#d26a3a] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-[#1f4136]/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#1f4136]">
                        {sector.category}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#5a6b61] transition-transform group-hover:text-[#d26a3a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-normal text-[#1d3029]">
                      {sector.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#5a6b61]">
                      {sector.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#d8d0c4]/40 flex items-center justify-between text-[0.72rem] font-semibold text-[#1f4136]">
                    <span>Inspect Operational Model</span>
                    <span className="text-[#d26a3a]">Blueprint &rarr;</span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
