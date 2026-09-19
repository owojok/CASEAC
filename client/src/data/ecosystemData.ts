export interface EcosystemStage {
  id: number;
  step: string;
  name: string;
  category: "Discovery" | "Architecture" | "Execution" | "Evolution";
  summary: string;
  inputs: string[];
  actions: string[];
  outputs: string[];
}

export const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 1,
    step: "01",
    name: "IDENTIFIES",
    category: "Discovery",
    summary:
      "Pinpoints acute societal challenges and the dormant assets, influence, and community capabilities ready to solve them.",
    inputs: [
      "People & Lived Experience",
      "Frontline Social Issues",
      "Untapped Cultural Influence",
      "Institutional Assets & Risks",
      "Available Capital Resources",
    ],
    actions: [
      "Diagnostic social vulnerability mapping",
      "Stakeholder power and influence auditing",
      "Resource gap identification",
      "Early risk and feasibility analysis",
    ],
    outputs: [
      "Vulnerability & Asset Baseline Report",
      "Stakeholder Mapping Matrix",
      "Opportunity Dossier",
    ],
  },
  {
    id: 2,
    step: "02",
    name: "ENGAGES",
    category: "Discovery",
    summary:
      "Brings together celebrated individuals, groups, institutions, and grassroots innovators as co-creators of change.",
    inputs: [
      "Celebrated Individuals & Leaders",
      "Community Coalitions & Groups",
      "Partner Institutions & Academics",
      "Frontline Social Entrepreneurs",
    ],
    actions: [
      "Trust-building and ethical alignment",
      "Multi-stakeholder convenings and roundtable forums",
      "Expectation setting and shared governance pacts",
    ],
    outputs: [
      "Co-Creation Charter",
      "Champion Commitment Agreements",
      "Community Advisory Panel",
    ],
  },
  {
    id: 3,
    step: "03",
    name: "LISTENS & ASSESSES",
    category: "Discovery",
    summary:
      "Applies clinical and community social-work methodologies to deeply understand systemic needs and strengths.",
    inputs: [
      "Community Voice & Lived Experience",
      "Systemic Vulnerability Factors",
      "Existing Capacities & Relationships",
      "Cultural & Environmental Contexts",
    ],
    actions: [
      "Trauma-informed field interviews",
      "Social risk and resilience diagnostics",
      "Ecological systems analysis",
      "Capacity and barrier assessment",
    ],
    outputs: [
      "Comprehensive Needs & Strengths Audit",
      "Contextual Risk Profile",
      "Baseline Indicator Scorecard",
    ],
  },
  {
    id: 4,
    step: "04",
    name: "CONNECTS",
    category: "Architecture",
    summary:
      "Bridges problems with expertise, influence, markets, technology, networks, and catalytic funding.",
    inputs: [
      "Identified Community Challenges",
      "Specialized Domain Expertise",
      "Media & Distribution Channels",
      "Commercial Markets & Technology",
    ],
    actions: [
      "Cross-sector partnership brokering",
      "Capital matching (philanthropic and blended)",
      "Technology and data infrastructure integration",
    ],
    outputs: [
      "Strategic Partnership Consortium",
      "Resource Allocation Architecture",
      "Network Routing Map",
    ],
  },
  {
    id: 5,
    step: "05",
    name: "CO-DESIGNS",
    category: "Architecture",
    summary:
      "Formulates tailored interventions, social enterprises, advocacy campaigns, and sustainable solutions with the community.",
    inputs: [
      "Diagnostic Assessment Data",
      "Human-Centered Design Frameworks",
      "Community Preferences & Assets",
      "Enterprise Economic Models",
    ],
    actions: [
      "Rapid prototyping workshops",
      "Theory of Change formulation",
      "Business and revenue modeling for ventures",
      "Safeguarding and risk mitigation protocols",
    ],
    outputs: [
      "Intervention Master Blueprint",
      "Enterprise Financial Model",
      "Ethical Campaign Framework",
    ],
  },
  {
    id: 6,
    step: "06",
    name: "MOBILISES",
    category: "Architecture",
    summary:
      "Deploys people, catalytic capital, knowledge, technology, networks, and physical infrastructure for rapid activation.",
    inputs: [
      "Seed & Blended Capital",
      "Volunteer & Professional Talent",
      "Technology Platforms & Tools",
      "Physical Facilities & Hubs",
    ],
    actions: [
      "Equity-free seed grant disbursement",
      "Expert team assignment and training",
      "Infrastructure setup across regional hubs",
      "Distribution channel readiness",
    ],
    outputs: [
      "Deployed Capital Tranche",
      "Operational Ground Teams",
      "Live Support Infrastructure",
    ],
  },
  {
    id: 7,
    step: "07",
    name: "ACTIVATES",
    category: "Execution",
    summary:
      "Executes integrated social work, social entrepreneurship, advocacy, innovation, and direct community action.",
    inputs: [
      "Mobilised Infrastructure & Capital",
      "Frontline Practitioners & Mentors",
      "Community Participants & Founders",
      "Media & Advocacy Platforms",
    ],
    actions: [
      "Frontline case-management and social care",
      "Enterprise incubation and market rollout",
      "Public-interest awareness campaigns",
      "Active community support delivery",
    ],
    outputs: [
      "Active Ventures & Initiatives",
      "Client & Community Touchpoints",
      "Verified Service Delivery",
    ],
  },
  {
    id: 8,
    step: "08",
    name: "MEASURES & LEARNS",
    category: "Execution",
    summary:
      "Tracks outcomes, social return on investment, inclusion, evidence generation, and key operational lessons.",
    inputs: [
      "Real-Time Field Data",
      "Participant Feedback & Metrics",
      "Financial Sustainability Reports",
      "Standardised Social Indicators",
    ],
    actions: [
      "Independent impact evaluation",
      "Social Return on Investment (SROI) audit",
      "Cohort progress tracking and diagnostics",
      "Participant welfare surveys",
    ],
    outputs: [
      "Quarterly Impact Verification Report",
      "Lessons Learned Synthesis",
      "Evidence Base Contribution",
    ],
  },
  {
    id: 9,
    step: "09",
    name: "ADAPTS",
    category: "Evolution",
    summary:
      "Refines what works, evolves with community needs, and incorporates emerging empirical evidence.",
    inputs: [
      "Evaluation Findings & Feedback",
      "Shifting Community Demographics",
      "Macroeconomic & Risk Changes",
      "New Technological Capabilities",
    ],
    actions: [
      "Programmatic iteration and workflow tuning",
      "Policy and resource reallocation",
      "Model optimization based on ground truth",
    ],
    outputs: [
      "Optimized Operational Playbook",
      "Adaptive Strategy Update",
      "Targeted Resource Pivot",
    ],
  },
  {
    id: 10,
    step: "10",
    name: "SCALES SOCIAL VALUE",
    category: "Evolution",
    summary:
      "Replicates validated models, institutionalizes frameworks, expands partnerships, and influences systemic change.",
    inputs: [
      "Validated Interventions & Enterprises",
      "Institutional Policy Windows",
      "Growth Capital & Expansion Partners",
      "Peer Hub Networks",
    ],
    actions: [
      "Geographic replication across hubs",
      "Public policy and legislative engagement",
      "Institutional contract acquisition for ventures",
      "Ecosystem-wide open-sourcing of playbooks",
    ],
    outputs: [
      "Multi-Region Deployment",
      "Institutional Policy Reforms",
      "Expanded Impact Footprint",
    ],
  },
  {
    id: 11,
    step: "11",
    name: "REINVESTS",
    category: "Evolution",
    summary:
      "Channels financial returns, insights, social capital, and leadership back into people, communities, and new solutions.",
    inputs: [
      "Venture Revenue & Surplus Capital",
      "Graduated Cohort Leadership",
      "Refined Methodologies & IP",
      "Enduring Public Trust",
    ],
    actions: [
      "Reinvestment into the CASEAC Seed Fund",
      "Mentorship succession by alumni founders",
      "Endowment of new community laboratories",
    ],
    outputs: [
      "Perpetual Community Endowment",
      "Next-Generation Pipeline",
      "Self-Sustaining Local Sovereignty",
    ],
  },
  {
    id: 12,
    step: "12",
    name: "REGENERATIVE ENGINE",
    category: "Evolution",
    summary:
      "Feeds all generated capital, credibility, and insights back into Stage 01, driving an infinite cycle of social impact.",
    inputs: [
      "Expanded Influence & Public Trust",
      "Enriched Evidence Base",
      "Strengthened Community Assets",
    ],
    actions: [
      "Initiating new thematic diagnostics",
      "Unlocking higher-order systemic challenges",
      "Catalyzing broader institutional coalitions",
    ],
    outputs: [
      "Continuous Generative Impact Cycle",
      "Systemic Resilience",
    ],
  },
];
