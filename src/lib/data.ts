export type Project = {
  slug: string;
  title: string;
  company: string;
  category: string;
  period: string;
  skills: string[];
  impact: string[];
  context: string;
  problem: string;
  actions: string[];
  results: string[];
  learning: string;
};

export type Experience = {
  company: string;
  companyDesc: string;
  role: string;
  period: string;
  description: string;
  keyFocus: string[];
  impact: string[];
};

export const experiences: Experience[] = [
  {
    company: "BIGO Live",
    companyDesc: "Independent live-streaming platform with 700M+ users across 150+ countries",
    role: "Business Development",
    period: "2026.04 ~ Present",
    description:
      "Creator agency sourcing and partnership development for a live-streaming platform. Building growth opportunities through external collaborations and event partnerships.",
    keyFocus: [
      "Creator agency sourcing",
      "Partnership development",
      "Event collaboration",
      "Market research",
      "Business opportunity mapping",
    ],
    impact: [],
  },
  {
    company: "ZEISS Vision Korea",
    companyDesc: "Global optics leader since 1846 — maker of lenses for NASA, TSMC, and half the world's eyewear",
    role: "Sales & Marketing Associate",
    period: "2025.02 ~ 2026.03",
    description:
      "Managed Sales & Marketing Operations including PR media management, competitor intelligence, VTS contract process normalization, and executive meeting operations.",
    keyFocus: [
      "B2B PR media operation",
      "Competitor intelligence",
      "VTS contract management",
      "Executive meeting operations",
      "Product content localization",
    ],
    impact: [
      "PR budget optimization with high-efficiency media focus",
      "Competitor intelligence database built from scratch",
      "Overdue contracts reduced from 40+ to under 10",
      "Meeting note lead time cut by ~50%",
    ],
  },
  {
    company: "SAP Korea",
    companyDesc: "World's #1 enterprise software company — 77% of global transaction revenue touches an SAP system",
    role: "STAR Program Intern",
    period: "2023.07 ~ 2024.12",
    description:
      "Rotated through Customer Advisory, Digital Supply Chain, Growth Pillar, and Management Office. Delivered global reference analysis, partner enablement, culture programs, and international event operations.",
    keyFocus: [
      "Global reference analysis",
      "Content localization",
      "Partner enablement",
      "Mentoring programs",
      "Global event operations",
    ],
    impact: [
      "20+ global references analyzed for cloud migration advisory",
      "Partner training satisfaction 4.3/5.0",
      "32-page onboarding guide created",
      "Global intern event satisfaction 4.85/5.0 across 13 countries",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "zeiss-vts-contract-process",
    title: "VTS Contract Process Normalization",
    company: "ZEISS Vision Korea",
    category: "Sales Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Sales Operations",
      "Contract Management",
      "Process Improvement",
      "Stakeholder Management",
      "Risk Management",
    ],
    impact: [
      "Overdue contracts: 40+ down to under 10",
      "Backlog reduced by ~75%",
      "Monthly contract pipeline stabilized",
    ],
    context:
      "As VTS business grew rapidly, the contract management process was not yet stabilized. Documents, approval flows, and handoff methods were scattered across multiple tools, leaving many contracts unresolved.",
    problem:
      "40+ contracts remained unsigned, with no visibility into per-rep document status or delay reasons. This risked monthly revenue recognition and financial close.",
    actions: [
      "Audited all pending documents to identify gaps and processing stages",
      "Built a unified tracker with contract status, owner, delay reason, and required action",
      "Standardized approval flow with checklists to reduce omissions",
      "Shared weekly overdue lists with sales team and VTS leader",
      "Guided individual reps on specific corrections needed",
      "Established document review, seal, scan, and handoff routine",
    ],
    results: [
      "Reduced long-overdue contracts from 40+ to under 10",
      "Backlog decreased by approximately 75%",
      "Stabilized monthly pipeline of ~20 new contracts flowing to finance",
      "Lowered financial and operational risk from delayed contract closures",
    ],
    learning:
      "Operational improvement starts with turning vague problems into numbers. Once overdue items were visible, delays were classified, and owners were clear, the process became solvable rather than just something to chase.",
  },
  {
    slug: "zeiss-competitor-intelligence",
    title: "Competitor Intelligence System",
    company: "ZEISS Vision Korea",
    category: "Data & Intelligence",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Competitive Intelligence",
      "Market Research",
      "Data Structuring",
      "Reporting",
      "Knowledge Management",
    ],
    impact: [
      "Internal competitor DB built from scratch",
      "Monthly reporting cadence established",
      "Info search time reduced for PMs and team leads",
    ],
    context:
      "Competitor promotions, product launches, training activities, and management news were scattered across channels, making it difficult for the team to get a unified view.",
    problem:
      "Market research was done ad-hoc by team leads and PMs, resulting in fragmented, non-comparable data. A standardized analysis framework was needed.",
    actions: [
      "Designed competitor analysis framework around key indicators: new products, B2B/B2C promos, training, management",
      "Identified and organized primary information sources with monthly monitoring routines",
      "Standardized data fields: summary, links, images, key implications",
      "Delivered monthly reports to marketing team lead and PMs",
      "Documented research guidelines and channel lists for successor handoff",
    ],
    results: [
      "Converted scattered market info into a comparable internal database",
      "PMs and team leads could track competitor trends without separate research",
      "Reduced information discovery and organization time; enabled time-series analysis",
    ],
    learning:
      "Data value comes from classification criteria, not collection volume. The same information can become decision-grade intelligence or just a record, depending on the framework used to organize it.",
  },
  {
    slug: "zeiss-pr-operations",
    title: "PR Operations & Budget Optimization",
    company: "ZEISS Vision Korea",
    category: "Marketing Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Marketing Operations",
      "PR Planning",
      "Budget Optimization",
      "Vendor Management",
      "Quality Control",
    ],
    impact: [
      "PR budget optimized for high-efficiency media",
      "Kakao channel followers: 1,700 to 2,100+",
      "~40 content posts managed monthly",
    ],
    context:
      "Managed B2B PR media and promotional content at ZEISS Vision Korea. PR operational standards were unclear, requiring prioritization by media efficiency and product launch schedules.",
    problem:
      "Under budget constraints, the challenge was not simple cost-cutting but determining which media channels to concentrate on. Product technical features needed translation into customer-benefit messaging.",
    actions: [
      "Reviewed existing budget and media-level efficiency comparisons",
      "Linked product launch schedules to PR timelines for annual planning",
      "Analyzed product USPs and restructured technical messaging into customer-benefit copy",
      "Adjusted tone-and-manner per media audience",
      "Managed vendor communication: manuscript delivery, proof review, revision tracking, publication confirmation",
      "QA'd final publications for errors, logo placement, layout; scraped results for next cycle",
    ],
    results: [
      "Established high-efficiency media-focused PR operating standards",
      "Optimized PR budget while maintaining operational quality",
      "Kakao channel followers grew from ~1,700 to ~2,100",
      "Managed ~40 content postings per month",
    ],
    learning:
      "In marketing operations, the key is not cutting costs but placing limited budget where it creates higher impact. Judgment about allocation matters more than the amount itself.",
  },
  {
    slug: "zeiss-executive-meeting-operations",
    title: "Executive Meeting Operations",
    company: "ZEISS Vision Korea",
    category: "Project Management",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Meeting Operations",
      "Action Item Management",
      "AI Workflow",
      "Executive Communication",
      "Process Standardization",
    ],
    impact: [
      "Meeting note lead time cut by ~50%",
      "Action item tracking system established",
      "Execution miss risk reduced",
    ],
    context:
      "Executive meetings discussed many agenda items, but the existing note-taking approach lacked clear accountability and follow-up. The system needed to shift from record-keeping to action-item-driven operations.",
    problem:
      "Notes were long but unclear on who should do what by when, making follow-up tracking difficult. Note creation and distribution also took too long.",
    actions: [
      "Redesigned meeting note structure around a 3-column system: Action Item, Owner, Due Date",
      "Used STT and LLM tools to transcribe and structure key agenda items",
      "Accumulated meeting history in OneNote for searchable reference",
      "Verified AI summaries against context and executive intent for accuracy",
      "Standardized templates and processes for successor handoff",
    ],
    results: [
      "Meeting note creation and distribution lead time reduced by ~50%",
      "Action-item-driven meetings reduced execution miss risk",
      "Built a meeting operations system for quick information retrieval across management and departments",
    ],
    learning:
      "Meeting notes are not records of the past but tools that create future action. Good notes don't contain more information; they make it clear what needs to happen next.",
  },
  {
    slug: "sap-customer-advisory",
    title: "Customer Advisory Reference Analysis",
    company: "SAP Korea",
    category: "Customer Advisory",
    period: "2023.07 ~ 2023.12",
    skills: [
      "Industry Research",
      "Benchmarking",
      "Value Selling",
      "Stakeholder Communication",
      "Business Case Development",
    ],
    impact: [
      "20+ global references analyzed and structured",
      "Cloud migration decision support delivered",
      "Proposal credibility strengthened",
    ],
    context:
      "Analyzed global consumer goods and entertainment industry references at SAP Korea's Customer Advisory organization to support client cloud migration decisions.",
    problem:
      "The client was on-premise and lacked conviction about cloud migration ROI and timing. They needed persuasion through comparable global cases, not just technical specs.",
    actions: [
      "Analyzed client business domains and benchmarked against Disney, Nestle, and similar globals",
      "Classified 20+ references by cloud architecture and pre/post process changes",
      "Cross-verified news, reports, and public data for reference credibility",
      "Structured findings into client-friendly PPT materials",
      "Collaborated with Value Advisory team to frame migration benefits from decision-maker perspective",
    ],
    results: [
      "Built a client-customized benchmarking framework",
      "Strengthened proposal logic and external credibility",
      "Contributed to materials supporting client cloud migration decisions",
    ],
    learning:
      "Clients respond to business outcomes, not technology itself. When explaining complex solutions, connecting features to the client's pain points and expected outcomes is what matters.",
  },
  {
    slug: "sap-digital-supply-chain",
    title: "Digital Supply Chain Operations",
    company: "SAP Korea",
    category: "Digital Supply Chain",
    period: "2024.01 ~ 2024.06",
    skills: [
      "Content Localization",
      "Partner Enablement",
      "Sales Operations",
      "Event Operations",
      "Operational Excellence",
    ],
    impact: [
      "LinkedIn post views: 2,000+",
      "Event registrants: 300 leads generated",
      "Partner training satisfaction: 4.3/5.0",
      "32-page onboarding guide produced",
    ],
    context:
      "Supported content localization, event operations, and partner training at SAP Korea's Digital Supply Chain organization. Bridged global tech assets to domestic customers and partners.",
    problem:
      "Technical materials from global events like Hannover Messe were not easily transferable to Korean customers. Partner solution understanding and new intern onboarding also needed operational support.",
    actions: [
      "Translated Digital Manufacturing materials and produced Korean subtitles for event footage",
      "Supported LinkedIn posts and blog series localized for Korean customers",
      "Supported DSC Innovation Day operations with online-offline marketing flow",
      "Provided tech setup and interpretation for 20-partner PC+EHS solution training",
      "Created a 32-page onboarding guide documenting team operational know-how",
      "Managed Zoom hosting for 60-person intern bootcamp with timetable and contingency planning",
    ],
    results: [
      "LinkedIn content reached 2,000+ views",
      "Generated 300 valid leads from event registrations",
      "Partner training satisfaction: 4.3/5.0",
      "Produced onboarding guide improving new hire ramp-up and handoff efficiency",
    ],
    learning:
      "In B2B, content, training, and events are not separate activities but one connected sales funnel. Converting global assets into local customer language and making them actionable for partners builds the foundation for revenue opportunities.",
  },
  {
    slug: "sap-growth-pillar",
    title: "Growth Pillar Operations",
    company: "SAP Korea",
    category: "Employee Experience",
    period: "2024.07 ~ 2024.12",
    skills: [
      "Program Operations",
      "Community Design",
      "Mentoring Program",
      "Internal Communication",
      "Engagement Management",
    ],
    impact: [
      "Mentorship participation: 300% increase",
      "Mentoring satisfaction: 4.29/5.0",
      "WISET event: 43 participants, 97.7% satisfaction",
    ],
    context:
      "Supported mentoring, book clubs, internal communications, and external partnership events at SAP Korea's Growth Pillar organization.",
    problem:
      "Existing mentoring and internal programs lacked structural mechanisms to drive participation. Participants needed to clearly feel the program's value through improved operations, content, and communications.",
    actions: [
      "Improved Customer Advisory mentoring program participation methods and communications",
      "Designed program flow considering mentor and mentee needs",
      "Supported book club and growth program experience improvements",
      "Supported WISET event operations, designing touchpoints between external and internal participants",
      "Collected post-program satisfaction data and derived improvement directions",
    ],
    results: [
      "Customer Advisory mentorship participation increased 300% from baseline",
      "Mentoring satisfaction: 4.29/5.0",
      "WISET event: 43 participants with 97.7% satisfaction",
    ],
    learning:
      "Culture programs do not succeed on good intentions alone. Participants need to clearly feel why their time is worthwhile, and the experience after participation must be designed for the program to be sustainable.",
  },
  {
    slug: "sap-global-events",
    title: "Global Event Operations",
    company: "SAP Korea",
    category: "Global Event Operations",
    period: "2024.07 ~ 2024.12",
    skills: [
      "Global Communication",
      "Event Planning",
      "Program Facilitation",
      "Stakeholder Management",
      "Crisis Response",
    ],
    impact: [
      "13-country intern event operated",
      "Average satisfaction: 4.85/5.0",
      "Sponsorship and employee experience programs supported",
    ],
    context:
      "Supported global intern events, sponsorship events, and employee experience programs at SAP Korea. Required operational capabilities considering diverse countries, cultures, and time zones.",
    problem:
      "Global events involve participants from different countries and cultural backgrounds with complex scheduling and communication. Large-scale events prepared on short timelines required precise role division and fast communication.",
    actions: [
      "Designed program flow and operations for a 13-country intern event",
      "Prepared icebreakers, session flows, and guidance messages for participant experience",
      "Communicated with global HQ and internal stakeholders to track progress",
      "Supported FC Bayern Munich visit sponsorship event and employee experience programs",
      "Managed crisis response with quick reporting and backup plan activation",
    ],
    results: [
      "13-country intern event: average satisfaction 4.85/5.0",
      "Built global communication and event operations experience",
      "Learned the importance of participant experience, operational stability, and crisis response in large events",
    ],
    learning:
      "The core of event operations is not flashy on-stage production but pre-building structures so the flow does not break even when problems arise. Good operations start with invisible design that prevents participants from feeling any discomfort.",
  },
  {
    slug: "cau-logistics-innovation",
    title: "Eco-friendly Logistics Innovation Competition",
    company: "Chung-Ang University",
    category: "Academic Project",
    period: "2021.12",
    skills: [
      "Market Analysis",
      "Sustainable Logistics",
      "ESG Strategy",
      "Business Planning",
      "Problem Solving",
    ],
    impact: [
      "Grand Prize (Best Award) winner",
      "India-market eco-pallet and eco-box solution",
      "Connected ESG with logistics efficiency",
    ],
    context:
      "Designed a solution addressing eco-friendly logistics materials and cold-chain problems targeting the Indian market for a university logistics innovation competition.",
    problem:
      "Tightening global environmental regulations made existing styrofoam and wood pallets costly and environmentally limited. India's cold-chain demand was growing but transport conditions and waste infrastructure were constrained.",
    actions: [
      "Analyzed India's climate, transport environment, cold-chain demand, and waste processing challenges",
      "Proposed replacing wood pallets with biodegradable alternatives",
      "Designed an inorganic-coated textile Eco-box solution replacing styrofoam",
      "Engineered a reusable circular logistics system with cost and waste reduction projections",
      "Combined ESG perspective with operational efficiency for business viability",
    ],
    results: [
      "Won Grand Prize at the Eco-friendly Logistics Innovation Competition",
      "Recognized for India-market specificity and solution practicality",
      "Validated strategic thinking that solves environmental problems through business logic",
    ],
    learning:
      "Logistics strategy is not just about moving goods. It requires simultaneously considering national infrastructure, climate, regulations, and cost structures. Sustainability gains real adoption potential only when backed by business viability.",
  },
  {
    slug: "cau-debate-competition",
    title: "Debate Competition",
    company: "Chung-Ang University",
    category: "Academic Project",
    period: "2019.05",
    skills: [
      "Critical Thinking",
      "Persuasive Communication",
      "Crisis Management",
      "Logical Reasoning",
      "Teamwork",
    ],
    impact: [
      "1st place in university debate competition",
      "Completed CEDA debate with teammate deficit",
      "Demonstrated crisis response under pressure",
    ],
    context:
      "Participated in a CEDA-format debate on hate speech regulation based on the book 'When Words Become Weapons' at Chung-Ang University.",
    problem:
      "A teammate unexpectedly dropped out, forcing the remaining members to cover all research, opening arguments, cross-examination, and rebuttals with reduced headcount.",
    actions: [
      "Redesigned roles for remaining members and prioritized research scope",
      "Structured pro/con arguments in MECE format",
      "Prepared scenario-based rebuttals and designed cross-examination flows",
      "Increased argument density and precision to compensate for fewer speakers",
      "Led the full flow: opening, cross-examination, and rebuttal",
    ],
    results: [
      "Completed the competition despite teammate deficit",
      "Won 1st place at the university debate competition",
      "Demonstrated that disadvantages can be overcome with logic and preparation",
    ],
    learning:
      "In a crisis, the priority is redesigning a winning structure with remaining resources rather than lamenting what is lost. Persuasion comes from the precision of logic and strength of evidence, not volume of voice.",
  },
];

