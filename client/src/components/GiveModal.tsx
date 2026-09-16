import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, X } from "lucide-react";

interface GiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiveModal({ isOpen, onClose }: GiveModalProps) {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const presets = [25, 50, 100, 250];

  const getImpactDescription = (amt: number) => {
    if (amt <= 30) return "Funds raw materials & initial inventory for a local micro-producer.";
    if (amt <= 75) return "Covers safety certification, legal permits, and enterprise licensing.";
    if (amt <= 150) return "Sponsors 10 hours of intensive business mentorship & financial modeling.";
    return "Directly seeds an emergency bridge grant for a community cooperative.";
  };

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (val: string) => {
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      setAmount(parsed);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      // Allow user to see confirmation before closing or reset
    }, 400);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#1d3029]/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl border border-[#d8d0c4] bg-[#fbf8f2] p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 rounded-full p-2 text-[#5a6b61] hover:bg-[#eae4db] hover:text-[#1d3029] transition-colors"
              aria-label="Close donation modal"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#1f4136] text-[#e7b44a]">
                  <Check size={32} strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-3xl font-normal text-[#1d3029]">
                  Thank You for Your Catalyst Gift!
                </h3>
                <p className="mt-3 text-sm text-[#5a6b61] leading-relaxed">
                  Your commitment of <strong>${amount} {frequency}</strong> goes directly
                  to the <strong>Celebrity Aid Social Entrepreneurship Action Center</strong> seed
                  fund, equipping emerging community founders with lasting runway.
                </p>
                <div className="mt-8">
                  <button
                    onClick={handleClose}
                    className="button-press rounded-full bg-[#1f4136] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee]"
                  >
                    Back to Center
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-[#d26a3a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d26a3a]" />
                  <span className="eyebrow text-[#d26a3a]">
                    Seed Capital &amp; Enterprise Fund
                  </span>
                </div>

                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-normal text-[#1d3029]">
                  Empower a Community Enterprise
                </h2>
                <p className="mt-1 text-xs text-[#5a6b61]">
                  Celebrity Aid Social Entrepreneurship Action Center (CASEAC)
                </p>

                {/* Frequency Toggle */}
                <div className="mt-6 grid grid-cols-2 rounded-xl bg-[#eae4db] p-1 text-xs font-bold uppercase tracking-[0.1em]">
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`rounded-lg py-2.5 transition-all ${
                      frequency === "monthly"
                        ? "bg-[#1f4136] text-[#fff8ee] shadow-sm"
                        : "text-[#5a6b61] hover:text-[#1d3029]"
                    }`}
                  >
                    Monthly Impact
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`rounded-lg py-2.5 transition-all ${
                      frequency === "one-time"
                        ? "bg-[#1f4136] text-[#fff8ee] shadow-sm"
                        : "text-[#5a6b61] hover:text-[#1d3029]"
                    }`}
                  >
                    One-Time Gift
                  </button>
                </div>

                {/* Amount Selection */}
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="grid grid-cols-4 gap-2.5">
                    {presets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handlePresetClick(preset)}
                        className={`rounded-xl border py-3 text-center text-sm font-bold transition-all ${
                          amount === preset && !customAmount
                            ? "border-[#d26a3a] bg-[#d26a3a] text-[#fff8ee] shadow-sm"
                            : "border-[#d8d0c4] bg-[#fff] text-[#1d3029] hover:border-[#d26a3a]/60"
                        }`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>

                  <div className="mt-3">
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-sm font-bold text-[#5a6b61]">
                        $
                      </span>
                      <input
                        type="number"
                        min="5"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomChange(e.target.value)}
                        className="w-full rounded-xl border border-[#d8d0c4] bg-[#fff] py-2.5 pl-8 pr-4 text-sm text-[#1d3029] outline-none focus:border-[#d26a3a] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Dynamic Impact Statement */}
                  <div className="mt-4 rounded-xl border border-[#e7b44a]/40 bg-[#e7b44a]/10 p-3.5">
                    <div className="flex items-start gap-2 text-xs text-[#1f4136]">
                      <Heart size={15} className="mt-0.5 shrink-0 text-[#d26a3a]" />
                      <span>{getImpactDescription(amount)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="button-press mt-6 w-full rounded-full bg-[#d26a3a] py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fff8ee] shadow-md hover:bg-[#b9552a]"
                  >
                    Complete {frequency === "monthly" ? "Monthly Gift" : "Contribution"} of ${amount}
                  </button>

                  <p className="mt-3 text-center text-[0.68rem] text-[#8c978e]">
                    CASEAC is a registered nonprofit initiative. 100% secure SSL checkout.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
