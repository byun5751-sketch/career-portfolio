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
      "During 'Project OOO' (points overhaul), reverse-mentored the Trade Marketing Manager on the complex point logic and history so the new policy was realistically implementable",
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
      "Industry Domain Analysis",
      "Strategic Benchmarking",
      "Value Selling",
      "Business Case Development",
      "Stakeholder Communication",
    ],
    impact: [
      "S/4HANA adoption pulled 4 years earlier (2028→2024)",
      "20+ global references structured",
      "Executive-report credibility strengthened",
    ],
    context:
      "At SAP Korea Customer Advisory (STAR Program), analyzed global consumer goods/entertainment references to build the case for next-gen ERP (S/4HANA Cloud). The client (CJ), still on-premise, lacked migration momentum and risked delaying its transition to 2028.",
    problem:
      "The client lacked conviction about the ROI of cloud migration. The concrete 'value of transition' had to be proven through advanced global cases with similar business models (Disney, Nestle).",
    actions: [
      "Analyzed the business domains of CJ E&M (entertainment) and CJ CheilJedang (food), setting Disney and Nestle respectively as benchmark targets and reviewing solution fit",
      "Classified target companies' cloud architectures into 20+ key cases and cross-verified pre/post process changes and latest tech (AI/Data) adoption via news and reports",
      "Visualized the 20 cases into immediately actionable PPTs and, with the Value Advisory team, quantified expected migration benefits (TCO reduction, etc.)",
      "Optimized the final deliverable for client executive reporting to support strategic direction consulting",
    ],
    results: [
      "Built a client-customized benchmarking framework, raising proposal logic and external credibility",
      "Supported the decision to pull S/4HANA Cloud adoption forward from 2028 to 2024 (4 years earlier)",
      "Contributed to accelerating a major client's cloud migration and securing earlier revenue",
    ],
    learning:
      "Clients respond to business outcomes, not technology itself. When explaining complex solutions, it matters to connect features to the client's pain points and simplify the outcome from the decision-maker's perspective.",
  },
  {
    slug: "sap-digital-supply-chain",
    title: "Digital Supply Chain Operations",
    company: "SAP Korea",
    category: "Digital Supply Chain",
    period: "2024.01 ~ 2024.06",
    skills: [
      "Content Localization/Subtitling",
      "Event Operations",
      "Partner Enablement",
      "Sales Operations",
      "Onboarding Documentation",
    ],
    impact: [
      "LinkedIn post views: 2,000+",
      "300 valid event leads",
      "Partner training satisfaction: 4.3/5.0",
      "Contributed to new OO Systems partnership",
    ],
    context:
      "Supported content localization, event operations, and partner training at SAP Korea's Digital Supply Chain organization, bridging global tech assets to domestic customers and partners.",
    problem:
      "Technical materials from global events like Hannover Messe were not easily transferable to Korean customers. Partner solution understanding and new intern onboarding also needed operational support.",
    actions: [
      "Translated Digital Manufacturing materials and Hannover Messe footage into Korean with subtitles (Camtasia), and designed organic traffic paths via localized LinkedIn posts (5) and a blog series",
      "Planned and ran DSC Innovation Day, standardizing the successful Seoul model and proposing/supporting its expansion into Busan/Daegu roadshows",
      "Provided tech setup and interpretation for 20-partner PC+EHS solution training, troubleshooting in real time and reporting partner feedback to HQ",
      "Created a 32-page onboarding guide converting tacit team know-how into explicit knowledge",
      "Managed Zoom hosting for a 60-person intern bootcamp with timetable and contingency scenarios",
    ],
    results: [
      "Reached 2,000+ LinkedIn content views and generated 300 valid leads from event registrations",
      "Contributed to closing a new OO Systems partnership and secured a regional (Busan/Daegu) sales pipeline",
      "Achieved partner training satisfaction of 4.3/5.0 and raised partners' solution proposal capability",
      "Produced an onboarding guide improving new-hire ramp-up and ran the large virtual bootcamp incident-free",
    ],
    learning:
      "In B2B, content, training, and events are not separate activities but one connected sales funnel. Converting global assets into local customer language and making them actionable for partners builds the foundation for revenue, and B2B expansion depends on a healthy partner ecosystem more than on direct selling.",
  },
  {
    slug: "sap-growth-pillar",
    title: "Growth Pillar Learning Ecosystem & Mentoring",
    company: "SAP Korea",
    category: "Employee Experience",
    period: "2023.07 ~ 2024.06",
    skills: [
      "Data-driven Planning",
      "Mentoring Program Design",
      "Curriculum/Book Club",
      "Facilitation",
      "Knowledge Management",
    ],
    impact: [
      "Program awareness up 300%",
      "30 members recruited for book club",
      "Satisfaction 4.4/5.0, 100% re-participation",
    ],
    context:
      "Served as a Growth Initiative member to break down the technical sales org's knowledge silos and establish a self-directed learning culture. Defined the core problems as 'knowledge disconnection' (deep expertise trapped in individuals) and 'stalled growth' from the absence of a systematic learning program.",
    problem:
      "The goal was to build a sustainable 'learning ecosystem' rather than one-off events, and the existing mentoring program suffered from low participation.",
    actions: [
      "Ran a quantitative survey of internal staff to analyze the root causes (pain points) of low mentoring participation and derived improvements",
      "Designed a 'Mentoring 2.0' process fully redesigning networking and skill-transfer, persuading stakeholders to lead its new launch",
      "Selected strategic books like 'Challenger Sales' to strengthen sales reps' customer-persuasion logic, and designed a 4-week intensive discussion curriculum and book club system",
      "Facilitated pre-distributed questions and in-depth discussions to convert participants' tacit knowledge into explicit knowledge",
      "Curated book club insights and the latest AI/Cloud trends and built a company-wide knowledge channel with regular uploads to MS SharePoint",
    ],
    results: [
      "Raised program awareness and understanding 300% vs. the prior year",
      "Recruited 30+ core talents despite being a voluntary program (exceeding the initial goal)",
      "Achieved participant satisfaction of 4.4/5.0 and a 100% re-participation rate through two-way operations",
    ],
    learning:
      "Defining problems by data rather than intuition raises solution hit-rate, the essence of education is curating immediately applicable content rather than coercion, and a leader's role is not to give answers but to ask questions and connect people so they find their own. Individual experience only becomes an organizational asset when paired with an archiving system.",
  },
  {
    slug: "sap-global-events",
    title: "Global Intern Community Event Operations (Co-lead)",
    company: "SAP Korea",
    category: "Global Event Operations",
    period: "2023.07 ~ 2024.12",
    skills: [
      "Global Facilitation",
      "Event Planning",
      "Team Leadership/Delegation",
      "GenAI Content Design",
      "Data-driven Improvement",
    ],
    impact: [
      "Avg. 60 participants, satisfaction up to 5.0/5.0",
      "Won Q2 Global Buddy Program",
      "Onboarded 4 new members & handed over leadership",
    ],
    context:
      "Served as Co-lead of on-tact programs to energize the 13-country global intern (STAR) community. Physical distance eroded belonging and severed communication across countries, and moving from a solo operation to onboarding 4 new members required leadership and delegation structures.",
    problem:
      "Beyond simple socializing, the company's strategic direction 'Business AI' had to be woven into culture events, and participation had to be driven across 13 countries with different time zones and cultures.",
    actions: [
      "Planned quarterly events accounting for each country's time zone and culture using MS Teams and interactive tools (Menti, Skribbl), personally MC-ing in English to drive icebreaking and participation",
      "Distributed R&R as 4 new members joined the solo operation and trained/supervised a standard plan-produce-run-feedback process to maintain quality",
      "Designed an 'AI-Curate your event' session aligned with the company AI strategy, letting participants plan and evaluate a festival using generative AI",
      "Collected and visualized quantitative/qualitative data via MS Forms right after events and archived 1.5 years of operational materials to hand over to the next leader",
    ],
    results: [
      "Won the Q2 Global Buddy Program, hit 9.75/10 satisfaction for the Lunar New Year event, and averaged 60 participants",
      "Achieved 5.0/5.0 satisfaction for the 'AI-Curate your event' session and proved a best-practice case of internal 'Business AI' use",
      "Improved event satisfaction 4.8→5.0 through data-driven iteration and handed over leadership with no operational gap",
    ],
    learning:
      "Leadership is not doing it well yourself but empowering teammates to do it well, planning that turns dry technology into an enjoyable experience is what drives participation, and a project's end is not closure but turning it into an asset for the next one.",
  },
  {
    slug: "sap-md-office-operations",
    title: "MD Office Executive Support & Operations (Acting Chief of Staff)",
    company: "SAP Korea",
    category: "Management Support",
    period: "2024.07 ~ 2024.12",
    skills: [
      "Executive Protocol (VIP)",
      "Chief of Staff",
      "Meeting Operations",
      "Culture Campaigns",
      "Change/Crisis Management",
    ],
    impact: [
      "Coordinated top-4 group meetings, zero protocol incidents",
      "Zero admin misses during leadership transition",
      "Raised town-hall & internal campaign engagement",
    ],
    context:
      "Amid a leadership transition (former Partner → acting lead → new Partner), acted as Chief of Staff (CoS) to keep the organization steady. At the same time, multitasking was required to flawlessly deliver both a major event (global CEO visit) and daily routines (internal wellness/admin).",
    problem:
      "During the 3-month CoS vacancy across three reporting-line changes, business continuity had to be preserved while flawlessly executing protocol for a visit by top-tier global executives.",
    actions: [
      "During the APJ CEO and CPO visit, coordinated senior meetings with Korea's top-4 groups (Samsung/SK/LG/KT) from a deal-closing lens and ran CxO roundtables and press interviews",
      "Perfectly handed over work history and defended against secretarial gaps despite three reporting-line changes (former lead → acting lead → new Partner) during the CoS vacancy",
      "Systematized the JTDS governance (schedule/email/minutes) and ran internal wellness/admin routines without interruption",
      "Planned the Q3 town-hall '2 Minutes to Win' pitch and led the 'Nice with SAP' TF (Mural) campaign to spread a flat title culture ('-nim')",
    ],
    results: [
      "Accelerated partnership discussions with major conglomerates and achieved top VIP protocol satisfaction (zero scheduling conflicts)",
      "Zero administrative misses during the leadership transition and supported the new manager's early soft-landing",
      "Converted a stiff reporting culture into gamification, raising employee engagement and LoB product awareness and easing generational communication barriers",
    ],
    learning:
      "Unglamorous routine work is the bloodstream of operations, ownership and adaptability that keep processes centered despite frequent manager changes matter, and protocol and improvisation matched to top-tier global executives are the foundation of trust.",
  },
  {
    slug: "sap-csr-sustainability",
    title: "CSR & Sustainability Projects and Budget Operations",
    company: "SAP Korea",
    category: "CSR & Sustainability",
    period: "2024.07 ~ 2024.12",
    skills: [
      "Budget Management (Concur/Ariba)",
      "Financial Compliance",
      "Agile Operations",
      "Gamification Design",
      "Global Stakeholder Management",
    ],
    impact: [
      "EUR 80K budget executed 100%, zero audit risk",
      "Volunteering satisfaction 9.52/10, 100% re-join",
      "83% new-participant inflow",
    ],
    context:
      "Managed EUR 80K (~KRW 120M) of annual CSR budget and 5 core projects (volunteering/education/campaigns) end-to-end. After a vacuum where the prior Partner's departure left no first-half CSR activity, the second half had to both spend the budget and create results.",
    problem:
      "A CEO ad-hoc request required pulling off an unprepared mural volunteering event, and the existing low CSR participation had to be improved. A strategic portfolio approach (Fun, Meaning, Growth) was needed rather than mere execution.",
    actions: [
      "Ran the full drafting-approval-execution of the EUR 80K budget via SAP Concur/Ariba and reviewed partner SOWs (a global volunteering NGO, etc.) to preempt contract risk",
      "On the CEO's sudden mural-volunteering request, partnered immediately with a global volunteering NGO to arrange a local elementary school and field logistics (bus/safety/meals) within 2 weeks",
      "Planned a participatory 'My Sustainability Type' booth (MBTI concept) to lower the entry barrier and improve low participation",
      "Combined plogging with picnics and ran mentorship/book clubs (120 people) to expand CSR from 'volunteering' into culture and growth",
    ],
    results: [
      "Executed 100% of the budget with no unspent balance and achieved zero audit risk through a transparent process compliant with global accounting standards",
      "Reached record 9.52/10 satisfaction for the mural volunteering and elevated it to a signature program with all participants willing to re-join",
      "Drew 83% new participants and NPS 4.83/5, broadening the CSR base",
    ],
    learning:
      "The ability to mobilize resources fast even when unplanned work lands, the insight that what moves people is fun and relevance rather than obligation, and that transparently reporting failure is central to global business manner.",
  },
  {
    slug: "sap-employee-engagement",
    title: "Global Brand Activation & Employee Experience PM",
    company: "SAP Korea",
    category: "Employee Experience",
    period: "2024.07 ~ 2024.12",
    skills: [
      "Large-event Logistics",
      "Global Protocol",
      "Data-driven Retention",
      "Incident Response",
      "Creative Planning",
    ],
    impact: [
      "FC Bayern visit: 300-person event, zero incidents",
      "Health challenge: 18 finishers (up to 11kg lost)",
      "BWN event CSAT 97.7%",
    ],
    context:
      "As an Employee Experience PM for global sponsorship and culture activation, had to prepare a major global event (FC Bayern Munich's visit) in just 2 weeks. Endless variables arose: communication barriers with a German HQ across time zones and cultures, low participation in a long-term project, and a performer no-show on the day of a year-end event.",
    problem:
      "Within an extremely short lead time, global collaboration barriers, and unpredictable variables, both event success and employee experience had to be secured.",
    actions: [
      "Built a real-time hotline to overcome time-zone/communication delays with the German HQ and club, emergency-setting up VIP protocol vehicles and routes for the club's key players within 2 weeks",
      "Tracked 80 people's health data over 100 days to catch drop-off signals, filmed encouragement videos with an executive and reinforced incentives to drive completion",
      "Proposed a 'Black-and-White Singer' concept parodying the then-trending 'Culinary Class Wars', planning the cue sheet and stage direction to maximize employee immersion",
      "When the 'White Spoon' team no-showed on the day of the year-end event, immediately reported to the Partner to secure decision-making golden time and supported activating the backup plan",
      "Produced a BWN (Business Women Network) mentoring event video and ran LinkedIn targeted marketing to spread the company's D&I values",
    ],
    results: [
      "Delivered a 300-person FC Bayern event with zero VIP protocol incidents despite the short lead time and transferred the global sponsorship effect to employees",
      "Minimized health-challenge dropout with 18 finishers (up to 11kg lost) and flexibly resolved the no-show crisis without stopping the event",
      "Grew the BWN event 1.5x YoY (~40 attendees), reached 1,500 views, and hit CSAT 97.7%",
    ],
    learning:
      "The execution to just-make-it-happen even against impossible deadlines, the insight that long projects hinge on data-driven operation to avoid burnout rather than upfront planning, and that a junior's role is to escalate accurately and quickly so the leader can resolve it rather than solving everything alone.",
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
  {
    slug: "cau-admissions-advisory",
    title: "Admissions Advisory: Guidebook Planning & Mock Interviews",
    company: "Chung-Ang University",
    category: "Extracurricular",
    period: "2019.03 ~ 2019.07",
    skills: [
      "Content Planning",
      "Stakeholder Persuasion",
      "Guidebook Authoring",
      "Mock Interview Simulation",
      "Process Improvement",
    ],
    impact: [
      "Adopted into the official guidebook",
      "Distributed to high schools & fairs nationwide",
      "Contributed to evaluator calibration",
    ],
    context:
      "As a member of the admissions advisory group, planned an acceptance-strategy guidebook and supported admissions officer mock-interview calibration, amid the information asymmetry created by a policy change (abolishing interviews).",
    problem:
      "The change increased applicant anxiety. Content conveying real acceptance logic (not mere PR) and a reference to narrow evaluator scoring gaps were needed.",
    actions: [
      "Analyzed the change's psychological impact on applicants, defined the problem as an 'information gap', and set a consumer-centric direction",
      "Argued the need for qualitative evaluation guidelines based on my own acceptance case (data) and proposed an official guidebook contribution to the admissions office",
      "Structured a 'major-fit appeal strategy' and wrote/reviewed the draft with a framework turning weaknesses into strengths",
      "Reproduced top students' reasoning patterns in blind mock interviews to demonstrate handling of pressure/dilemma questions, and fed back blind spots in the evaluation criteria during debriefs",
    ],
    results: [
      "Won approval from a conservative admissions office; the draft was included in the official guidebook and distributed to high schools and fairs nationwide",
      "Reached thousands of prospective applicants, raising the university's admissions-administration image and defending application rates",
      "Helped narrow evaluator perspective gaps (calibration) and secure fairness and reliability",
    ],
    learning:
      "Policy must define problems from the consumer's perspective, not the provider's, and even conservative decision-makers move when persuaded with concrete cases and data rather than subjective opinion.",
  },
  {
    slug: "cau-hospital-volunteer",
    title: "University Hospital Dialysis Volunteering & Pre-diagnosis Data",
    company: "Chung-Ang University",
    category: "Volunteering",
    period: "2019.03 ~ 2019.06",
    skills: [
      "Infection Control Protocol",
      "Patient Support",
      "Vital Data Measurement",
      "Workflow Improvement",
      "Accuracy/Reporting",
    ],
    impact: [
      "Minimized secondary-infection risk",
      "Ensured pre-diagnosis data accuracy",
      "Shortened diagnosis prep lead time",
    ],
    context:
      "Long-term dialysis patients are sensitive to infection risk and endure extreme treatment fatigue, so beyond medical staff's physical care, supporting resources for emotional stability and environmental comfort were essential.",
    problem:
      "In-hospital infection risk and treatment stress for immunocompromised patients had to be reduced, and pre-diagnosis baseline data measured accurately to shorten medical staff workflow.",
    actions: [
      "Replaced bed sheets and gauze per infection-prevention protocol and preemptively blocked contaminants to minimize secondary-infection risk",
      "Relieved pain from prolonged immobility with foot massage and built rapport to reduce treatment aversion and stress",
      "Measured body metrics and vitals (blood pressure, etc.) with a double-check process to ensure data integrity",
      "Organized patient waiting flow and reported only key information on abnormal signs to enable fast action",
    ],
    results: [
      "Removed in-hospital infection risk factors for immunocompromised patients and maintained a comfortable inpatient environment",
      "Provided reliable baseline data ensuring diagnostic accuracy/safety and early detection of abnormalities",
      "Shortened diagnosis prep time, increasing patients seen per unit time and reducing wait complaints",
    ],
    learning:
      "Non-verbal communication and human touch are powerful means of earning trust, and a small numerical error can lead to a diagnostic error, so detail and well-timed reporting matter.",
  },
  {
    slug: "gangdong-career-instructor",
    title: "Youth Major/Career Exploration Program Planning & Teaching",
    company: "Chung-Ang University",
    category: "Education/Teaching",
    period: "2022.05 ~ 2022.12",
    skills: [
      "Target Segmentation",
      "Curriculum Development",
      "Facilitation",
      "Deck Design",
      "Social Impact",
    ],
    impact: [
      "Completed 100% of programs across 7 Gangdong schools",
      "Developed target-tailored curriculum",
      "Contributed to closing the education gap",
    ],
    context:
      "Planned and taught a major/career exploration program for local youth, treating them not as one group but segmenting into middle schoolers (interest exploration) and high schoolers (real admissions strategy).",
    problem:
      "Students in an education-infrastructure-poor area needed the information they actually required at their level, not what the provider wanted to give.",
    actions: [
      "Analyzed core needs by middle/high segment and reset education goals",
      "Produced differentiated decks applying 'Gamification & Interest' for middle schoolers and 'Realistic Roadmap & Data' for high schoolers",
      "Moved beyond one-way lectures to strengthen Q&A/mentoring sessions, facilitating to surface latent concerns through two-way communication",
      "Provided emotional support as a mentor and flexibly handled on-site impromptu questions",
    ],
    results: [
      "Completed 100% of education and programs across 7 schools in Gangdong (5 middle, 2 high)",
      "Secured qualitative feedback ('I could draw a concrete picture') and high satisfaction with dense, zero-dropout sessions",
      "Closed the local education gap and raised the institution's image as a supplement to public education",
    ],
    learning:
      "The same material requires a different value proposition depending on the target, and I internalized the efficacy of personal talent contributing to social problems and a customer-centric mindset.",
  },
  {
    slug: "gwnu-gifted-instructor",
    title: "Gifted-Education SQ3R/Debate Online Transition & Curriculum Upgrade",
    company: "Chung-Ang University",
    category: "Education/Teaching",
    period: "2019.08 ~ 2023.07",
    skills: [
      "Instructional Design (ADDIE)",
      "Micro-learning Design",
      "In-house Video Production",
      "Data-driven Improvement",
      "Long-term Contract Management",
    ],
    impact: [
      "4 years (8+ semesters) of consecutive contracts",
      "Built an offline→online standard curriculum",
      "In-house production pipeline, no outsourcing",
    ],
    context:
      "While teaching SQ3R/debate to gifted students, recognized the scalability limits of offline education and transitioned to a scalable digital content format.",
    problem:
      "High learning demand was hard to meet offline alone, and without dedicated video staff or budget, a scalable online asset and continuous QA were needed.",
    actions: [
      "Restructured 120 minutes of content into 6 online modules and applied micro-learning design for short attention spans",
      "Self-taught PPT recording/editing tools to build an in-house production pipeline with no outsourcing cost, permanently assetizing one-off lectures as video content",
      "Analyzed post-lecture quantitative satisfaction and qualitative comments ('requests for deeper debate') to find the hidden need was 'practical application'",
      "Pivoted the curriculum to substantially deep-dive the 'debate methodology' session based on the analysis",
    ],
    results: [
      "Established an engaging online standard curriculum preventing learner drop-off and an always-on learning system free of time/space constraints",
      "Produced high-quality lecture videos in-house, cutting budget and production time while securing scalability",
      "Earned institution/student trust through continuous QA, winning 4 years (8+ semesters) of consecutive contract renewals and positioning as a core instructor",
    ],
    learning:
      "I understood the information-density difference when moving offline experience to online UX, that fast execution and iteration (agile) beat a perfect plan, and that trust proven by diligence and results is the core of long-term relationships (LTV).",
  },
  {
    slug: "cau-dormitory-leader",
    title: "Dormitory Floor Leader: Move-in Process & Relief-supply Distribution",
    company: "Chung-Ang University",
    category: "Extracurricular",
    period: "2023.07 ~ 2024.06",
    skills: [
      "Bottleneck Analysis",
      "Process Redesign",
      "Hygiene/Safety Audit",
      "Inventory/Last-mile Distribution",
      "Preventive Management",
    ],
    impact: [
      "Move-in time per person cut 30%",
      "10,000 masks to 130 people, zero misdelivery",
      "Established a shared-space hygiene audit",
    ],
    context:
      "With 130 people moving in simultaneously at peak times, on-site paperwork and verification caused severe bottlenecks, on top of managing shared-space contamination and COVID relief-supply distribution.",
    problem:
      "Increased wait times drove student complaints and admin inefficiency, the 'tragedy of the commons' (shared-space contamination) arose, and masks had to be distributed at scale with zero omission or misdelivery.",
    actions: [
      "Decomposed the move-in procedure to prove 'on-site paperwork/duplicate checks' took 60%+ of the time, then dispersed on-site work via an online pre-submission guide",
      "Redesigned the submit-key-guide flow as one-way and removed unnecessary duplicate checks",
      "Concretized cleanliness standards (e.g., fridge food expiry labeling), set biweekly/monthly inspection cycles and checklists for a hygiene audit, and ran full asset inspections on move-out",
      "Cross-checked 10,000 masks against the resident roster to pre-verify quantities and distributed via pickup (pull) with signatures instead of door-to-door (push)",
    ],
    results: [
      "Cut per-person move-in time 30% and zeroed move-in-day congestion, improving the experience",
      "Reduced shared-space contamination and raised residential satisfaction through regular audits while cutting facility maintenance cost",
      "Completed distribution to all 130 people with zero loss/omission by reconciling signatures against remaining stock",
    ],
    learning:
      "I internalized breaking phenomena into process units to find root causes, managing behavior through systems and rules rather than willpower, and that data verification at the planning stage is 80% of success.",
  },
  {
    slug: "cau-logistics-security-program",
    title: "Logistics Security Program: SCM Solution & ETA Prediction Model",
    company: "Chung-Ang University",
    category: "Academic Project",
    period: "2022.07 ~ 2022.12",
    skills: [
      "SCM Solution (Cello)",
      "Field Logistics Analysis",
      "Data Preprocessing",
      "ML Modeling",
      "Business Insight",
    ],
    impact: [
      "Simulated order-transport-settlement end to end",
      "Verified Pyeongtaek Port field processes",
      "Meaningfully reduced ETA model error",
    ],
    context:
      "To respond to the Logistics 4.0 shift, operated Samsung SDS's integrated logistics platform 'Cello', verified port logistics processes, and joined a hackathon to build a data-driven ETA (arrival time) prediction model.",
    problem:
      "The gap between integrated-solution proficiency and field operations had to be narrowed, and amid global supply-chain uncertainty, data-based ETA prediction (not intuition) was required.",
    actions: [
      "Simulated the full order-transport-settlement flow in 'Cello', practicing how supply-chain visibility is central to risk management",
      "Tracked container unloading/storage/in-out processes via a Pyeongtaek Port field visit and verified synchronization between system data and physical flow",
      "Collected and cleaned multi-dimensional variables (vessel position, weather, port congestion), imputing missing values and extracting key features via correlation analysis",
      "Built a prediction model applying Random Forest, XGBoost, etc., and tuned hyperparameters to minimize RMSE",
    ],
    results: [
      "Pre-learned ERP/TMS UI/UX and logic for immediately deployable baseline skills and a whole-flow perspective",
      "Raised field understanding by identifying gaps between theoretical models and physical field constraints",
      "Derived a model meaningfully reducing prediction error vs. moving averages and wrote a results report from an SCM efficiency perspective",
    ],
    learning:
      "Data analysis ignorant of the field is hollow, prediction accuracy comes from quality data and feature selection more than algorithms, and the ultimate goal of analysis is decision support.",
  },
  {
    slug: "cau-intl-student-ambassador",
    title: "International Student Ambassador: Space Expansion & Channel Unification",
    company: "Chung-Ang University",
    category: "Extracurricular",
    period: "2023.07 ~ 2024.06",
    skills: [
      "Quantitative VOC Analysis",
      "Proposal & Negotiation",
      "Channel Consolidation",
      "Content Curation",
      "Cross-cultural Facilitation",
    ],
    impact: [
      "Approved 2x expansion of the exchange space (GCC)",
      "Unified 1,500-person channel to KakaoTalk",
      "12 card-news posts featured as popular",
    ],
    context:
      "To improve exchange students' stay, had to solve the cramped exchange space (GCC) and fragmented communication channels, and raise SNS traffic to lift offline event participation.",
    problem:
      "Space shortage and channel fragmentation lowered both student satisfaction and admin efficiency, while provider-centric information kept SNS traffic and event participation in a vicious cycle.",
    actions: [
      "Quantified 'the impact of space shortage on exchange' via survey to prove the need with objective data, and persuaded the international office (budget holder) with a proposal of expected effects",
      "Consolidated fragmented communication for 1,500 people into KakaoTalk and automated repeat inquiries with an FAQ system",
      "Analyzed target (international student) interests (K-Culture, restaurants) to make informational card-news and shifted posting to prime time",
      "As a global seminar moderator, lowered language/culture barriers with icebreaking and plain terms to drive networking",
    ],
    results: [
      "Approved and executed a 2x GCC expansion, markedly improving exchange students' stay satisfaction",
      "Shortened notice reach time and cut repetitive work, with 12 card-news posts featured, boosting channel inflow and offline conversion",
      "Completed events where real networking happened across language/cultural barriers",
    ],
    learning:
      "What moves an organization is objective data and justification, not emotional appeal; Win-Win negotiation aligns the counterpart's needs with mine; and managing large groups requires systems, not individual responses.",
  },
  {
    slug: "cau-intl-logistics-club",
    title: "Intl Logistics Club: China Air Logistics Outlook & SCM Failure Study",
    company: "Chung-Ang University",
    category: "Academic Project",
    period: "2019.03 ~ 2019.06",
    skills: [
      "Market Intelligence",
      "Macro Analysis (PEST)",
      "Risk Management",
      "Case Study",
      "Logical Presentation",
    ],
    impact: [
      "Identified policy-to-market-restructuring mechanism",
      "Derived SCM resilience CSFs",
      "Presented research at a seminar",
    ],
    context:
      "Needed to understand how a fast-changing e-commerce environment and country-specific regulations affect logistics firms' market dominance, and to build strategic insight for global supply-chain crisis scenarios.",
    problem:
      "Beyond surface observation, the mechanism by which policy variables restructure markets and the disconnection risk from maximizing efficiency had to be identified.",
    actions: [
      "Analyzed the correlation between rising cross-border demand in China, government regulation, and SF Express's monopolization",
      "Derived the outlook that 3PL partnerships and SCM innovation would offset high-cost structures and raise market attractiveness",
      "Reverse-traced Toyota's SCM failure (limits of JIT) to derive flexibility and visibility as crisis-time critical success factors",
      "Presented and discussed findings at a club seminar and reinforced logic with multi-perspective feedback",
    ],
    results: [
      "Cultivated a macro lens for how PEST factors ripple into corporate strategy",
      "Studied resilience measures via learning-from-failure to prevent future risk",
      "Strengthened presentation skills by structuring complex logistics issues clearly",
    ],
    learning:
      "I cultivated a lens for how macro-environmental factors ripple into corporate strategy and the case-study ability to prevent future risk from past failures.",
  },
  {
    slug: "vim-investment-club",
    title: "VIM Investment Society Co-founding & Portfolio Research",
    company: "Chung-Ang University",
    category: "Extracurricular",
    period: "2019.07 ~ 2020.02",
    skills: [
      "Organization Building (0 to 1)",
      "Financial Statement Analysis",
      "Quant Screening",
      "Digital Asset Research",
      "Leadership",
    ],
    impact: [
      "Co-founded an investment society",
      "Planned a regular study curriculum",
      "Meaningful ROI via data-driven trading",
    ],
    context:
      "Co-founded a finance/investment society (VIM) and researched crypto/stock portfolio operation strategies.",
    problem:
      "A sustainable learning organization had to be built from scratch, and investment principles based on data and criteria (not emotion) established.",
    actions: [
      "Co-founded the society, enacted operating bylaws, planned a regular study curriculum, and recruited members (0 to 1)",
      "Researched crypto's technical traits (blockchain) and market dynamics (volatility) to establish a risk-management approach of investing, not speculating",
      "Discovered undervalued quality stocks via fundamental analysis and quant screening, establishing and validating trading principles",
    ],
    results: [
      "Laid the foundation for a sustainable learning organization and a financial-knowledge sharing platform",
      "Recorded meaningful ROI through strategic trading, proving the validity of the analysis model",
      "Understood the difference between traditional finance and fintech assets and secured digital-asset ecosystem knowledge",
    ],
    learning:
      "I strengthened the entrepreneurial execution to define problems and build an organization to solve them, plus the financial insight to read corporate value behind the numbers and data-driven decision-making.",
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
