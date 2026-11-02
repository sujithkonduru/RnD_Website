import { photos, type Photo } from "./media";

/**
 * Single source of truth for site content.
 *
 * Anything Stackenzo has not verified yet is stored as `null` (or marked
 * `pending`) and rendered as a clearly labelled placeholder by the UI. Nothing
 * in this file should claim a result, client, credential or metric that has not
 * been confirmed.
 */

export const site = {
  name: "Stackenzo Research & Development",
  shortName: "Stackenzo R&D",
  tagline: "Engineering ideas. Solving real-world problems.",
  description:
    "Stackenzo Research & Development partners with industry, schools and colleges to investigate real problems, develop prototypes and build applied research capability.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stackenzo.com",
  email: null as string | null,
  phone: null as string | null,
  socials: [] as { label: string; href: string }[],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About R&D", href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Stackenzo Research & Development",
  lines: ["Engineering Ideas.", "Solving Real-World Problems."],
  highlight: "Real-World",
  lead: "Where research meets engineering, industries find solutions, and the next generation of innovators begins.",
  primaryCta: { label: "Explore our research", href: "/projects" },
  secondaryCta: { label: "Partner with Stackenzo", href: "/contact" },
  meta: [
    { label: "Industry R&D", value: "Partnerships" },
    { label: "Schools", value: "R&D cells" },
    { label: "Colleges", value: "Applied projects" },
  ],
};

export const introduction = {
  index: "01",
  label: "What is Stackenzo R&D",
  title: ["Research is not just an idea.", "It is a process of discovery."],
  highlight: "process of discovery",
  paragraphs: [
    "At Stackenzo, research and development brings together problem-solving, engineering, experimentation and collaboration. We work towards practical solutions by understanding challenges, investigating possibilities and developing technology-driven approaches.",
    "Every engagement starts with a real problem. We study its requirements, research the options, assess feasibility, build a prototype, test it against agreed criteria and refine the design towards something that can be used.",
  ],
  capabilities: [
    { label: "Problem investigation", note: "Defining what is actually failing, and why" },
    { label: "Applied research", note: "Literature, prior work and feasibility" },
    { label: "Prototype development", note: "Hardware, firmware and software builds" },
    { label: "Validation", note: "Testing against agreed criteria" },
    { label: "Capability building", note: "R&D programmes for schools and colleges" },
  ],
  annotations: ["Field study", "Bench testing", "Prototype"] as const,
};

export type LifecycleStage = {
  id: string;
  index: string;
  title: string;
  body: string;
  media: Photo;
  annotation: string;
};

export const lifecycle: LifecycleStage[] = [
  {
    id: "discovery",
    index: "01",
    title: "Problem discovery",
    body: "We start with the operational or educational challenge as it is actually experienced — not as it is first described. Constraints, people and existing systems all shape the problem statement.",
    media: photos.discovery,
    annotation: "Partner workshop",
  },
  {
    id: "research",
    index: "02",
    title: "Research and analysis",
    body: "Requirements are documented, prior work is reviewed and technical options are compared. This is where assumptions get tested before they get expensive.",
    media: photos.researchLab,
    annotation: "Literature and prior work",
  },
  {
    id: "feasibility",
    index: "03",
    title: "Feasibility assessment",
    body: "We assess what is technically achievable within the available resources, safety requirements and timeline — and say so plainly when a route is not viable.",
    media: photos.feasibility,
    annotation: "Technical viability",
  },
  {
    id: "design",
    index: "04",
    title: "Solution design",
    body: "The system is architected end to end: sensing and hardware, data paths, software, interfaces and the people who will operate it.",
    media: photos.design,
    annotation: "System architecture",
  },
  {
    id: "prototype",
    index: "05",
    title: "Prototype development",
    body: "A working build replaces the specification. Prototypes are deliberately scoped to prove the parts that matter, not to look finished.",
    media: photos.prototype,
    annotation: "Proof of concept",
  },
  {
    id: "testing",
    index: "06",
    title: "Testing and validation",
    body: "Builds are measured against the criteria agreed with the partner. Findings are documented, including the ones that did not work.",
    media: photos.testing,
    annotation: "Measured results",
  },
  {
    id: "implementation",
    index: "07",
    title: "Implementation and refinement",
    body: "Where agreed, we support deployment, refinement and further development. Where the research stops at validation, that is stated clearly.",
    media: photos.implementation,
    annotation: "Supported rollout",
  },
];

