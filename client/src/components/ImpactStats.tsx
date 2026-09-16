import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

function Counter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1600; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value]);

  return (
    <div ref={ref} className="py-6 sm:px-6 first:pl-0 last:pr-0">
      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span className="font-condensed text-3xl font-semibold text-[#d26a3a]">
            {prefix}
          </span>
        )}
        <p className="font-condensed text-5xl sm:text-6xl font-semibold leading-none tracking-tight text-[#d26a3a]">
          {displayValue}
        </p>
        {suffix && (
          <span className="font-condensed text-3xl sm:text-4xl font-semibold text-[#d26a3a]">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold text-[#1d3029] tracking-tight">
        {label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-[#5a6b61]">
        {description}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  const stats = [
    {
      value: 412,
      suffix: "+",
      label: "Enterprises & Hubs Launched",
      description: "Grassroots ventures creating sustainable local livelihoods.",
    },
    {
      value: 89,
      suffix: "%",
      label: "Direct Capital Deployment",
      description: "Funds directly dedicated to seed grants and ground actions.",
    },
    {
      value: 32,
      suffix: "",
      label: "Cultural & Celebrity Advocates",
      description: "Voices of influence championing community-led movements.",
    },
    {
      value: 94,
      suffix: "%",
      label: "Enterprise Survival Rate",
      description: "Community initiatives thriving past their 18-month milestone.",
    },
  ];

  return (
    <section
      className="container py-20 lg:py-28"
      aria-labelledby="impact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end"
      >
        <div>
          <div className="eyebrow mb-3 text-[#d26a3a]">
            Accountability &amp; Metrics
          </div>
          <h2
            id="impact-heading"
            className="font-display max-w-[460px] text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-[-0.015em] text-[#1d3029]"
          >
            Real outcomes. <br />
            <em className="italic text-[#d26a3a]">Documented</em> change.
          </h2>
        </div>
        <p className="max-w-[480px] text-base leading-relaxed text-[#5a6b61]">
          At Celebrity Aid Social Entrepreneurship Action Center, transparent
          reporting isn&apos;t an afterthought. We track every initiative, analyze
          economic returns for participants, and share insights openly with our
          partners.
        </p>
      </motion.div>

      {/* Grid of Animated Counter Cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mt-14 grid divide-y divide-[#d8d0c4] border-y border-[#d8d0c4] sm:grid-cols-2 lg:grid-cols-4 sm:divide-y-0 sm:divide-x"
      >
        {stats.map((stat, idx) => (
          <Counter key={idx} {...stat} />
        ))}
      </motion.div>
    </section>
  );
}