export const skills = {
  "Business Development": [
    "Partnership opportunity sourcing",
    "External collaboration research",
    "Market collaboration analysis",
    "Event & brand collaboration planning",
    "Business opportunity mapping",
  ],
  "Sales Operations": [
    "Contract pipeline management",
    "Overdue tracking & follow-up",
    "Sales team communication",
    "Process bottleneck identification",
    "Revenue recognition support",
  ],
  "Marketing Operations": [
    "B2B PR media operation",
    "Promotional content planning & distribution",
    "Product message structuring",
    "Tone-and-manner per media channel",
    "Global content localization",
  ],
  "Data & Intelligence": [
    "Competitor trend analysis",
    "Market information collection & classification",
    "Report writing",
    "Database development",
    "Decision support materials",
  ],
  "Project Management": [
    "Schedule management",
    "Stakeholder coordination",
    "Meeting operations",
    "Action item management",
    "Process documentation",
  ],
};

export const awards = [
  {
    date: "2024.12",
    award: "Build Bridges Not Silos Award",
    org: "SAP",
    category: "Company",
  },
  {
    date: "2024.02",
    award: "Summa Cum Laude, Salutatorian, Early Graduation",
    org: "Chung-Ang University",
    category: "Academic",
  },
  {
    date: "2023.12",
    award: "Dedication to Learning Award",
    org: "SAP DA Team",
    category: "Company",
  },
  {
    date: "2021.12",
    award: "Eco-friendly Logistics Innovation Grand Prize",
    org: "Chung-Ang University",
    category: "Academic",
  },
  {
    date: "2020.03",
    award: "Jungsoo Scholarship & Essay Grand Prize",
    org: "Jungsoo Foundation",
    category: "Academic",
  },
  {
    date: "2019.05",
    award: "Debate Competition 1st Place",
    org: "Chung-Ang University",
    category: "Academic",
  },
];

export const certifications = [
  { name: "OPIc", level: "AL", date: "2025.01" },
  { name: "ADsP (Data Analysis Semi-Professional)", level: "", date: "2022.09" },
  { name: "International Trade Professional", level: "Level 1", date: "2021.09" },
  { name: "Logistics Manager", level: "", date: "2021.08" },
  { name: "Trade English", level: "Level 1", date: "2020.12" },
  { name: "Computer Proficiency", level: "Level 1", date: "2019.12" },
];

export function getFeaturedProjects() {
  return projects.filter((p) =>
    [
      "zeiss-vts-contract-process",
      "sap-customer-advisory",
      "sap-global-events",
    ].includes(p.slug)
  );
}
