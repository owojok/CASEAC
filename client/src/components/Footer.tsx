import { BrandLogo } from "./Navbar";

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenGiveModal: () => void;
}

export default function Footer({ onScrollTo, onOpenGiveModal }: FooterProps) {
  return (
    <footer className="bg-[#1f4136] text-[#fff8ee] border-t border-[#466653]">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.3fr_0.9fr_0.8fr] lg:py-20">
        {/* Brand info */}
        <div>
          <BrandLogo light size="md" />
          <p className="mt-6 max-w-[320px] text-xs sm:text-sm leading-relaxed text-[#b5c7b8]">
            Celebrity Aid Social Entrepreneurship Action Center bridges cultural
            advocacy, catalytic capital, and grassroots enterprise to build
            generational self-reliance.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenGiveModal}
              className="button-press rounded-full bg-[#e7b44a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1d3029] hover:bg-[#f0c667]"
            >
              Support Our Mission
            </button>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <p className="eyebrow mb-4 text-[#e7b44a]">Direct Action Desk</p>
          <a
            className="block text-sm font-medium text-[#d9e5da] hover:text-[#e7b44a] transition-colors"
            href="mailto:contact@celebrityaidaction.org"
          >
            contact@celebrityaidaction.org
          </a>
          <p className="mt-2 text-sm text-[#b5c7b8] leading-relaxed">
            Headquarters &amp; Innovation Hub
            <br />
            14 Willow Street, Suite 400, Southbank
          </p>
          <p className="mt-4 text-xs text-[#8c9f90]">
            Tax-exempt 501(c)(3) Social Enterprise Foundation
          </p>
        </div>

        {/* Links & Socials */}
        <div>
          <p className="eyebrow mb-4 text-[#e7b44a]">Connect &amp; Follow</p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#d9e5da]">
            <li>
              <button
                onClick={() => onScrollTo("work")}
                className="hover:text-[#e7b44a] transition-colors"
              >
                Pillars of Action
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollTo("story")}
                className="hover:text-[#e7b44a] transition-colors"
              >
                Founder Case Studies
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollTo("about")}
                className="hover:text-[#e7b44a] transition-colors"
              >
                Governance &amp; Council
              </button>
            </li>
            <li>
              <a
                href="#top"
                className="hover:text-[#e7b44a] transition-colors"
              >
                Media &amp; Celebrity Relations
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container flex flex-col justify-between gap-4 border-t border-[#466653]/60 py-6 text-[0.72rem] text-[#9db5a3] sm:flex-row">
        <span>
          © 2026 Celebrity Aid Social Entrepreneurship Action Center. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-[#e7b44a] transition-colors">
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#top" className="hover:text-[#e7b44a] transition-colors">
            Financial Transparency
          </a>
          <span>·</span>
          <a href="#top" className="hover:text-[#e7b44a] transition-colors">
            Accessibility Standards
          </a>
        </div>
      </div>
    </footer>
  );
}
