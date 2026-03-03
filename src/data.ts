export interface Link {
  title: string;
  url: string;
}

export interface UniversityData {
  id: string;
  university: string;
  country: string;
  region: string;
  tools: string;
  licensing: string;
  eligible: string;
  auth: string;
  dataRules: string;
  logging: string;
  training: string;
  links: Link[];
}

export const universities: UniversityData[] = [
  {
    id: "oxford",
    university: "University of Oxford",
    country: "UK",
    region: "Europe",
    tools: "ChatGPT Edu; Copilot Chat; Google Gemini; NotebookLM",
    licensing: "Institution-provided ChatGPT Edu workspace + Microsoft 365 tenant tools + Google Workspace tools",
    eligible: "Students (and, in Oxford-wide guidance, staff)",
    auth: "Requires University SSO format; chats are private from the institution; 'enterprise-level' access emphasized",
    dataRules: "Students are told to use University-supported tools and never upload confidential/sensitive/unpublished material into third-party tools; discipline-specific guidance applies",
    logging: "Oxford notes FOI/data protection laws can apply to results/searches produced using generative AI tools; detailed retention/audit depends on platform",
    training: "Training highlighted as available University-wide from Michaelmas term 2025; onboarding guide provided",
    links: [
      { title: "Student GenAI access page", url: "https://www.ox.ac.uk/students/life/it/your-university-genai-access" },
      { title: "Safe use guidance", url: "https://www.ox.ac.uk/students/life/it/guidance-safe-and-responsible-use-gen-ai-tools" },
      { title: "Research policy", url: "https://www.ox.ac.uk/research/support-researchers/research-practice/policy-generative-ai-research" }
    ]
  },
  {
    id: "cambridge",
    university: "University of Cambridge",
    country: "UK",
    region: "Europe",
    tools: "Standard licensed GenAI tools: Copilot, Gemini, NotebookLM",
    licensing: "Institution-licensed tools (Microsoft + Google) accessed via University account",
    eligible: "Staff guidance (administrative use); Copilot availability described for most staff/students with standard Microsoft license",
    auth: "Signing in with University account provides enterprise version; Cambridge states data/prompts not used to train models for licensed tools",
    dataRules: "Cambridge warns free/unlicensed GenAI input can be akin to placing data in the public domain; licensed tools should be used where personal data processing is necessary; warns about special category data",
    logging: "Output should be human-checked and cited where appropriate; broader retention/audit not specified on Cambridge pages",
    training: "Advises privacy notices and risk mitigations; implies DPIA-style thinking for personal data use",
    links: [
      { title: "GenAI (data protection) guidance", url: "https://www.information-compliance.admin.cam.ac.uk/data-protection/guidance/ai-guidance" },
      { title: "Copilot service page", url: "https://help.uis.cam.ac.uk/service/collaboration/365/copilot" }
    ]
  },
  {
    id: "eth-zurich",
    university: "ETH Zurich",
    country: "Switzerland",
    region: "Europe",
    tools: "Microsoft Copilot; Google Gemini; NotebookLM via ETH cloud subscriptions",
    licensing: "Cloud subscription licensing (Microsoft 365 + Google Workspace) 'provided by ETH'",
    eligible: "All ETH employees and students",
    auth: "Data-protected access 'directly via an ETH account'; ETH states personal data entered is not used as training",
    dataRules: "ETH recommends institution-accessed tools for teaching and cautions that consumer tools store data on vendor servers; includes guidance to disable training controls for consumer ChatGPT if used",
    logging: "Retention/audit not specified on the ETH tools page; information security guidance is referenced",
    training: "Not stated (tool page points to information security guidelines for safe use)",
    links: [
      { title: "Tools & licenses overview", url: "https://ethz.ch/en/the-eth-zurich/education/ai-in-education/tools.html" },
      { title: "ETH InfoSec AI guide (PDF)", url: "https://ethz.ch/content/dam/ethz/associates/services/News/service-news/2025/09/250923-ki-leitfaden/ETH-InfoSec-AI-Guide-EN.pdf" }
    ]
  },
  {
    id: "york",
    university: "University of York",
    country: "UK",
    region: "Europe",
    tools: "Google Gemini (Education version); Google NotebookLM",
    licensing: "University-funded Google Workspace for Education access; 'licensed by the University' framing",
    eligible: "Staff and students",
    auth: "University email + Google 2FA; explicitly instructs users to avoid personal accounts because contractual protections differ",
    dataRules: "Requires users to follow University information classification guidance; DPIA screening for high-risk personal data processing; warns about copyright/publisher limits",
    logging: "Gemini chats retained for 3 months when signed in; advises transferring content if needed after 30 days; broader audit stance not specified",
    training: "No blanket training requirement stated; provides guidance hubs and references to Google training",
    links: [
      { title: "Gemini service page", url: "https://www.york.ac.uk/it-services/tools/google-gemini/" },
      { title: "NotebookLM service page", url: "https://www.york.ac.uk/it-services/tools/google-notebooklm/" }
    ]
  },
  {
    id: "colorado",
    university: "University of Colorado",
    country: "US",
    region: "North America",
    tools: "ChatGPT Edu (systemwide; campus-specific instances)",
    licensing: "3-year OpenAI agreement; each campus manages its own secure instance",
    eligible: "Eligible students, staff, faculty (full/part-time); access persists while affiliated",
    auth: "University email credentialed login; OpenAI will not use university environments to train models",
    dataRules: "Notes policy compliance unchanged; warns about open records/public records implications for work-related use",
    logging: "Explicitly flags Colorado Open Records Act relevance for public employees' work records; deeper retention not specified",
    training: "Brief training required for users",
    links: [
      { title: "CU GenAI page", url: "https://www.cu.edu/gen-ai" }
    ]
  },
  {
    id: "uc-davis",
    university: "University of California, Davis",
    country: "US",
    region: "North America",
    tools: "OpenAI services under UC license (API, ChatGPT Enterprise, ChatGPT EDU)",
    licensing: "UC system license; campus terms of use",
    eligible: "UC Davis affiliates with active computing account",
    auth: "Governed by UC license terms; consent to UC/OpenAI processing; OpenAI does not use UC 'User Content' to improve services or models",
    dataRules: "Only officially licensed UC services approved to process sensitive UC 'P3/P4' institutional information; prohibits processing P3/P4 on personal versions",
    logging: "Not specified in terms page; (Copilot-style eDiscovery controls are separate)",
    training: "Not specified on terms page",
    links: [
      { title: "UC Davis terms of use for OpenAI", url: "https://iet.ucdavis.edu/uc-terms-use-openai-services" }
    ]
  },
  {
    id: "toronto",
    university: "University of Toronto",
    country: "Canada",
    region: "North America",
    tools: "ChatGPT Edu; Microsoft Copilot Chat (enterprise)",
    licensing: "Enterprise agreement with OpenAI for ChatGPT Edu; Copilot under institutional Microsoft environment",
    eligible: "U of T community access described for faculty/librarians/staff/students",
    auth: "Requires UTORid login for ChatGPT Edu; Copilot has EDP; Copilot evaluated safe up to Level 3 data",
    dataRules: "Contract ensures UofT data not used for training OpenAI models; Copilot safe up to Level 3 data per information security guidance",
    logging: "Not specified; Microsoft EDP supports audit/eDiscovery/retention controls",
    training: "ChatGPT Edu requires confirming paid access via Licensed Software Office; no blanket training requirement stated",
    links: [
      { title: "U of T ChatGPT Edu guide", url: "https://teaching.utoronto.ca/tool-guides/chatgpt-edu/" },
      { title: "U of T Copilot guide", url: "https://teaching.utoronto.ca/tool-guides/microsoft-copilot/" }
    ]
  },
  {
    id: "unsw",
    university: "UNSW Sydney",
    country: "Australia",
    region: "Other",
    tools: "ChatGPT Edu",
    licensing: "Enterprise-level agreement; 10,000 licenses for staff (largest in Australia per UNSW)",
    eligible: "Fixed-term and permanent staff; supports researchers, educators, professional staff",
    auth: "Enterprise-level tool provides more secure functionality; UNSW states prompts remain private and not used for model training",
    dataRules: "Institutional framing includes IP protection emphasis",
    logging: "Not specified",
    training: "Not specified on this page (trial noted; licenses optional)",
    links: [
      { title: "UNSW announcement", url: "https://www.unsw.edu.au/newsroom/news/2025/09/unsw-sydney-inks-australias-biggest-chatgpt-edu-deal-with-openai" }
    ]
  },
  {
    id: "auckland",
    university: "The University of Auckland",
    country: "New Zealand",
    region: "Other",
    tools: "Microsoft 365 Copilot Chat; Google Gemini; NotebookLM",
    licensing: "Centrally approved toolset (cybersecurity-approved)",
    eligible: "All students and staff",
    auth: "Tools approved by cybersecurity team; page claims protected access and that tools do not retain history or use data to train models",
    dataRules: "Detailed classification limits not provided in excerpt; framed as privacy/security protection",
    logging: "Not specified",
    training: "Not specified",
    links: [
      { title: "University of Auckland GenAI tools page", url: "https://www.auckland.ac.nz/en/students/my-tools/generative-ai.html" }
    ]
  },
  {
    id: "columbia",
    university: "Columbia University",
    country: "US",
    region: "North America",
    tools: "ChatGPT Education; AI Services suite; Gemini; NotebookLM; internal Chat platform",
    licensing: "University-licensed services via central IT (CUIT)",
    eligible: "Columbia community (AI services framed as community services)",
    auth: "Authentication details not shown in excerpt; service is framed as university-licensed",
    dataRules: "CUIMC (health-focused) states sensitive data permitted only on ChatGPT Education and approved Microsoft Copilot platforms, with IRB/TRAC approvals for research protocol use",
    logging: "CUIMC implies tool-specific approvals matter; enterprise compliance tooling varies by platform",
    training: "CUIMC requires approvals (IRB, TRAC/ACORD) for certain sensitive use; institution discourages",
    links: [
      { title: "CUIT ChatGPT Education page", url: "https://www.cuit.columbia.edu/content/chatgpt-education" },
      { title: "CUIT AI Services", url: "https://www.cuit.columbia.edu/content/ai-services" },
      { title: "CUIMC AI/data", url: "https://www.it.cuimc.columbia.edu/information-security/ai-and-generative-technology-use-cuimc" }
    ]
  }
];
