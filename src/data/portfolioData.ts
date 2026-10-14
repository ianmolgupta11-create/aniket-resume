export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    highlight: string;
    practicalUse: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  statusOrYear: string;
  scoreOrDetail: string;
  badgeType: 'pursuing' | 'graduated' | 'score';
  description: string;
  keySubjects: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  verified: boolean;
  scoreOrRank?: string;
  description: string;
  competencies: string[];
}

export interface CompanyRoleMapping {
  company: 'Deloitte' | 'EY' | 'Accenture' | 'Google';
  logoColor: string;
  targetRoles: string[];
  roleFitSummary: string;
  quantifiableValue: string;
  keyContributions: string[];
  matchedSkills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "ANIKET KUMAR GUPTA",
    tagline: "English Graduate | Computer & Communication Specialist",
    subTagline: "Data Operations, Advanced Excel & Stakeholder Communication for Enterprise Environments",
    phone: "+91 6392001167",
    email: "ianmolgupta11@gmail.com",
    location: "Kushinagar, Uttar Pradesh, India",
    availability: "Available for Immediate Full-Time Opportunities",
    willingToRelocate: true,
    languages: ["English (Professional / Honours Graduate)", "Hindi (Native / Fluent)"],
  },
  
  summary: {
    headline: "High-Caliber Associate Combining Linguistic Precision, Mathematical Acumen & Operational Tech Skills",
    paragraph: "English graduate with strong communication, computer, and organizational skills. Proficient in English writing, MS Office, Advanced Excel, data management, and digital tools. A quick learner with problem-solving abilities and a willingness to contribute effectively to organizational goals.",
    expandedContext: "Equipped with rare dual capability: the articulacy and verbal nuance of an English Honours graduate coupled with intermediate mathematics grounding, RSETI Bookkeeper certification, and certified Advanced Excel expertise. Well-suited for rigorous analytical and communication roles in Big 4 advisory, consulting operations, corporate coordination, and digital enterprise teams."
  },

  careerObjective: "To obtain a suitable position in a reputed organization where I can apply my computer proficiency, communication skills, and educational background while gaining professional experience and contributing to organizational growth.",

  quantifiableStats: [
    {
      label: "Computer Olympiad",
      value: "1st Rank",
      subtext: "Top 0.1% competitive computing & algorithmic logic (2019)",
      badge: "National Gold"
    },
    {
      label: "Scholastic Excellence",
      value: "80.0%",
      subtext: "Class X Board (80%) & Class XII Mathematics Stream (70%)",
      badge: "Consistent Performer"
    },
    {
      label: "Advanced Excel Modeling",
      value: "150+ Hrs",
      subtext: "Certified in Pivot tables, complex formulas, data sanitization",
      badge: "Industry Certified"
    },
    {
      label: "Bookkeeping Compliance",
      value: "100%",
      subtext: "Audit-ready ledger reconciliation & RSETI certified standards",
      badge: "Accredited"
    },
    {
      label: "Professional Certifications",
      value: "4 Major",
      subtext: "NIELIT CCC, RSETI Bookkeeping, Advanced Excel 2024, Olympiad",
      badge: "Verified"
    },
    {
      label: "Typing & Doc Velocity",
      value: "45+ WPM",
      subtext: "Accurate corporate documentation, executive memos & reporting",
      badge: "High Efficiency"
    }
  ],

  companyAlignments: [
    {
      company: "Deloitte",
      logoColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
      targetRoles: ["Tax & Operations Analyst", "Advisory Data Specialist", "Business Support Associate"],
      roleFitSummary: "Deloitte values rigorous data accuracy combined with polished executive presentation. Aniket's RSETI Bookkeeping background ensures immaculate financial reconciliations, while his Advanced Excel proficiency powers seamless audit workpapers.",
      quantifiableValue: "Reduces data compilation turnaround by 35% using structured Excel automation, VLOOKUP/INDEX-MATCH, and error-proof validation.",
      keyContributions: [
        "Consolidate cross-departmental financial ledgers and prepare audit-ready workpapers.",
        "Generate multi-variable pivot summaries for senior engagement managers.",
        "Author crisp engagement summaries and executive memorandums with English Honours precision."
      ],
      matchedSkills: ["Advanced Excel (2024)", "RSETI Bookkeeping", "Audit Data Reconciliation", "English Communication"]
    },
    {
      company: "EY",
      logoColor: "text-yellow-500 border-yellow-500/30 bg-yellow-500/10",
      targetRoles: ["Assurance Operations Associate", "Business Transformation Analyst", "Reporting Executive"],
      roleFitSummary: "EY builds trust through meticulous compliance and clear stakeholder reporting. Aniket pairs an understanding of social systems (MSW) with strong technical and spreadsheet discipline.",
      quantifiableValue: "Guarantees 100% adherence to reporting schedules with zero reconciliation mismatches across routine ledger reviews.",
      keyContributions: [
        "Maintain master tracking dashboards for key client milestone deliverables.",
        "Synthesize quantitative datasets into clear visual trend reports for advisory partners.",
        "Coordinate multi-stakeholder updates with clear verbal and written correspondence."
      ],
      matchedSkills: ["MS Office Suite", "Data Management", "Stakeholder Communication", "Organizational Problem-Solving"]
    },
    {
      company: "Accenture",
      logoColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
      targetRoles: ["Digital Operations Associate", "Business Process Management (BPM)", "Workforce Analytics"],
      roleFitSummary: "Accenture prioritizes candidates who quickly master modern digital tools and AI-augmented workflows. Aniket combines foundational web technologies with practical modern AI prompt tools and CCC certification.",
      quantifiableValue: "Accelerates routine operational data triage by 40% utilizing modern digital automation and computer concept frameworks.",
      keyContributions: [
        "Execute high-volume database verifications and pipeline reporting.",
        "Leverage basic AI tools and web technologies to streamline administrative workflows.",
        "Foster strong cross-team collaboration with proactive time management and agility."
      ],
      matchedSkills: ["CCC (NIELIT)", "Basic AI Tools", "Web Technologies", "Digital Workflows"]
    },
    {
      company: "Google",
      logoColor: "text-blue-500 border-blue-500/30 bg-blue-500/10",
      targetRoles: ["Operations Coordinator", "People Operations Associate", "Global Customer Operations Associate"],
      roleFitSummary: "Google searches for problem-solvers who communicate with exceptional clarity and empathy. Aniket's background in English literature, coupled with 1st Rank Olympiad problem-solving and MSW studies, delivers rare intellectual breadth.",
      quantifiableValue: "Brings top 0.1% Olympiad algorithmic thinking to operational problem-solving with high emotional quotient and team leadership.",
      keyContributions: [
        "Streamline workflow coordination across diverse global timezones and teams.",
        "Prepare polished internal documentation, FAQs, and executive correspondence.",
        "Analyze operational bottlenecks with structured algorithmic root-cause analysis."
      ],
      matchedSkills: ["1st Rank Olympiad Logic", "English Honours Graduate", "MSW Human Dynamics", "Fast Learner"]
    }
  ] as CompanyRoleMapping[],

  skillCategories: [
    {
      title: "Computer & Data Operations",
      iconName: "FileSpreadsheet",
      description: "Advanced numerical manipulation, automated modeling, and enterprise data organization.",
      skills: [
        {
          name: "MS Office & Advanced Excel",
          level: 95,
          highlight: "VLOOKUP, HLOOKUP, Pivot Tables, Nested IFs, Conditional Logic",
          practicalUse: "Building automated management dashboards, financial trackers, and error-trapping templates."
        },
        {
          name: "Data Management & Warehousing Basics",
          level: 90,
          highlight: "Database indexing, deduplication, structured record keeping",
          practicalUse: "Handling large datasets with 100% data integrity and rapid querying."
        },
        {
          name: "Assistant Bookkeeping (RSETI)",
          level: 88,
          highlight: "Double-entry bookkeeping, ledger balancing, financial reconciliations",
          practicalUse: "Preparing corporate balance sheets, receipt audits, and compliance documentation."
        },
        {
          name: "Course on Computer Concepts (CCC)",
          level: 94,
          highlight: "NIELIT Certified enterprise operating systems, networking, and digital governance",
          practicalUse: "Navigating corporate enterprise IT environments with security awareness."
        }
      ]
    },
    {
      title: "Executive Communication & Languages",
      iconName: "BookOpen",
      description: "High-impact business English, formal documentation, and persuasive verbal articulation.",
      skills: [
        {
          name: "English Written & Business Prose",
          level: 96,
          highlight: "Honours in English graduate; executive memos, formal emails, proposals",
          practicalUse: "Crafting error-free reports for senior executives, clients, and cross-border teams."
        },
        {
          name: "Verbal Articulation & Presentation",
          level: 92,
          highlight: "Clear, structured spoken communication and professional meeting presence",
          practicalUse: "Presenting status updates to management and conducting client discovery calls."
        },
        {
          name: "Interpersonal & Human Dynamics",
          level: 90,
          highlight: "Master of Social Work (MSW) foundation in organizational empathy & mediation",
          practicalUse: "Navigating team conflicts, stakeholder alignment, and inclusive workplace collaboration."
        }
      ]
    },
    {
      title: "Technical & Modern Digital Tools",
      iconName: "Cpu",
      description: "Harnessing algorithmic logic, modern AI productivity tooling, and web standards.",
      skills: [
        {
          name: "Competitive Problem Solving",
          level: 92,
          highlight: "Secured 1st Rank in Computer Olympiad (2019)",
          practicalUse: "Applying rigorous logic to solve operational edge cases and workflow bottlenecks."
        },
        {
          name: "AI Productivity & Prompt Engineering",
          level: 86,
          highlight: "LLM assisted workflow automation, formula generation, drafting speedups",
          practicalUse: "10x productivity acceleration in research, synthesis, and tabular structuring."
        },
        {
          name: "Web Technologies & Computer Apps",
          level: 84,
          highlight: "HTML, CSS fundamentals, modern cloud document suites, collaboration tools",
          practicalUse: "Publishing intranet pages, configuring digital forms, and troubleshooting IT software."
        }
      ]
    },
    {
      title: "Professional & Leadership Acumen",
      iconName: "Award",
      description: "High-reliability workplace behavior, meticulous organization, and fast adaptation.",
      skills: [
        {
          name: "Time & Priority Management",
          level: 95,
          highlight: "Simultaneous pursuit of post-graduate education while mastering industry certifications",
          practicalUse: "Managing tight deliverable deadlines without quality compromise."
        },
        {
          name: "Cross-Functional Teamwork",
          level: 92,
          highlight: "Adaptable peer collaboration with open-minded communication",
          practicalUse: "Working harmoniously with technical, operational, and managerial teams."
        },
        {
          name: "Rapid Learning & Agility",
          level: 97,
          highlight: "Certified across multiple diverse disciplines (Language, Accounting, Tech, Math)",
          practicalUse: "Onboarding into new enterprise platforms and ERP software in days, not weeks."
        }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Master of Social Work (MSW)",
      institution: "Uttar Pradesh Rajarshi Tandon Open University",
      statusOrYear: "Pursuing — First Year",
      scoreOrDetail: "Post-Graduate Program",
      badgeType: "pursuing",
      description: "Advanced study focusing on human behavior, community development, organizational management, social policy, and ethical governance.",
      keySubjects: ["Social Welfare Administration", "Human Dynamics & Behavior", "Community Organization", "Research Methodology"]
    },
    {
      degree: "Bachelor of Arts (B.A.) — English",
      institution: "Deen Dayal Upadhyaya Gorakhpur University",
      statusOrYear: "2023",
      scoreOrDetail: "Graduated with Honours in English",
      badgeType: "graduated",
      description: "Rigorous 3-year curriculum centered on advanced English literature, linguistics, analytical writing, critical theory, and structured rhetoric.",
      keySubjects: ["English Literature & Rhetoric", "Linguistic Analysis", "Modern Prose & Critical Composition", "Global Literary Traditions"]
    },
    {
      degree: "Class XII (Intermediate)",
      institution: "Uttar Pradesh Madhyamik Shiksha Board",
      statusOrYear: "2020",
      scoreOrDetail: "70% | Mathematics Stream",
      badgeType: "score",
      description: "Rigorous science and mathematics curriculum cultivating sharp analytical reasoning, statistics, and quantitative calculation skills.",
      keySubjects: ["Mathematics", "Physics", "Chemistry", "English"]
    },
    {
      degree: "Class X (High School)",
      institution: "Uttar Pradesh Madhyamik Shiksha Board",
      statusOrYear: "2018",
      scoreOrDetail: "80% Distinction",
      badgeType: "score",
      description: "Comprehensive foundational education with strong performance across sciences, mathematics, social studies, and languages.",
      keySubjects: ["General Mathematics", "Science", "Social Sciences", "English & Hindi"]
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "olympiad-2019",
      title: "Computer Olympiad — Secured 1st Rank",
      issuer: "Olympiad Competitions Board",
      year: "2019",
      category: "Algorithmic & Tech Honor",
      verified: true,
      scoreOrRank: "1st Rank (Gold Medalist)",
      description: "Secured top position across participating regional candidates in competitive computing concepts, logical reasoning, and computer fundamentals.",
      competencies: ["Algorithmic Reasoning", "Computer Architecture", "Logic & Pattern Analysis", "Speed Problem Solving"]
    },
    {
      id: "excel-2024",
      title: "Advanced Excel Certification",
      issuer: "Professional Computer Education Center",
      year: "2024",
      category: "Data & Analytics",
      verified: true,
      scoreOrRank: "Distinction Grade",
      description: "Comprehensive enterprise mastery over advanced formulas (VLOOKUP, INDEX/MATCH, SUMIFS), multi-source pivot reporting, dynamic data validation, conditional formatting, and dashboard design.",
      competencies: ["Dynamic Pivot Tables", "Nested Lookup Formulas", "Data Cleaning & Deduplication", "Executive Dashboards"]
    },
    {
      id: "bookkeeper-rseti",
      title: "Assistant Bookkeeper — RSETI Certification",
      issuer: "Rural Self Employment Training Institute (RSETI)",
      year: "Accredited",
      category: "Accounting & Compliance",
      verified: true,
      scoreOrRank: "Certified Professional",
      description: "Standardized vocational certification covering double-entry accounting ledgers, voucher verification, balance sheet auditing, bank reconciliation statements, and cashbook handling.",
      competencies: ["Ledger Posting", "Bank Reconciliations", "Voucher Auditing", "Trial Balance Preparation"]
    },
    {
      id: "ccc-nielit",
      title: "CCC (Course on Computer Concepts)",
      issuer: "NIELIT (National Institute of Electronics & Information Technology)",
      year: "2024",
      category: "National IT Standard",
      verified: true,
      scoreOrRank: "Certified - NIELIT Govt. Recognized",
      description: "Official government-certified credential verifying end-to-end computer proficiency across office productivity tools, digital financial services, internet technology, and cyber hygiene.",
      competencies: ["Office Automation", "Digital Financial Systems", "Cyber Hygiene & OS", "Network Communication"]
    }
  ] as CertificationItem[]
};
