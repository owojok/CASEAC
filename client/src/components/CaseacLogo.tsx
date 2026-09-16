import React from "react";

interface CaseacLogoProps {
  size?: number | string;
  className?: string;
  light?: boolean;
  animated?: boolean;
}

/**
 * CASEAC Bespoke Brand Identity Mark: "The Topography of Care"
 *
 * Core Concept & Design Anatomy:
 * ------------------------------
 * 1. CARTOGRAPHY MOTIF:
 *    - Circular surveyor astrolabe ring with 4 cardinal benchmark ticks (N, S, E, W).
 *    - Layered relief contour curves representing geographic terrain, elevation,
 *      and the journey across rugged ground ("finding steadier ground").
 *    - Fine latitude/longitude grid lines evoking high-level mapping precision.
 *
 * 2. INTELLIGENT NEGATIVE (WHITE) SPACE:
 *    - The space carved between the left and right contour landmasses forms
 *      the unmistakable silhouette of TWO UPLIFTED, CUPPING PALMS meeting at
 *      the base and sheltering the center.
 *    - As the eye shifts between positive (landmass contours) and negative
 *      (open space), the social work gesture of care, human accompaniment,
 *      and mutual aid emerges seamlessly.
 *
 * 3. THE BEACON / WAYPOINT:
 *    - Floating in the upper negative space cradled by the fingertips is a
 *      4-point surveyor's compass star (symbolizing the guiding influence
 *      of Celebrity Aid and navigational clarity for the vulnerable).
 */
