import { FormEvent, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, MoveRight, Sparkles } from "lucide-react";

interface ContactFormsSectionProps {
  preselectedSector?: string;
}

export default function ContactFormsSection({ preselectedSector }: ContactFormsSectionProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerRole, setVolunteerRole] = useState("celebrity-plus");
  const [selectedSectorName, setSelectedSectorName] = useState(preselectedSector || "");
  const [volunteerSent, setVolunteerSent] = useState(false);

  useEffect(() => {
    if (preselectedSector) {
      setSelectedSectorName(preselectedSector);
      setVolunteerRole("celebrity-plus");
    }
  }, [preselectedSector]);

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
  };

  const handleVolunteerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!volunteerEmail) return;
    setVolunteerSent(true);
  };

  return (
    <section
      id="contact-forms"
      className="scroll-mt-20 border-t border-[#d8d0c4] bg-[#e7e1d7]/50 py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-3.5 flex items-center gap-2 text-[#d26a3a]">
            <Sparkles size={15} />
            <span>Connect &amp; Co-Create</span>
          </div>
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
          >
            Turn your influence <br />
            into <em className="italic text-[#d26a3a]">lasting impact.</em>
          </h2>
          <p className="mt-6 max-w-[420px] text-sm sm:text-base leading-relaxed text-[#5a6b61]">
            Whether you represent a celebrated public voice, an institutional grantmaker,
            a licensed social worker, or an emerging community founder, CASEAC co-creates
            solutions with you.
          </p>
        </motion.div>

        {/* Two Forms Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#c8c0b5] bg-[#fbf8f2] p-7 shadow-sm"
          >
            <h3 className="font-condensed text-base font-bold uppercase tracking-[0.1em] text-[#1d3029]">
              The Field Dispatch
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5a6b61]">
              Monthly updates on community ventures, grant calls, and verified social evidence.
            </p>

            <AnimatePresence mode="wait">
              {newsletterSent ? (
                <motion.div
                  key="newsletter-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 rounded-xl bg-[#1f4136]/10 p-5 text-center"
                >
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#1f4136] text-[#e7b44a]">
                    <Check size={18} />
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#1f4136]">
                    You&apos;re subscribed!
                  </p>
                  <p className="mt-1 text-xs text-[#5a6b61]">
                    Thank you for joining the CASEAC ecosystem.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="mt-6">
                  <label
                    htmlFor="newsletter-input"
                    className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#5a6b61]"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="newsletter-input"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="name@institution.org"
                    className="mt-2 w-full border-b border-[#8f9f94] bg-transparent py-2.5 text-sm text-[#1d3029] outline-none placeholder:text-[#8c978e] focus:border-[#d26a3a] transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="button-press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1f4136] py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] shadow-sm hover:bg-[#315d4c]"
                  >
                    Subscribe to Dispatch <MoveRight size={15} />
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Volunteer / Partner Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-[#c8c0b5] bg-[#fbf8f2] p-7 shadow-sm"
          >
            <h3 className="font-condensed text-base font-bold uppercase tracking-[0.1em] text-[#1d3029]">
              Partner with CASEAC
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5a6b61]">
              Mobilize influence, professional social work, or catalytic capital.
            </p>

            {selectedSectorName && (
              <div className="mt-3 rounded-lg bg-[#e7b44a]/20 border border-[#e7b44a]/50 p-2 text-xs text-[#1d3029]">
                Selected Sector: <strong>{selectedSectorName}</strong>
              </div>
            )}

            <AnimatePresence mode="wait">
              {volunteerSent ? (
                <motion.div
                  key="volunteer-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 rounded-xl bg-[#1f4136]/10 p-5 text-center"
                >
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#1f4136] text-[#e7b44a]">
                    <Check size={18} />
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#1f4136]">
                    Co-Creation Inquiry Logged!
                  </p>
                  <p className="mt-1 text-xs text-[#5a6b61]">
                    Our ecosystem partnership desk will reach out within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="mt-6">
                  <label
                    htmlFor="volunteer-email-input"
                    className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#5a6b61]"
                  >
                    Email Address
                  </label>
                  <input
                    id="volunteer-email-input"
                    type="email"
                    required
                    value={volunteerEmail}
                    onChange={(e) => setVolunteerEmail(e.target.value)}
                    placeholder="partner@domain.com"
                    className="mt-2 w-full border-b border-[#8f9f94] bg-transparent py-2.5 text-sm text-[#1d3029] outline-none placeholder:text-[#8c978e] focus:border-[#d26a3a] transition-colors"
                  />

                  <label
                    htmlFor="volunteer-role-select"
                    className="mt-4 block text-xs font-semibold uppercase tracking-[0.08em] text-[#5a6b61]"
                  >
                    Engagement Capacity
                  </label>
                  <select
                    id="volunteer-role-select"
                    value={volunteerRole}
                    onChange={(e) => setVolunteerRole(e.target.value)}
                    className="mt-2 w-full border-b border-[#8f9f94] bg-transparent py-2.5 text-xs sm:text-sm text-[#1d3029] outline-none focus:border-[#d26a3a] transition-colors"
                  >
                    <option value="celebrity-plus">Celebrity + Sector Collaboration</option>
                    <option value="cultural">Celebrated Public Voice / Group</option>
                    <option value="social-work">Licensed Social Worker / Forensics Specialist</option>
                    <option value="enterprise">Grassroots Social Entrepreneur</option>
                    <option value="grantor">Institutional / Impact Investment Partner</option>
                    <option value="research">Academic / Research Evidence Partner</option>
                  </select>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="button-press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1f4136] py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1f4136] hover:bg-[#1f4136] hover:text-[#fff8ee]"
                  >
                    Submit Co-Creation Request <ArrowUpRight size={15} />
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
