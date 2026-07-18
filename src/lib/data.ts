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
    slug: "zeiss-legacy-web-integration",
    title: "Legacy Website Integration & Next-gen Web (CZV.kr) Migration Planning/QA",
    company: "ZEISS Vision Korea",
    category: "Project Management",
    period: "2025.02 ~ 2026.03",
    skills: [
      "UI/UX Planning",
      "Wireframing (Figma/Axure)",
      "Tech-Biz Bridge",
      "Web QA / Master Data",
      "Cloud Migration",
    ],
    impact: [
      "Consolidated 3 fragmented sites into 2",
      "80% of maintenance requests handled within a week",
      "Zero option-setup errors defended",
    ],
    context:
      "Three legacy websites (BestVC, CZV.KR, CZV.co.kr) were operated in a fragmented way, driving up maintenance costs and scattering sales reps' workflows. The system setup for promotions (lens-product-coupon) was also complex enough to require developer resources, and compliance with global security guidelines (Azure Compliance) became a requirement.",
    problem:
      "Managing three separate sites duplicated maintenance resources and forced sales reps to move across different sites for each task. As a non-developer planner, I had to draw a clear blueprint bridging marketing's abstract requirements and development, and secure the quality of the new integrated site (CZV.kr) before launch.",
    actions: [
      "Collected the marketing team's abstract pain points (VoC) into a concrete planning deck (PPT) for frontend/backend UI improvements and proposed an architecture integrating the order process with POS functionality",
      "Produced wireframes in Figma/Axure and acted as a Tech-Biz Bridge, translating marketing requirements into technical terms developers could understand",
      "Converted marketing promotion plans (refractive index × 12 product combinations) into system-recognizable data values (lens/product codes) and created and delivered defect-free master data",
      "Attended the new integrated site (CZV.kr) build meetings weekly, performed precise QA against the global standard (MyZeiss) and Figma designs, and ticketed and verified bugs/improvements assigned to developers",
      "Proposed API-based automation (RPA) for the manual marketing material order process and ran QA testing",
      "Reviewed global security guideline compliance throughout the Azure cloud migration",
    ],
    results: [
      "Consolidated 3 fragmented sites into 2, removing operational complexity and improving the sales rep experience",
      "Defended zero option-setup errors and removed critical errors before launch, securing brand consistency",
      "Minimized miscommunication between planning and development so that 80% of maintenance requests were handled within a week",
      "Migrated repetitive manual work to systems, reducing sales admin work by 30% and cutting marketing material order time by 50%",
    ],
    learning:
      "Good planning means drawing a clear blueprint so developers can code without second-guessing, and translating the language of marketing (planning) into the language of systems (code) is the core of digital operations. When a non-developer collaborates with engineers, persuading them on 'why' matters more than dictating 'what', and true DX is not about swapping tools but about letting systems do the work people used to do.",
  },
  {
    slug: "zeiss-content-localization",
    title: "Global Product Web/Sales Content Localization",
    company: "ZEISS Vision Korea",
    category: "Marketing Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Content Localization",
      "Transcreation",
      "JIRA Workflow",
      "Brand Consistency",
      "Sales Enablement",
    ],
    impact: [
      "Work speed improved 30%+",
      "25 pages of web content shipped",
      "Registered as official KR standard assets",
    ],
    context:
      "Localized web and sales content for flagship global products (Gold Coating, Sun Lens, Anti-fog). The existing PPT/manual translation approach made version control difficult and wasted effort on updates, all during a transition to a global tool (JIRA).",
    problem:
      "Manual translation consumed time on text extraction and formatting and was hard to version-control. At the same time, content had to preserve the global tone and manner while being recast into locally resonant Korean marketing language.",
    actions: [
      "Shifted from the manual (PPT) approach to JIRA ticket-based collaboration, removing manual text extraction/entry and establishing real-time progress sharing",
      "Followed global guidelines but avoided literal translation, applying transcreation suited to the Korean market",
      "Ran regular alignment checks with the marketing lead to unify the internal glossary",
      "Produced and distributed 25 pages of web content ready for immediate B2B/B2C field use",
    ],
    results: [
      "Removing unnecessary formatting improved focus on pure translation, raising overall work speed by 30%+ (estimated)",
      "Built marketing language that resonates with Korean customers while preserving the global tone and manner",
      "Registered on the official Korean website and sales materials as standard customer-communication assets",
    ],
    learning:
      "Translation is not about changing language but redefining the value proposition for the target market, and adopting a new collaboration tool is not just learning features but innovating the way of work.",
  },
  {
    slug: "zeiss-academy-certificate-fulfillment",
    title: "Academy Certificate Issuance & Delivery Optimization",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Process Standardization",
      "Vendor Management",
      "Scalability Design",
      "Data Privacy",
      "Risk Management",
    ],
    impact: [
      "Monthly workload cut by 80%",
      "Zero personal-data leaks",
      "Shifted to a variable-cost structure",
    ],
    context:
      "Issuing and delivering ZEISS Academy certificates took 5+ hours of manual work (printing/packing/shipping) per month, reducing focus on core tasks and creating an unscalable structure that could not handle a surge in trainees.",
    problem:
      "The manual approach requiring individual edits could not scale, and sharing customer lists (personal data) with an external vendor introduced leak risk.",
    actions: [
      "Upgraded the Word forms requiring individual edits into data-merge-friendly PDF forms, establishing a print-optimized spec",
      "Handed repetitive work (printing/packing/shipping) to a specialized vendor and redesigned R&R so internal staff focus on high-value planning/management",
      "Established and applied an encrypted file-sharing principle (R&R) between designated owners when sharing personal data with the external vendor",
    ],
    results: [
      "Cut monthly workload from 5 hours to 1 hour (~80% reduction)",
      "Built a scalable system (variable-cost structure) that can handle 10x or 100x more trainees",
      "Maintained zero personal-data leak incidents throughout the process change and external collaboration",
    ],
    learning:
      "The prerequisite for automation and outsourcing is standardizing the work, results come from allocating the optimal resources rather than doing everything myself, and the pursuit of efficiency must never compromise security principles.",
  },
  {
    slug: "zeiss-academy-cs",
    title: "Academy Trainee Operations (CS) & Cross-team Communication",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Customer Support",
      "Communication Protocol",
      "FAQ/Documentation",
      "Issue Triage",
      "Cross-team Collaboration",
    ],
    impact: [
      "Zero dropped tasks",
      "Repeat inquiries preempted",
      "Drove a line-separation restructure",
    ],
    context:
      "Frequent field work by the academy team left gaps in customer response, and early reliance on volatile messenger (Teams) communication left accountability unclear and repeated the same inquiries.",
    problem:
      "Communication that left no record caused dropped tasks and repeat inquiries, and there was a risk of relaying wrong information without sufficient technical knowledge (e.g., lenses).",
    actions: [
      "Unified the communication channel to official email with an audit trail, switching from 1:1 handoffs to CC'ing the whole relevant team",
      "Analyzed recurring question types to improve LMS notification readability and proactively include FAQ information (Proactive CS)",
      "Established a triage process to summarize and route technical inquiries that couldn't be answered immediately, and built the case data for a structural line-separation solution",
    ],
    results: [
      "Achieved zero dropped tasks from verbal/messenger communication and enabled team-level monitoring of inquiry status",
      "Preempted repetitive confirmation inquiries, saving response resources and improving customer information access",
      "Blocked the possibility of claims from wrong information at the source and ultimately drove a work-scope split (line separation)",
    ],
    learning:
      "The basis of collaboration is records, not memory; the best CS makes questions unnecessary; and accurately connecting rather than pretending to know is itself a problem-solving skill.",
  },
  {
    slug: "zeiss-inventory-fulfillment",
    title: "Marketing Material Inventory & Fulfillment Operations",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Inventory Management",
      "Data Integration",
      "Demand Forecasting",
      "Expense Reconciliation (Concur)",
      "SCM Collaboration",
    ],
    impact: [
      "Admin time cut 35%",
      "Inventory inquiries down 60%",
      "Inventory error rate under 10%",
    ],
    context:
      "Handling 105 marketing material types and 6,000 monthly transactions, inventory data was fragmented across 8 Excel files, making real-time status hard to grasp and causing operational risk such as missing imminent stock-outs.",
    problem:
      "Fragmented inventory data created order-miss and stock-out risk, cross-team inventory inquiries were frequent, and an annual budget worth hundreds of millions of KRW had to be reconciled without error.",
    actions: [
      "Analyzed the 8 fragmented legacy inventory files, removed duplicates, and integrated them into a single master file (5 sheets) as a Single Source of Truth",
      "Shared the integrated master file with SCM/marketing in real time (SharePoint) to resolve information asymmetry between the warehouse and HQ",
      "Used the integrated data to forecast imminent stock-outs and place proactive orders",
      "Audited all corporate card usage monthly via Concur and PowerApps and clarified cost-owning departments",
    ],
    results: [
      "Cut data entry/reconciliation admin time by 35% and structurally blocked human error",
      "Reduced simple cross-team inventory inquiries by ~60%, improving focus on core planning work",
      "Kept inventory error rate under 10% (internal data accuracy 90%+) with zero missing evidence at financial audit",
    ],
    learning:
      "Scattered data is noise but integrated data becomes an asset; inventory management is not mere storage but a management activity governing cash flow and opportunity cost; and diligent reconciliation is the first line of defense for the company's financial health.",
  },
  {
    slug: "zeiss-loyalty-program",
    title: "Integrated Loyalty Program Operations & Financial Risk Management",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Loyalty Operations",
      "Data Integrity Validation",
      "Tax Compliance",
      "Crisis Management",
      "Knowledge Management",
    ],
    impact: [
      "KRW 600M budget transparency secured",
      "98.5% of claims resolved within 24h",
      "Zero missing evidence at tax audit",
    ],
    context:
      "An annual KRW 600M worth of points was fragmented across three systems (Blue, Lens, VC), driving high operational complexity, while frequent turnover left policy understanding low and created misaccrual and tax risk.",
    problem:
      "The fragmented point systems risked misaccrual and tax exposure, and high turnover created recurring knowledge gaps.",
    actions: [
      "Learning from a bulk-upload error, introduced a pre-validation process before data upload and documented/distributed accrual criteria guidelines",
      "During 'Project Dotori' (points overhaul), reverse-mentored the Trade Marketing Manager on the complex point logic and history so the new policy was realistically implementable",
      "On system-matching errors, ran full reconciliation across 5 categories (accrual/use/cancellation, etc.) to align the ledger with actual data",
      "Owned onboarding to disseminate point operation principles to new hires and related teams against high turnover",
    ],
    results: [
      "Resolved 98.5%+ of system errors and customer claims within 24 hours, maintaining service trust",
      "Secured audit-defensible data integrity and guaranteed transparency for the annual KRW 600M budget",
      "Served as a Human Bridge so operations continued without disruption despite staff changes",
    ],
    learning:
      "Mistakes are opportunities to find gaps in the system and fast recovery plus process reinforcement is the real skill; financial data allows no 0.1% margin of error; and sharing knowledge levels up the entire organization's performance.",
  },
  {
    slug: "zeiss-promotional-goods",
    title: "Promotional Goods Portfolio Optimization & Sourcing",
    company: "ZEISS Vision Korea",
    category: "Marketing Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Merchandising",
      "Sourcing Strategy",
      "Vendor Discovery",
      "Inventory Optimization",
      "Stakeholder Coordination",
    ],
    impact: [
      "Zero stock-out days for Top 5",
      "3 new products planned",
      "~5 new vendors sourced monthly",
    ],
    context:
      "Promotional goods for optician marketing were produced by convention without validated effectiveness, and popular items frequently ran out while unpopular items piled up as dead stock.",
    problem:
      "Planning by gut instead of data caused simultaneous stock-outs and dead stock, and it required coordinating complex stakeholders across finance/SCM/vendors.",
    actions: [
      "Analyzed 12 months of shipment data to select the high-turnover Top 5 as core items, and planned 3 new trend-driven products to reshape the lineup",
      "Introduced a hybrid sourcing strategy: bulk-ordering core items to lower unit cost while connecting non-core items to external purchase links (MRO) for drop-shipping",
      "Orchestrated the full process from SAP registration, finance (corporate card), and SCM inbound to agency production, discovering and registering ~5 new vendors monthly",
    ],
    results: [
      "Won marketing-lead approval and field response with data-driven product planning",
      "Achieved zero stock-out days for the Top 5 popular items and cut unnecessary long-term inventory cost",
      "Delivered marketing support tools on time through a seamless process from planning to settlement",
    ],
    learning:
      "The answer to what sells lies in the data, not everything belongs in the warehouse, procurement should vary by item characteristics, and the coordination skill to break bottlenecks among complex stakeholders is what makes things happen.",
  },
  {
    slug: "zeiss-posm-order-system",
    title: "POSM Production/Delivery Order Management System",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Order System Planning",
      "Process Automation",
      "IT Collaboration",
      "Quality Control",
      "Logistics Operations",
    ],
    impact: [
      "Return rate 10% → under 2%",
      "1+ hr/week of admin removed",
      "50 monthly transactions handled reliably",
    ],
    context:
      "POSM (posters, banners, business cards, etc.) orders for field sales were processed manually in Excel on the legacy BestVC site, making order status opaque (a black box) and slow to correct, driving a return rate as high as 10%.",
    problem:
      "Manual Excel processing made order status opaque and returns high, causing significant frustration and inefficiency in the field.",
    actions: [
      "Collaborated with developers to migrate from the legacy site to a new platform (czv.kr), removing manual Excel download/upload in favor of direct in-system entry and adding a proof-upload feature",
      "Designed an automated trigger that emails the sales rep immediately when an order is rejected, ensuring information transparency",
      "Unified the marketing-agency-sales communication channel into the system, handling ~50 monthly transactions (worth ~KRW 2M) without delay",
    ],
    results: [
      "Removed 1+ hour/week of repetitive admin and blocked production errors from missing data at the source",
      "Enabled pre-production error correction, improving the return rate from 10% to under 2% (about 5/month) and cutting rework/shipping cost",
      "Met accurate delivery dates to support field promotions on time (Time-to-Market)",
    ],
    learning:
      "Clearly conveying the business logic (why) to developers yields powerful automation that solves field pain, user anxiety comes from waiting so immediate feedback is key to satisfaction, and in multi-stakeholder logistics a clear approval process is the key to speed and quality together.",
  },
  {
    slug: "zeiss-store-locator",
    title: "Global Website Store Locator Data Management",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Geospatial Data",
      "Global Collaboration",
      "Bug Reporting",
      "O2O Marketing",
      "Partner Management",
    ],
    impact: [
      "80%+ of faulty addresses fixed",
      "Drove HQ logic fix",
      "Delivered O2O traffic to partners",
    ],
    context:
      "For partner opticians, a Store Locator listing is both an intangible asset ('ZEISS certified') and a sales channel. However, the Google Maps-based global system was incompatible with Korea's address system, and a bug that failed to delete closed opticians triggered partner complaints (VoC).",
    problem:
      "The global system couldn't recognize detailed Korean addresses and closed opticians weren't removed from the map, exposing inaccurate information and fueling partner dissatisfaction.",
    actions: [
      "Overcame the Google Maps API's inability to recognize detailed Korean addresses via manual Place ID mapping and coordinate correction, normalizing 80%+ of the faulty address data",
      "Persistently communicated the closed-optician deletion bug to HQ via English email, providing replication information to drive a fundamental logic fix",
      "Beyond simple address display, embedded Naver reservation (short URL)/blog links into the data to drive actual visit reservations (O2O)",
    ],
    results: [
      "Normalized 80%+ of faulty address data, improving search accuracy",
      "Resolved partner dissatisfaction from inaccurate information and raised ZEISS's digital brand trust",
      "Contributed to HQ-partner goodwill by providing partners with tangible marketing benefit (traffic)",
    ],
    learning:
      "Data quality is completed by the owner's persistence, not the system; global collaboration hinges on logically defining a problem and pushing for resolution; and the purpose of platform operations is to deliver value to end users, not merely to manage.",
  },
  {
    slug: "zeiss-onboarding-guideline",
    title: "New-hire Onboarding Guideline Systematization & Digital Transformation",
    company: "ZEISS Vision Korea",
    category: "Operations",
    period: "2025.02 ~ 2026.03",
    skills: [
      "Process Design",
      "AI-assisted Documentation",
      "Knowledge Management",
      "Onboarding",
      "Data Readability",
    ],
    impact: [
      "Handover 2 weeks → 5 days",
      "Manual effort cut 40%",
      "Info search time cut 70%",
    ],
    context:
      "The existing Word-based manual had low visibility and no search, lowering handover efficiency. In particular, the operational risk in transferring non-standard tasks (39 types including ad-hoc work) needed to be removed systematically.",
    problem:
      "The non-searchable Word manual and tacit knowledge of 39 task types held by individuals made handovers long and quality inconsistent.",
    actions: [
      "Surveyed all 39 tasks — daily (5), ad-hoc (9), weekly (7), monthly (18) — and designed a data schema by frequency and importance",
      "Used AI tools (e.g., Genspark) to summarize complex processes into a standard 'title-summary-image-description' format and build the skeleton",
      "Moved away from text-heavy Word docs to an Excel DB with filtering/index features for instant information lookup",
      "Used the guideline to run self-directed learning guides and on-site coaching for new staff",
    ],
    results: [
      "Secured a complete list of all 39 tasks and 100% operational visibility",
      "Cut manual creation effort by 40% and information search time by 70%",
      "Shortened the typical 2+ week handover to 5 days (60%+ efficiency gain)",
    ],
    learning:
      "This built the architecture skill to convert fragmented information into a standard system, confirmed that data's value is determined by the consumer's convenience rather than the supplier's, and that a clear guideline is the best communication tool for bridging generational and experience gaps.",
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
