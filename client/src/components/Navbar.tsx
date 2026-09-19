import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import LogoImage, { LogoSize } from "./LogoImage";

interface NavbarProps {
  onOpenGiveModal: () => void;
  onScrollTo: (id: string) => void;
}

export function BrandLogo({
  light = false,
  size = "sm",
  isScrolled = false,
}: {
  light?: boolean;
  size?: LogoSize;
  isScrolled?: boolean;
}) {
  return (
    <a
      href="#top"
      className={`group flex items-center gap-3.5 transition-all duration-300 ${
        light ? "text-[#fff8ee]" : "text-[#1d3029]"
      }`}
      aria-label="Celebrity Aid Social Entrepreneurship Action Center Home"
    >
      <LogoImage
        size={size}
        className={!isScrolled ? "shadow-md ring-2 ring-[#e7b44a]/30" : "shadow-sm"}
      />
      <div className="flex flex-col transition-all duration-300">
        <div className="flex items-center gap-2">
          <span
            className={`font-condensed font-bold uppercase tracking-[0.06em] leading-none transition-all duration-300 ${
              isScrolled ? "text-[1.15rem]" : "text-[1.32rem]"
            }`}
          >
            Celebrity Aid
          </span>
          <span className="rounded bg-[#e7b44a]/20 px-1.5 py-0.5 text-[0.62rem] font-bold tracking-[0.08em] text-[#e7b44a] border border-[#e7b44a]/30">
            CASEAC
          </span>
        </div>
        <span
          className={`font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
            isScrolled ? "text-[0.6rem] mt-0.5" : "text-[0.68rem] mt-1"
          } ${light ? "text-[#b5c7b8]" : "text-[#5a6b61]"}`}
        >
          Social Impact Ecosystem
        </span>
      </div>
    </a>
  );
}

export default function Navbar({ onOpenGiveModal, onScrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: [string, string][] = [
    ["Identity", "institutional"],
    ["12-Stage Cycle", "ecosystem"],
    ["Celebrity +", "celebrity-plus"],
    ["The Work", "work"],
    ["About", "about"],
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#d8d0c4]/80 transition-all duration-300 ${
        isScrolled
          ? "h-[68px] bg-[#f4f0e8]/95 backdrop-blur-md shadow-sm"
          : "h-[88px] bg-[#f4f0e8]/90 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center">
          <BrandLogo size={isScrolled ? 42 : 56} isScrolled={isScrolled} />
          <div className="hidden xl:block h-8 w-px bg-[#d8d0c4]/70 ml-8" />
        </div>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4c6156] transition-colors hover:text-[#d26a3a]"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <button
            onClick={() => handleNavClick("contact-forms")}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4c6156] transition-colors hover:text-[#d26a3a]"
          >
            Partner
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenGiveModal}
            className="button-press inline-flex items-center gap-1.5 rounded-full bg-[#d26a3a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] shadow-sm hover:bg-[#b9552a]"
          >
            Seed Fund <ArrowUpRight size={14} />
          </motion.button>
        </div>

        <button
          className="rounded-full border border-[#c8c0b5] p-2 text-[#1d3029] transition-colors hover:bg-[#eae4db] lg:hidden"
          onClick={() => setMenuOpen((val) => !val)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#d8d0c4] bg-[#f4f0e8] lg:hidden"
          >
            <div className="container py-5">
              <nav className="grid gap-2" aria-label="Mobile navigation">
                {navItems.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className="flex items-center justify-between border-b border-[#d8d0c4]/60 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1d3029]"
                  >
                    {label}
                    <ChevronRight size={16} className="text-[#8c978e]" />
                  </button>
                ))}
                <div className="mt-4 flex flex-col gap-2.5">
                  <button
                    onClick={() => handleNavClick("contact-forms")}
                    className="flex items-center justify-center rounded-full border border-[#1f4136] py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1f4136]"
                  >
                    Partner With Us
                  </button>
                  <button
                    onClick={() => {
                      onOpenGiveModal();
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-center rounded-full bg-[#d26a3a] py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee]"
                  >
                    Seed Fund <ArrowUpRight size={14} className="ml-1" />
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