export const lifecycleNote =
  "The process adapts to each project's scope, technical complexity, available resources and validation requirements. Not every research route results in a commercial implementation, and we do not present it as one.";

export type InitiativeModule = { title: string; items: string[] };

export const initiatives = {
  heading: {
    index: "03",
    title: ["Research moves forward when", "knowledge meets real problems."],
    lead: "Three initiatives connect Stackenzo's research practice to the organisations that need it — and to the students who will carry it further.",
  },
  industry: {
    id: "industry",
    kicker: "A — Industry",
    title: "Solving the problems that matter to industry.",
    body: "Stackenzo collaborates with industrial organisations to investigate real-world challenges, define research objectives and develop practical technology-driven solutions.",
    workflow: [
      "Understand the organisation's challenges",
      "Define and document problem statements",
      "Conduct research and feasibility studies",
      "Identify appropriate technologies",
      "Design and develop prototypes",
      "Test and refine the proposed solutions",
      "Support further implementation where agreed",
    ],
    areas: [
      "Industrial IoT",
      "Embedded systems",
      "Software engineering",
      "Automation",
      "AI and data analysis",
      "Sensor systems",
      "Domain-specific engineering",
    ],
    note: "Research areas listed here describe where we work. They are not a catalogue of finished products, and every engagement is scoped against what can genuinely be supported.",
    cta: { label: "Submit an industry problem statement", href: "/contact?type=industry" },
    media: photos.industry,
  },
  schools: {
    id: "schools",
    kicker: "B — Schools",
    title: "Building a research mindset from the classroom.",
    body: "We introduce students to scientific curiosity, structured experimentation, engineering and innovation through practical R&D activity — designed to work inside a school timetable.",
    modules: [
      {
        title: "School R&D cells",
        items: [
          "Support the creation of school-level innovation and research cells",
          "Encourage structured student experimentation",
          "Support teachers in guiding research projects",
          "Create opportunities for collaborative learning",
        ],
      },
      {
        title: "R&D awareness",
        items: [
          "Research orientation sessions",
          "Scientific demonstrations",
          "Innovation workshops",
          "Design-thinking activities",
          "Technology awareness programmes",
        ],
      },
      {
        title: "R&D projects",
        items: [
          "Age-appropriate science and engineering projects",
          "Robotics and electronics",
          "Basic IoT",
          "Environmental monitoring",
          "Student prototypes",
        ],
      },
      {
        title: "Student mentorship",
        items: [
          "Guidance from idea to prototype",
          "Documentation and experimentation",
          "Responsible research practices",
          "Presentation of project outcomes",
        ],
      },
    ],
    cta: { label: "Bring R&D to your school", href: "/contact?type=school" },
    media: [photos.schoolTeam, photos.schoolBuild],
  },
  colleges: {
    id: "colleges",
    kicker: "C — Colleges",
    title: "Connecting academic knowledge with real-world engineering.",
    body: "We help college students explore research methodology, technical innovation, applied engineering and industry-relevant problem-solving — with academic rigour intact.",
    modules: [
      {
        title: "College R&D cells",
        items: [
          "Support structured research activities",
          "Encourage interdisciplinary projects",
          "Build innovation and prototyping culture",
        ],
      },
      {
        title: "Research awareness",
        items: [
          "Technical workshops",
          "Emerging technology sessions",
          "Research methodology",
          "Design thinking and technical seminars",
        ],
      },
      {
        title: "College R&D projects",
        items: [
          "Final-year projects",
          "Industry problem statements",
          "Embedded systems, AI and software",
          "Electronics, IoT and automation prototypes",
        ],
      },
      {
        title: "Industry–academia collaboration",
        items: [
          "Connect academic teams with relevant technical problems",
          "Investigate potential solutions",
          "Support proof-of-concept development",
          "Encourage technical documentation and validation",
        ],
      },
    ],
    cta: { label: "Partner with us for college R&D", href: "/contact?type=college" },
    media: [photos.collegeTeam, photos.collegeBuild],
  },
};

