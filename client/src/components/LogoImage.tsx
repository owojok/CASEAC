import React from "react";

export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

interface LogoImageProps {
  size?: LogoSize;
  className?: string;
  variant?: "circular" | "flourish";
  alt?: string;
}

const SIZE_MAP: Record<string, { width: number; height: number; classString: string }> = {
  xs: { width: 32, height: 32, classString: "w-8 h-8" },
  sm: { width: 40, height: 40, classString: "w-10 h-10" },
  md: { width: 48, height: 48, classString: "w-12 h-12" },
  lg: { width: 64, height: 64, classString: "w-16 h-16" },
  xl: { width: 96, height: 96, classString: "w-24 h-24" },
};

/**
 * Responsive Multi-Size Image Logo for CASEAC
 * Features the calligraphic negative-space trademark mark in different sizes.
 */
export default function LogoImage({
  size = "sm",
  className = "",
  variant = "circular",
  alt = "Celebrity Aid Social Entrepreneurship Action Center Logo",
}: LogoImageProps) {
  const isNamedSize = typeof size === "string" && size in SIZE_MAP;
  const dimension = isNamedSize ? SIZE_MAP[size] : null;
  const customPixels = typeof size === "number" ? size : 40;

  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const src = variant === "flourish" ? `${base}/caseac-logo-flourish.jpg` : `${base}/caseac-logo.jpg`;

  return (
    <div
      style={!isNamedSize ? { width: customPixels, height: customPixels } : undefined}
      className={`relative inline-block shrink-0 overflow-hidden rounded-full border border-[#d8d0c4]/70 bg-[#ffffff] shadow-sm select-none transition-all duration-300 ease-out group-hover:scale-105 ${
        isNamedSize ? dimension?.classString : ""
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={dimension?.width || customPixels}
        height={dimension?.height || customPixels}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