export function CaseacLogoMark({
  size = 44,
  className = "",
  light = false,
  animated = false,
}: CaseacLogoProps) {
  const primaryColor = light ? "#e7b44a" : "#1f4136"; // Gold or Deep Forest
  const accentColor = light ? "#fff8ee" : "#d26a3a"; // Light Linen or Terracotta
  const contourLineColor = light ? "#1f4136" : "#fff8ee"; // Contrast ink for contour lines
  const tickColor = light ? "#b5c7b8" : "#7f9b76"; // Surveyor grid ticks

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Celebrity Aid Social Entrepreneurship Action Center Logo"
    >
      <defs>
        {/* Subtle radial elevation shading */}
        <radialGradient id={`caseac-grad-${light ? "light" : "dark"}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.18" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>

        <linearGradient id={`star-grad-${light ? "light" : "dark"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e7b44a" />
          <stop offset="100%" stopColor={light ? "#fff8ee" : "#d26a3a"} />
        </linearGradient>
      </defs>

      {/* --- CARTOGRAPHIC ASTROLABE / SURVEYOR BENCHMARK RING --- */}
      {/* Outer benchmark circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={tickColor}
        strokeWidth="0.85"
        strokeDasharray="1.5 2.5"
        opacity={light ? 0.75 : 0.65}
      />
      
      {/* Inner boundary rim */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke={primaryColor}
        strokeWidth="1.2"
        opacity={light ? 0.9 : 0.85}
      />

      {/* Cardinal Surveyor Crosshairs (North, South, East, West) */}
      <line x1="50" y1="1" x2="50" y2="7.5" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="50" y1="92.5" x2="50" y2="99" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="1" y1="50" x2="7.5" y2="50" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="92.5" y1="50" x2="99" y2="50" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />

      {/* Degree ticks at 45 degree quadrant marks */}
      <line x1="17.5" y1="17.5" x2="21.5" y2="21.5" stroke={tickColor} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="82.5" y1="17.5" x2="78.5" y2="21.5" stroke={tickColor} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="17.5" y1="82.5" x2="21.5" y2="78.5" stroke={tickColor} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="82.5" y1="82.5" x2="78.5" y2="78.5" stroke={tickColor} strokeWidth="0.9" strokeLinecap="round" />

      {/* Latitude / Longitude Equator Guide Line (Hairline precision) */}
      <line
        x1="12"
        y1="50"
        x2="88"
        y2="50"
        stroke={tickColor}
        strokeWidth="0.5"
        strokeDasharray="2 3"
        opacity={0.4}
      />

      {/* --- CARTOGRAPHIC LANDMASS & POSITIVE RELIEF WAVES --- */}
      {/* 
        LEFT CONTOUR MASS:
        Sculpted terrain ridge that steps up from outer circle toward center,
        leaving negative space for the left cupping palm.
      */}
      <path
        d="M 50 88
           C 40 88, 20 80, 14 62
           C 10 50, 12 36, 22 24
           C 28 17, 36 12, 46 10
           C 47 18, 44 26, 38 33
           C 33 39, 29 46, 31 56
           C 33 66, 40 74, 50 80
           Z"
        fill={primaryColor}
        opacity={light ? 0.95 : 1}
      />

      {/* Topographic Contour Lines on Left Terrain Mass */}
      <path
        d="M 18 42 C 22 40, 29 44, 34 52 C 37 57, 42 66, 47 72"
        stroke={contourLineColor}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity={0.35}
      />
      <path
        d="M 23 30 C 28 32, 33 38, 35 45 C 38 52, 42 60, 48 64"
        stroke={contourLineColor}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={0.3}
      />
      <path
        d="M 15 54 C 20 56, 26 62, 32 70 C 36 75, 42 80, 48 83"
        stroke={contourLineColor}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity={0.25}
      />

      {/* 
        RIGHT CONTOUR MASS:
        Mirrored sculpted terrain ridge on right side,
        leaving negative space for the right cupping palm.
      */}
      <path
        d="M 50 88
           C 60 88, 80 80, 86 62
           C 90 50, 88 36, 78 24
           C 72 17, 64 12, 54 10
           C 53 18, 56 26, 62 33
           C 67 39, 71 46, 69 56
           C 67 66, 60 74, 50 80
           Z"
        fill={accentColor}
        opacity={light ? 0.85 : 0.95}
      />

      {/* Topographic Contour Lines on Right Terrain Mass */}
      <path
        d="M 82 42 C 78 40, 71 44, 66 52 C 63 57, 58 66, 53 72"
        stroke={contourLineColor}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity={0.35}
      />
      <path
        d="M 77 30 C 72 32, 67 38, 65 45 C 62 52, 58 60, 52 64"
        stroke={contourLineColor}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={0.3}
      />
      <path
        d="M 85 54 C 80 56, 74 62, 68 70 C 64 75, 58 80, 52 83"
        stroke={contourLineColor}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity={0.25}
      />

      {/* --- THE NEGATIVE SPACE GESTALT HANDS --- */}
      {/*
        The gap between the left mass (primaryColor) and right mass (accentColor)
        naturally reveals the negative space silhouette:
        - Meeting base at (50, 80)
        - Uplifted cupping fingers at (38, 33) and (62, 33)
        - Protecting the center hollow
      */}
      
      {/* Supporting Heartline Contour inside the cupped palm hollow */}
      <path
        d="M 44 74 C 47 77, 53 77, 56 74 C 57 66, 55 58, 50 52 C 45 58, 43 66, 44 74 Z"
        fill={light ? "rgba(255,248,238,0.18)" : "rgba(31,65,54,0.12)"}
      />

      {/* --- THE WAYPOINT / CARTOGRAPHIC BEACON (NORTH STAR) --- */}
      {/* 
        Anchored directly at the zenith of the negative space palms,
        functioning as both a compass rose needle and the guiding beacon of Celebrity Aid.
      */}
      <g className={animated ? "animate-pulse" : ""}>
        {/* Luminous beacon star aura */}
        <circle cx="50" cy="27" r="7" fill={`url(#star-grad-${light ? "light" : "dark"})`} opacity="0.25" />
        
        {/* 4-Point Precision Cartography Compass Star */}
        <path
          d="M 50 14
             L 52.8 24.2
             L 63 27
             L 52.8 29.8
             L 50 40
             L 47.2 29.8
             L 37 27
             L 47.2 24.2
             Z"
          fill={`url(#star-grad-${light ? "light" : "dark"})`}
          stroke={light ? "#1f4136" : "#fff8ee"}
          strokeWidth="0.75"
          filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))"
        />

        {/* Center compass pivot core */}
        <circle cx="50" cy="27" r="1.5" fill={light ? "#1f4136" : "#fff8ee"} />
      </g>
    </svg>
  );
}

/**
 * Full Composite Brand Lockup (Mark + Modern High-End Typography)
 */
export default function CaseacBrandLockup({
  light = false,
  size = 42,
  showTagline = true,
}: {
  light?: boolean;
  size?: number;
  showTagline?: boolean;
}) {
  return (
    <div className="flex items-center gap-3.5 group select-none">
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <CaseacLogoMark size={size} light={light} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-condensed text-[1.18rem] font-bold uppercase tracking-[0.07em] leading-none ${
              light ? "text-[#fff8ee]" : "text-[#1d3029]"
            }`}
          >
            Celebrity Aid
          </span>
          <span className="rounded bg-[#e7b44a]/20 px-1.5 py-0.5 text-[0.62rem] font-bold tracking-[0.08em] text-[#e7b44a] border border-[#e7b44a]/30">
            CASEAC
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[0.65rem] font-medium tracking-[0.14em] uppercase mt-0.5 ${
              light ? "text-[#b5c7b8]" : "text-[#5a6b61]"
            }`}
          >
            Social Entrepreneurship Action Center
          </span>
        )}
      </div>
    </div>
  );
}