export type Stat = {
  key: string;
  index: string;
  label: string;
  description: string;
  /** Verified figure. `null` renders an explicit placeholder. */
  value: number | null;
  suffix?: string;
  href: string;
  action: string;
};

export const stats: Stat[] = [
  {
    key: "partners",
    index: "01",
    label: "Industry partners",
    description: "Organisations working with us on defined problem statements.",
    value: null,
    href: "/initiatives#industry",
    action: "View industry R&D",
  },
  {
    key: "solved",
    index: "02",
    label: "Problems solved",
    description: "Problems taken through investigation to a validated solution.",
    value: null,
    href: "/projects",
    action: "Explore projects",
  },
  {
    key: "statements",
    index: "03",
    label: "Research problem statements",
    description: "Documented statements opened for research and feasibility work.",
    value: null,
    href: "/contact",
    action: "Submit a problem",
  },
  {
    key: "projects",
    index: "04",
    label: "Projects and prototypes",
    description: "Builds, prototypes and applied research systems.",
    value: null,
    href: "/projects",
    action: "See the portfolio",
  },
];

export type ProjectFeature = {
  name: string;
  state: "Implemented" | "Proposed" | "To be confirmed";
};

export type ProjectCategory =
  | "Software & AI"
  | "Electronics & IoT"
  | "Industrial R&D"
  | "Education & Innovation"
  | "Environmental & Aquaculture Research";

export type ArchitectureStage = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  status: string;
  statusNote: string;
  year: string | null;
  hero: Photo;
  problem: string | null;
  objectives: string[];
  approach: string | null;
  architecture: {
    title: string;
    note: string;
    stages: ArchitectureStage[];
  } | null;
  tech: string[];
  validation: string | null;
  features: ProjectFeature[];
  outcomes: string | null;
  limitations: string | null;
  related: string[];
  /** Ordered list shown on the portfolio page. */
  order: number;
};

export const projects: Project[] = [
  {
    slug: "skillengine",
    title: "SkillEngine",
    category: "Software & AI",
    summary: "A platform exploring skill development, assessment and capability mapping.",
    status: "Documentation in preparation",
    statusNote: "The project record is being prepared for publication with Stackenzo.",
    year: null,
    hero: photos.skillengine,
    problem: null,
    objectives: [],
    approach: null,
    architecture: null,
    tech: [],
    validation: null,
    features: [],
    outcomes: null,
    limitations: null,
    related: ["eyevision", "fisheries-iot"],
    order: 1,
  },
  {
    slug: "eyevision",
    title: "EyeVision",
    category: "Software & AI",
    summary: "Applied research in computer vision and AI-based visual analysis.",
    status: "Documentation in preparation",
    statusNote:
      "Scope and capability of this project are being confirmed. Nothing here should be read as a medical, biometric or surveillance capability.",
    year: null,
    hero: photos.eyevision,
    problem: null,
    objectives: [],
    approach: null,
    architecture: null,
    tech: [],
    validation: null,
    features: [],
    outcomes: null,
    limitations: null,
    related: ["skillengine", "fisheries-iot"],
    order: 2,
  },
  {
    slug: "fisheries-iot",
    title: "Fisheries IoT",
    category: "Environmental & Aquaculture Research",
    summary:
      "Applied research on how connected sensing can support aquaculture operations.",
    status: "Research and prototyping",
    statusNote:
      "Sensor selection, deployment scope and validated findings are pending. The architecture below is conceptual.",
    year: null,
    hero: photos.fisheriesAerial,
    problem:
      "Aquaculture operations depend on pond conditions that change faster than manual checks can follow. Operators need earlier visibility of water conditions to make informed management decisions. Specific partner requirements and site conditions are still being confirmed.",
    objectives: [
      "Investigate whether connected sensing can give aquaculture operators earlier visibility of pond conditions.",
      "Identify which water parameters are practical to measure reliably in an operational pond.",
      "Assess how readings can be presented so they support a management decision rather than adding noise.",
    ],
    approach:
      "A layered system: in-pond sensing, a local gateway, a data store and an operator-facing view. Each layer is being evaluated on its own before integration.",
    architecture: {
      title: "Conceptual system architecture",
      note: "Conceptual only. No deployment at a partner site has been completed, and no sensor readings shown on this site are real.",
      stages: [
        { label: "In-pond sensors", detail: "Water condition measurement at the point of interest." },
        { label: "Edge gateway", detail: "Local collection, buffering and transmission." },
        { label: "Data store", detail: "Time-series records kept for analysis." },
        { label: "Analysis", detail: "Thresholds and trend interpretation." },
        { label: "Operator view", detail: "Dashboard and condition-change alerts." },
      ],
    },
    tech: ["Sensor layer — selection to be confirmed", "IoT connectivity — to be confirmed", "Web dashboard — to be confirmed"],
    validation: null,
    features: [
      "Water-quality monitoring",
      "Temperature and dissolved oxygen sensing",
      "pH monitoring",
      "Remote monitoring dashboard",
      "Condition-change alerts",
      "Data analysis for management decisions",
    ].map((name) => ({ name, state: "Proposed" as const })),
    outcomes: null,
    limitations:
      "Field reliability, sensor calibration drift, power availability and connectivity are open questions. No findings have been validated in an operating pond yet.",
    related: ["eyevision", "skillengine"],
    order: 3,
  },
];

export const projectCategories: (ProjectCategory | "All projects")[] = [
  "All projects",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slugs: string[]) {
  return slugs
    .map((slug) => getProject(slug))
    .filter((project): project is Project => Boolean(project));
}

export type Leader = {
  id: string;
  role: string;
  name: string | null;
  bio: string | null;
  focus: string[];
  scope: string;
};

export const leadership: Leader[] = [
  {
    id: "managing-director",
    role: "Managing Director",
    name: null,
    bio: null,
    focus: [],
    scope: "Strategy, partnerships and how research engagements are governed.",
  },
  {
    id: "head-of-rnd",
    role: "Head of Research & Development",
    name: null,
    bio: null,
    focus: [],
    scope: "Research direction, technical review and day-to-day management of R&D activity.",
  },
];

export const collaborationPaths = [
  {
    id: "industry",
    label: "Industry R&D partnership",
    description: "A defined operational problem that needs investigation and a practical route forward.",
    href: "/contact?type=industry",
  },
  {
    id: "school",
    label: "School R&D initiative",
    description: "An R&D cell, awareness programme or student project series inside a school.",
    href: "/contact?type=school",
  },
  {
    id: "college",
    label: "College R&D initiative",
    description: "Research culture, final-year projects or industry-linked academic work.",
    href: "/contact?type=college",
  },
  {
    id: "research",
    label: "Research project collaboration",
    description: "A joint investigation with a research group, institution or technical team.",
    href: "/contact?type=research",
  },
] as const;

export const principles = [
  {
    title: "Start from the problem",
    body: "The technology is the last decision, not the first. We define what is actually failing before proposing what to build.",
  },
  {
    title: "Evidence before claims",
    body: "Findings are documented with their limits attached. Unverified numbers do not go on this website.",
  },
  {
    title: "Build with the people who will use it",
    body: "Partners, teachers and students are part of the investigation, not recipients of its output.",
  },
];

export const methodology = [
  { index: "01", title: "Understand", body: "Interviews, site context and existing systems." },
  { index: "02", title: "Investigate", body: "Requirements, prior work and technical options." },
  { index: "03", title: "Build", body: "A scoped prototype that proves the critical part." },
  { index: "04", title: "Validate", body: "Measured against criteria agreed with the partner." },
];

export const contact = {
  eyebrow: "Contact and collaboration",
  title: ["Have a problem", "worth solving?"],
  lead: "Let's explore how research, engineering and collaboration can help turn your challenge into a practical solution.",
  next: [
    { index: "01", title: "Initial conversation", body: "We discuss the problem, context and what success would look like." },
    { index: "02", title: "Problem definition", body: "If it fits, we document a problem statement and scope the investigation." },
    { index: "03", title: "Proposal", body: "You receive a research approach, feasibility view and next steps." },
  ],
};
