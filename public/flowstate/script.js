const players = [
  ["P001", "2026-07-01", "Japan", "iOS", 9, 185, 12, 2, 14.99, "2026-07-19"],
  ["P002", "2026-07-02", "USA", "Android", 2, 24, 3, 0, 0, "2026-07-03"],
  ["P003", "2026-07-02", "Japan", "PC", 15, 420, 28, 4, 39.96, "2026-07-20"],
  ["P004", "2026-07-03", "USA", "iOS", 6, 91, 8, 1, 4.99, "2026-07-12"],
  ["P005", "2026-07-04", "Brazil", "Android", 1, 10, 1, 0, 0, "2026-07-04"],
  ["P006", "2026-07-05", "Japan", "Android", 12, 300, 20, 3, 24.97, "2026-07-20"],
  ["P007", "2026-07-05", "Canada", "PC", 4, 70, 6, 0, 0, "2026-07-08"],
  ["P008", "2026-07-06", "USA", "PC", 20, 610, 35, 6, 79.94, "2026-07-20"],
  ["P009", "2026-07-07", "UK", "iOS", 3, 45, 4, 0, 0, "2026-07-09"],
  ["P010", "2026-07-07", "Japan", "iOS", 17, 500, 30, 5, 49.95, "2026-07-20"],
  ["P011", "2026-07-08", "Mexico", "Android", 2, 20, 2, 0, 0, "2026-07-08"],
  ["P012", "2026-07-09", "USA", "iOS", 7, 130, 10, 1, 9.99, "2026-07-18"],
  ["P013", "2026-07-10", "Japan", "PC", 11, 280, 19, 2, 19.98, "2026-07-20"],
  ["P014", "2026-07-11", "Germany", "Android", 5, 100, 7, 0, 0, "2026-07-16"],
  ["P015", "2026-07-12", "USA", "Android", 8, 160, 14, 1, 4.99, "2026-07-19"]
].map(row => ({
  playerId: row[0],
  installDate: row[1],
  country: row[2],
  platform: row[3],
  sessions: row[4],
  totalMinutes: row[5],
  highestLevel: row[6],
  purchases: row[7],
  revenue: row[8],
  lastLogin: row[9]
}));

const lessons = {
  day1:
    "Lecture 1: Start by noticing what kinds of problems, environments, people, and projects make you curious. The advisor will use those patterns to help you choose a career before courses unlock.",
  day2:
    "Lecture 2: Career exploration is evidence gathering. Compare real job posts, watch day-in-the-life examples, list required skills, and notice what feels energizing versus draining.",
  day3:
    "Lecture 3: Choose a path only when it has enough signal: interest, realistic training steps, work settings you can tolerate, and a project you would actually practice."
};

const timelinePlan = [
  {
    period: "Month 1",
    title: "Career discovery term",
    focus: "Use the advisor conversation, learning profile, career library, job training options, languages, and electives to compare realistic paths.",
    workload: "45-75 minutes, 4 days per week.",
    milestone: "Shortlist 3 career paths and identify what each one requires."
  },
  {
    period: "Month 2",
    title: "Decision term",
    focus: "Pick one career path, one optional language, and one elective or extracurricular that supports the life and work you want.",
    workload: "60-90 minutes, 4 days per week.",
    milestone: "Activate one academic portal with no unrelated career overlap."
  },
  {
    period: "Month 3",
    title: "Foundation term",
    focus: "Learn the real duties, tools, training options, standards, and entry expectations for the selected career.",
    workload: "60-90 minutes, 4-5 days per week.",
    milestone: "Career map, readiness checklist, and first practice routine."
  },
  {
    period: "Months 4-5",
    title: "Skill and portfolio terms",
    focus: "Practice the selected career skills, build proof, add chosen language or elective work, and collect visual/audio examples for retention.",
    workload: "75-120 minutes, 4 days per week.",
    milestone: "Two career-specific projects or training records."
  },
  {
    period: "Month 6",
    title: "Career launch term",
    focus: "Prepare resume/profile language, interview answers, training records, application targets, or client outreach for the selected career.",
    workload: "60-90 minutes, 4 days per week plus one weekly job-search block.",
    milestone: "A career-specific ready kit credible enough for the next step."
  },
  {
    period: "Ongoing",
    title: "Retention track",
    focus: "Use visual examples, videos, audio explanations, spaced review, and hands-on practice based on your learning profile.",
    workload: "15-25 minutes daily when you have capacity.",
    milestone: "A review system that helps the selected path stick."
  }
];

const defaultTasks = [
  { title: "Advisor Step 1: Describe what energizes you", detail: "Answer the career advisor with one real example from work, school, hobbies, or life.", type: "Career", done: false },
  { title: "Advisor Step 2: Compare three paths", detail: "Look at three career or job-training options before choosing one.", type: "Study", done: false },
  { title: "Advisor Step 3: Choose or skip a language", detail: "Choose any language that matters to you. It will build everyday fluency and connect to your career when one is selected.", type: "Study", done: false },
  { title: "Advisor Step 4: Choose your electives", detail: "Choose one, several, or build an elective-only plan without selecting a career.", type: "Portfolio", done: false },
  { title: "Advisor Step 5: Activate one path", detail: "Choose a career, a language, one or more electives, or a combined program before academic completion begins.", type: "Career", done: false }
];

const cards = [
  { type: "Career discovery", front: "Interest", back: "What topics do you return to without being forced?" },
  { type: "Career discovery", front: "Environment", back: "Where do you work best: quiet, social, hands-on, remote, structured, or flexible?" },
  { type: "Career discovery", front: "Skill", back: "What skill would you practice even when progress feels slow?" },
  { type: "Career discovery", front: "People", back: "Who do you want your work to help, serve, entertain, teach, protect, or support?" },
  { type: "Career discovery", front: "Proof", back: "What project, sample, training record, or portfolio piece could prove this path?" },
  { type: "Career discovery", front: "Next step", back: "What small action would make this career feel more real this week?" }
];

const careerBlueprints = {
  gameData: {
    title: "Game Data Analyst",
    focus: "Player behavior, retention, monetization, live-ops experiments, and product recommendations",
    project: "Build a player retention dashboard with a written studio recommendation"
  },
  dataAnalyst: {
    title: "Data Analyst",
    focus: "Cleaning data, finding trends, building dashboards, and explaining insights to teams",
    project: "Create a business dashboard using spreadsheet, SQL, and clear executive notes"
  },
  businessIntelligence: {
    title: "Business Intelligence Analyst",
    focus: "KPI reporting, dashboards, stakeholder questions, and decision-support systems",
    project: "Build a BI scorecard with revenue, engagement, operations, and weekly trend views"
  },
  productAnalyst: {
    title: "Product Analyst",
    focus: "Feature performance, user funnels, retention, experimentation, and product strategy",
    project: "Analyze a feature launch and recommend the next product experiment"
  },
  uxResearch: {
    title: "UX Researcher",
    focus: "User interviews, usability testing, survey insights, behavioral patterns, and product friction",
    project: "Run a mini usability study and turn observations into prioritized design recommendations"
  },
  marketResearch: {
    title: "Market Research Analyst",
    focus: "Audience research, competitors, market sizing, trends, survey data, and positioning",
    project: "Create a market brief for a game, app, brand, or creative product"
  },
  localization: {
    title: "Localization Specialist",
    focus: "Language, culture, translation quality, regional player expectations, and market adaptation",
    project: "Create a bilingual localization review with cultural notes and data-backed recommendations"
  },
  gameProducer: {
    title: "Associate Game Producer",
    focus: "Schedules, team coordination, scope, player feedback, feature readiness, and launch planning",
    project: "Build a production tracker for a game feature with risks, owners, and milestones"
  },
  communityManager: {
    title: "Community Manager",
    focus: "Player trust, events, content calendars, feedback loops, moderation, and sentiment",
    project: "Design a community campaign and analyze engagement, comments, and player concerns"
  },
  contentStrategist: {
    title: "Content Strategist",
    focus: "Audience needs, editorial planning, brand voice, SEO, analytics, and useful storytelling",
    project: "Create a content calendar with performance goals and sample posts"
  },
  digitalMarketing: {
    title: "Digital Marketing Analyst",
    focus: "Campaign performance, ad creatives, conversion funnels, audience segments, and ROI",
    project: "Analyze a mock campaign and recommend budget, creative, and audience changes"
  },
  socialMedia: {
    title: "Social Media Strategist",
    focus: "Short-form content, community growth, engagement analytics, platform voice, and campaigns",
    project: "Build a 30-day social launch plan with metrics and creative samples"
  },
  technicalWriter: {
    title: "Technical Writer",
    focus: "Clear documentation, tutorials, release notes, process guides, and user education",
    project: "Write a beginner-friendly guide that explains a technical or data workflow"
  },
  instructionalDesign: {
    title: "Instructional Designer",
    focus: "Lesson design, learning objectives, assessments, student experience, and online course building",
    project: "Create a mini online lesson with objectives, practice, rubric, and learner feedback"
  },
  teacher: {
    title: "Teacher or Tutor",
    focus: "Explaining concepts, coaching students, designing practice, and supporting confidence",
    project: "Build a tutoring module that teaches one data, language, or creative skill"
  },
  frontend: {
    title: "Frontend Developer",
    focus: "Web interfaces, accessibility, interaction design, JavaScript, CSS, and user experience",
    project: "Build a polished portfolio page or dashboard with responsive interactions"
  },
  softwareDeveloper: {
    title: "Software Developer",
    focus: "Programming fundamentals, problem solving, app features, debugging, and maintainable code",
    project: "Build a small app with user flows, clean documentation, and a public portfolio writeup"
  },
  dataScientist: {
    title: "Data Scientist",
    focus: "Statistics, Python, modeling, experiments, prediction, and communicating uncertainty",
    project: "Create a notebook that explores a dataset, tests a model, and explains limitations"
  },
  aiSpecialist: {
    title: "AI Tools Specialist",
    focus: "Prompt design, workflow automation, evaluation, documentation, and responsible AI use",
    project: "Build an AI-assisted workflow and document the before, after, risks, and time saved"
  },
  cloudSupport: {
    title: "Cloud Support Associate",
    focus: "Technical troubleshooting, tickets, networking basics, cloud dashboards, and customer communication",
    project: "Create a support runbook with common incidents, diagnostics, and escalation notes"
  },
  webDesigner: {
    title: "Web Designer",
    focus: "Layout, typography, brand systems, responsive design, and client-ready site concepts",
    project: "Design a multi-section website for a brand, artist, or school program"
  },
  uiDesigner: {
    title: "UI Designer",
    focus: "Interface systems, components, usability, visual hierarchy, and product polish",
    project: "Create a UI kit and prototype for a student portal, game dashboard, or creative app"
  },
  graphicDesigner: {
    title: "Graphic Designer",
    focus: "Brand identity, layout, posters, social graphics, typography, and visual communication",
    project: "Create a campaign identity with logo, poster, and social media assets"
  },
  illustrator: {
    title: "Illustrator",
    focus: "Character design, editorial illustration, visual storytelling, composition, and style development",
    project: "Build a small illustration series with process notes and audience intent"
  },
  photographer: {
    title: "Photographer",
    focus: "Composition, lighting, editing, visual storytelling, portfolios, and client communication",
    project: "Create a themed photo series with contact sheets, edits, and artist statement"
  },
  videoEditor: {
    title: "Video Editor",
    focus: "Story pacing, cuts, sound, captions, short-form content, and audience retention",
    project: "Edit a short trailer, tutorial, or creator reel with performance goals"
  },
  voiceActor: {
    title: "Voice Actor",
    focus: "Character voice, narration, audition technique, script interpretation, and audio quality",
    project: "Record a voice demo reel with character, commercial, and narration samples"
  },
  podcaster: {
    title: "Podcast Producer",
    focus: "Show concepts, scripting, recording, editing, guest prep, publishing, and audience growth",
    project: "Produce a pilot episode with show notes, cover art, and launch plan"
  },
  performingArts: {
    title: "Drama and Performing Arts Creator",
    focus: "Performance, storytelling, stage presence, ensemble work, script analysis, and production",
    project: "Create a drama club showcase with rehearsal notes, monologue, and reflection"
  },
  esports: {
    title: "Esports Operations Coordinator",
    focus: "Tournament planning, community operations, schedules, streaming, sponsors, and team logistics",
    project: "Plan an esports event with bracket, budget, roles, and engagement report"
  },
  qaTester: {
    title: "Game QA Tester",
    focus: "Bug reports, test plans, reproduction steps, gameplay quality, and communication with developers",
    project: "Create a QA test suite and bug report packet for a small game or app"
  },
  cybersecurity: {
    title: "Cybersecurity Analyst",
    focus: "Risk, alerts, access control, incident notes, security habits, and technical investigation",
    project: "Build a beginner security audit checklist and incident response summary"
  },
  projectManager: {
    title: "Project Coordinator",
    focus: "Planning, communication, timelines, documentation, risks, and team follow-through",
    project: "Create a project plan with milestones, owners, status updates, and risk register"
  },
  hrPeople: {
    title: "People Operations Analyst",
    focus: "Employee experience, surveys, hiring funnels, retention, training, and people metrics",
    project: "Analyze a mock employee survey and recommend retention or training improvements"
  },
  finance: {
    title: "Financial Analyst",
    focus: "Budgets, forecasts, revenue, expenses, variance analysis, and decision support",
    project: "Build a simple budget model with charts and written recommendations"
  },
  accounting: {
    title: "Accounting Assistant",
    focus: "Invoices, reconciliations, spreadsheets, accuracy, financial records, and month-end support",
    project: "Create a sample reconciliation workbook with notes, checks, and exception handling"
  },
  operations: {
    title: "Operations Analyst",
    focus: "Process improvement, workflow metrics, scheduling, bottlenecks, quality, and team efficiency",
    project: "Map a workflow, measure delays, and recommend practical process improvements"
  },
  customerSuccess: {
    title: "Customer Success Specialist",
    focus: "Client onboarding, support patterns, retention, relationship management, and product education",
    project: "Build a customer health scorecard and a playbook for at-risk accounts"
  },
  sportsAnalyst: {
    title: "Sports Analyst",
    focus: "Player performance, team trends, scouting data, fan engagement, and game strategy",
    project: "Create a sports performance dashboard with scouting notes and recommendation"
  },
  environmental: {
    title: "Environmental Data Analyst",
    focus: "Climate data, sustainability metrics, maps, field observations, and impact reporting",
    project: "Analyze an environmental dataset and create an impact brief for a community audience"
  },
  libraryArchive: {
    title: "Library and Archive Technician",
    focus: "Cataloging, research help, metadata, preservation, digital collections, and public access",
    project: "Create a digital archive sample with metadata, tags, and a user-friendly finding guide"
  },
  museum: {
    title: "Museum or Gallery Program Assistant",
    focus: "Exhibits, visitor learning, collection notes, programming, events, and visual culture",
    project: "Design a mini exhibit plan with object labels, audience goals, and event ideas"
  },
  fashion: {
    title: "Fashion and Costume Creative",
    focus: "Styling, costume storytelling, trend research, visual identity, and production planning",
    project: "Build a costume or styling lookbook with references, sketches, budget, and audience"
  },
  eventPlanner: {
    title: "Event Planner",
    focus: "Timelines, vendors, budgets, guest experience, logistics, communication, and contingency plans",
    project: "Create a complete event plan with schedule, roles, budget, risks, and promotion"
  },
  grantWriter: {
    title: "Grant Writer",
    focus: "Program goals, persuasive writing, budgets, outcomes, community needs, and funding research",
    project: "Draft a sample grant proposal with need statement, budget, outcomes, and evaluation plan"
  },
  wellnessCoordinator: {
    title: "Wellness Program Coordinator",
    focus: "Habits, student or employee support, events, resources, wellbeing metrics, and inclusive programming",
    project: "Design a wellness program calendar with goals, resources, and participation measures"
  },
  healthData: {
    title: "Health Data Analyst",
    focus: "Patient trends, operations, access, quality metrics, privacy, and healthcare reporting",
    project: "Create a healthcare operations dashboard with careful privacy-minded notes"
  },
  nonprofit: {
    title: "Nonprofit Program Analyst",
    focus: "Program outcomes, community needs, grants, impact reporting, and resource decisions",
    project: "Build an impact report with program metrics, stories, and funding recommendations"
  },
  legalOps: {
    title: "Legal Operations Assistant",
    focus: "Case tracking, documents, deadlines, compliance, process improvement, and client service",
    project: "Create a legal operations tracker with deadlines, status, and risk notes"
  },
  entrepreneur: {
    title: "Creative Entrepreneur",
    focus: "Offers, audience, brand, pricing, content, client workflows, and sustainable income",
    project: "Build a one-page business plan with portfolio samples and launch experiments"
  },
  games: {
    title: "Interactive Experience Analyst",
    focus: "Games, interactive products, play patterns, community behavior, retention, accessibility, and player experience",
    project: "Build an interactive experience case study with player behavior notes, design observations, and practical recommendations"
  },
  art: {
    title: "Creative Direction and Visual Arts Specialist",
    focus: "Painting, design, beauty, visual culture, creative direction, audience response, and portfolio storytelling",
    project: "Create a visual concept board or art portfolio study with process notes and audience intent"
  },
  photo: {
    title: "Photography and Visual Storytelling Specialist",
    focus: "Composition, lighting, editing, documentary storytelling, brand imagery, and visual communication",
    project: "Create a photo story or visual campaign with contact sheet, edits, and reflection"
  },
  voice: {
    title: "Narrative Performance and Player Experience Analyst",
    focus: "Voice acting, character attachment, dialogue feedback, cutscene completion, and player sentiment",
    project: "Record a short voice acting sample and analyze how narrative choices affect engagement"
  },
  culture: {
    title: "Language, Culture, and Localization Specialist",
    focus: "Languages, culture, translation quality, international communication, accessibility, and cultural research",
    project: "Create a bilingual glossary, localization review, or cultural research brief"
  },
  business: {
    title: "Product Strategy Analyst",
    focus: "Revenue, pricing, retention, market positioning, and executive-ready recommendations",
    project: "Build a monetization brief with ARPU, churn risk, and next-step product experiments"
  },
  tech: {
    title: "Technical Product Builder",
    focus: "Web apps, automations, dashboards, AI tools, and practical digital workflows",
    project: "Build a simple tool that solves one workflow problem and document how it helps"
  },
  helping: {
    title: "Learning and Student Support Specialist",
    focus: "Coaching, tutoring, student confidence, accessible explanations, and habit support",
    project: "Create a support plan for learners with lessons, check-ins, and progress measures"
  },
  media: {
    title: "Digital Media Producer",
    focus: "Video, audio, streaming, audience analytics, storytelling, and publishing systems",
    project: "Produce a short media series and review audience retention or engagement"
  },
  justice: {
    title: "Social Impact and Policy Analyst",
    focus: "Community needs, ethics, advocacy, legal systems, access, and evidence-based change",
    project: "Create an issue brief with data, stakeholder concerns, and practical recommendations"
  },
  science: {
    title: "Science and Health Research Assistant",
    focus: "Research, health, nature, animals, evidence, lab habits, observation, and public understanding",
    project: "Create a research brief or field observation portfolio with sources, notes, and next questions"
  },
  trades: {
    title: "Skilled Trades and Maker Apprentice",
    focus: "Hands-on tools, building, repair, safety, measurement, materials, and practical craftsmanship",
    project: "Build a practical maker portfolio with safety notes, measurements, materials, and finished proof"
  },
  wellness: {
    title: "Wellness and Life Skills Educator",
    focus: "Home economics, food, fitness, routines, personal finance, caregiving, and sustainable daily life",
    project: "Create a life-skills guide or wellness plan with recipes, routines, budget notes, or habit tracking"
  }
};

const workStyleGuidance = {
  analytical: "Prioritize SQL, dashboards, clean metric definitions, and evidence-based recommendations.",
  creative: "Prioritize portfolio artifacts, visual case studies, concept boards, and creative experiments.",
  social: "Prioritize presentations, mock stakeholder updates, drama club work, and interview storytelling.",
  independent: "Prioritize research notes, self-directed case studies, GitHub documentation, and repeatable workflows.",
  service: "Prioritize mentorship, tutoring artifacts, client empathy, support playbooks, and reflective practice.",
  entrepreneurial: "Prioritize a portfolio offer, audience research, pricing experiments, outreach, and a launch plan.",
  practical: "Prioritize demonstrations, tool practice, safety checklists, troubleshooting, and visible before-and-after proof.",
  organizing: "Prioritize project plans, operating checklists, schedules, process maps, and measurable improvements."
};

const defaultWorkStyleDetails = {
  primary: "analytical",
  environment: "mixed",
  collaboration: "balanced",
  pace: "steady",
  structure: "clear",
  feedback: "coaching",
  energy: "short-blocks",
  values: []
};

const workStyleDimensions = {
  primary: {
    analytical: "Analyzing information and solving problems",
    creative: "Designing, imagining, or making",
    social: "Collaborating, presenting, or connecting",
    independent: "Researching and building independently",
    service: "Helping, teaching, or supporting people",
    entrepreneurial: "Creating opportunities and leading ideas",
    practical: "Building, repairing, or working hands-on",
    organizing: "Planning, coordinating, and improving systems"
  },
  environment: {
    mixed: { label: "A mix of settings and activities", guidance: "Use varied examples and rotate between study, practice, and real-world observation." },
    quiet: { label: "Quiet office, library, lab, or home workspace", guidance: "Protect low-interruption focus time and use written agendas before collaborative work." },
    studio: { label: "Creative studio, kitchen, stage, or production space", guidance: "Learn through demonstrations, drafts, rehearsal, critique, and visible project development." },
    public: { label: "Customer, classroom, clinic, or community setting", guidance: "Use roleplay, service scenarios, communication practice, and supervised real-world observation." },
    workshop: { label: "Workshop, job site, technical space, or maker lab", guidance: "Use safety-first demonstrations, tool practice, checklists, and hands-on repetition." },
    outdoors: { label: "Outdoors or moving between locations", guidance: "Use field observations, mobile notes, practical simulations, and location-based projects." },
    remote: { label: "Primarily remote or hybrid", guidance: "Practice asynchronous communication, digital organization, video collaboration, and self-managed deadlines." },
    travel: { label: "Across cultures and locations", guidance: "Use cultural context, travel scenarios, adaptable routines, and location-independent portfolio work." }
  },
  collaboration: {
    balanced: { label: "Balanced solo and team time", guidance: "Alternate independent preparation with discussion, peer feedback, and shared projects." },
    solo: { label: "Mostly independent deep work", guidance: "Use self-directed projects with clear checkpoints and prepared questions for feedback." },
    partner: { label: "One-on-one or trusted partner work", guidance: "Use coaching sessions, paired practice, interviews, and partner review." },
    "small-team": { label: "Close small-team collaboration", guidance: "Use defined team roles, short meetings, shared deliverables, and peer critique." },
    "large-team": { label: "Larger cross-functional teamwork", guidance: "Practice handoffs, documentation, meeting updates, and coordination across specialties." },
    "public-facing": { label: "Frequent client, customer, patient, or audience contact", guidance: "Use roleplay, presentations, listening practice, and response scripts." },
    lead: { label: "Leading, coordinating, or mentoring others", guidance: "Add facilitation, delegation, coaching, decision logs, and project leadership practice." }
  },
  pace: {
    steady: { label: "Steady and predictable", study: "Keep four consistent study appointments each week and advance one clear step at a time." },
    varied: { label: "Varied with different tasks", study: "Rotate reading, media, practice, discussion, and project work to maintain attention." },
    sprints: { label: "Focused project sprints", study: "Use one or two longer project blocks, then schedule recovery and a short review session." },
    fast: { label: "Fast-moving with quick decisions", study: "Use short deadlines, quick practice rounds, and immediate correction without skipping reflection." },
    urgent: { label: "Urgent real-time problem solving", study: "Use timed simulations and decision practice, followed by a calm debrief and error review." },
    seasonal: { label: "Seasonal cycles or changing busy periods", study: "Plan lighter maintenance weeks and deeper project weeks around changing responsibilities." }
  },
  structure: {
    clear: { label: "Clear instructions, routines, and expectations", guidance: "Provide step-by-step directions, examples, checklists, and a visible definition of done." },
    guided: { label: "A clear goal with coaching", guidance: "Use a defined goal, guided milestones, and support before each increase in difficulty." },
    flexible: { label: "Flexible methods within a deadline", guidance: "Offer multiple project formats while keeping the outcome, deadline, and quality rubric clear." },
    autonomous: { label: "Freedom to define the goal and approach", guidance: "Use student-designed projects, independent research, and milestone-based accountability." },
    systems: { label: "Organized systems that can be improved", guidance: "Use repeatable workflows, templates, process reviews, and improvement experiments." }
  },
  feedback: {
    coaching: { label: "Supportive coaching and discussion", guidance: "Build in reflection questions and conversational feedback before revision." },
    written: { label: "Written expectations, examples, and notes", guidance: "Use annotated examples, written rubrics, and specific revision notes." },
    frequent: { label: "Frequent quick feedback", guidance: "Use small practice attempts with immediate correction before moving forward." },
    milestone: { label: "Feedback at planned milestones", guidance: "Review work at outline, first draft, revision, and final presentation stages." },
    results: { label: "Clear results with room to self-correct", guidance: "Use measurable outcomes, answer keys, test cases, and a self-review checklist." }
  },
  energy: {
    "short-blocks": { label: "Short focused blocks with breaks", guidance: "Break lessons into 20-30 minute blocks with a specific finish line and a reset between blocks." },
    "deep-blocks": { label: "Long uninterrupted concentration blocks", guidance: "Bundle related lessons into protected 60-90 minute sessions with one larger deliverable." },
    conversation: { label: "People time followed by recovery time", guidance: "Pair discussion or roleplay with quiet notes, reflection, and independent follow-through." },
    movement: { label: "Movement and hands-on activity", guidance: "Include demonstrations, field practice, standing review, and physical or tactile project work." },
    variable: { label: "A flexible rhythm that changes by day", guidance: "Choose a short, standard, or deep study option each day while keeping the weekly milestone fixed." }
  },
  values: {
    stability: "stability and reliable expectations",
    income: "income growth and advancement",
    creativity: "creativity and self-expression",
    impact: "meaning and positive impact",
    flexibility: "schedule or location flexibility",
    mastery: "skill mastery and expertise",
    recognition: "recognition and visible achievement",
    community: "belonging and community",
    autonomy: "independence and ownership",
    variety: "variety and new experiences"
  }
};

const advisorQuestions = [
  "When do you lose track of time because you are so interested in what you are doing?",
  "What kind of problem do people naturally come to you for help with?",
  "Do you feel more alive making something, solving something, helping someone, performing, organizing, or learning something deep?",
  "Which languages, cultures, places, communities, media, or traditions are you curious enough to keep exploring?",
  "Which electives sound personally meaningful: art, photography, writing, voice acting, drama, music, technology, business, home economics, woodshop, wellness, or something else?",
  "What would you still want to practice even if nobody praised you for it yet?",
  "What kind of work environment sounds peaceful to you: quiet focus, creative studio, busy customer floor, team project, stage, classroom, or research desk?",
  "What do you want your future work to give you: stability, freedom, beauty, impact, recognition, mastery, community, or income growth?",
  "What have you survived or learned that could become empathy, wisdom, or strength in your career?"
];

const advisorInquiryLabels = {
  "career-discovery": "Career and passion discovery",
  "path-change": "Changing a career or study path",
  "elective-planning": "Language and elective planning",
  "learning-support": "Learning style and retention support",
  "job-training": "Practical job training",
  "course-progress": "Course access and progress",
  "general-guidance": "General student guidance"
};

const passionSignals = {
  analytical: {
    label: "Analytical problem solving",
    careers: ["Data Analyst", "Game Data Analyst", "Business Intelligence Analyst", "Financial Analyst"],
    words: ["data", "numbers", "analyze", "analytics", "sql", "spreadsheet", "dashboard", "pattern", "logic", "research", "solve", "puzzle", "metrics", "statistics"]
  },
  creative: {
    label: "Creative making",
    careers: ["Graphic Designer", "Illustrator", "Photographer", "Creative Entrepreneur"],
    words: ["art", "paint", "painting", "draw", "drawing", "design", "creative", "photo", "photography", "style", "fashion", "beauty", "visual", "color", "make", "create"]
  },
  performance: {
    label: "Performance and expression",
    careers: ["Voice Actor", "Podcast Producer", "Drama and Performing Arts Creator", "Content Strategist"],
    words: ["voice", "acting", "drama", "perform", "performance", "stage", "speak", "speaking", "podcast", "video", "story", "character", "present", "audience"]
  },
  service: {
    label: "Helping and human support",
    careers: ["Teacher or Tutor", "Customer Success Specialist", "Caregiver", "Wellness Program Coordinator"],
    words: ["help", "support", "care", "customer", "people", "teach", "tutor", "listen", "kind", "mentor", "service", "community", "calm", "comfort"]
  },
  culture: {
    label: "Language and culture",
    careers: ["Localization Specialist", "Translator", "Interpreter", "Language, Culture, and Localization Specialist"],
    words: ["japanese", "korean", "spanish", "language", "culture", "translate", "translation", "anime", "localization", "travel", "international", "bilingual"]
  },
  business: {
    label: "Business and leadership",
    careers: ["Product Analyst", "Project Coordinator", "Sales Associate", "Creative Entrepreneur"],
    words: ["business", "sales", "money", "revenue", "lead", "leader", "organize", "plan", "strategy", "manager", "manage", "promote", "customer", "profit"]
  },
  technical: {
    label: "Technology and building systems",
    careers: ["Frontend Developer", "Software Developer", "AI Tools Specialist", "Cloud Support Associate"],
    words: ["code", "coding", "app", "website", "tech", "technology", "automation", "ai", "software", "build", "computer", "debug", "system"]
  },
  practical: {
    label: "Practical reliability and operations",
    careers: ["Shift Lead", "Administrative Assistant", "Operations Analyst", "Hotel Front Desk Agent"],
    words: ["reliable", "routine", "schedule", "organize", "clean", "fast", "accurate", "detail", "shift", "retail", "barista", "cashier", "restaurant", "warehouse"]
  },
  science: {
    label: "Science, health, and research",
    careers: ["Science and Health Research Assistant", "Medical Assistant", "Veterinary Technician", "Environmental Scientist"],
    words: ["science", "health", "medical", "nature", "animals", "research", "lab", "biology", "chemistry", "environment", "forensic", "patient", "observe"]
  },
  trades: {
    label: "Hands-on trades and making",
    careers: ["Skilled Trades and Maker Apprentice", "Carpenter", "Electrician", "Woodshop and practical making"],
    words: ["tools", "build", "repair", "wood", "woodshop", "trade", "hands", "measure", "make", "craft", "construction", "fix", "mechanic"]
  },
  wellness: {
    label: "Wellness and life skills",
    careers: ["Wellness and Life Skills Educator", "Personal Trainer", "Culinary Arts Specialist", "Home economics and life skills"],
    words: ["wellness", "food", "cook", "cooking", "fitness", "home", "budget", "family", "nutrition", "routine", "life skills", "caregiving"]
  }
};

const interestProfiles = {
  data: { label: "data and pattern discovery", careers: ["Data Analyst", "Business Intelligence Analyst", "Game Data Analyst"] },
  research: { label: "research and evidence", careers: ["Research Assistant", "UX Researcher", "Market Research Analyst"] },
  games: { label: "games and player experience", careers: ["Game Designer", "Game Data Analyst", "Game Producer"] },
  strategy: { label: "strategy and product decisions", careers: ["Product Manager", "Product Analyst", "Business Strategist"] },
  sales: { label: "sales and persuasion", careers: ["Sales Associate", "Account Executive", "Customer Success Specialist"] },
  finance: { label: "finance and money systems", careers: ["Financial Analyst", "Accountant", "Bookkeeper"] },
  entrepreneurship: { label: "entrepreneurship", careers: ["Creative Entrepreneur", "Small Business Owner", "Freelance Specialist"] },
  coding: { label: "software and web building", careers: ["Software Developer", "Frontend Developer", "Web Designer"] },
  ai: { label: "AI and automation", careers: ["AI Tools Specialist", "Automation Specialist", "Data Scientist"] },
  cyber: { label: "cybersecurity and technical systems", careers: ["Cybersecurity Analyst", "IT Support Specialist", "Network Administrator"] },
  painting: { label: "painting and illustration", careers: ["Illustrator", "Fine Artist", "Art Director"] },
  design: { label: "design and visual direction", careers: ["Graphic Designer", "UI Designer", "Interior Designer"] },
  photo: { label: "photography", careers: ["Photographer", "Photo Editor", "Visual Content Producer"] },
  video: { label: "film and video", careers: ["Video Editor", "Film Director", "Streaming Producer"] },
  writing: { label: "writing and storytelling", careers: ["Author", "Journalist", "Technical Writer"] },
  music: { label: "music and audio", careers: ["Music Producer", "Sound Designer", "Audio Engineer"] },
  performance: { label: "performance and expression", careers: ["Voice Actor", "Actor", "Performing Arts Creator"] },
  language: { label: "languages and translation", careers: ["Translator", "Interpreter", "Localization Specialist"] },
  travel: { label: "travel and world cultures", careers: ["Travel Advisor", "Flight Attendant", "International Program Coordinator"] },
  teaching: { label: "teaching and coaching", careers: ["Teacher", "Tutor", "Instructional Designer"] },
  healthcare: { label: "healthcare and patient support", careers: ["Nurse", "Medical Assistant", "Patient Care Technician"] },
  counseling: { label: "psychology and emotional support", careers: ["Therapist or Counselor", "Social Worker", "Peer Support Specialist"] },
  community: { label: "community and public service", careers: ["Nonprofit Program Coordinator", "Community Organizer", "Public Service Specialist"] },
  justice: { label: "law and advocacy", careers: ["Lawyer", "Paralegal", "Policy Analyst"] },
  animals: { label: "animals and veterinary care", careers: ["Veterinarian", "Veterinary Technician", "Animal Care Specialist"] },
  environment: { label: "nature and sustainability", careers: ["Environmental Scientist", "Park Ranger", "Sustainability Coordinator"] },
  trades: { label: "construction and skilled trades", careers: ["Carpenter", "Electrician", "Construction Manager"] },
  repair: { label: "repair and troubleshooting", careers: ["Mechanic", "Maintenance Technician", "Electric Vehicle Technician"] },
  food: { label: "food and culinary arts", careers: ["Chef", "Baker", "Culinary Arts Specialist"] },
  wellness: { label: "fitness and wellness", careers: ["Personal Trainer", "Wellness Coordinator", "Nutrition Coach"] },
  home: { label: "home and life skills", careers: ["Home Economics Educator", "Caregiver", "Family Resource Specialist"] },
  hospitality: { label: "hospitality and guest care", careers: ["Hotel Front Desk Agent", "Guest Services Specialist", "Restaurant Manager"] },
  events: { label: "events and organizing", careers: ["Event Planner", "Project Coordinator", "Venue Operations Coordinator"] }
};

const jobTrainingBlueprints = {
  sales: {
    title: "Sales Associate",
    mission: "Help customers feel understood, match them with the right product, and make the store easier to shop.",
    first: "Learn the top products, prices, promotions, return policy, and where everything lives.",
    standout: "Ask one useful question before recommending anything, then explain benefits in plain language.",
    grow: "Track sales wins, customer compliments, product knowledge, and moments you helped solve a problem."
  },
  barista: {
    title: "Barista",
    mission: "Create consistent drinks, keep the line moving, and make regulars feel remembered.",
    first: "Memorize drink builds, milk options, register flow, cleaning routines, and rush-hour station roles.",
    standout: "Repeat orders clearly, move with calm speed, and reset your station before it gets chaotic.",
    grow: "Build proof through speed, accuracy, customer compliments, and training newer teammates."
  },
  cashier: {
    title: "Cashier",
    mission: "Make checkout accurate, friendly, fast, and trustworthy.",
    first: "Learn the register, coupons, returns, bagging rules, payment issues, and who to call for help.",
    standout: "Greet, scan carefully, confirm totals, protect cash accuracy, and stay calm during long lines.",
    grow: "Track low error rates, reliability, schedule flexibility, and examples of handling difficult customers."
  },
  customerService: {
    title: "Customer Service Representative",
    mission: "Listen carefully, solve what you can, and help upset customers feel respected.",
    first: "Learn scripts, account tools, escalation rules, refund policy, and documentation standards.",
    standout: "Use calm language, summarize the problem, offer the next step, and document clearly.",
    grow: "Track resolved cases, positive feedback, de-escalation examples, and process improvements."
  },
  retail: {
    title: "Retail Team Member",
    mission: "Keep the store clean, stocked, welcoming, and easy for customers to navigate.",
    first: "Learn zones, stocking rules, fitting room standards, loss prevention basics, and product categories.",
    standout: "Notice what needs doing before being asked and communicate when shelves, sizes, or displays need help.",
    grow: "Track merchandising wins, customer assists, attendance, and cross-training in register or inventory."
  },
  server: {
    title: "Restaurant Server",
    mission: "Create a smooth meal experience while protecting accuracy, timing, and hospitality.",
    first: "Memorize the menu, allergies, POS system, table numbers, side work, and timing expectations.",
    standout: "Anticipate refills, check back after food arrives, communicate delays, and stay organized under pressure.",
    grow: "Track guest compliments, upsell wins, teamwork, mistake recovery, and ability to handle busy sections."
  },
  host: {
    title: "Host or Front Desk Greeter",
    mission: "Set the first impression and manage flow so guests and staff both feel supported.",
    first: "Learn seating rotation, waitlist tools, phone etiquette, reservation rules, and accessibility needs.",
    standout: "Use warm greetings, accurate wait times, calm updates, and clear communication with servers.",
    grow: "Track rush management, guest compliments, communication wins, and readiness for server or lead roles."
  },
  receptionist: {
    title: "Receptionist",
    mission: "Make the front desk organized, welcoming, private, and dependable.",
    first: "Learn phone scripts, calendars, visitor check-in, messages, filing, privacy rules, and office tools.",
    standout: "Write clean notes, confirm details, protect confidential information, and keep the lobby calm.",
    grow: "Track scheduling accuracy, communication wins, software skills, and examples of preventing confusion."
  },
  callCenter: {
    title: "Call Center Agent",
    mission: "Handle high-volume calls with patience, accuracy, and clear next steps.",
    first: "Learn call flow, knowledge base, account lookup, verification, compliance, and escalation paths.",
    standout: "Control tone, listen for the real issue, avoid rushing, and document the call immediately.",
    grow: "Track quality scores, attendance, resolution rate, de-escalations, and coaching improvements."
  },
  foodPrep: {
    title: "Food Prep Crew Member",
    mission: "Keep food safe, consistent, stocked, clean, and ready for service.",
    first: "Learn food safety, prep lists, labels, temperatures, knife safety, recipes, and cleaning schedules.",
    standout: "Label everything, rotate stock correctly, communicate low inventory, and keep your area inspection-ready.",
    grow: "Track speed, accuracy, food safety habits, teamwork, and training on multiple stations."
  },
  warehouse: {
    title: "Warehouse Associate",
    mission: "Move, pick, pack, count, and ship items safely and accurately.",
    first: "Learn safety rules, scanner use, locations, labels, lifting, quality checks, and productivity goals.",
    standout: "Prioritize accuracy before speed, report hazards, keep your area clean, and ask about cross-training.",
    grow: "Track pick accuracy, safety record, attendance, equipment training, and process improvement ideas."
  },
  delivery: {
    title: "Delivery Driver",
    mission: "Deliver orders safely, on time, and with professional communication.",
    first: "Learn route tools, vehicle checks, customer contact rules, proof of delivery, and safety standards.",
    standout: "Communicate delays early, protect items, confirm addresses, and stay calm in traffic or weather.",
    grow: "Track on-time delivery, safety record, customer ratings, and reliability across different routes."
  },
  cleaning: {
    title: "Housekeeping or Cleaning Crew",
    mission: "Create spaces that feel safe, cared for, sanitary, and ready to use.",
    first: "Learn cleaning order, chemical safety, room standards, inspection checklists, and supply restocking.",
    standout: "Work top-to-bottom, notice details, report maintenance issues, and protect guest or client privacy.",
    grow: "Track inspection scores, speed, reliability, safety, and examples of catching issues early."
  },
  childcare: {
    title: "Childcare Assistant",
    mission: "Support children with safety, patience, routines, learning, and emotional steadiness.",
    first: "Learn supervision rules, sign-in procedures, allergies, emergency steps, activity plans, and behavior guidance.",
    standout: "Stay observant, speak calmly, document incidents, and communicate clearly with lead teachers.",
    grow: "Track certifications, parent feedback, activity ideas, reliability, and classroom management growth."
  },
  caregiver: {
    title: "Caregiver or Home Health Aide",
    mission: "Help people feel safe, respected, comfortable, and supported with daily needs.",
    first: "Learn care plans, documentation, safety transfers, privacy, medication reminders, and emergency rules.",
    standout: "Notice changes, communicate respectfully, preserve dignity, and document accurately.",
    grow: "Track training, attendance, client feedback, safety habits, and readiness for healthcare pathways."
  },
  adminAssistant: {
    title: "Administrative Assistant",
    mission: "Keep work organized, schedules clear, documents accurate, and teams supported.",
    first: "Learn calendars, email etiquette, documents, spreadsheets, filing, meeting notes, and office priorities.",
    standout: "Confirm details, make clean checklists, follow up before deadlines, and reduce confusion for others.",
    grow: "Track software skills, process improvements, meeting support, and examples of saving time."
  },
  bankTeller: {
    title: "Bank Teller",
    mission: "Handle money accurately while making customers feel secure and respected.",
    first: "Learn cash handling, identity checks, transaction types, fraud warning signs, and privacy rules.",
    standout: "Balance carefully, explain steps clearly, follow procedure, and ask for help before guessing.",
    grow: "Track accuracy, compliance habits, customer service, and interest in banking or finance roles."
  },
  gymDesk: {
    title: "Gym Front Desk Associate",
    mission: "Welcome members, support signups, keep the space organized, and handle issues calmly.",
    first: "Learn membership plans, check-in tools, cleaning rounds, class schedules, and safety procedures.",
    standout: "Remember regulars, offer tours confidently, notice equipment issues, and keep the desk professional.",
    grow: "Track membership assists, customer compliments, schedule reliability, and fitness or wellness interests."
  },
  hotelDesk: {
    title: "Hotel Front Desk Agent",
    mission: "Create a calm, professional guest experience from check-in to problem resolution.",
    first: "Learn reservation systems, ID/payment checks, room types, local info, policies, and escalation steps.",
    standout: "Use polished language, solve small issues fast, document requests, and communicate with housekeeping.",
    grow: "Track guest feedback, problem recovery, upsells, software skills, and hospitality career interests."
  },
  shiftLead: {
    title: "Shift Lead in Training",
    mission: "Support the team, protect standards, solve small problems, and communicate with managers.",
    first: "Learn opening, closing, cash, breaks, task assignments, coaching basics, and incident documentation.",
    standout: "Stay fair, calm, specific, and helpful while keeping the shift moving.",
    grow: "Track training moments, team feedback, reliable shifts, problem solving, and readiness for supervisor roles."
  },
  stocking: {
    title: "Stocking or Inventory Associate",
    mission: "Keep products accurate, organized, available, and easy for customers or coworkers to find.",
    first: "Learn receiving, backroom layout, shelf labels, counts, rotation rules, scanner use, and safety basics.",
    standout: "Fix small inventory problems, communicate low stock, face shelves neatly, and protect accuracy.",
    grow: "Track count accuracy, speed, safety, merchandising help, and cross-training in receiving or ordering."
  },
  fastFood: {
    title: "Fast Food Crew Member",
    mission: "Serve consistent food quickly while protecting cleanliness, teamwork, and customer experience.",
    first: "Learn menu builds, headset or counter flow, food safety, cleaning rounds, rush roles, and handoff standards.",
    standout: "Repeat orders, keep your station reset, communicate wait times, and help teammates during rushes.",
    grow: "Track speed, accuracy, attendance, station mastery, and readiness for trainer or shift lead."
  },
  lineCook: {
    title: "Line Cook",
    mission: "Cook consistent food safely under time pressure while supporting the whole kitchen.",
    first: "Learn station setup, recipes, temps, tickets, sanitation, prep levels, and communication calls.",
    standout: "Stay organized, call delays early, protect food quality, clean as you go, and respect timing.",
    grow: "Track station mastery, ticket times, food safety, menu knowledge, and ability to train others."
  },
  dishwasher: {
    title: "Dishwasher",
    mission: "Keep the kitchen moving by protecting sanitation, speed, and equipment readiness.",
    first: "Learn dish flow, chemical safety, machine use, sorting, trash routines, floor safety, and closing tasks.",
    standout: "Stay ahead during rushes, stack safely, communicate supply needs, and keep the area clean.",
    grow: "Track reliability, closing accuracy, safety habits, and cross-training into prep or line work."
  },
  busser: {
    title: "Busser or Runner",
    mission: "Support smooth service by keeping tables, food delivery, and dining flow clean and fast.",
    first: "Learn table numbers, reset standards, dish routes, allergy awareness, side work, and server communication.",
    standout: "Anticipate resets, move safely, communicate missing items, and help guests without interrupting service.",
    grow: "Track speed, teamwork, guest comments, menu knowledge, and readiness for host or server roles."
  },
  securityGuard: {
    title: "Security Guard",
    mission: "Protect people, property, and calm by observing carefully and following procedure.",
    first: "Learn post orders, reporting, patrol routes, emergency steps, access control, and de-escalation basics.",
    standout: "Stay alert, write accurate reports, communicate early, and use calm presence before force.",
    grow: "Track attendance, incident reports, certifications, supervisor feedback, and site-specific training."
  },
  parkingAttendant: {
    title: "Parking Attendant",
    mission: "Guide traffic, protect payment accuracy, and help visitors start and end their experience smoothly.",
    first: "Learn lot layout, payment tools, validation rules, traffic flow, safety signals, and customer scripts.",
    standout: "Give clear directions, stay visible, handle payment issues calmly, and report hazards fast.",
    grow: "Track cash accuracy, safety record, customer feedback, and readiness for lead attendant."
  },
  usher: {
    title: "Usher or Event Staff",
    mission: "Help guests feel welcomed, seated, informed, and safe during events.",
    first: "Learn venue map, ticket scanning, accessibility seating, emergency exits, crowd flow, and event rules.",
    standout: "Use clear directions, notice confusion, de-escalate politely, and communicate issues quickly.",
    grow: "Track event reliability, guest feedback, crowd management, and cross-training in box office or operations."
  },
  ticketing: {
    title: "Ticketing or Box Office Associate",
    mission: "Sell, scan, and solve ticket issues accurately while keeping lines calm.",
    first: "Learn ticket software, seating charts, refunds, discounts, accessibility, payment rules, and will-call flow.",
    standout: "Confirm details, explain options clearly, protect payment accuracy, and ask for help before guessing.",
    grow: "Track accuracy, customer recovery, software skills, and event operations knowledge."
  },
  libraryAssistant: {
    title: "Library Assistant",
    mission: "Help patrons find resources while keeping materials organized and the space welcoming.",
    first: "Learn shelving, circulation software, holds, privacy, patron etiquette, printing help, and room rules.",
    standout: "Give patient support, shelve accurately, protect quiet, and document questions you cannot answer.",
    grow: "Track patron assists, shelving accuracy, software skills, programming help, and archive interests."
  },
  teacherAide: {
    title: "Teacher Aide",
    mission: "Support classroom learning, safety, routines, and respectful student attention.",
    first: "Learn classroom rules, attendance, materials, supervision, confidentiality, behavior supports, and emergency steps.",
    standout: "Notice students who need help, reinforce instructions calmly, and communicate observations to the teacher.",
    grow: "Track reliability, activity support, student feedback, classroom management, and education pathway interests."
  },
  campCounselor: {
    title: "Camp Counselor",
    mission: "Create safe, fun, structured activities while modeling responsibility and care.",
    first: "Learn group rules, safety checks, activity plans, emergency procedures, allergies, and parent communication.",
    standout: "Keep energy positive, include quieter kids, manage transitions, and document incidents clearly.",
    grow: "Track leadership moments, safety record, activity ideas, parent feedback, and youth-work skills."
  },
  petCare: {
    title: "Pet Care or Kennel Assistant",
    mission: "Care for animals safely, cleanly, patiently, and according to instructions.",
    first: "Learn feeding, cleaning, leash safety, medication notes, temperament flags, sanitation, and emergency steps.",
    standout: "Observe behavior changes, follow instructions exactly, communicate concerns, and protect cleanliness.",
    grow: "Track reliability, animal handling skills, client feedback, safety habits, and veterinary pathway interests."
  },
  landscaping: {
    title: "Landscaping Crew Member",
    mission: "Improve outdoor spaces safely through clean, reliable, detail-focused work.",
    first: "Learn tools, PPE, mowing, trimming, planting, cleanup, weather safety, and truck loading.",
    standout: "Protect property, notice hazards, clean edges carefully, and communicate equipment issues.",
    grow: "Track punctuality, tool skills, safety record, before-and-after photos, and crew lead readiness."
  },
  maintenance: {
    title: "Maintenance Helper",
    mission: "Support repairs, inspections, cleanliness, and safe building operations.",
    first: "Learn work orders, basic tools, PPE, lockout awareness, reporting, parts storage, and cleaning standards.",
    standout: "Take clear notes, clean up after work, report hazards, and ask before touching unfamiliar systems.",
    grow: "Track tool skills, completed work orders, safety habits, and trade apprenticeship interests."
  },
  carWash: {
    title: "Car Wash Attendant",
    mission: "Move vehicles and customers safely through a fast, clean, consistent service.",
    first: "Learn queue flow, wash packages, payment, vehicle safety, drying standards, and equipment alerts.",
    standout: "Give clear signals, protect vehicles, reset supplies, and handle complaints respectfully.",
    grow: "Track customer feedback, speed, safety record, upsells, and readiness for lead attendant."
  },
  autoLube: {
    title: "Oil Change or Tire Shop Assistant",
    mission: "Support basic automotive service safely, accurately, and with clear customer communication.",
    first: "Learn shop safety, vehicle checks, tool names, torque basics, fluids, tire handling, and documentation.",
    standout: "Follow checklists, keep tools organized, ask before guessing, and communicate issues early.",
    grow: "Track certifications, safety record, service accuracy, tool skills, and mechanic pathway steps."
  },
  apprentice: {
    title: "Trade Apprentice Helper",
    mission: "Assist skilled trades by being safe, prepared, observant, and useful on the job site.",
    first: "Learn PPE, tool names, cleanup, material handling, measuring basics, site rules, and who gives instructions.",
    standout: "Show up prepared, keep the area safe, ask smart questions, and remember repeated procedures.",
    grow: "Track hours, tools learned, safety habits, mentor feedback, and apprenticeship requirements."
  },
  medicalReception: {
    title: "Medical Receptionist",
    mission: "Help patients navigate appointments, forms, privacy, and communication with care.",
    first: "Learn scheduling, check-in, insurance basics, privacy rules, phone scripts, and escalation steps.",
    standout: "Stay calm with anxious patients, confirm details, protect confidentiality, and document messages cleanly.",
    grow: "Track scheduling accuracy, patient feedback, software skills, and healthcare administration interests."
  },
  pharmacyTech: {
    title: "Pharmacy Technician Trainee",
    mission: "Support safe, accurate pharmacy service under required supervision and rules.",
    first: "Learn prescription workflow, privacy, inventory, customer pickup, insurance basics, and local training requirements.",
    standout: "Confirm details carefully, follow pharmacist direction, protect privacy, and avoid guessing.",
    grow: "Track training hours, accuracy, customer service, compliance habits, and certification requirements."
  },
  dentalAssistant: {
    title: "Dental Assistant Trainee",
    mission: "Support patient comfort, room readiness, sterilization, and dental team flow.",
    first: "Learn infection control, instruments, room setup, patient intake, charting basics, and local requirements.",
    standout: "Prepare rooms consistently, communicate calmly, protect cleanliness, and follow clinical direction.",
    grow: "Track training, sterilization accuracy, patient comfort skills, and certification or school requirements."
  },
  labAssistant: {
    title: "Lab Assistant",
    mission: "Support accurate, clean, organized lab work while following safety and documentation standards.",
    first: "Learn PPE, labels, sample handling, cleaning, inventory, data entry, and chain-of-custody basics.",
    standout: "Label carefully, document immediately, ask before assuming, and keep workspaces inspection-ready.",
    grow: "Track accuracy, safety, software skills, procedures learned, and science or healthcare pathway interests."
  },
  dataEntry: {
    title: "Data Entry Clerk",
    mission: "Enter, verify, clean, and protect information with speed and accuracy.",
    first: "Learn the system, field rules, quality checks, privacy expectations, keyboard shortcuts, and naming standards.",
    standout: "Use checks before submitting, flag unclear records, keep notes, and protect confidentiality.",
    grow: "Track accuracy, speed, error reduction, spreadsheet skills, and analyst or admin pathway steps."
  },
  mailroom: {
    title: "Mailroom or Package Room Clerk",
    mission: "Move mail and packages accurately, securely, and on time.",
    first: "Learn sorting, scanning, signatures, delivery routes, secure storage, customer pickup, and issue reporting.",
    standout: "Protect chain of custody, organize routes, communicate delays, and keep records clean.",
    grow: "Track accuracy, on-time delivery, safety, customer feedback, and logistics pathway interests."
  },
  dispatcher: {
    title: "Dispatcher Trainee",
    mission: "Coordinate people, vehicles, calls, and updates with calm accuracy.",
    first: "Learn dispatch software, radio or phone etiquette, routes, priority levels, documentation, and escalation rules.",
    standout: "Repeat critical details, stay calm under pressure, update early, and document every change.",
    grow: "Track response accuracy, communication quality, software skills, and operations pathway steps."
  },
  rideshare: {
    title: "Rideshare or Courier Driver",
    mission: "Transport people or items safely with professional communication and route awareness.",
    first: "Learn app flow, ratings, safety rules, local routes, vehicle checks, delivery proof, and customer boundaries.",
    standout: "Communicate clearly, keep the vehicle clean, protect safety, and document issues quickly.",
    grow: "Track ratings, on-time completion, safety, expenses, and logistics or transportation interests."
  },
  beautyAssistant: {
    title: "Salon or Beauty Assistant",
    mission: "Support a polished client experience while keeping tools, schedules, and stations ready.",
    first: "Learn sanitation, product storage, appointment flow, laundry, client greeting, and license boundaries.",
    standout: "Keep stations beautiful, remember preferences, protect cleanliness, and support stylists smoothly.",
    grow: "Track client compliments, sanitation habits, product knowledge, photos where allowed, and cosmetology goals."
  }
};

const expansiveCareerCatalog = [
  ["nurse", "Nurse", "patient care, clinical judgment, communication, safety, documentation, and teamwork", "Create a patient education resource and a care-team communication case study"],
  ["doctor", "Physician", "diagnosis, patient care, science, ethics, leadership, and lifelong medical learning", "Build a health topic explainer with symptoms, prevention, care pathways, and patient questions"],
  ["physicianAssistant", "Physician Assistant", "patient assessment, clinical teamwork, diagnosis support, treatment plans, and education", "Create a clinical scenario brief with questions, care steps, and follow-up plan"],
  ["nursePractitioner", "Nurse Practitioner", "advanced nursing, primary care, patient education, assessment, and treatment planning", "Build a preventive care guide with screening, education, and community resources"],
  ["medicalAssistant", "Medical Assistant", "front-office and clinical support, vitals, patient flow, documentation, and empathy", "Create a clinic rooming checklist with privacy, accuracy, and patient comfort standards"],
  ["cna", "Certified Nursing Assistant (CNA)", "patient comfort, daily living support, vital signs, safety, observation, documentation, and compassionate teamwork", "Build a CNA readiness packet with patient-care routines, safety checks, communication examples, and credential research"],
  ["homeHealthAide", "Home Health Aide", "in-home support, personal care, safety, observation, communication, boundaries, and documentation", "Create a home-care visit checklist with safety, dignity, communication, and reporting notes"],
  ["medicalLabTech", "Medical Laboratory Technician", "specimen handling, testing, accuracy, lab safety, quality control, and healthcare documentation", "Build a laboratory workflow guide with specimen safety, quality checks, and result-reporting steps"],
  ["emt", "EMT", "emergency response, patient assessment, safety, calm communication, and protocols", "Build an emergency scenario reflection with assessment, actions, and communication notes"],
  ["paramedic", "Paramedic", "advanced emergency care, protocols, field decisions, teamwork, and stress management", "Create a response plan for a simulated emergency with roles, timeline, and handoff notes"],
  ["radiologyTech", "Radiologic Technologist", "imaging equipment, patient positioning, safety, anatomy, and healthcare documentation", "Build an imaging workflow guide with safety checks and patient explanations"],
  ["dentalHygienist", "Dental Hygienist", "oral health, patient education, prevention, cleaning, documentation, and comfort", "Create a dental health education poster and appointment communication script"],
  ["pharmacist", "Pharmacist", "medication safety, counseling, science, compliance, and patient support", "Build a medication education one-pager with risks, questions, and safety reminders"],
  ["physicalTherapist", "Physical Therapist", "movement, rehabilitation, anatomy, motivation, care plans, and progress tracking", "Design a rehab progress tracker with goals, exercises, and patient feedback"],
  ["occupationalTherapist", "Occupational Therapist", "daily living skills, adaptive tools, patient goals, rehabilitation, and empathy", "Create an adaptive living plan for a client scenario"],
  ["therapist", "Therapist or Counselor", "mental health support, listening, ethics, care plans, and client growth", "Build a resource guide with coping tools, referral boundaries, and reflection prompts"],
  ["socialWorker", "Social Worker", "case support, advocacy, community resources, documentation, and human dignity", "Create a client resource map and support plan for a realistic scenario"],
  ["veterinarian", "Veterinarian", "animal health, diagnostics, surgery, client education, and medical ethics", "Build a pet health education guide with symptoms, prevention, and owner questions"],
  ["vetTech", "Veterinary Technician", "animal handling, lab support, client communication, sanitation, and clinical assistance", "Create a clinic support checklist for intake, comfort, and safety"],
  ["lawyer", "Lawyer", "legal research, writing, advocacy, ethics, analysis, and client service", "Draft a plain-English legal issue brief with facts, rule, analysis, and questions"],
  ["paralegal", "Paralegal", "case files, legal documents, research, deadlines, and client communication", "Create a case tracker with document checklist, timeline, and evidence notes"],
  ["courtReporter", "Court Reporter", "accurate transcription, legal procedure, confidentiality, and listening precision", "Build a transcript accuracy practice log and courtroom vocabulary guide"],
  ["policeOfficer", "Police Officer", "public safety, law, de-escalation, reporting, ethics, and community trust", "Create a community safety scenario brief with communication and report-writing practice"],
  ["firefighter", "Firefighter", "emergency response, physical readiness, rescue, teamwork, and fire safety", "Build a home or campus safety inspection checklist with prevention recommendations"],
  ["correctionalOfficer", "Correctional Officer", "security, observation, procedure, communication, and safety", "Create an incident documentation practice packet with objective reporting"],
  ["militaryOfficer", "Military Officer", "leadership, planning, discipline, logistics, communication, and service", "Build a mission-planning brief with goals, roles, risks, and after-action reflection"],
  ["electrician", "Electrician", "electrical systems, safety codes, troubleshooting, installation, and precision", "Create a beginner wiring safety study guide and tool-identification portfolio"],
  ["applianceRepairTech", "Appliance Repair Technician", "diagnostics, electrical and mechanical systems, safety, customer communication, and repair documentation", "Create an appliance diagnostic checklist with symptoms, testing steps, safety notes, and repair records"],
  ["autoBodyTech", "Automotive Body Technician", "collision repair, refinishing, tools, safety, measurements, and quality control", "Build an auto body repair workflow with damage assessment, materials, safety steps, and quality review"],
  ["barber", "Barber", "hair cutting, sanitation, client consultation, style, service, and licensing readiness", "Create a barber portfolio plan with service menu, sanitation procedures, consultation notes, and style practice"],
  ["boilermaker", "Boilermaker", "industrial fabrication, welding, blueprints, rigging, safety, and precision", "Build an industrial trade safety portfolio with blueprint vocabulary, rigging checks, and fabrication practice goals"],
  ["brickMason", "Brick Mason", "masonry, measuring, mortar, tools, site safety, and craftsmanship", "Create a masonry project plan with material estimates, layout measurements, safety, and quality checks"],
  ["cabinetmaker", "Cabinetmaker", "woodworking, joinery, measurements, finishing, tools, safety, and client specifications", "Build a cabinet project portfolio with drawings, cut list, material choices, and finish samples"],
  ["plumber", "Plumber", "water systems, repair, installation, diagnostics, safety, and customer service", "Build a plumbing service checklist with symptoms, tools, and repair documentation"],
  ["commercialDriver", "Commercial Driver (CDL)", "vehicle inspections, commercial driving safety, routing, regulations, log practices, cargo awareness, and professional delivery", "Build a CDL readiness portfolio with pre-trip inspection practice, route planning, safety study, and credential research"],
  ["dieselMechanic", "Diesel Mechanic", "heavy-duty engines, diagnostics, preventive maintenance, tools, safety, and fleet documentation", "Create a diesel maintenance plan with inspection intervals, diagnostic notes, and service records"],
  ["drywallFinisher", "Drywall Finisher", "surface preparation, taping, finishing, tools, dust safety, and quality control", "Build a drywall finishing practice plan with tool list, safety steps, finish levels, and photo documentation"],
  ["elevatorInstaller", "Elevator Installer and Repairer", "mechanical and electrical systems, safety, troubleshooting, codes, and precision", "Create an elevator systems study guide with safety procedures, component vocabulary, and troubleshooting examples"],
  ["equipmentOperator", "Heavy Equipment Operator", "equipment controls, site safety, grading, inspections, communication, and construction operations", "Build a heavy-equipment operator readiness packet with site safety, inspection routine, and equipment vocabulary"],
  ["industrialMaintenanceTech", "Industrial Maintenance Technician", "mechanical systems, motors, controls, preventive maintenance, troubleshooting, and safety", "Create a preventive-maintenance plan with inspection schedules, lockout notes, and repair documentation"],
  ["lineworker", "Electrical Lineworker", "power systems, climbing safety, emergency response, equipment, teamwork, and regulations", "Build a lineworker readiness guide with safety protocols, equipment vocabulary, and training pathway research"],
  ["locksmith", "Locksmith", "locks, keys, access systems, security, precision, customer service, and ethics", "Create a locksmith service workflow with security checks, tool identification, and client documentation"],
  ["machinist", "Machinist", "precision measurement, machining, blueprints, CNC basics, tooling, safety, and quality inspection", "Build a machining portfolio with measurement practice, blueprint reading, safety checklist, and sample part plan"],
  ["painter", "Painter", "surface preparation, coatings, color, tools, safety, detail, and client communication", "Create a painting project estimate with prep checklist, materials, safety, and finish-quality review"],
  ["pipefitter", "Pipefitter", "industrial piping, blueprints, fabrication, welding basics, safety, and installation", "Build a pipefitting study packet with blueprint symbols, material list, safety steps, and installation plan"],
  ["roofingContractor", "Roofer", "roof systems, materials, weather protection, fall safety, tools, and workmanship", "Create a roofing project checklist with safety controls, materials, inspection points, and customer explanation"],
  ["sheetMetalWorker", "Sheet Metal Worker", "fabrication, HVAC ductwork, measurement, tools, safety, and installation", "Build a sheet-metal fabrication portfolio with layout practice, tool list, safety, and quality checks"],
  ["telecommunicationsTech", "Telecommunications Technician", "cabling, network hardware, installation, testing, troubleshooting, and safety", "Create a cabling installation plan with test results, labeling standards, and troubleshooting notes"],
  ["windTurbineTech", "Wind Turbine Technician", "renewable-energy systems, heights safety, mechanical maintenance, electrical basics, and diagnostics", "Build a wind-turbine maintenance plan with safety procedures, components, and service log"],
  ["waterTreatmentOperator", "Water and Wastewater Treatment Operator", "water systems, testing, public health, process controls, safety, and compliance", "Create a water-quality monitoring dashboard with testing schedule, safety steps, and incident response notes"],
  ["welder", "Welder", "metal fabrication, safety, blueprints, tools, measurements, and quality control", "Create a weld practice portfolio with photos, settings, defects, and improvements"],
  ["hvacTech", "HVAC Technician", "heating, cooling, ventilation, diagnostics, safety, and service communication", "Build a maintenance checklist for HVAC systems with customer explanation notes"],
  ["mechanic", "Automotive Mechanic", "vehicle systems, diagnostics, repair, tools, safety, and service documentation", "Create a diagnostic workflow with symptoms, tests, repair estimate, and follow-up"],
  ["evTech", "Electric Vehicle Technician", "EV systems, batteries, diagnostics, safety, charging, and emerging vehicle tech", "Build an EV safety and maintenance explainer with service checklist"],
  ["solarInstaller", "Solar Installer", "renewable energy systems, roof safety, wiring basics, installation, and maintenance", "Create a solar site-readiness checklist with safety and customer notes"],
  ["carpenter", "Carpenter", "woodworking, measuring, framing, tools, safety, and craftsmanship", "Build a small woodshop project plan with measurements, materials, and finish notes"],
  ["constructionManager", "Construction Manager", "schedules, budgets, crews, safety, materials, and project coordination", "Create a construction project timeline with risks, roles, and inspection checkpoints"],
  ["architect", "Architect", "building design, spatial planning, codes, sustainability, drawing, and client needs", "Build a concept board and floor-plan explanation for a small community space"],
  ["civilEngineer", "Civil Engineer", "infrastructure, math, design, safety, public systems, and project documentation", "Create a bridge, road, or water-system concept brief with constraints and impacts"],
  ["mechanicalEngineer", "Mechanical Engineer", "machines, design, materials, physics, prototyping, and problem solving", "Build a product teardown report with parts, forces, materials, and improvements"],
  ["electricalEngineer", "Electrical Engineer", "circuits, power, electronics, systems design, testing, and math", "Create a simple circuit design brief with diagram, components, and testing notes"],
  ["chemicalEngineer", "Chemical Engineer", "processes, materials, chemistry, safety, manufacturing, and optimization", "Build a process-flow diagram with inputs, outputs, risks, and quality checks"],
  ["aerospaceEngineer", "Aerospace Engineer", "flight systems, design, physics, testing, safety, and simulation", "Create a flight concept study with forces, materials, and testing questions"],
  ["pilot", "Pilot", "aviation safety, navigation, weather, communication, checklists, and decision making", "Build a flight-planning study packet with weather, route, checklist, and risk notes"],
  ["flightAttendant", "Flight Attendant", "passenger safety, service, emergency procedures, communication, and hospitality", "Create a safety-and-service scenario workbook with announcements and de-escalation"],
  ["truckDriver", "Truck Driver", "transportation, safety, routing, inspections, regulations, and customer handoff", "Build a route plan with inspection checklist, delivery documentation, and expense notes"],
  ["busDriver", "Bus Driver", "passenger safety, vehicle checks, routes, schedules, accessibility, and calm communication", "Create a bus route safety plan with vehicle inspection, passenger procedures, and incident notes"],
  ["trainConductor", "Train Conductor", "rail operations, safety rules, communication, scheduling, equipment, and teamwork", "Build a rail operations study guide with signal vocabulary, safety procedures, and communication practice"],
  ["logisticsCoordinator", "Logistics Coordinator", "shipping, routes, inventory, scheduling, vendors, and problem solving", "Create a delivery operations dashboard with delays, costs, and service notes"],
  ["dispatcherCareer", "Dispatcher", "calls, routing, prioritization, documentation, calm communication, and coordination", "Build a dispatch scenario log with time stamps, priorities, and escalation"],
  ["supplyChainAnalyst", "Supply Chain Analyst", "inventory, vendors, forecasting, shipping data, cost, and process improvement", "Create a supply chain scorecard with stock, delay, and cost metrics"],
  ["realEstateAgent", "Real Estate Agent", "clients, property research, contracts, negotiation, local markets, and marketing", "Build a neighborhood market brief with listing comparison and client guide"],
  ["insuranceAgent", "Insurance Agent", "risk, policies, client needs, compliance, sales, and service", "Create a policy comparison guide with questions, coverage basics, and ethical sales notes"],
  ["loanOfficer", "Loan Officer", "credit, lending, applications, compliance, client education, and financial decisions", "Build a borrower education checklist with documents, terms, and risk explanations"],
  ["accountant", "Accountant", "financial records, tax basics, reconciliation, reporting, accuracy, and ethics", "Create a sample monthly close workbook with journal notes and variance explanations"],
  ["bookkeeper", "Bookkeeper", "transactions, invoices, reconciliations, organization, and small-business finances", "Build a bookkeeping workflow with chart of accounts, receipts, and monthly reports"],
  ["financialPlanner", "Financial Planner", "budgets, goals, investments, risk, client education, and planning", "Create a personal finance plan with goals, budget, risks, and education notes"],
  ["banker", "Banking Specialist", "accounts, lending basics, customer service, compliance, and financial products", "Build a customer profile worksheet with needs, product fit, and responsible recommendations"],
  ["marketingManager", "Marketing Manager", "campaigns, audience, brand, budgets, analytics, and creative direction", "Create a campaign strategy with target audience, channels, budget, and KPIs"],
  ["publicRelations", "Public Relations Specialist", "media relations, reputation, writing, crisis response, and messaging", "Draft a press kit with announcement, talking points, and stakeholder questions"],
  ["journalist", "Journalist", "reporting, interviewing, research, writing, ethics, and audience trust", "Create a reported feature package with sources, outline, draft, and fact-check notes"],
  ["author", "Author", "storytelling, research, voice, publishing, editing, and reader engagement", "Build a writing portfolio with chapter sample, pitch, and revision plan"],
  ["editor", "Editor", "clarity, structure, grammar, audience, publishing standards, and coaching writers", "Edit a sample article with style notes, before/after changes, and rationale"],
  ["translator", "Translator", "language accuracy, culture, tone, terminology, and meaning transfer", "Create a bilingual glossary and translation sample with notes on choices"],
  ["interpreter", "Interpreter", "real-time language support, listening, memory, ethics, and cultural care", "Build an interpreting practice log with scenarios, vocabulary, and reflection"],
  ["librarian", "Librarian", "research support, collections, literacy, digital tools, public service, and programming", "Design a research guide and library program for a specific audience"],
  ["professor", "Professor", "teaching, scholarship, research, mentoring, curriculum, and academic communication", "Create a mini lecture, reading list, and discussion questions for one topic"],
  ["researchAssistant", "Research Assistant", "literature review, data collection, notes, ethics, and analysis support", "Build a research brief with sources, methods, findings, and next questions"],
  ["scientist", "Scientist", "experimentation, observation, evidence, lab methods, writing, and discovery", "Create a mini research poster with question, method, result, and limitation"],
  ["biologist", "Biologist", "living systems, ecology, lab or fieldwork, observation, and scientific reporting", "Build a field observation journal and species research brief"],
  ["chemist", "Chemist", "matter, reactions, lab safety, measurement, analysis, and experimentation", "Create a lab safety and experiment report with method, data, and interpretation"],
  ["forensicScientist", "Forensic Scientist", "evidence, lab analysis, chain of custody, science, and objective reporting", "Build a mock evidence-processing checklist and lab report summary"],
  ["marineBiologist", "Marine Biologist", "ocean ecosystems, field data, conservation, research, and science communication", "Create a marine habitat report with species, threats, data, and protection ideas"],
  ["parkRanger", "Park Ranger", "conservation, visitor education, safety, stewardship, and public service", "Design a visitor safety and nature education program with map and talking points"],
  ["urbanPlanner", "Urban Planner", "land use, transportation, housing, community input, maps, and policy", "Create a neighborhood improvement brief with maps, stakeholders, and tradeoffs"],
  ["gameDesigner", "Game Designer", "mechanics, player motivation, level flow, systems, testing, and creativity", "Build a game design document with prototype rules and playtest notes"],
  ["gameDeveloper", "Game Developer", "programming, engines, gameplay systems, debugging, and collaboration", "Create a small playable prototype with bug log and development notes"],
  ["animator", "Animator", "movement, timing, character performance, storyboards, and production tools", "Build an animation reel sample with storyboard, frames, and reflection"],
  ["threeDArtist", "3D Artist", "modeling, materials, lighting, topology, rendering, and visual storytelling", "Create a 3D asset portfolio entry with references, process, and final renders"],
  ["filmDirector", "Film Director", "visual storytelling, actors, shots, pacing, crew leadership, and editing", "Create a short scene plan with storyboard, shot list, and director notes"],
  ["screenwriter", "Screenwriter", "structure, dialogue, character, scenes, revision, and pitching", "Write a short script scene with logline, beat sheet, and revision notes"],
  ["musicProducer", "Music Producer", "sound, arrangement, recording, mixing, collaboration, and audience", "Produce a short track with session notes, references, and mixing checklist"],
  ["soundDesigner", "Sound Designer", "audio textures, effects, mood, implementation, and storytelling", "Create a sound pack for a scene or game action with cue sheet"],
  ["interiorDesigner", "Interior Designer", "space planning, color, materials, client needs, budget, and mood", "Build a room concept board with floor plan, materials, and shopping list"],
  ["fashionDesigner", "Fashion Designer", "garments, textiles, sketching, trends, construction, and brand identity", "Create a mini collection board with sketches, fabrics, audience, and pricing"],
  ["cosmetologist", "Cosmetologist", "hair, beauty, sanitation, client consultation, technique, and style", "Build a client consultation portfolio with sanitation checklist and before/after plan"],
  ["esthetician", "Esthetician", "skin care, sanitation, product knowledge, client education, and service", "Create a skincare consultation guide with routine, contraindications, and product notes"],
  ["massageTherapist", "Massage Therapist", "bodywork, anatomy, client comfort, ethics, and wellness", "Build a client intake and care-plan template with boundaries and follow-up"],
  ["personalTrainer", "Personal Trainer", "exercise science, coaching, safety, motivation, and progress tracking", "Create a beginner training plan with assessment, workouts, and progress metrics"],
  ["chef", "Chef", "cooking, kitchen leadership, flavor, safety, menu planning, and hospitality", "Create a menu concept with recipes, costing, prep plan, and plating photos"],
  ["baker", "Baker", "recipes, timing, precision, food safety, presentation, and production", "Build a bakery production plan with recipe testing, costing, and photo log"],
  ["floralDesigner", "Floral Designer", "color, arrangement, events, care, client style, and presentation", "Create a floral lookbook with recipes, pricing, care notes, and client brief"],
  ["tattooArtist", "Tattoo Artist", "drawing, sanitation, client trust, style, placement, and portfolio", "Build a flash sheet portfolio with style notes, sanitation study, and client consultation"],
  ["entrepreneurSmallBusiness", "Small Business Owner", "offers, operations, pricing, marketing, service, and finances", "Create a launch plan with offer, audience, budget, workflow, and first customers"],
  ["productManager", "Product Manager", "user needs, prioritization, strategy, data, roadmap, and team alignment", "Build a product brief with problem, users, metrics, features, and tradeoffs"],
  ["scrumMaster", "Scrum Master", "team facilitation, agile rituals, blockers, communication, and continuous improvement", "Create a sprint ceremony guide with blocker tracker and retrospective plan"],
  ["humanResources", "Human Resources Specialist", "hiring, employee relations, policies, training, and workplace support", "Build an onboarding checklist and employee support resource guide"],
  ["recruiter", "Recruiter", "sourcing, interviewing, candidate care, hiring funnels, and communication", "Create a candidate pipeline tracker with outreach scripts and interview rubric"],
  ["dataEngineer", "Data Engineer", "pipelines, databases, data quality, automation, and analytics infrastructure", "Build a data pipeline plan with sources, transformations, checks, and output tables"],
  ["databaseAdmin", "Database Administrator", "databases, performance, backups, access, reliability, and security", "Create a database maintenance runbook with access and backup checklist"],
  ["networkAdmin", "Network Administrator", "networks, troubleshooting, devices, access, monitoring, and documentation", "Build a network support diagram and incident troubleshooting checklist"],
  ["itSupport", "IT Support Specialist", "help desk tickets, devices, troubleshooting, documentation, and user service", "Create a support knowledge base article set for common tech problems"],
  ["cybersecuritySpecialist", "Cybersecurity Specialist", "security monitoring, risk, access, incidents, and user education", "Build a security awareness kit with incident checklist and risk notes"],
  ["roboticsTech", "Robotics Technician", "robots, sensors, maintenance, troubleshooting, safety, and automation", "Create a robot maintenance checklist and fault-diagnosis guide"],
  ["aiEngineer", "AI Engineer", "machine learning systems, data, evaluation, deployment, and responsible design", "Build an AI feature concept with dataset plan, evaluation, and risk controls"],
  ["promptEngineer", "Prompt Engineer", "AI workflows, prompt testing, evaluation, automation, and documentation", "Create a prompt library with test cases, scoring rubric, and workflow guide"],
  ["accessibilitySpecialist", "Accessibility Specialist", "inclusive design, assistive technology, WCAG, testing, and user dignity", "Audit a page or document and create an accessibility improvement report"],
  ["grantManager", "Grant Manager", "funding cycles, compliance, budgets, outcomes, reporting, and relationships", "Create a grant calendar with deliverables, budget notes, and impact metrics"],
  ["policyAnalyst", "Policy Analyst", "research, law, public impact, data, stakeholders, and recommendations", "Build a policy memo with evidence, options, tradeoffs, and implementation steps"],
  ["communityOrganizer", "Community Organizer", "advocacy, outreach, coalition building, events, and local leadership", "Create a campaign plan with stakeholders, message, timeline, and action steps"],
  ["religiousLeader", "Faith or Community Ministry Leader", "care, teaching, service, community programs, and ethical leadership", "Design a community support program with outreach, resources, and reflection"],
  ["funeralDirector", "Funeral Director", "family care, logistics, regulations, compassion, and ceremony planning", "Create a service planning checklist with communication, legal steps, and grief-sensitive care"],
  ["travelAgent", "Travel Advisor", "destinations, budgets, booking, client needs, logistics, and service", "Build a trip proposal with itinerary, costs, risks, and client preferences"],
  ["hospitalityManager", "Hospitality Manager", "guest experience, team leadership, operations, revenue, and service recovery", "Create a hotel or restaurant operations improvement plan with guest metrics"],
  ["eventProducer", "Event Producer", "program design, budgets, vendors, talent, audience flow, and production", "Build an event production bible with timeline, roles, run of show, and contingency plans"]
];

const expansiveJobTrainingCatalog = [
  "Grocery Clerk", "Bakery Assistant", "Deli Counter Associate", "Butcher Shop Assistant", "Produce Clerk",
  "Personal Shopper", "Order Picker", "Curbside Pickup Associate", "Returns Desk Associate", "Merchandising Associate",
  "Visual Merchandising Assistant", "Fitting Room Attendant", "Keyholder Trainee", "Inventory Auditor", "Receiving Clerk",
  "Forklift Trainee", "Package Handler", "Shipping and Receiving Clerk", "Fulfillment Associate", "Quality Control Inspector",
  "Manufacturing Assembler", "Machine Operator Trainee", "Print Shop Assistant", "Screen Printing Assistant", "Sign Shop Assistant",
  "Janitorial Crew Member", "School Custodian", "Laundry Attendant", "Dry Cleaning Counter Associate", "Hotel Houseperson",
  "Room Service Runner", "Banquet Server", "Catering Assistant", "Concession Stand Worker", "Food Truck Crew Member",
  "Ice Cream Shop Associate", "Juice Bar Associate", "Boba Tea Barista", "Pizza Maker", "Prep Cook",
  "Cafeteria Worker", "School Lunch Assistant", "Dishroom Lead Trainee", "Kitchen Expo", "Drive Thru Cashier",
  "Front Desk Coordinator", "Office Clerk", "File Clerk", "Records Clerk", "Scanning Clerk",
  "Billing Clerk", "Appointment Scheduler", "Insurance Verification Clerk", "Patient Transporter", "Hospital Unit Clerk",
  "Medical Records Clerk", "Veterinary Receptionist", "Kennel Attendant", "Dog Daycare Attendant", "Dog Grooming Assistant",
  "Pet Store Associate", "Stable Hand", "Farm Hand", "Garden Center Associate", "Nursery Assistant",
  "Lawn Care Technician", "Pool Cleaner", "Pest Control Trainee", "Window Cleaning Technician", "Pressure Washing Assistant",
  "Mover", "Furniture Delivery Assistant", "Appliance Delivery Assistant", "Route Driver Helper", "Bus Aide",
  "School Bus Monitor", "Taxi Dispatcher Assistant", "Valet Attendant", "Lot Porter", "Car Rental Agent",
  "Tire Technician Trainee", "Auto Detailer", "Parts Counter Associate", "Body Shop Helper", "Tow Truck Dispatcher",
  "Construction Laborer", "Painter Helper", "Drywall Helper", "Roofing Helper", "Flooring Helper",
  "Tile Helper", "Masonry Helper", "Electrical Helper", "Plumbing Helper", "HVAC Helper",
  "Solar Installation Helper", "Low Voltage Cable Helper", "Maintenance Porter", "Apartment Leasing Assistant", "Property Management Assistant",
  "Leasing Office Receptionist", "Security Desk Officer", "Loss Prevention Associate", "Crossing Guard", "Lifeguard",
  "Swim Instructor Assistant", "Recreation Center Attendant", "Youth Sports Referee", "Gym Childcare Attendant", "Personal Training Sales Associate",
  "Tutor", "After School Program Aide", "Substitute Teacher Aide", "Library Page", "Museum Attendant",
  "Gallery Attendant", "Theater Stagehand", "Lighting Assistant", "Audio Visual Assistant", "Photo Studio Assistant",
  "Video Production Assistant", "Content Creator Assistant", "Social Media Assistant", "Podcast Assistant", "Voiceover Production Assistant",
  "Print Production Assistant", "Art Studio Assistant", "Craft Workshop Assistant", "Florist Assistant", "Event Setup Crew",
  "Wedding Assistant", "Party Host", "Amusement Park Attendant", "Arcade Attendant", "Bowling Alley Attendant",
  "Movie Theater Crew", "Box Office Associate", "Usher", "Tour Guide Trainee", "Visitor Center Assistant",
  "Church Office Assistant", "Nonprofit Program Assistant", "Volunteer Coordinator Assistant", "Community Outreach Assistant", "Donation Center Attendant",
  "Thrift Store Associate", "Bank Teller Trainee", "Tax Office Assistant", "Bookkeeping Assistant", "Reception and Intake Clerk",
  "Insurance Office Assistant", "Real Estate Showing Assistant", "Open House Assistant", "Call Center Trainee", "Chat Support Agent",
  "Remote Customer Support Trainee", "Data Entry Clerk", "Spreadsheet Assistant", "Junior QA Tester", "Help Desk Trainee",
  "Computer Lab Monitor", "Phone Repair Trainee", "Electronics Sales Associate", "Print and Copy Center Associate", "Mailroom Clerk",
  "Package Room Attendant", "Concierge Assistant", "Doorman or Lobby Attendant", "Flight Passenger Service Agent", "Airport Ramp Agent Trainee",
  "Baggage Service Agent", "Travel Desk Assistant", "Hotel Night Auditor Trainee", "Reservation Agent", "Spa Front Desk Associate",
  "Salon Assistant", "Barber Shop Assistant", "Nail Salon Receptionist", "Makeup Counter Associate", "Beauty Supply Associate",
  "Esthetician Room Assistant", "Massage Clinic Front Desk", "Home Care Companion", "Senior Center Assistant", "Residential Aide",
  "Behavior Technician Trainee", "Pharmacy Clerk", "Dental Front Desk Assistant", "Optical Shop Assistant", "Lab Courier",
  "Cannabis Dispensary Associate", "Smoke Shop Associate", "Farmers Market Vendor", "Pop Up Shop Vendor", "Street Team Promoter"
];

function toOptionKey(label, prefix = "career") {
  const clean = label.replace(/[^a-zA-Z0-9 ]/g, " ").trim();
  const camel = clean
    .split(/\s+/)
    .map((word, index) => index === 0
      ? word.toLowerCase()
      : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join("");
  return camel || prefix;
}

function createCareerBlueprint(title, focus, project) {
  return {
    title,
    focus: focus || "role-specific skills, professionalism, communication, tools, safety, ethics, and career readiness",
    project: project || `Create a ${title} readiness portfolio with role research, required training, workplace vocabulary, sample work, and next-step plan`
  };
}

function createJobTrainingBlueprint(title) {
  return {
    title,
    mission: `Become reliable, safe, respectful, and valuable as a ${title} by learning the workplace system, customer or client expectations, tools, and quality standards.`,
    first: `Learn the daily duties, schedule expectations, dress code, tools, safety rules, vocabulary, common mistakes, and who approves your work as a ${title}.`,
    standout: "Arrive prepared, ask for standards, take notes, communicate early, protect safety, treat people well, and improve visibly after feedback.",
    grow: `Track punctuality, training completed, supervisor feedback, customer or coworker wins, problems solved, and next credentials for growth from ${title}.`
  };
}

expansiveCareerCatalog.forEach(([key, title, focus, project]) => {
  if (!careerBlueprints[key]) careerBlueprints[key] = createCareerBlueprint(title, focus, project);
});

expansiveJobTrainingCatalog.forEach(title => {
  const key = `job${toOptionKey(title, "training").replace(/^./, character => character.toUpperCase())}`;
  if (!jobTrainingBlueprints[key]) jobTrainingBlueprints[key] = createJobTrainingBlueprint(title);
});

const electiveCatalog = [
  {
    category: "Visual Arts and Design",
    electives: [
      "Painting portfolio",
      "Drawing and illustration studio",
      "Digital art and character design",
      "Graphic design lab",
      "UX art critique",
      "Sculpture and 3D form",
      "Ceramics and pottery",
      "Printmaking studio",
      "Mixed media and collage",
      "Watercolor techniques",
      "Fashion illustration",
      "Art history and museum studies",
      "Tattoo art and design",
      "Calligraphy and hand lettering",
      "Jewelry design",
      "Floral design",
      "Interior design moodboard"
    ]
  },
  {
    category: "Photography, Film, and Media",
    electives: [
      "Photography lab",
      "Portrait photography",
      "Product photography",
      "Documentary photography",
      "Street photography",
      "Film production",
      "Cinematography",
      "Video editing studio",
      "Documentary filmmaking",
      "Screenwriting for games and film",
      "Podcast production",
      "Streaming and content creation",
      "Social media storytelling",
      "Motion graphics",
      "Animation fundamentals",
      "Stop-motion animation"
    ]
  },
  {
    category: "Performance, Theater, and Music",
    electives: [
      "Voice acting project",
      "Drama club showcase",
      "Acting for camera",
      "Improvisation and comedy",
      "Musical theater",
      "Stagecraft and set design",
      "Fashion styling and costume design",
      "Dance and movement lab",
      "Choreography studio",
      "Public speaking studio",
      "Music production",
      "Songwriting workshop",
      "Vocal performance",
      "Instrumental performance",
      "Sound design for games",
      "DJ and live mixing",
      "Audio engineering"
    ]
  },
  {
    category: "Writing and Humanities",
    electives: [
      "Creative writing workshop",
      "Fiction writing",
      "Poetry studio",
      "Memoir and personal essay",
      "Journalism and reporting",
      "Copywriting and brand voice",
      "Technical writing",
      "Blogging and newsletter publishing",
      "Comics and graphic novel writing",
      "Mythology and world folklore",
      "Philosophy and applied ethics",
      "Literature and book discussion",
      "Cultural studies",
      "Linguistics and language science",
      "Storytelling for children",
      "Research writing and citation"
    ]
  },
  {
    category: "Technology and Digital Making",
    electives: [
      "AI tools and automation lab",
      "No-code app studio",
      "Web design fundamentals",
      "Mobile app prototyping",
      "Game design studio",
      "Game development foundations",
      "UX and UI prototyping",
      "Coding foundations",
      "Data visualization studio",
      "Cybersecurity fundamentals",
      "Robotics and maker lab",
      "Electronics and Arduino",
      "3D modeling and printing",
      "GIS and digital mapping",
      "Digital accessibility",
      "Esports management",
      "Virtual and augmented reality design"
    ]
  },
  {
    category: "Business, Money, and Leadership",
    electives: [
      "Entrepreneurship studio",
      "Personal branding and portfolio",
      "Digital marketing",
      "Social media marketing",
      "Sales and ethical persuasion",
      "Project management",
      "Event planning",
      "Financial literacy",
      "Investing fundamentals",
      "Accounting and bookkeeping",
      "Leadership and team development",
      "Negotiation and decision-making",
      "Nonprofit fundraising",
      "Grant writing",
      "Customer experience design",
      "Business law and ethics",
      "Workplace communication"
    ]
  },
  {
    category: "Home, Food, and Everyday Life",
    electives: [
      "Home economics and life skills",
      "Culinary culture project",
      "Cooking foundations",
      "Baking and pastry",
      "Meal planning and nutrition",
      "Food preservation and canning",
      "Gardening and food growing",
      "Sewing and garment repair",
      "Knitting and crochet",
      "Home organization systems",
      "Caregiving and family systems",
      "Etiquette and hospitality",
      "Sustainable living",
      "Emergency preparedness",
      "Pet care fundamentals",
      "Cleaning science and home maintenance",
      "Child development and family learning"
    ]
  },
  {
    category: "Trades and Practical Making",
    electives: [
      "Woodshop and practical making",
      "Furniture restoration",
      "Carpentry foundations",
      "Home repair fundamentals",
      "Residential electrical basics",
      "Plumbing basics",
      "Automotive maintenance",
      "Bicycle repair",
      "Welding and metalwork",
      "Leatherworking",
      "Glass art and stained glass",
      "Construction drawings and measurement",
      "Landscaping and outdoor design",
      "Small engine repair",
      "Tool safety and workshop practice",
      "Product fabrication",
      "Masonry and tile work"
    ]
  },
  {
    category: "Science, Nature, and Health",
    electives: [
      "Psychology of motivation",
      "Human anatomy and physiology",
      "Astronomy and space science",
      "Environmental science",
      "Marine biology",
      "Animal care and behavior",
      "Botany and plant science",
      "Citizen science fieldwork",
      "Forensic science",
      "Food science",
      "Climate and sustainability",
      "Public health foundations",
      "First aid and safety awareness",
      "Neuroscience of learning",
      "Sports science",
      "Ecology and outdoor observation",
      "Weather and meteorology"
    ]
  },
  {
    category: "Wellness and Personal Growth",
    electives: [
      "Wellness and habit design",
      "Mindfulness and stress management",
      "Fitness fundamentals",
      "Yoga practice",
      "Dance fitness",
      "Sleep science and routines",
      "Emotional intelligence",
      "Confidence and self-advocacy",
      "Time management",
      "Reflective journaling",
      "Healthy relationships and communication",
      "Conflict resolution",
      "Self-defense awareness",
      "Outdoor recreation",
      "Meditation and breathwork",
      "Resilience and life transitions",
      "Robert Greene Book Study: The 48 Laws of Power",
      "Robert Greene Book Study: The Art of Seduction",
      "Robert Greene Book Study: The 33 Strategies of War",
      "Robert Greene and 50 Cent Book Study: The 50th Law",
      "Robert Greene Book Study: Mastery",
      "Robert Greene Book Study: The Laws of Human Nature",
      "Robert Greene Book Study: The Daily Laws"
    ]
  },
  {
    category: "Community, Education, and Civic Life",
    electives: [
      "Community leadership practicum",
      "Tutoring and peer mentoring",
      "Instructional design",
      "Youth mentoring",
      "Debate and advocacy lab",
      "Civic engagement",
      "Law and public policy",
      "Nonprofit service",
      "Oral history interviewing",
      "Library and archive studies",
      "Museum curation",
      "Urban planning and placemaking",
      "Human rights and global citizenship",
      "Intercultural communication",
      "Volunteer and service learning",
      "Accessibility advocacy",
      "Restorative justice"
    ]
  },
  {
    category: "Culture, Travel, and Creative Hobbies",
    electives: [
      "Travel planning and cultural etiquette",
      "Genealogy and family history",
      "Anime and manga studies",
      "Game culture and criticism",
      "Board game design",
      "Chess and strategic thinking",
      "Nature journaling",
      "Birding and wildlife observation",
      "Collecting and personal curation",
      "Cosplay design",
      "Beauty and makeup artistry",
      "Hair styling fundamentals",
      "Nail art and design",
      "Fragrance and sensory studies",
      "Cultural heritage and traditions",
      "World religions and belief systems",
      "Coffee, tea, and cafe culture"
    ]
  }
];

const robertGreeneBookStudies = {
  "Robert Greene Book Study: The 48 Laws of Power": {
    book: "The 48 Laws of Power",
    outcome: "Build ethical power literacy: recognize status, incentives, reputation, dependence, persuasion, and manipulation while choosing boundaries and conduct you can defend.",
    lessons: [
      "Class 1: Map four forms of power in everyday life: position, expertise, relationships, and control of resources or information.",
      "Class 2: Observe incentives, alliances, dependence, and status signals without assuming every interaction is hostile.",
      "Class 3: Study timing, reputation, restraint, and clear communication as alternatives to needless conflict.",
      "Class 4: Identify coercion, flattery, isolation, deception, and information control, then practice protective responses.",
      "Class 5: Write a personal power code based on consent, transparency, accountability, and long-term consequences."
    ],
    deliverable: "Ethical power map, manipulation red-flag guide, and personal conduct code"
  },
  "Robert Greene Book Study: The Art of Seduction": {
    book: "The Art of Seduction",
    outcome: "Study attention, presence, storytelling, social perception, and attraction while separating healthy influence from deception, coercion, and boundary violations.",
    lessons: [
      "Class 1: Compare attraction, persuasion, charm, and manipulation, with consent and autonomy as the dividing standards.",
      "Class 2: Practice presence, curiosity, listening, and emotional attunement without performing a false identity.",
      "Class 3: Analyze how narrative, anticipation, confidence, and context shape attention in relationships and public communication.",
      "Class 4: Recognize power imbalances, pressure tactics, mixed signals, and boundary violations; prepare respectful exit responses.",
      "Class 5: Design an authentic communication experiment that uses clarity, mutual interest, and explicit respect for choice."
    ],
    deliverable: "Consent-centered influence guide and authentic communication reflection"
  },
  "Robert Greene Book Study: The 33 Strategies of War": {
    book: "The 33 Strategies of War",
    outcome: "Develop calm conflict strategy for ordinary life: regulate emotion, understand competing interests, choose battles carefully, de-escalate when possible, and plan repair.",
    lessons: [
      "Class 1: Separate the immediate emotional reaction from the decision you want to make.",
      "Class 2: Map the conflict, including people, interests, constraints, resources, uncertainty, and possible misunderstandings.",
      "Class 3: Decide whether to engage, negotiate, delay, leave, seek support, or de-escalate.",
      "Class 4: Practice indirect problem-solving through better timing, stronger preparation, alliances, and changed conditions.",
      "Class 5: Build a conflict plan with boundaries, an exit condition, a repair option, and a post-conflict review."
    ],
    deliverable: "Ethical conflict map, de-escalation script, and decision plan"
  },
  "Robert Greene and 50 Cent Book Study: The 50th Law": {
    book: "The 50th Law by Robert Greene and 50 Cent",
    outcome: "Turn fear into realistic action by facing facts, increasing self-reliance, practicing controlled exposure, and preparing for risk without pretending danger does not exist.",
    lessons: [
      "Class 1: Create a fear inventory that separates real danger, uncertainty, social discomfort, and imagined catastrophe.",
      "Class 2: Practice reality-based observation: name the facts, missing information, constraints, and choices available now.",
      "Class 3: Convert one recurring fear into a small, controlled action that produces new evidence.",
      "Class 4: Strengthen self-reliance through practical skills, adaptable plans, financial or emotional buffers, and trusted support.",
      "Class 5: Write a courageous action plan with safeguards, review points, and permission to change course."
    ],
    deliverable: "Fear inventory, controlled-action experiment, and realistic risk plan"
  },
  "Robert Greene Book Study: Mastery": {
    book: "Mastery",
    outcome: "Create a long-term mastery plan by identifying enduring interests, accepting apprenticeship, using mentors and feedback, practicing deliberately, and developing an original voice.",
    lessons: [
      "Class 1: Trace recurring interests, strengths, frustrations, and moments of deep attention to identify a possible life task.",
      "Class 2: Design an apprenticeship season focused on fundamentals, observation, service, and skill acquisition.",
      "Class 3: Choose mentors, models, communities, and feedback systems while retaining independent judgment.",
      "Class 4: Build a deliberate-practice loop for plateaus: isolate a weakness, repeat, measure, rest, and revise.",
      "Class 5: Plan the transition from imitation to experimentation, creative independence, and contribution."
    ],
    deliverable: "Personal mastery map, apprenticeship plan, and 90-day deliberate-practice system"
  },
  "Robert Greene Book Study: The Laws of Human Nature": {
    book: "The Laws of Human Nature",
    outcome: "Improve self-awareness and social perception by studying emotion, motivation, defensive behavior, empathy, group pressure, and purpose without diagnosing or reducing people to labels.",
    lessons: [
      "Class 1: Track emotional triggers, bodily signals, interpretations, and impulsive responses before choosing an action.",
      "Class 2: Practice perspective-taking that considers another person's incentives, history, stress, and unmet needs.",
      "Class 3: Compare public roles with repeated behavior over time, giving patterns more weight than first impressions.",
      "Class 4: Examine envy, self-importance, conformity, aggression, and defensiveness in yourself before assigning them to others.",
      "Class 5: Create a purpose and relationship plan built on self-regulation, empathy, boundaries, and observable evidence."
    ],
    deliverable: "Human-nature observation journal, trigger plan, and relationship boundaries guide"
  },
  "Robert Greene Book Study: The Daily Laws": {
    book: "The Daily Laws",
    outcome: "Build a sustainable reflection practice that turns themes of power, mastery, strategy, and human behavior into small daily observations and experiments.",
    lessons: [
      "Class 1: Set up a daily page with four prompts: observe, interpret, act, and review.",
      "Class 2: Choose one monthly theme and translate it into a behavior you can practice rather than a slogan.",
      "Class 3: Record social and emotional patterns with dates, context, alternative explanations, and evidence.",
      "Class 4: Use one small deliberate-practice block each day, then adjust difficulty from the result.",
      "Class 5: Review thirty entries, identify repeated lessons, and design the next 90-day reflection cycle."
    ],
    deliverable: "30-day daily-laws journal and 90-day reflection practice"
  }
};

const learningProfiles = {
  visual: {
    title: "Visual learner",
    courseAdaptation: "Courses emphasize video walkthroughs, dashboard screenshots, diagrams, color-coded notes, mind maps, picture examples, and before/after galleries.",
    retention: "Retain information by watching the short demo, labeling the picture example, redrawing the diagram from memory, and reviewing after 24 hours, 3 days, and 7 days."
  },
  audio: {
    title: "Auditory learner",
    courseAdaptation: "Courses emphasize spoken explanations, teach-back prompts, voice notes, discussion scripts, and interview-style practice.",
    retention: "Retain information by explaining it out loud, recording a 60-second summary, replaying it, and teaching it to someone else."
  },
  readwrite: {
    title: "Reading/writing learner",
    courseAdaptation: "Courses emphasize written checklists, summaries, vocabulary lists, rubrics, flashcards, and step-by-step study guides.",
    retention: "Retain information by closing the notes, writing what you remember, correcting gaps, and repeating the review later."
  },
  kinesthetic: {
    title: "Hands-on learner",
    courseAdaptation: "Courses emphasize labs, projects, roleplay, job simulations, practice shifts, build-alongs, and real-world portfolio proof.",
    retention: "Retain information by doing one small task, getting feedback, repeating it in a new situation, and logging what improved."
  },
  balanced: {
    title: "Balanced learner",
    courseAdaptation: "Courses blend video walkthroughs, picture examples, spoken reflection, written notes, and hands-on projects so you can switch modes when energy changes.",
    retention: "Retain information with mixed retrieval: look, say, write, and do, then review after 24 hours, 3 days, and 7 days."
  }
};

const accountStorageKey = "flowstate-university-accounts-v1";
const currentUserKey = "flowstate-university-current-user";
const baseStorageKey = "flowstate-university-online-college-v4";
// Consent is stored locally, so each device must acknowledge it independently.
const disclaimerKey = "flowstate-university-disclaimer-accepted-v2";
const currentPlanSchemaVersion = "career-specific-v6";
const flowStateWebAppUrl = "https://flowstate-4lr9.onrender.com/";
const flowStateWebOrigin = "https://flowstate-4lr9.onrender.com";
let currentUser = null;
let state = loadState();
let cardIndex = state.cardIndex || 0;
let revealed = false;
let advisorChat = state.advisorChat || [];
let remoteSaveTimer = null;
let pendingRemoteState = null;
let careerPathSaveStatus = "idle";
let portalScrollSaveTimer = null;
let suppressPortalScrollTracking = false;

const portalSectionIds = [
  "campus",
  "courses",
  "assignments",
  "classroom",
  "grades",
  "media-studio",
  "lesson-plan",
  "program-requirements",
  "timeline",
  "dataset",
  "writing-center",
  "japanese",
  "advisor",
  "learning",
  "workforce",
  "about-university",
  "roadmap"
];

const portalViewDefinitions = {
  dashboard: {
    label: "Dashboard",
    description: "Your academic status, current path, and fastest next steps.",
    target: "campus"
  },
  courses: {
    label: "Course Room",
    description: "Your current courses, assignments, and lesson workspace.",
    target: "courses"
  },
  program: {
    label: "Program Plan",
    description: "Your curriculum, completion requirements, and six-month schedule.",
    target: "lesson-plan"
  },
  grades: {
    label: "Grades",
    description: "A transparent record of work you have actually completed.",
    target: "grades"
  },
  media: {
    label: "Media Library",
    description: "Career-related video, audio, photography, diagrams, and presentations.",
    target: "media-studio"
  },
  language: {
    label: "Language Studio",
    description: "General language learning with a professional strand for your selected path.",
    target: "japanese"
  },
  lab: {
    label: "Practice Lab",
    description: "Applied exercises, portfolio writing, and career-specific practice.",
    target: "writing-center"
  },
  guidance: {
    label: "Advisor & Learning",
    description: "Career discovery, study-plan choices, and learning-profile support.",
    target: "advisor"
  },
  workforce: {
    label: "Job Training",
    description: "Practical training for entry-level, skilled, service, and support roles.",
    target: "workforce"
  },
  career: {
    label: "Career Center",
    description: "Portfolio, resume, interview, and application readiness for your chosen career.",
    target: "roadmap"
  },
  about: {
    label: "About University",
    description: "The mission, leadership, standards, and independent standing of the university.",
    target: "about-university"
  }
};

const portalTargetViews = {
  campus: "dashboard",
  courses: "courses",
  course: "courses",
  assignments: "courses",
  classroom: "courses",
  "lesson-plan": "program",
  "program-requirements": "program",
  timeline: "program",
  grades: "grades",
  "media-studio": "media",
  dataset: "lab",
  "writing-center": "lab",
  japanese: "language",
  advisor: "guidance",
  learning: "guidance",
  workforce: "workforce",
  roadmap: "career",
  "about-university": "about"
};

function loadState() {
  const fallback = {
    tasks: defaultTasks,
    knownCards: 0,
    cardIndex: 0,
    advisorChat: [],
    learningProfile: "",
    learningAnswers: {},
    activeCareer: "",
    selectedCareer: "",
    selectedLanguage: "None",
    selectedElective: "None",
    selectedElectives: [],
    selectedPassions: [],
    selectedWorkStyle: defaultWorkStyleDetails.primary,
    selectedWorkStyleDetails: { ...defaultWorkStyleDetails },
    selectedAdvisorInquiry: "career-discovery",
    advisorCaseNumber: 1,
    selectedJobTraining: "",
    customJobTrainingTitle: "",
    learningMode: "",
    careerPathSavedAt: "",
    activePortalView: "dashboard",
    currentLessonCourse: "",
    currentLessonTitle: "",
    startedLessons: {},
    lessonChecks: {},
    lastPortalSection: "campus",
    portalSectionOffset: 0,
    portalScrollY: 0,
    planSchemaVersion: currentPlanSchemaVersion,
    taskCareerKey: "",
    careerSwitchHistory: [],
    flowstateConnectionId: "",
    flowstateLinkSharedAt: "",
    flowstateConnectedAt: ""
  };
  if (!currentUser) return fallback;

  try {
    return normalizeSavedState({ ...fallback, ...JSON.parse(localStorage.getItem(getUserStorageKey()) || "{}") });
  } catch {
    return fallback;
  }
}

function normalizeSavedState(savedState) {
  const normalized = { ...savedState };
  if (!portalViewDefinitions[normalized.activePortalView]) normalized.activePortalView = "dashboard";
  if (!Array.isArray(normalized.selectedElectives)) {
    normalized.selectedElectives = normalized.selectedElective && normalized.selectedElective !== "None"
      ? [normalized.selectedElective]
      : [];
  }
  if (!Array.isArray(normalized.selectedPassions)) normalized.selectedPassions = [];
  if (!normalized.startedLessons || typeof normalized.startedLessons !== "object" || Array.isArray(normalized.startedLessons)) {
    normalized.startedLessons = {};
  }
  if (!normalized.lessonChecks || typeof normalized.lessonChecks !== "object" || Array.isArray(normalized.lessonChecks)) {
    normalized.lessonChecks = {};
  }
  if (typeof normalized.currentLessonCourse !== "string") normalized.currentLessonCourse = "";
  if (typeof normalized.currentLessonTitle !== "string") normalized.currentLessonTitle = "";
  if (!["", "tailored", "adaptive"].includes(normalized.learningMode)) normalized.learningMode = "";
  normalized.selectedWorkStyleDetails = {
    ...defaultWorkStyleDetails,
    ...(normalized.selectedWorkStyleDetails || {}),
    primary: normalized.selectedWorkStyle || normalized.selectedWorkStyleDetails?.primary || defaultWorkStyleDetails.primary,
    values: Array.isArray(normalized.selectedWorkStyleDetails?.values)
      ? normalized.selectedWorkStyleDetails.values
      : []
  };
  if (normalized.planSchemaVersion !== currentPlanSchemaVersion) {
    normalized.taskCareerKey = "";
    normalized.planSchemaVersion = currentPlanSchemaVersion;
    if (normalized.selectedLanguage === "Japanese") normalized.selectedLanguage = "None";
    if (normalized.selectedElective === "Painting portfolio") {
      normalized.selectedElective = "None";
      if (normalized.selectedElectives.length === 1 && normalized.selectedElectives[0] === "Painting portfolio") {
        normalized.selectedElectives = [];
      }
    }
  }
  return normalized;
}

function getUserStorageKey(email = currentUser?.email) {
  return `${baseStorageKey}:${String(email || "preview").toLowerCase()}`;
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem(accountStorageKey) || "{}");
  } catch {
    return {};
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
}

function getPortalStateSnapshot() {
  return {
    ...state,
    planSchemaVersion: currentPlanSchemaVersion,
    cardIndex,
    advisorChat
  };
}

function getPortalViewForTarget(targetId) {
  return portalTargetViews[targetId] || "dashboard";
}

function isPortalViewAvailable(viewId) {
  const link = document.querySelector(`a[data-portal-view="${viewId}"]`);
  return Boolean(link && !link.classList.contains("hidden"));
}

function syncPortalViewAvailability() {
  const mobileNavigation = document.querySelector("#mobilePortalNavigation");
  if (!mobileNavigation) return;
  [...mobileNavigation.options].forEach(option => {
    option.disabled = option.value !== "dashboard" && !isPortalViewAvailable(option.value);
  });
}

function showPortalView(
  requestedView = "dashboard",
  { scrollToTop = false, saveSelection = true } = {}
) {
  const requestedDefinition = portalViewDefinitions[requestedView];
  const viewId = requestedDefinition && isPortalViewAvailable(requestedView)
    ? requestedView
    : "dashboard";
  const definition = portalViewDefinitions[viewId];

  document.querySelectorAll("[data-portal-view-panel]").forEach(panel => {
    panel.classList.toggle("portal-view-hidden", panel.dataset.portalViewPanel !== viewId);
  });

  document.querySelectorAll("a[data-portal-view]").forEach(link => {
    const active = link.dataset.portalView === viewId;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  const mobileNavigation = document.querySelector("#mobilePortalNavigation");
  if (mobileNavigation) mobileNavigation.value = viewId;
  document.querySelector("#portalViewBreadcrumb").textContent = definition.label;
  document.querySelector("#portalViewTitle").textContent = definition.label;
  document.querySelector("#portalViewDescription").textContent = definition.description;
  document.querySelector("#portalDashboardButton").classList.toggle("hidden", viewId === "dashboard");

  state.activePortalView = viewId;
  if (saveSelection) saveState();
  if (scrollToTop) {
    requestAnimationFrame(() => {
      document.querySelector("#portalViewToolbar")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
  return viewId;
}

function openPortalTarget(targetId, { behavior = "smooth", saveSelection = true } = {}) {
  const viewId = getPortalViewForTarget(targetId);
  showPortalView(viewId, { saveSelection });
  requestAnimationFrame(() => {
    const target = document.querySelector(`#${targetId}`)
      || document.querySelector(`#${portalViewDefinitions[viewId].target}`);
    target?.scrollIntoView({ behavior, block: "start" });
  });
}

function getCurrentPortalSection() {
  const sections = portalSectionIds
    .map(id => document.querySelector(`#${id}`))
    .filter(element => element && element.offsetParent !== null);
  if (!sections.length) return null;

  const marker = 170;
  return sections.reduce((best, section) => {
    const top = section.getBoundingClientRect().top;
    const score = top <= marker ? marker - top : 10_000 + top - marker;
    return !best || score < best.score ? { section, score } : best;
  }, null)?.section || sections[0];
}

function capturePortalPosition() {
  if (
    !currentUser
    || document.querySelector("#portalApp").classList.contains("hidden")
  ) {
    return false;
  }

  const section = getCurrentPortalSection();
  const sectionTop = section
    ? window.scrollY + section.getBoundingClientRect().top
    : window.scrollY;
  state.lastPortalSection = section?.id || state.lastPortalSection || "campus";
  state.portalSectionOffset = section
    ? Math.round(window.scrollY - sectionTop)
    : 0;
  state.portalScrollY = Math.max(0, Math.round(window.scrollY));
  saveState();
  return true;
}

function captureViewportAnchor(element = document.activeElement) {
  if (
    !element
    || !element.isConnected
    || document.querySelector("#portalApp").classList.contains("hidden")
  ) {
    return null;
  }
  return { element, top: element.getBoundingClientRect().top };
}

function restoreViewportAnchor(anchor) {
  if (!anchor?.element?.isConnected) return;
  requestAnimationFrame(() => {
    const shift = anchor.element.getBoundingClientRect().top - anchor.top;
    if (Math.abs(shift) > 1) {
      window.scrollBy({ top: shift, behavior: "auto" });
    }
  });
}

function restoreSavedPortalPosition(fallbackTarget = "campus") {
  const sectionId = portalSectionIds.includes(state.lastPortalSection)
    ? state.lastPortalSection
    : fallbackTarget;
  const savedView = portalViewDefinitions[state.activePortalView]
    ? state.activePortalView
    : getPortalViewForTarget(sectionId);
  showPortalView(savedView, { saveSelection: false });
  const resolvedSectionId = getPortalViewForTarget(sectionId) === savedView
    ? sectionId
    : portalViewDefinitions[savedView].target;
  const savedSection = document.querySelector(`#${resolvedSectionId}`);
  const section = savedSection?.offsetParent !== null
    ? savedSection
    : document.querySelector(`#${portalViewDefinitions[savedView].target}`);
  const savedOffset = Number(state.portalSectionOffset);
  const fallbackScroll = Number(state.portalScrollY);
  const sectionTop = section
    ? window.scrollY + section.getBoundingClientRect().top
    : 0;
  const targetTop = section
    ? sectionTop + (Number.isFinite(savedOffset) ? savedOffset : 0)
    : (Number.isFinite(fallbackScroll) ? fallbackScroll : 0);

  suppressPortalScrollTracking = true;
  requestAnimationFrame(() => {
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
    requestAnimationFrame(() => {
      suppressPortalScrollTracking = false;
    });
  });
}

function saveState() {
  if (!currentUser) return;
  const snapshot = getPortalStateSnapshot();
  localStorage.setItem(getUserStorageKey(), JSON.stringify(snapshot));
  pendingRemoteState = snapshot;
  window.clearTimeout(remoteSaveTimer);
  remoteSaveTimer = window.setTimeout(flushRemoteState, 350);
}

async function flushRemoteState() {
  window.clearTimeout(remoteSaveTimer);
  remoteSaveTimer = null;
  if (!currentUser || !pendingRemoteState) return true;
  const snapshot = pendingRemoteState;
  pendingRemoteState = null;

  try {
    const response = await fetch("/api/portal-state", {
      method: "PUT",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ portalState: snapshot }),
      keepalive: true
    });
    if (response.ok) {
      if (["saving", "retrying"].includes(careerPathSaveStatus)) {
        careerPathSaveStatus = "saved";
        renderCareerSwitchPanel();
      }
      return true;
    }
    if (response.status !== 401) {
      pendingRemoteState = snapshot;
      if (careerPathSaveStatus === "saving") careerPathSaveStatus = "retrying";
      remoteSaveTimer = window.setTimeout(flushRemoteState, 2500);
    }
    return false;
  } catch {
    pendingRemoteState = snapshot;
    if (careerPathSaveStatus === "saving") careerPathSaveStatus = "retrying";
    remoteSaveTimer = window.setTimeout(flushRemoteState, 2500);
    return false;
  }
}

function removeLegacyAccount(email) {
  const accounts = getAccounts();
  if (!accounts[email]) return;
  delete accounts[email];
  saveAccounts(accounts);
}

function getLegacyCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(currentUserKey) || "null");
  } catch {
    return null;
  }
}

function getLegacyPortalState(email) {
  try {
    return JSON.parse(localStorage.getItem(getUserStorageKey(email)) || "{}");
  } catch {
    return {};
  }
}

async function readAccountResponse(response) {
  const payload = await response.json().catch(() => ({}));
  return { response, payload };
}

async function requestAccount(path, body) {
  return readAccountResponse(await fetch(path, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }));
}

function setAuthPending(isPending) {
  document.querySelectorAll("#authPanel button").forEach(button => {
    button.disabled = isPending;
  });
}

function applyAuthenticatedAccount(payload, targetId = "campus") {
  currentUser = {
    email: payload.user.email,
    name: payload.user.name || payload.user.email.split("@")[0]
  };
  localStorage.setItem(currentUserKey, JSON.stringify(currentUser));
  if (payload.portalState && typeof payload.portalState === "object") {
    localStorage.setItem(getUserStorageKey(), JSON.stringify(payload.portalState));
  }
  removeLegacyAccount(currentUser.email);
  state = loadState();
  cardIndex = state.cardIndex || 0;
  advisorChat = state.advisorChat || [];
  careerPathSaveStatus = state.activeCareer ? "saved" : "idle";
  applyStateToSelections();
  ensureLatestSavedPlan();
  renderPortal();
  const pendingTarget = sessionStorage.getItem("flowstate-university-login-target") || targetId;
  sessionStorage.removeItem("flowstate-university-login-target");
  if (state.activeCareer) {
    showPortal(pendingTarget);
  } else {
    showPathIntro(pendingTarget);
  }
  setAuthMessage("Your student account and portal are saved.");
}

async function initializeAccountSession() {
  showPreview();
  setAuthMessage("Checking for your saved student account...");

  try {
    const session = await readAccountResponse(await fetch("/api/auth/session", {
      credentials: "same-origin"
    }));
    if (session.response.ok) {
      applyAuthenticatedAccount(session.payload);
      return;
    }

    const legacyUser = getLegacyCurrentUser();
    const legacyAccount = legacyUser?.email
      ? getAccounts()[String(legacyUser.email).toLowerCase()]
      : null;
    if (legacyAccount?.password) {
      const legacyEmail = String(legacyAccount.email || legacyUser.email).toLowerCase();
      let migrated = await requestAccount("/api/auth/login", {
        email: legacyEmail,
        password: legacyAccount.password
      });
      if (!migrated.response.ok && migrated.response.status === 401) {
        migrated = await requestAccount("/api/auth/register", {
          email: legacyEmail,
          password: legacyAccount.password,
          name: legacyAccount.name || legacyUser.name,
          portalState: getLegacyPortalState(legacyEmail),
          legacyMigration: true
        });
      }
      if (migrated.response.ok) {
        applyAuthenticatedAccount(migrated.payload);
        return;
      }
      if (migrated.payload.accountDeleted) {
        removeLegacyAccount(legacyEmail);
        localStorage.removeItem(getUserStorageKey(legacyEmail));
        localStorage.removeItem(currentUserKey);
        setAuthMessage("That older account was deleted. You may create a new account whenever you are ready.");
        return;
      }
    }

    localStorage.removeItem(currentUserKey);
    setAuthMessage("Preview is open. Sign in to return to your saved student portal.");
  } catch {
    setAuthMessage("Account service is temporarily unavailable. Your local portal copy has not been removed.");
  }
}

function ensureLatestSavedPlan() {
  if (state.planSchemaVersion !== currentPlanSchemaVersion) {
    state.planSchemaVersion = currentPlanSchemaVersion;
    state.taskCareerKey = "";
  }
  const selectedKey = getSelectedCareerKeyFromState();
  if (selectedKey && selectedKey !== state.activeCareer) {
    state.activeCareer = selectedKey;
    state.taskCareerKey = "";
  }
  syncTasksToActiveCareer();
}

const catalogCollator = new Intl.Collator("en", {
  sensitivity: "base",
  numeric: true
});

function compareCatalogLabels(first, second) {
  return catalogCollator.compare(first, second);
}

function createCatalogOption({ value, label }) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
}

function replaceCatalogOptions(select, options, { leading = [], trailing = [] } = {}) {
  const selectedValue = select.value;
  const sortedOptions = [...options].sort((first, second) => compareCatalogLabels(first.label, second.label));
  select.replaceChildren(
    ...leading.map(createCatalogOption),
    ...sortedOptions.map(createCatalogOption),
    ...trailing.map(createCatalogOption)
  );

  if (Array.from(select.options).some(option => option.value === selectedValue)) {
    select.value = selectedValue;
  }
}

function sortDatalistOptions(id) {
  const datalist = document.querySelector(`#${id}`);
  if (!datalist) return;
  const sortedOptions = Array.from(datalist.options)
    .sort((first, second) => compareCatalogLabels(first.value, second.value));
  datalist.replaceChildren(...sortedOptions);
}

function populateExpandedPathOptions() {
  const careerSelect = document.querySelector("#careerGoal");
  const jobSelect = document.querySelector("#jobTrainingTrack");
  const languageSelect = document.querySelector("#languageTrack");

  replaceCatalogOptions(
    careerSelect,
    Object.entries(careerBlueprints)
      .map(([value, career]) => ({ value, label: career.title })),
    {
      leading: [{ value: "", label: "Undecided - help me explore first" }],
      trailing: [{ value: "custom", label: "Any career - type your own below" }]
    }
  );

  replaceCatalogOptions(
    jobSelect,
    Object.entries(jobTrainingBlueprints)
      .map(([value, job]) => ({ value, label: job.title })),
    {
      leading: [{ value: "", label: "No job training selected" }],
      trailing: [{ value: "customJob", label: "Any job - type your own below" }]
    }
  );

  replaceCatalogOptions(
    languageSelect,
    [...languageSelect.options]
      .filter(option => option.value !== "None")
      .map(option => ({ value: option.value, label: option.textContent })),
    { leading: [{ value: "None", label: "No language program selected" }] }
  );

  sortDatalistOptions("careerExamples");
  sortDatalistOptions("jobExamples");
}

function isChurnRisk(player) {
  return player.lastLogin <= "2026-07-13";
}

function setAuthMessage(message) {
  document.querySelector("#authMessage").textContent = message;
}

function setPasswordVisibility(toggleId, inputId, visible) {
  const toggle = document.querySelector(`#${toggleId}`);
  const input = document.querySelector(`#${inputId}`);
  if (!toggle || !input) return;
  toggle.checked = visible;
  input.type = visible ? "text" : "password";
}

function connectPasswordVisibility(toggleId, inputId) {
  const toggle = document.querySelector(`#${toggleId}`);
  if (!toggle) return;
  toggle.addEventListener("change", () => {
    setPasswordVisibility(toggleId, inputId, toggle.checked);
  });
}

function showPreview() {
  document.querySelector("#previewShell").classList.remove("hidden");
  document.querySelector("#pathIntroShell").classList.add("hidden");
  document.querySelector("#portalApp").classList.add("hidden");
}

function showPathIntro(targetId = "campus") {
  const context = getActiveCareerPlanContext();
  const displayName = currentUser?.name || currentUser?.email || "Student";
  const careerLabel = context.career?.title || "Not selected";
  const languageLabel = context.language || "Not selected";
  const electiveLabel = context.electives.length ? formatSelectionList(context.electives) : "Not selected";
  const hasProgram = hasAcademicProgram(context);
  const targetLabels = {
    advisor: "Continue to career advising",
    workforce: "Continue to job training"
  };

  document.querySelector("#previewShell").classList.add("hidden");
  document.querySelector("#portalApp").classList.add("hidden");
  document.querySelector("#pathIntroShell").classList.remove("hidden");
  document.querySelector(".path-intro-choices").classList.remove("hidden");
  document.querySelector(".path-intro-status").classList.remove("hidden");
  document.querySelector(".path-intro-footer").classList.remove("hidden");
  document.querySelector("#enrollmentBuilder").classList.add("hidden");
  document.querySelector("#introStudentName").textContent =
    `Welcome, ${displayName}. Choose how you want to begin your University of FlowState experience.`;
  document.querySelector("#introCurrentPath").textContent = context.title;
  document.querySelector("#introCurrentPathSummary").textContent = hasProgram
    ? `Your saved choices are ready. Continue this program or revise any part before entering the academic portal.`
    : "No academic path has been selected yet. Explore freely or choose the starting point that feels most useful.";
  document.querySelector("#introCareerStatus").textContent = careerLabel;
  document.querySelector("#introLanguageStatus").textContent = languageLabel;
  document.querySelector("#introElectiveStatus").textContent = electiveLabel;
  renderFlowStateConnectionStatus();

  const continueButton = document.querySelector("#introContinue");
  continueButton.dataset.target = targetId;
  continueButton.textContent = targetLabels[targetId]
    || (hasProgram ? `Continue ${context.title}` : "Continue to my portal");
  continueButton.classList.toggle("hidden", !hasProgram && targetId === "campus");
  document.querySelector("#pathIntroShell").scrollTo({ top: 0, behavior: "auto" });
}

const enrollmentSteps = ["career", "job", "language", "electives", "learning"];
let enrollmentStepIndex = 0;
let finishEnrollmentAfterCurrentStep = false;

function copyEnrollmentOptions(sourceId, targetId, emptyOption) {
  const source = document.querySelector(`#${sourceId}`);
  const target = document.querySelector(`#${targetId}`);
  if (!source || !target) return;
  target.replaceChildren(
    ...(emptyOption ? [new Option(emptyOption.label, emptyOption.value)] : []),
    ...[...source.options].filter(option => option.value !== emptyOption?.value).map(option => new Option(option.textContent, option.value))
  );
}

function renderEnrollmentElectives(query = "") {
  const container = document.querySelector("#enrollmentElectiveChoices");
  const selected = new Set(normalizeElectiveSelections());
  const needle = query.trim().toLowerCase();
  const groups = electiveCatalog
    .map(group => ({
      category: group.category,
      electives: group.electives
        .filter(elective => elective.toLowerCase().includes(needle))
        .sort(compareCatalogLabels)
    }))
    .filter(group => group.electives.length)
    .sort((first, second) => compareCatalogLabels(first.category, second.category));

  container.replaceChildren(...groups.map(group => {
    const section = document.createElement("details");
    section.className = "enrollment-elective-category";
    section.open = Boolean(needle) || group.electives.some(elective => selected.has(elective));
    const heading = document.createElement("summary");
    heading.innerHTML = `<span>${escapeHTML(group.category)}</span><small>${group.electives.length} options</small>`;
    const choices = document.createElement("div");
    choices.className = "enrollment-elective-category-choices";
    group.electives.forEach(elective => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = elective;
      input.checked = selected.has(elective);
      input.dataset.enrollmentElective = "true";
      label.append(input, document.createTextNode(elective));
      choices.append(label);
    });
    section.append(heading, choices);
    return section;
  }));
}

function syncEnrollmentChoicesToPlan() {
  const career = document.querySelector("#enrollmentCareer");
  const job = document.querySelector("#enrollmentJob");
  const language = document.querySelector("#enrollmentLanguage");
  const careerGoal = document.querySelector("#careerGoal");
  const jobTraining = document.querySelector("#jobTrainingTrack");
  const languageTrack = document.querySelector("#languageTrack");
  if (career?.value === "custom" && !document.querySelector("#enrollmentCustomCareer").value.trim()) {
    document.querySelector("#enrollmentCustomCareer").focus();
    return false;
  }
  if (career && careerGoal) careerGoal.value = career.value;
  if (career?.value === "custom") {
    document.querySelector("#customCareerTitle").value = document.querySelector("#enrollmentCustomCareer").value.trim();
  }
  if (job && jobTraining) jobTraining.value = job.value;
  if (language && languageTrack) languageTrack.value = language.value;
  const selected = new Set([...document.querySelectorAll("[data-enrollment-elective]:checked")].map(input => input.value));
  document.querySelectorAll('input[name="elective"]').forEach(input => {
    input.checked = selected.has(input.value);
  });
  refreshAdvisorProgram();
  if (career?.value) {
    state.activeCareer = getSelectedCareerKey();
    state.selectedCareer = career.value;
    state.careerPathSavedAt = new Date().toISOString();
  }
  renderWorkforceTraining();
  return true;
}

function renderEnrollmentStep() {
  const step = enrollmentSteps[enrollmentStepIndex];
  document.querySelectorAll("[data-enrollment-step]").forEach(panel => {
    panel.classList.toggle("hidden", panel.dataset.enrollmentStep !== step);
  });
  document.querySelector("#enrollmentProgress").textContent = `Step ${enrollmentStepIndex + 1} of ${enrollmentSteps.length}`;
  const continueButton = document.querySelector("#enrollmentContinue");
  const skipButton = document.querySelector("#enrollmentSkip");
  document.querySelector("#enrollmentBack").classList.toggle("hidden", enrollmentStepIndex === 0);
  continueButton.textContent = step === "learning" ? "Choose a learning option" : "Continue";
  continueButton.disabled = step === "learning";
  skipButton.textContent = step === "learning" ? "Use all learning styles" : "Skip for now";
}

function startEnrollment(step = "career") {
  enrollmentStepIndex = Math.max(0, enrollmentSteps.indexOf(step));
  finishEnrollmentAfterCurrentStep = step === "career" && document.querySelector("#pathIntroShell").dataset.initialCareer === "true";
  copyEnrollmentOptions("careerGoal", "enrollmentCareer");
  copyEnrollmentOptions("jobTrainingTrack", "enrollmentJob", { value: "", label: "No job training selected" });
  copyEnrollmentOptions("languageTrack", "enrollmentLanguage");
  document.querySelector("#enrollmentCareer").value = document.querySelector("#careerGoal").value;
  document.querySelector("#enrollmentCustomCareer").value = document.querySelector("#customCareerTitle").value;
  syncEnrollmentCustomCareerField();
  document.querySelector("#enrollmentJob").value = state.selectedJobTraining || "";
  document.querySelector("#enrollmentLanguage").value = document.querySelector("#languageTrack").value;
  renderEnrollmentElectives();
  document.querySelector("#pathIntroShell").classList.remove("hidden");
  document.querySelector("#portalApp").classList.add("hidden");
  document.querySelector("#previewShell").classList.add("hidden");
  document.querySelector(".path-intro-choices").classList.add("hidden");
  document.querySelector(".path-intro-status").classList.add("hidden");
  document.querySelector(".path-intro-footer").classList.add("hidden");
  document.querySelector("#enrollmentBuilder").classList.remove("hidden");
  renderEnrollmentStep();
  document.querySelector("#pathIntroShell").scrollTo({ top: 0, behavior: "auto" });
}

function finishEnrollment(mode = "adaptive") {
  if (!syncEnrollmentChoicesToPlan()) return;
  state.learningMode = mode;
  saveState();
  if (mode === "tailored") {
    showPortal("advisor");
    requestAnimationFrame(() => document.querySelector("#learning")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    return;
  }
  showPortal("campus");
}

function showPortal(
  targetId = "campus",
  { preservePosition = false, restorePosition = false } = {}
) {
  const context = getActiveCareerPlanContext();
  document.querySelector("#previewShell").classList.add("hidden");
  document.querySelector("#pathIntroShell").classList.add("hidden");
  document.querySelector("#portalApp").classList.remove("hidden");
  document.querySelector("#studentPortalTitle").textContent = `Welcome, ${currentUser.name || currentUser.email}`;
  document.querySelector("#studentPortalMeta").textContent = `Office of Online Learning | ${currentUser.email} | ${hasAcademicProgram(context) ? context.title : "Career Exploration"}`;
  const targetView = restorePosition && portalViewDefinitions[state.activePortalView]
    ? state.activePortalView
    : getPortalViewForTarget(targetId);
  showPortalView(targetView, { saveSelection: !restorePosition });
  if (preservePosition) return;
  if (restorePosition) {
    restoreSavedPortalPosition(targetId);
    return;
  }
  openPortalTarget(targetId, { saveSelection: true });
}

function enterPortal(targetId, focusId) {
  showPortal(targetId);
  if (!focusId) return;
  requestAnimationFrame(() => {
    const control = document.querySelector(`#${focusId}`);
    control?.scrollIntoView({ behavior: "smooth", block: "center" });
    control?.focus({ preventScroll: true });
  });
}

async function createAccount() {
  const email = document.querySelector("#authEmail").value.trim().toLowerCase();
  const password = document.querySelector("#authPassword").value;
  const name = document.querySelector("#authName").value.trim();
  if (!email || !password) {
    setAuthMessage("Enter an email and password to create your student portal.");
    return;
  }
  if (password.length < 6) {
    setAuthMessage("Use at least 6 characters for your password.");
    return;
  }

  setAuthPending(true);
  setAuthMessage("Creating and saving your student account...");
  try {
    const result = await requestAccount("/api/auth/register", {
      email,
      password,
      name,
      portalState: getPortalStateSnapshot()
    });
    if (result.response.status === 409) {
      const signInResult = await requestAccount("/api/auth/login", { email, password });
      if (signInResult.response.ok) {
        applyAuthenticatedAccount(signInResult.payload);
        return;
      }
      setAuthMessage("That email already has a student account. Enter its password, then select Sign in.");
      return;
    }
    if (!result.response.ok) {
      setAuthMessage(result.payload.error || "I could not create that account.");
      return;
    }
    applyAuthenticatedAccount(result.payload);
  } catch {
    setAuthMessage("Account service is temporarily unavailable. Please try again.");
  } finally {
    setAuthPending(false);
  }
}

async function signInAccount(emailInput, passwordInput, targetId = "campus") {
  const email = (emailInput || document.querySelector("#authEmail").value).trim().toLowerCase();
  const password = passwordInput || document.querySelector("#authPassword").value;
  if (!email || !password) {
    setAuthMessage("Enter your email and password.");
    return;
  }

  setAuthPending(true);
  setAuthMessage("Signing in to your saved student portal...");
  try {
    let result = await requestAccount("/api/auth/login", { email, password });
    const legacyAccount = getAccounts()[email];
    if (
      !result.response.ok
      && result.response.status === 401
      && legacyAccount?.password === password
    ) {
      result = await requestAccount("/api/auth/register", {
        email,
        password,
        name: legacyAccount.name,
        portalState: getLegacyPortalState(email),
        legacyMigration: true
      });
    }
    if (result.payload.accountDeleted) {
      removeLegacyAccount(email);
      localStorage.removeItem(getUserStorageKey(email));
      localStorage.removeItem(currentUserKey);
      setAuthMessage("That older account was deleted. Create a new account if you want to start again.");
      return;
    }
    if (!result.response.ok) {
      setAuthMessage(result.payload.error || "I could not find that email/password combination.");
      return;
    }
    applyAuthenticatedAccount(result.payload, targetId);
  } catch {
    setAuthMessage("Account service is temporarily unavailable. Please try again.");
  } finally {
    setAuthPending(false);
  }
}

async function signOut() {
  if (!capturePortalPosition()) saveState();
  await flushRemoteState();
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "same-origin"
    });
  } catch {
    // The local sign-out still completes if the network is interrupted.
  }
  currentUser = null;
  careerPathSaveStatus = "idle";
  localStorage.removeItem(currentUserKey);
  state = loadState();
  advisorChat = [];
  cardIndex = 0;
  showPreview();
}

function openDeleteAccountDialog() {
  if (!currentUser) return;
  const modal = document.querySelector("#accountDeleteModal");
  document.querySelector("#deleteAccountPassword").value = "";
  setPasswordVisibility("showDeleteAccountPassword", "deleteAccountPassword", false);
  document.querySelector("#deleteAccountMessage").textContent =
    `Confirm deletion for ${currentUser.email}.`;
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => document.querySelector("#deleteAccountPassword").focus());
}

function closeDeleteAccountDialog() {
  document.querySelector("#accountDeleteModal").classList.add("hidden");
  document.body.classList.remove("modal-open");
  document.querySelector("#deleteAccountPassword").value = "";
  setPasswordVisibility("showDeleteAccountPassword", "deleteAccountPassword", false);
  document.querySelector("#deleteAccountMessage").textContent = "";
}

function createFlowStateConnectionId() {
  if (state.flowstateConnectionId) return state.flowstateConnectionId;
  state.flowstateConnectionId = globalThis.crypto?.randomUUID?.()
    || `uoffs-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
  saveState();
  return state.flowstateConnectionId;
}

function getFlowStateStudyTask(context = getActiveCareerPlanContext()) {
  const nextTask = (state.tasks || []).find(task => !task.done);
  const nextStep = nextTask?.title || (context.career
    ? `Review the next ${context.title} lesson`
    : "Complete a career exploration reflection");
  return `Study ${context.title}: ${nextStep} for 45 minutes`;
}

function openFlowStateConnectDialog() {
  if (!currentUser) return;
  const context = getActiveCareerPlanContext();
  document.querySelector("#flowstateConnectName").textContent = currentUser.name || currentUser.email;
  document.querySelector("#flowstateConnectEmail").textContent = currentUser.email;
  document.querySelector("#flowstateConnectProgram").textContent = context.title;
  document.querySelector("#flowstateConnectTask").textContent = getFlowStateStudyTask(context);
  document.querySelector("#flowstateConnectMessage").textContent = "";
  renderFlowStateConnectionStatus();
  document.querySelector("#flowstateConnectModal").classList.remove("hidden");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => document.querySelector("#openFlowStateApp").focus());
}

function closeFlowStateConnectDialog() {
  document.querySelector("#flowstateConnectModal").classList.add("hidden");
  document.body.classList.remove("modal-open");
  document.querySelector("#flowstateConnectMessage").textContent = "";
}

function launchFlowStateConnection() {
  if (!currentUser) return;
  const context = getActiveCareerPlanContext();
  const params = new URLSearchParams();
  params.set("tab", "dashboard");
  params.set("flowstateImport", "1");
  params.set("version", "1");
  params.set("source", "university-of-flowstate");
  params.set("connectionId", createFlowStateConnectionId());
  params.set("email", currentUser.email);
  params.set("name", currentUser.name || currentUser.email.split("@")[0]);
  params.set("program", context.title);
  params.set("career", context.career?.title || "");
  params.set("language", context.language || "");
  params.set("electives", formatSelectionList(context.electives));
  params.set("studyTask", getFlowStateStudyTask(context));

  const connectedAtBeforeLaunch = state.flowstateConnectedAt;
  state.flowstateLinkSharedAt = new Date().toISOString();
  saveState();
  document.querySelector("#flowstateConnectMessage").textContent =
    "Opening FlowState in a new tab for your confirmation...";
  const flowStateUrl = new URL(flowStateWebAppUrl);
  flowStateUrl.search = params.toString();
  const flowStateWindow = window.open(flowStateUrl.toString(), "flowstate-university-import");
  if (flowStateWindow) {
    flowStateWindow.focus();
  } else {
    window.location.assign(flowStateUrl.toString());
  }
  window.setTimeout(() => {
    if (state.flowstateConnectedAt && state.flowstateConnectedAt !== connectedAtBeforeLaunch) return;
    document.querySelector("#flowstateConnectMessage").textContent =
      "Confirm the plan in FlowState. This university tab will update when the connection is complete.";
  }, 1800);
}

function renderFlowStateConnectionStatus() {
  const isConnected = Boolean(state.flowstateConnectedAt);
  document.querySelectorAll(".flowstate-import-trigger").forEach(button => {
    button.textContent = isConnected ? "Update FlowState plan" : "Import to FlowState app";
  });
  document.querySelector("#openFlowStateApp").textContent =
    isConnected ? "Review updated plan in FlowState" : "Connect and review in FlowState";
}

function handleFlowStateImportMessage(event) {
  if (event.origin !== flowStateWebOrigin) return;
  if (event.data?.type !== "flowstate-university-import-complete") return;
  if (!currentUser || event.data.connectionId !== state.flowstateConnectionId) return;

  state.flowstateConnectedAt = event.data.importedAt || new Date().toISOString();
  saveState();
  renderFlowStateConnectionStatus();
  document.querySelector("#flowstateConnectMessage").textContent =
    "Connected. Your current University of FlowState plan is now in FlowState.";
}

async function deleteCurrentAccount(event) {
  event.preventDefault();
  if (!currentUser) {
    closeDeleteAccountDialog();
    showPreview();
    return;
  }

  const email = currentUser.email;
  const password = document.querySelector("#deleteAccountPassword").value;
  const savedPortalKey = getUserStorageKey(email);
  const submitButton = document.querySelector('#deleteAccountForm button[type="submit"]');
  submitButton.disabled = true;
  document.querySelector("#deleteAccountMessage").textContent = "Deleting your student account...";

  try {
    const result = await readAccountResponse(await fetch("/api/auth/account", {
      method: "DELETE",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    }));
    if (!result.response.ok) {
      document.querySelector("#deleteAccountMessage").textContent =
        result.payload.error || "I could not delete this account.";
      document.querySelector("#deleteAccountPassword").focus();
      return;
    }
  } catch {
    document.querySelector("#deleteAccountMessage").textContent =
      "Account service is temporarily unavailable. Nothing was deleted.";
    return;
  } finally {
    submitButton.disabled = false;
  }

  removeLegacyAccount(email);
  localStorage.removeItem(savedPortalKey);
  localStorage.removeItem(currentUserKey);
  sessionStorage.removeItem("flowstate-university-login-target");
  currentUser = null;
  careerPathSaveStatus = "idle";
  state = loadState();
  advisorChat = [];
  cardIndex = 0;
  closeDeleteAccountDialog();
  document.querySelector("#authPanel").reset();
  showPreview();
  setAuthMessage("Your account and all saved portal data were permanently deleted.");
  document.querySelector("#authEmail").focus();
}

function applyStateToSelections() {
  document.querySelector("#careerGoal").value = state.selectedCareer || state.activeCareer || "";
  document.querySelector("#customCareerTitle").value = state.customCareerTitle || "";
  if (state.selectedLanguage) document.querySelector("#languageTrack").value = state.selectedLanguage;
  const selectedElectives = Array.isArray(state.selectedElectives)
    ? state.selectedElectives
    : state.selectedElective && state.selectedElective !== "None"
      ? [state.selectedElective]
      : [];
  document.querySelectorAll('input[name="elective"]').forEach(input => {
    input.checked = selectedElectives.includes(input.value);
  });
  document.querySelectorAll('input[name="passion"]').forEach(input => {
    input.checked = (state.selectedPassions || []).includes(input.value);
  });
  document.querySelector("#advisorInquiryType").value = state.selectedAdvisorInquiry || "career-discovery";
  const workStyleDetails = {
    ...defaultWorkStyleDetails,
    ...(state.selectedWorkStyleDetails || {}),
    primary: state.selectedWorkStyle || state.selectedWorkStyleDetails?.primary || defaultWorkStyleDetails.primary
  };
  const workStyleFields = {
    workStyle: workStyleDetails.primary,
    workEnvironment: workStyleDetails.environment,
    collaborationStyle: workStyleDetails.collaboration,
    paceStyle: workStyleDetails.pace,
    structureStyle: workStyleDetails.structure,
    feedbackStyle: workStyleDetails.feedback,
    energyPattern: workStyleDetails.energy
  };
  Object.entries(workStyleFields).forEach(([id, value]) => {
    const field = document.querySelector(`#${id}`);
    if (field && value) field.value = value;
  });
  document.querySelectorAll('input[name="workValue"]').forEach(input => {
    input.checked = (workStyleDetails.values || []).includes(input.value);
  });
  document.querySelector("#jobTrainingTrack").value = state.selectedJobTraining || "";
  document.querySelector("#customJobTrainingTitle").value = state.customJobTrainingTitle || "";
  Object.entries(state.learningAnswers || {}).forEach(([name, value]) => {
    const input = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (input) input.checked = true;
  });
  updateElectiveCatalogStatus();
}

function scoreTextThemes(text) {
  const lower = text.toLowerCase();
  return Object.entries(passionSignals)
    .map(([key, signal]) => {
      const score = signal.words.reduce((sum, word) => {
        const matches = lower.match(new RegExp(`\\b${word}\\b`, "g"));
        return sum + (matches ? matches.length : 0);
      }, 0);
      return { key, ...signal, score };
    })
    .sort((a, b) => b.score - a.score);
}

function renderPreviewAdvisor(answer) {
  const cleanAnswer = answer.trim();
  const scores = scoreTextThemes(cleanAnswer).filter(theme => theme.score > 0).slice(0, 3);
  const result = document.querySelector("#previewAdvisorResult");
  if (!cleanAnswer) {
    result.innerHTML = `<strong>Raini Smith | Student Guidance</strong><p>Write a little about what pulls your attention, then I will reflect possible themes.</p>`;
    return;
  }

  if (!scores.length) {
    result.innerHTML = `
      <strong>Raini Smith | Student Guidance</strong>
      <p>I need a more specific example. Try naming a moment, project, class, job, hobby, customer interaction, or creative activity that made you feel alive.</p>
    `;
    return;
  }

  const careers = [...new Set(scores.flatMap(theme => theme.careers))].slice(0, 5).join(", ");
  result.innerHTML = `
    <strong>Raini Smith | Student Guidance</strong>
    <p>I hear early signals of ${scores.map(theme => theme.label.toLowerCase()).join(", ")}. Careers worth exploring: ${careers}. Sign in to continue this conversation inside your private portal.</p>
  `;
}

function renderRows() {
  const rows = document.querySelector("#playerRows");
  rows.innerHTML = "";

  players.forEach(player => {
    const churn = isChurnRisk(player);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${player.playerId}</td>
      <td>${player.country}</td>
      <td>${player.platform}</td>
      <td>${player.sessions}</td>
      <td>${player.highestLevel}</td>
      <td>$${player.revenue.toFixed(2)}</td>
      <td>${player.lastLogin}</td>
      <td><span class="status ${churn ? "risk" : "safe"}">${churn ? "Yes" : "No"}</span></td>
    `;
    rows.appendChild(tr);
  });
}

function normalizeElectiveSelections(value = state.selectedElectives) {
  if (Array.isArray(value)) return [...new Set(value.filter(Boolean).filter(item => item !== "None"))];
  if (value && value !== "None") return [value];
  return [];
}

function renderElectiveCatalog() {
  const catalog = document.querySelector("#electiveTrack");
  if (!catalog) return;

  catalog.replaceChildren();
  [...electiveCatalog]
    .sort((first, second) => compareCatalogLabels(first.category, second.category))
    .forEach(({ category, electives }) => {
      const section = document.createElement("section");
      section.className = "elective-category";
      section.dataset.category = category.toLowerCase();
      section.dataset.userExpanded = "false";

      const heading = document.createElement("button");
      heading.type = "button";
      heading.className = "elective-category-heading";
      heading.setAttribute("aria-expanded", "true");
      const title = document.createElement("h4");
      title.textContent = category;
      const count = document.createElement("span");
      count.textContent = `${electives.length} courses`;
      heading.append(title, count);
      heading.addEventListener("click", () => {
        if (!mobileCatalogMedia.matches) return;
        const shouldExpand = section.classList.contains("elective-category-collapsed");
        section.dataset.userExpanded = String(shouldExpand);
        section.classList.toggle("elective-category-collapsed", !shouldExpand);
        heading.setAttribute("aria-expanded", String(shouldExpand));
      });

      const grid = document.createElement("div");
      grid.className = "elective-choice-grid";
      [...electives]
        .sort(compareCatalogLabels)
        .forEach(elective => {
          const label = document.createElement("label");
          label.dataset.search = `${category} ${elective}`.toLowerCase();
          const input = document.createElement("input");
          input.type = "checkbox";
          input.name = "elective";
          input.value = elective;
          label.append(input, document.createTextNode(` ${elective}`));
          if (robertGreeneBookStudies[elective]) {
            label.classList.add("book-study-elective");
            const badge = document.createElement("span");
            badge.textContent = "Book study";
            label.append(badge);
          }
          grid.append(label);
        });

      section.append(heading, grid);
      catalog.append(section);
    });

  syncElectiveCatalogDisclosure();
  const total = electiveCatalog.reduce((sum, group) => sum + group.electives.length, 0);
  document.querySelector("#electiveCatalogTotal").textContent =
    `${total} electives across ${electiveCatalog.length} subject areas`;
  updateElectiveCatalogStatus();
}

const mobileCatalogMedia = window.matchMedia("(max-width: 720px)");

function syncElectiveCatalogDisclosure() {
  document.querySelectorAll(".elective-category").forEach(section => {
    const heading = section.querySelector(".elective-category-heading");
    const shouldExpand = !mobileCatalogMedia.matches || section.dataset.userExpanded === "true";
    section.classList.toggle("elective-category-collapsed", !shouldExpand);
    heading?.setAttribute("aria-expanded", String(shouldExpand));
  });
}

function filterElectiveCatalog(searchValue = "") {
  const query = searchValue.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll(".elective-category").forEach(section => {
    let sectionMatches = 0;
    section.querySelectorAll('label[data-search]').forEach(label => {
      const matches = !query || label.dataset.search.includes(query);
      label.classList.toggle("hidden", !matches);
      if (matches) sectionMatches += 1;
    });
    section.classList.toggle("hidden", sectionMatches === 0);
    if (mobileCatalogMedia.matches) {
      const shouldExpand = query
        ? sectionMatches > 0
        : section.dataset.userExpanded === "true";
      section.classList.toggle("elective-category-collapsed", !shouldExpand);
      section.querySelector(".elective-category-heading")
        ?.setAttribute("aria-expanded", String(shouldExpand));
    }
    visibleCount += sectionMatches;
  });

  document.querySelector("#electiveEmpty").classList.toggle("hidden", visibleCount > 0);
}

function updateElectiveCatalogStatus() {
  const count = document.querySelectorAll('input[name="elective"]:checked').length;
  const output = document.querySelector("#electiveSelectedCount");
  const clearButton = document.querySelector("#clearElectives");
  if (output) output.textContent = `${count} selected`;
  if (clearButton) clearButton.disabled = count === 0;
}

function getSelectedElectivesFromForm() {
  return [...document.querySelectorAll('input[name="elective"]:checked')].map(input => input.value);
}

function formatSelectionList(items) {
  if (!items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function hasAcademicProgram(context = getActiveCareerPlanContext()) {
  return Boolean(context.career || context.language || context.electives.length);
}

function getSelectedPlanExtras() {
  const electives = normalizeElectiveSelections();
  return {
    language: state.selectedLanguage && state.selectedLanguage !== "None" ? state.selectedLanguage : "",
    electives,
    elective: formatSelectionList(electives)
  };
}

function getActiveCareerPlanContext() {
  const career = getCareerByKey(state.activeCareer);
  const { language, electives, elective } = getSelectedPlanExtras();

  if (!career) {
    const hasIndependentStudy = Boolean(language || electives.length);
    const title = language && electives.length
      ? `${language} and Independent Elective Studies`
      : language
        ? `${language} Language Studies`
        : electives.length
          ? "Independent Elective Studies"
          : "Career Exploration";
    return {
      career: null,
      title,
      focus: hasIndependentStudy
        ? "self-directed language, creative, practical, and personal-interest study selected by the student"
        : "career discovery, strengths, work environments, and practical next steps",
      project: hasIndependentStudy
        ? `Complete evidence for ${formatSelectionList(electives) || language}, reflect on growth, and build a personal study showcase`
        : "Complete advisor reflection, compare career options, and choose a study path before courses unlock",
      language,
      electives,
      elective
    };
  }

  return {
    career,
    title: career.title,
    focus: career.focus,
    project: career.project,
    language,
    electives,
    elective
  };
}

function sanitizePathLabel(label) {
  return label.replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "");
}

function getCareerLessons() {
  const context = getActiveCareerPlanContext();
  if (!context.career && !hasAcademicProgram(context)) return lessons;

  if (!context.career) {
    const electiveLine = context.electives.length
      ? `Your selected studios are ${formatSelectionList(context.electives)}. Each one has its own project and completion record.`
      : "No elective studio is selected.";
    const languageLine = context.language
      ? `${context.language} develops everyday fluency, culture, listening, speaking, and comprehension as an independent language program.`
      : "No language track is selected.";
    return {
      day1: `Lecture 1: Design your independent program. Set one clear outcome for each selected course, choose a realistic weekly rhythm, and decide what finished evidence will look like. ${electiveLine}`,
      day2: `Lecture 2: Learn by making. Study examples, practice a focused skill, collect feedback, and revise one artifact from your selected electives. ${languageLine}`,
      day3: "Lecture 3: Build your student showcase. Explain what you chose, what you practiced, what changed after feedback, and what you want to study next."
    };
  }

  const title = context.title;
  const languageLine = context.language
    ? ` Your ${context.language} track runs in two connected strands: full everyday fluency, culture, listening, speaking, and comprehension, plus vocabulary and professional scenarios for ${title}.`
    : " Your communication track focuses on clear workplace language, interview answers, and client or team explanations.";
  const electiveLine = context.elective
    ? ` The ${context.elective} elective becomes part of your portfolio instead of a separate unrelated class.`
    : " Your elective space stays open for a portfolio project that supports this career.";

  return {
    day1:
      `Lecture 1: ${title} starts with understanding the real job. Map the daily work, required tools, safety or quality standards, credentials, beginner responsibilities, and what employers or clients trust.`,
    day2:
      `Lecture 2: Build proof for ${title}. Study examples, practice one beginner task, collect feedback, and turn the result into a clear portfolio or training record.${languageLine}`,
    day3:
      `Lecture 3: Career readiness means you can explain your choices. Prepare one project story, one skills checklist, one resume bullet, and one next-step plan for ${title}.${electiveLine}`
  };
}

function getCareerTeachingProfile(context, title) {
  const text = `${title} ${context.focus || ""}`.toLowerCase();
  const makeProfile = (entails, foundation, skill, proof) => ({
    entails,
    foundation,
    skill,
    proof,
    path: [
      "Learn the work, vocabulary, tools, and non-negotiable standards.",
      "Practice one small repeatable task with a quality checklist.",
      "Complete a realistic scenario and correct mistakes with feedback.",
      "Build documented proof of your method, result, and improvement.",
      "Prepare for the next lawful credential, supervised experience, client, or employer step."
    ]
  });
  if (/data|analyst|database|business intelligence|research/.test(text)) return makeProfile(
    "turning a real question into clean evidence, an analysis, and a clear recommendation",
    "Start with the decision question. Define the measure, inspect the data source, and write down what each row and column represents before calculating anything.",
    "Clean one field at a time: remove duplicates, standardize labels, check missing values, then calculate a simple comparison. Explain the pattern in plain language before you build a chart.",
    "Save the original question, cleaned table, calculation notes, chart, finding, and recommendation so another person can follow your reasoning."
  );
  if (/nurs|medical|health|dental|therap|pharmac|laboratory|emt|paramedic|patient/.test(text)) return makeProfile(
    "safe, ethical care that follows scope of practice, accurate observation, documentation, and clear communication with patients and the care team",
    "Learn the care sequence: confirm identity and scope, observe carefully, follow hygiene and safety procedures, communicate changes, and document facts without guessing.",
    "Practice a simulated workflow in order: prepare the space, explain the step, perform only the authorized task, observe the result, report concerns, and record what happened.",
    "Competency proof includes completed skills checklists, supervised practice records when required, objective notes, and current credentials; never treat this course as a substitute for required licensure."
  );
  if (/electric|plumb|hvac|weld|carpent|construct|mechanic|machin|solar|roof|trade|wood|lineworker/.test(text)) return makeProfile(
    "reading the job requirement, selecting the right tools and materials, working safely, performing the installation or repair, and checking that it meets code or quality standards",
    "Begin with hazard control: identify energy sources, moving parts, fall risks, required protective equipment, and the stop-work condition. Then read the drawing, work order, or measurement before touching a tool.",
    "Break the task into setup, measurement, execution, inspection, and cleanup. Measure twice, use the specified material, test the result, and document any issue rather than hiding it.",
    "Build proof with tool and safety checklists, measurements, photos of permitted practice work, inspection notes, and the appropriate apprenticeship, certification, or supervised-hours record."
  );
  if (/driver|cdl|pilot|flight|dispatch|logistic|transport|rail|bus/.test(text)) return makeProfile(
    "planning and completing safe movement of people or goods through inspections, regulations, route decisions, communication, and accurate records",
    "Learn the safety chain first: inspect the vehicle or system, understand the route and conditions, confirm required documentation, communicate risks early, and never operate outside legal limits.",
    "Use a scenario: complete a pre-operation check, choose a route with a backup plan, identify a hazard, communicate the response, and record the handoff or incident accurately.",
    "Competency proof includes inspection practice, route or dispatch plans, safety logs, supervisor signoffs, and the legally required license or certification where applicable."
  );
  if (/tattoo|art|design|photo|film|music|voice|fashion|animation|creative/.test(text)) return makeProfile(
    "turning a creative brief into intentional work through research, technique, revision, client or audience communication, and a professional portfolio",
    "Start with the brief: audience, purpose, constraints, references, budget or time, and ethical or safety boundaries. A strong creative choice can be explained, not only liked.",
    "Make a rough version first. Test composition, technique, timing, or style against the brief; collect feedback on one specific goal; then revise rather than restarting blindly.",
    "Keep sketches, drafts, process notes, approved final work, and a short explanation of the creative choices. Regulated services also require the relevant sanitation, licensing, or client-consent standards."
  );
  if (/software|developer|cyber|network|it support|web|ai |programming/.test(text)) return makeProfile(
    "turning a user or system need into a reliable, secure solution by planning, building, testing, documenting, and improving it",
    "Begin with the requirement and the user. Define what the system must do, what data it handles, what could fail, and how a user will know the feature works.",
    "Build the smallest working version, test normal and error cases, read the output carefully, fix one defect at a time, and document the decision behind the change.",
    "Proof includes a working project, readable documentation, test evidence, version history, and an explanation of security, accessibility, or reliability decisions."
  );
  if (/sales|market|business|finance|account|real estate|human resources|manager|entrepreneur/.test(text)) return makeProfile(
    "understanding a customer or organizational need, making an ethical recommendation, managing the numbers and process, and communicating the result clearly",
    "Learn the problem before proposing a solution. Identify the customer, goal, constraints, relevant records, and decision rule; accuracy and ethics matter as much as persuasion.",
    "Practice a complete scenario: ask focused questions, compare options, explain tradeoffs plainly, document the decision, and follow up on the outcome rather than assuming success.",
    "Build proof with proposals, reconciled examples, customer or stakeholder communication, process metrics, and any required license, compliance, or supervised training record."
  );
  return makeProfile(
    `performing the core work of ${title} with sound judgment, clear communication, safe or ethical standards, and visible evidence of quality`,
    "Start by defining the result the work is meant to create, the people it affects, the tools or information it needs, and the standard used to judge it.",
    "Practice one small task from beginning to end: prepare, perform, check the quality, explain the decision, and improve one part after feedback.",
    "Build proof with a finished example, process notes, a quality check, and a clear reflection on what you would do next."
  );
}

function getLessonDetails(key = "day1", courseTitle = state.currentLessonTitle || getActiveCareerPlanContext().title || "Career exploration") {
  const context = getActiveCareerPlanContext();
  const title = courseTitle || "Career exploration";
  const careerFocus = context.focus || "the selected subject's core skills, standards, and real-world application";
  const project = context.project || "a finished practice artifact that shows what you can do";
  const profile = getCareerTeachingProfile(context, title);
  const lessonsByKey = {
    day1: {
      label: "Lesson 1: Foundations",
      objective: `Describe the real work, standards, and beginner preparation needed for ${title}.`,
      instruction: `Start with the work itself. ${getCareerLessons().day1} In this course, focus on ${careerFocus}. Do not memorize a job title; identify the tools, responsibilities, people served, safety or quality standards, and training steps that make someone trustworthy in this path.`,
      teaching: [
        `What ${title} entails: ${profile.entails}. This is the actual scope of the role or course, not just a title to memorize.`,
        profile.foundation,
        `A career is not a label; it is a repeated set of decisions. In ${title}, you first learn to separate a task from its standard. The task is what must be done. The standard is what makes the result safe, accurate, useful, and trustworthy.`,
        `When you study ${careerFocus}, look for the people affected by the work, the tools or systems involved, and the consequences of a careless decision. This is how you begin to think like a professional instead of simply collecting vocabulary.`,
        "Before attempting advanced work, find the beginner boundary: what can be practiced independently, what requires supervision or a credential, and what evidence shows you followed the expected standard."
      ],
      example: `Worked example: imagine you are preparing ${project}. ${profile.foundation} Do not begin by trying to make the final project perfect. First write the job outcome, list the required steps, identify one safety or quality check, and decide what proof would show that the work meets the standard.`,
      path: profile.path,
      practice: ["List three real responsibilities in this path.", "Name one standard that protects people, quality, or safety.", "Write one question to research before you take your next step."],
      check: `What would a beginner in ${title} need to understand before being trusted with real work?`
    },
    day2: {
      label: "Lesson 2: Guided Practice",
      objective: `Practice one beginner skill for ${title} and create evidence of what you learned.`,
      instruction: `Skill grows through an honest cycle: study an example, try a small version, compare your work to a standard, collect feedback, and revise. ${getCareerLessons().day2} Your evidence should move toward ${project}. Keep the first version; it shows your growth.`,
      teaching: [
        profile.skill,
        "Good practice is deliberately smaller than the final goal. Choose one skill you can repeat in a short session, because repetition gives you something specific to compare and improve.",
        "Use an example as a reference, not as something to copy blindly. Ask what choice the person made, why that choice fits the standard, and how you can test your own version against the same standard.",
        "Feedback becomes useful when you turn it into one change. Instead of saying 'I need to improve,' name the exact part to revise, make the revision, and compare the before and after versions."
      ],
      example: `Worked example: for ${project}, make a first small draft. ${profile.skill} Compare it against one requirement from ${careerFocus}. Ask one person or rubric for feedback, revise one part, then write one sentence describing exactly what changed and why.`,
      path: profile.path,
      practice: ["Choose one small task from the next activity.", "Set a 25-minute practice block and work without multitasking.", "Write what worked, what confused you, and one revision you will make."],
      check: "What visible evidence could prove that you practiced this skill instead of only reading about it?"
    },
    day3: {
      label: "Lesson 3: Apply and Explain",
      objective: `Connect your practice to a portfolio, training record, or career story for ${title}.`,
      instruction: `Employers, clients, and programs need clear proof. ${getCareerLessons().day3} Turn your work into a short explanation of the problem, your method, the result, and what you would improve next time.`,
      teaching: [
        profile.proof,
        "A finished artifact alone does not explain your ability. A portfolio record tells the story behind it: the goal, the method you used, the decision you made, and the result you achieved.",
        "Use plain evidence. A photo, a draft, a checklist, a measurement, a short video, or a reflection can show your process. The strongest proof lets another person understand your judgment without guessing.",
        "Reflection is not an apology for imperfect work. It is professional analysis: identify what worked, what did not, and the next action you would take with more time, training, or feedback."
      ],
      example: `Worked example: after completing part of ${project}, write four sentences: the goal, the method you used, the result, and one improvement. ${profile.proof} That short explanation turns practice into evidence for ${title}.`,
      path: profile.path,
      practice: ["Collect one piece of work, a photo, a note, or a practice record.", "Write a two-sentence explanation of your method.", "Name one next credential, project, or feedback source that would deepen this work."],
      check: `How would you explain the value of your ${title} work to someone who has never seen it before?`
    }
  };
  return lessonsByKey[key] || lessonsByKey.day1;
}

function getLessonAssessment(key, courseTitle) {
  const context = getActiveCareerPlanContext();
  const careerEntails = getCareerTeachingProfile(context, courseTitle).entails;
  const prompts = {
    day1: {
      question: `According to this lesson, what does ${courseTitle} entail?`,
      options: [`Work centered on ${careerEntails}`, "Only choosing a job title without learning the work", "Skipping standards and preparation to create a portfolio immediately"],
      correct: 0,
      explanation: `Correct. This lesson explained that ${courseTitle} entails ${careerEntails}.`
    },
    day2: {
      question: "What is the strongest way to build a new skill?",
      options: ["Study an example, practice, get feedback, and revise", "Read once and move on", "Wait until you feel completely confident before trying"],
      correct: 0,
      explanation: "Practice becomes skill when you test your work against a standard, use feedback, and revise."
    },
    day3: {
      question: `What makes ${courseTitle} work useful in a portfolio or training record?`,
      options: ["Explaining the problem, your method, the result, and what you improved", "Saving only a final image without context", "Saying you completed the work without evidence"],
      correct: 0,
      explanation: "Clear evidence plus reflection lets another person understand what you can do and how you think."
    }
  };
  return prompts[key] || prompts.day1;
}

function buildLessonMarkup(key, courseTitle, courseCode = "classroom", { compact = false } = {}) {
  const lesson = getLessonDetails(key, courseTitle);
  const assessment = getLessonAssessment(key, courseTitle);
  const checkKey = `${courseCode}:${key}`;
  const passed = Boolean(state.lessonChecks?.[checkKey]?.passed);
  const inputName = `lesson-check-${sanitizePathLabel(checkKey)}`;
  return `
    <div class="lesson-content${compact ? " lesson-content-compact" : ""}">
      <span class="lesson-now-studying">${escapeHTML(lesson.label)} | ${escapeHTML(courseTitle)}</span>
      <h4>${escapeHTML(lesson.objective)}</h4>
      <section><strong>Lesson</strong><p>${escapeHTML(lesson.instruction)}</p>${lesson.teaching.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}</section>
      <section class="lesson-worked-example"><strong>Worked example</strong><p>${escapeHTML(lesson.example)}</p></section>
      <section class="lesson-path"><strong>Your step-by-step path</strong><ol>${lesson.path.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol></section>
      <section><strong>Guided practice</strong><ol>${lesson.practice.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol></section>
      <section class="lesson-knowledge-check"><strong>Knowledge check</strong><p>${escapeHTML(lesson.check)}</p></section>
      <form class="lesson-assessment" data-lesson-assessment data-check-key="${escapeHTML(checkKey)}" data-correct-answer="${assessment.correct}">
        <strong>Quick test</strong>
        <p>${escapeHTML(assessment.question)}</p>
        ${assessment.options.map((option, index) => `<label><input type="radio" name="${inputName}" value="${index}" ${passed && index === assessment.correct ? "checked" : ""} /> ${escapeHTML(option)}</label>`).join("")}
        <button type="submit">${passed ? "Passed - review answer" : "Submit test"}</button>
        <small class="lesson-assessment-feedback">${passed ? escapeHTML(assessment.explanation) : "Answer after completing the lecture and guided practice."}</small>
      </form>
    </div>
  `;
}

function renderLesson(key = "day1") {
  const lessonBox = document.querySelector("#lessonBox");
  if (!lessonBox) return;
  const activeTab = document.querySelector(".lesson-tab.active");
  const lessonKey = key || activeTab?.dataset.lesson || "day1";
  const courseTitle = state.currentLessonTitle || getActiveCareerPlanContext().title || "Career exploration";
  lessonBox.innerHTML = buildLessonMarkup(lessonKey, courseTitle, state.currentLessonCourse || "classroom");
}

function getLessonActivity(courseCode) {
  const tasks = state.tasks || [];
  const matchesCourse = task => {
    if (courseCode === "PATH 101") return tasks.indexOf(task) < 2;
    if (courseCode === "SKILL 120") return task.type === "Lab";
    if (courseCode === "PORT 210") return task.type === "Portfolio";
    if (courseCode === "CAREER 400") return task.type === "Career";
    if (courseCode.startsWith("ELECT ")) {
      const elective = getActiveCareerPlanContext().electives[Math.max(0, Number(courseCode.split(" ")[1]) - 251)];
      return task.type === `Elective:${elective}`;
    }
    return false;
  };
  return tasks.find(task => matchesCourse(task) && !task.done) || tasks.find(matchesCourse) || null;
}

function getCourseLessonKey(courseCode) {
  if (courseCode === "PATH 101" || courseCode === "LANG 260") return "day1";
  if (courseCode === "SKILL 120" || courseCode.startsWith("ELECT ")) return "day2";
  return "day3";
}

function launchCourseLesson(courseCode, courseTitle, lessonKey = getCourseLessonKey(courseCode)) {
  state.startedLessons = state.startedLessons || {};
  if (courseCode && !state.startedLessons[courseCode]) {
    state.startedLessons[courseCode] = { startedAt: new Date().toISOString(), lessonKey };
  }
  state.currentLessonCourse = courseCode;
  state.currentLessonTitle = courseTitle;
  document.querySelectorAll(".lesson-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.lesson === lessonKey);
  });
  renderLesson(lessonKey);
  renderCourseCatalog();
  saveState();
  showPortalView("courses", { saveSelection: false });
  requestAnimationFrame(() => {
    document.querySelector("#activeLessonSession")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function renderActiveLessonSession() {
  const session = document.querySelector("#activeLessonSession");
  const courseCode = state.currentLessonCourse;
  if (!courseCode) {
    session.replaceChildren();
    session.classList.add("hidden");
    return;
  }
  const lessonKey = state.startedLessons?.[courseCode]?.lessonKey || "day1";
  const activity = getLessonActivity(courseCode);
  session.classList.remove("hidden");
  session.innerHTML = `
    <div class="active-lesson-session-heading">
      <span>Lesson in progress</span>
      <strong>${escapeHTML(state.currentLessonTitle || "Current course")}</strong>
    </div>
    ${buildLessonMarkup(lessonKey, state.currentLessonTitle || "Current course", courseCode, { compact: true })}
    <div class="active-lesson-next">
      <span>Next activity</span>
      <strong>${escapeHTML(activity?.title || "Review this lesson, then choose your next course activity.")}</strong>
      <small>${escapeHTML(activity?.detail || "Your learning record stays accurate when you mark work complete only after you finish it.")}</small>
    </div>
    <button type="button" data-open-lesson-activity>Open next activity</button>
  `;
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getTaskStats() {
  const tasks = state.tasks || [];
  const completed = tasks.filter(task => task.done).length;
  return {
    tasks,
    completed,
    total: tasks.length,
    percent: tasks.length ? clampPercent((completed / tasks.length) * 100) : 0
  };
}

function getCourseProgress(code) {
  const context = getActiveCareerPlanContext();
  const stats = getTaskStats();
  const tasks = stats.tasks;
  const done = predicate => tasks.filter(task => predicate(task) && task.done).length;
  const total = predicate => tasks.filter(predicate).length;
  const typePercent = type => {
    const matching = total(task => task.type === type);
    return matching ? clampPercent((done(task => task.type === type) / matching) * 100) : 0;
  };

  if (!hasAcademicProgram(context)) {
    return { progress: 0, status: "Exploration", next: "Choose a career, language, or elective program before courses unlock" };
  }

  if (code === "PATH 101") {
    const foundationTasks = tasks.slice(0, 2);
    const completed = foundationTasks.filter(task => task.done).length;
    const progress = foundationTasks.length ? clampPercent((completed / foundationTasks.length) * 100) : 0;
    return {
      progress,
      status: progress === 100 ? "Complete" : "In progress",
      next: progress === 100 ? "Foundation requirements complete" : `Complete ${foundationTasks.length - completed} foundation assignment${foundationTasks.length - completed === 1 ? "" : "s"}`
    };
  }

  if (code === "SKILL 120") {
    const progress = typePercent("Lab");
    return {
      progress,
      status: progress === 100 ? "Complete" : progress > 0 ? "In progress" : "Not started",
      next: progress === 100 ? "Core skills lab complete" : "Complete career-specific practice labs"
    };
  }

  if (code === "PORT 210") {
    const progress = typePercent("Portfolio");
    return {
      progress,
      status: progress === 100 ? "Complete" : progress > 0 ? "In progress" : "Not started",
      next: progress === 100 ? "Portfolio proof submitted" : context.project
    };
  }

  if (code.startsWith("ELECT ")) {
    const electiveIndex = Math.max(0, Number(code.split(" ")[1]) - 251);
    const elective = context.electives[electiveIndex];
    if (!elective) return { progress: 0, status: "Not selected", next: "Choose an elective studio only if you want one" };
    const progress = typePercent(`Elective:${elective}`);
    return {
      progress,
      status: progress === 100 ? "Complete" : progress > 0 ? "In progress" : "Selected",
      next: progress === 100
        ? `${elective} evidence completed`
        : context.career
          ? `Complete the ${elective} project and connect it to ${context.title}`
          : `Complete the ${elective} project and reflection`
    };
  }

  if (code === "LANG 260") {
    if (!context.language) return { progress: 0, status: "Not selected", next: "Choose a language track only if you want one" };
    const deckSize = getCurrentCardDeck().length || 6;
    const progress = clampPercent((Math.min(state.knownCards || 0, deckSize) / deckSize) * 100);
    return {
      progress,
      status: progress === 100 ? "Complete" : progress > 0 ? "In progress" : "Selected",
      next: progress === 100 ? "Language card set reviewed" : `Review ${deckSize - Math.min(state.knownCards || 0, deckSize)} more ${context.language} card${deckSize - Math.min(state.knownCards || 0, deckSize) === 1 ? "" : "s"}`
    };
  }

  if (code === "CAREER 400") {
    const progress = typePercent("Career");
    return {
      progress,
      status: progress === 100 ? "Complete" : progress > 0 ? "In progress" : "Not started",
      next: progress === 100 ? "Career story ready" : `Prepare resume bullets and interview story for ${context.title}`
    };
  }

  return { progress: stats.percent, status: stats.percent ? "In progress" : "Not started", next: "Continue your active coursework" };
}

function getAcademicProgress() {
  const context = getActiveCareerPlanContext();
  if (!hasAcademicProgram(context)) {
    return {
      requirementsCompleted: 0,
      requirementsTotal: 24,
      courseCompletion: 0,
      readiness: 0,
      creditsEarned: 0,
      gradeLabel: "No grade yet",
      status: "Exploring"
    };
  }

  const courseCodes = context.career ? ["PATH 101", "SKILL 120", "PORT 210", "CAREER 400"] : [];
  context.electives.forEach((_, index) => courseCodes.push(`ELECT ${251 + index}`));
  if (context.language) courseCodes.push("LANG 260");
  const courseProgress = courseCodes.map(code => getCourseProgress(code).progress);
  const courseCompletion = courseProgress.length
    ? clampPercent(courseProgress.reduce((sum, progress) => sum + progress, 0) / courseProgress.length)
    : 0;
  const stats = getTaskStats();
  const hasAnyCompletion = stats.completed > 0 || (context.language && (state.knownCards || 0) > 0);
  const learningBonus = hasAnyCompletion && state.learningProfile ? 10 : 0;
  const taskScore = stats.percent * 0.65;
  const courseScore = courseCompletion * 0.25;
  const readiness = hasAnyCompletion ? clampPercent(taskScore + courseScore + learningBonus) : 0;
  const requirementsTotal = context.career ? 24 : Math.max(4, courseCodes.length * 4);
  const requirementsCompleted = Math.min(requirementsTotal, Math.round((readiness / 100) * requirementsTotal));

  return {
    requirementsCompleted,
    requirementsTotal,
    courseCompletion,
    readiness,
    creditsEarned: requirementsCompleted,
    gradeLabel: readiness >= 90 ? "A, excellent progress" : readiness >= 80 ? "B, strong progress" : readiness >= 70 ? "C, developing progress" : readiness > 0 ? "Needs more submissions" : "No grade yet",
    status: readiness === 100 ? "Complete" : readiness >= 70 ? "On track" : readiness > 0 ? "In progress" : "Just started"
  };
}

const universityFaculty = {
  foundations: "Professor Amara Bennett, Career Foundations",
  skills: "Professor Marcus Reed, Applied Skills",
  portfolio: "Professor Celeste Hart, Portfolio Studio",
  language: "Professor Leila Sato, Language and Culture",
  career: "Raini Smith, Career Services Advisor"
};

function getElectiveFaculty(elective) {
  const label = elective.toLowerCase();
  if (/paint|draw|art|design|photograph|film|fashion|ceramic|sculpt|craft|wood|shop/i.test(label)) {
    return "Professor Imani Cole, Creative Practice";
  }
  if (/voice|drama|theater|music|podcast|dance|performance/i.test(label)) {
    return "Professor Alexis Monroe, Performance and Media";
  }
  if (/wellness|personal growth|home ec|cooking|nutrition|fitness|health/i.test(label)) {
    return "Professor Rowan Hale, Wellness and Life Skills";
  }
  if (/business|law|advocacy|finance|leadership|entrepreneur/i.test(label)) {
    return "Professor Nia Okafor, Civic and Professional Studies";
  }
  return "Professor Mateo Ruiz, Elective Studies";
}

function buildCareerCourseCatalog() {
  const context = getActiveCareerPlanContext();
  const title = context.title;
  const languageLabel = context.language
    ? context.career
      ? `${context.language}: Everyday Fluency + ${title}`
      : `${context.language}: Everyday Fluency and Culture`
    : `${title} communication`;
  if (!hasAcademicProgram(context)) return [];

  const catalog = [];

  if (context.career) {
    catalog.push({
      code: "PATH 101",
      title: `${title} Foundations`,
      instructor: `Instructor: ${universityFaculty.foundations}`,
      ...getCourseProgress("PATH 101"),
      media: {
        video: `${title} day-in-the-life walkthrough`,
        image: `${title} role map: duties, tools, credentials, and work settings`
      }
    });
    catalog.push({
      code: "SKILL 120",
      title: `${title} Core Skills Lab`,
      instructor: `Instructor: ${universityFaculty.skills}`,
      ...getCourseProgress("SKILL 120"),
      media: {
        video: `${title} skill demonstration`,
        image: `${title} checklist with quality standards and examples`
      }
    });
    catalog.push({
      code: "PORT 210",
      title: `${title} Portfolio Studio`,
      instructor: `Instructor: ${universityFaculty.portfolio}`,
      ...getCourseProgress("PORT 210"),
      media: {
        video: `${title} project walkthrough`,
        image: `${title} portfolio proof gallery`
      }
    });
  }

  context.electives.forEach((elective, index) => {
    const code = `ELECT ${251 + index}`;
    catalog.push({
      code,
      title: elective,
      instructor: `Instructor: ${getElectiveFaculty(elective)}`,
      ...getCourseProgress(code),
      media: {
        video: `${elective} studio demonstration and guided practice`,
        image: `${elective} visual examples, references, and project inspiration`
      }
    });
  });

  if (context.language) {
    catalog.push({
      code: "LANG 260",
      title: languageLabel,
      instructor: `Instructor: ${universityFaculty.language}`,
      ...getCourseProgress("LANG 260"),
      media: {
        video: context.career
          ? `${context.language} everyday conversation, listening, pronunciation, and ${title} scenarios`
          : `${context.language} everyday conversation, listening, pronunciation, and culture`,
        image: context.career
          ? `${context.language} daily-life phrases, culture notes, and ${title} vocabulary`
          : `${context.language} phrase cards, culture notes, and everyday communication`
      }
    });
  }

  if (context.career) {
    catalog.push({
      code: "CAREER 400",
      title: `${title} Career Services`,
      instructor: `Instructor: ${universityFaculty.career}`,
      ...getCourseProgress("CAREER 400"),
      media: {
        video: `${title} mock interview`,
        image: `${title} resume, profile, and application tracker examples`
      }
    });
  }

  return catalog;
}

function buildElectiveCourseTerm(elective, careerTitle = "") {
  const bookStudy = robertGreeneBookStudies[elective];
  if (bookStudy) {
    return {
      title: elective,
      outcome: careerTitle
        ? `${bookStudy.outcome} Connect the final reflection to ethical judgment and relationships in ${careerTitle}.`
        : bookStudy.outcome,
      lessons: careerTitle
        ? bookStudy.lessons.map((lesson, index) => index === bookStudy.lessons.length - 1
          ? `${lesson} Then add a short ${careerTitle} application reflection.`
          : lesson)
        : [...bookStudy.lessons],
      deliverable: careerTitle
        ? `${bookStudy.deliverable} with a ${careerTitle} application reflection`
        : bookStudy.deliverable,
      elective,
      reading: `Use a legally obtained copy of ${bookStudy.book}. This is an independent, original study guide and is not affiliated with or endorsed by the authors or publishers.`
    };
  }

  if (careerTitle) {
    return {
      title: elective,
      outcome: `Develop ${elective} as a distinct course while connecting the finished work to the ${careerTitle} path.`,
      lessons: [
        `Class 1: Define the skills and quality standards of ${elective}.`,
        `Class 2: Study strong ${elective} examples relevant to ${careerTitle}.`,
        `Class 3: Practice one focused ${elective} skill.`,
        `Class 4: Build and revise a finished ${elective} artifact.`,
        `Class 5: Add the artifact to the ${careerTitle} portfolio with a clear explanation.`
      ],
      deliverable: `${elective} finished artifact and ${careerTitle} connection statement`,
      elective
    };
  }

  return {
    title: elective,
    outcome: `Develop a real beginner-to-finished project in ${elective}, using examples, guided practice, feedback, revision, and reflection.`,
    lessons: [
      `Class 1: Define the core skills and quality standards of ${elective}.`,
      `Class 2: Study three strong examples and name what makes them effective.`,
      `Class 3: Practice one focused skill and document the process.`,
      `Class 4: Build and revise a finished ${elective} artifact.`,
      "Class 5: Present the work, reflect on growth, and choose the next challenge."
    ],
    deliverable: `${elective} finished project and reflection`,
    elective
  };
}

function buildIndependentCoursePlan(context) {
  const plan = [
    {
      module: "Term 1",
      title: "Independent Study Foundations",
      outcome: "Set goals, choose a weekly rhythm, complete the learning profile, and define what finished evidence will look like for every selected course.",
      lessons: [
        "Class 1: Name what you want to learn and why it matters to you.",
        "Class 2: Complete the learning and retention profile.",
        "Class 3: Set a realistic weekly practice schedule.",
        "Class 4: Study strong examples from each selected subject.",
        "Class 5: Create a personal rubric for quality and completion."
      ],
      deliverable: "Independent study agreement, weekly schedule, and evidence plan",
      elective: "No career selection is required."
    }
  ];

  if (context.language) {
    plan.push({
      module: `Term ${plan.length + 1}`,
      title: `${context.language} Language Studio`,
      outcome: `Build practical ${context.language} for everyday life, culture, listening, speaking, comprehension, travel, relationships, media, and personal interests.`,
      lessons: [
        `Class 1: Learn ${context.language} introductions, daily needs, directions, time, numbers, and useful questions.`,
        `Class 2: Practice ${context.language} listening, pronunciation or expression, and short conversations.`,
        `Class 3: Explore ${context.language} culture, context, formality, and respectful usage.`,
        `Class 4: Use ${context.language} to discuss hobbies, family, media, travel, feelings, and goals.`,
        `Class 5: Create an everyday ${context.language} conversation sample and reflection.`
      ],
      deliverable: `${context.language} everyday conversation portfolio`,
      elective: "Independent full-language study without a required career connection."
    });
  }

  context.electives.forEach(elective => {
    const electiveTerm = buildElectiveCourseTerm(elective);
    plan.push({
      module: `Term ${plan.length + 1}`,
      ...electiveTerm
    });
  });

  plan.push({
    module: `Term ${plan.length + 1}`,
    title: "Independent Study Showcase",
    outcome: "Organize selected work into a clear student showcase and decide what to deepen, combine, or pursue next.",
    lessons: [
      "Class 1: Select the strongest evidence from every course.",
      "Class 2: Improve captions, recordings, photos, or written explanations.",
      "Class 3: Explain the process, feedback, revision, and final result.",
      "Class 4: Connect patterns across your interests and learning style.",
      "Class 5: Publish a showcase and write the next-term study plan."
    ],
    deliverable: "Independent study showcase and next-term plan",
    elective: formatSelectionList(context.electives) || context.language
  });

  return plan;
}

function buildCareerCoursePlan() {
  const context = getActiveCareerPlanContext();
  const title = context.title;
  const language = context.language;
  const elective = context.elective;

  if (!context.career) return hasAcademicProgram(context) ? buildIndependentCoursePlan(context) : [];

  const plan = [
    {
      module: "Term 1",
      title: `${title} Orientation`,
      outcome: `Understand the actual work of ${title}: responsibilities, work settings, tools, standards, safety or ethics, and beginner expectations.`,
      lessons: [
        `Class 1: Define what ${title} does and does not do.`,
        `Class 2: Identify required education, licenses, certificates, tools, and hiring signals for ${title}.`,
        `Class 3: Study real job posts and extract repeated skills for ${title}.`,
        `Class 4: Build a weekly practice routine specific to ${title}.`,
        `Class 5: Submit a ${title} career map with next steps.`
      ],
      deliverable: `${title} role map and readiness checklist`,
      elective: "Only the selected career path is used in this term."
    },
    {
      module: "Term 2",
      title: `${title} Skills Lab`,
      outcome: `Practice the technical, creative, service, communication, or operational skills that matter most for ${title}.`,
      lessons: [
        `Class 1: Learn the core vocabulary and tools of ${title}.`,
        `Class 2: Practice a beginner task using ${title} quality standards.`,
        `Class 3: Review examples of excellent and weak ${title} work.`,
        `Class 4: Get feedback and revise one practice artifact.`,
        `Class 5: Document what improved and what still needs repetition.`
      ],
      deliverable: `${title} core skills practice packet`,
      elective: "No unrelated career assignments included."
    },
    {
      module: "Term 3",
      title: `${title} Project Studio`,
      outcome: `Create proof of skill for ${title} that can become a portfolio, interview story, or training record.`,
      lessons: [
        `Class 1: Plan the project: ${context.project}.`,
        `Class 2: Gather examples, references, tools, or data specific to ${title}.`,
        `Class 3: Build the first version and document choices.`,
        `Class 4: Improve the project using feedback or a rubric.`,
        `Class 5: Publish or package the project with a clear explanation.`
      ],
      deliverable: context.project,
      elective: "Project stays tied to the active career."
    },
    {
      module: "Term 4",
      title: elective || `${title} Applied Elective`,
      outcome: elective
        ? `Use ${elective} to add personality, creativity, and distinction to the ${title} path.`
        : `Choose an applied elective only if it supports the ${title} path.`,
      lessons: [
        `Class 1: Define how ${elective || "an elective"} supports ${title}.`,
        `Class 2: Study examples connected to ${title}, not unrelated careers.`,
        "Class 3: Build a small elective artifact.",
        "Class 4: Connect the artifact to your portfolio or interview story.",
        "Class 5: Decide whether this elective should stay in the plan."
      ],
      deliverable: `${elective || title} elective artifact`,
      elective: elective || "No elective selected yet."
    },
    {
      module: "Term 5",
      title: language ? `${language} Language Studio` : `${title} Communication`,
      outcome: language
        ? `Build practical ${language} for everyday life, culture, listening, speaking, comprehension, and personal expression, then apply that foundation to ${title} vocabulary and professional scenarios.`
        : `Practice clear professional communication for ${title}.`,
      lessons: [
        language
          ? `Class 1: Learn ${language} introductions, daily needs, directions, time, numbers, and useful everyday questions.`
          : `Class 1: Build a ${title} communication vocabulary list.`,
        language
          ? `Class 2: Practice ${language} listening, pronunciation, comprehension, and short conversations.`
          : "Class 2: Practice introductions, questions, explanations, and real-life workplace scenarios.",
        language
          ? `Class 3: Explore ${language} culture, context, respectful usage, and communication patterns without limiting study to work.`
          : `Class 3: Create flashcards that build confidence explaining ${title}.`,
        language
          ? `Class 4: Apply ${language} to ${title} tools, responsibilities, clients or coworkers, safety or ethics, and a realistic professional scenario.`
          : `Class 4: Write or record a short ${title} explanation.`,
        language
          ? `Class 5: Create two samples: one everyday ${language} conversation and one ${title} career scenario.`
          : "Class 5: Add the communication artifact to the portfolio."
      ],
      deliverable: language
        ? `${language} everyday conversation sample plus a ${title} vocabulary and career-scenario set`
        : `${title} communication script`,
      elective: language
        ? `${language} is taught as a full life language with a dedicated ${title} application strand.`
        : "No language elective selected."
    },
    {
      module: "Term 6",
      title: `${title} Career Launch`,
      outcome: `Prepare application materials, interview answers, practice evidence, and a realistic next-step plan for ${title}.`,
      lessons: [
        `Class 1: Build resume bullets for ${title}.`,
        `Class 2: Create a target list of ${title} jobs, schools, apprenticeships, clients, or credentials.`,
        `Class 3: Practice explaining your ${title} project.`,
        "Class 4: Prepare behavioral interview stories using real practice moments.",
        "Class 5: Create a weekly application, training, or outreach routine."
      ],
      deliverable: `${title} resume, portfolio proof, interview stories, and next-step tracker`,
      elective: "Only selected language/elective choices appear here."
    }
  ];

  const [orientationTerm, skillsTerm, projectTerm, , languageTerm, launchTerm] = plan;
  const electiveTerms = context.electives.map(selectedElective => ({
    module: "",
    ...buildElectiveCourseTerm(selectedElective, title)
  }));
  const selectedPlan = [
    orientationTerm,
    skillsTerm,
    projectTerm,
    ...electiveTerms,
    ...(language ? [languageTerm] : []),
    launchTerm
  ];
  return selectedPlan.map((term, index) => ({ ...term, module: `Term ${index + 1}` }));
}

function buildCareerTasks() {
  const context = getActiveCareerPlanContext();
  const title = context.title;
  if (!hasAcademicProgram(context)) return defaultTasks.map(task => ({ ...task }));

  if (!context.career) {
    const independentTasks = [
      {
        title: "Independent Study Setup: Define your goals",
        detail: "Set one outcome, one weekly practice rhythm, and one finished artifact for every selected course.",
        type: "Study",
        done: false
      }
    ];
    if (context.language) {
      independentTasks.push({
        title: `${context.language} Practice: Everyday conversation`,
        detail: `Complete one ${context.language} listening or expression exercise and one everyday conversation sample.`,
        type: "Language",
        done: false
      });
    }
    context.electives.forEach(elective => {
      independentTasks.push({
        title: `${elective}: Finished project`,
        detail: `Create, revise, and explain one complete ${elective} artifact.`,
        type: `Elective:${elective}`,
        done: false
      });
    });
    independentTasks.push({
      title: "Independent Study Showcase",
      detail: "Present your strongest work, explain what improved, and choose what to study next.",
      type: "Portfolio",
      done: false
    });
    return independentTasks;
  }

  const careerTasks = [
    {
      title: `Assignment 1.1: Research ${title} requirements`,
      detail: `Find repeated education, training, certification, tool, safety, or portfolio requirements for ${title}.`,
      type: "Career",
      done: false
    },
    {
      title: `Assignment 1.2: Build ${title} vocabulary`,
      detail: `Create a clear vocabulary list for the tools, people, standards, and responsibilities used in ${title}.`,
      type: "Study",
      done: false
    },
    {
      title: `Lab 1.3: Practice a ${title} task`,
      detail: `Complete one beginner task or simulation that directly supports ${title}.`,
      type: "Lab",
      done: false
    },
    {
      title: `Portfolio Draft: ${title} proof`,
      detail: context.project,
      type: "Portfolio",
      done: false
    },
    {
      title: `Career Note: ${title} interview story`,
      detail: `Explain what you practiced, what improved, and why this career still fits or does not fit.`,
      type: "Career",
      done: false
    }
  ];

  if (context.language) {
    careerTasks.push({
      title: `${context.language}: Everyday fluency and ${title} application`,
      detail: `Create one everyday ${context.language} conversation sample plus a separate ${title} vocabulary and professional-scenario set.`,
      type: "Language",
      done: false
    });
  }

  context.electives.forEach(elective => {
    careerTasks.push({
      title: `${elective}: Career-connected project`,
      detail: `Complete a ${elective} artifact and explain how it adds skill, distinction, or personal meaning to the ${title} path.`,
      type: `Elective:${elective}`,
      done: false
    });
  });

  return careerTasks;
}

function syncTasksToActiveCareer() {
  const key = `${state.activeCareer || "exploration"}|${state.selectedLanguage || ""}|${normalizeElectiveSelections().join("~")}`;
  if (state.taskCareerKey === key) return;
  const completedByTitle = new Map((state.tasks || []).map(task => [task.title, Boolean(task.done)]));
  state.tasks = buildCareerTasks().map(task => ({
    ...task,
    done: completedByTitle.get(task.title) || false
  }));
  state.taskCareerKey = key;
}

function renderCourseCatalog() {
  const courseGrid = document.querySelector("#courseGrid");
  const currentLessonAction = document.querySelector("#currentLessonAction");
  courseGrid.innerHTML = "";
  const profile = learningProfiles[state.learningProfile || "balanced"];
  const catalog = buildCareerCourseCatalog();
  renderActiveLessonSession();

  if (!catalog.length) {
    currentLessonAction.replaceChildren();
    return;
  }

  const currentCourse = catalog.find(course => course.progress > 0 && course.progress < 100)
    || catalog.find(course => course.progress < 100)
    || catalog[catalog.length - 1];
  const lessonKey = getCourseLessonKey(currentCourse.code);
  const hasStarted = Boolean(state.startedLessons?.[currentCourse.code]);
  const actionLabel = currentCourse.progress === 0 && !hasStarted
    ? "Start lesson"
    : currentCourse.progress === 100
      ? "Review lesson"
      : "Continue lesson";
  currentLessonAction.innerHTML = `
    <div>
      <span>Current lesson</span>
      <strong>${escapeHTML(currentCourse.title)}</strong>
      <small>${escapeHTML(currentCourse.next)}</small>
    </div>
    <button type="button" data-open-current-lesson data-course-code="${currentCourse.code}" data-course-title="${escapeHTML(currentCourse.title)}" data-lesson-key="${lessonKey}">${actionLabel}</button>
  `;

  catalog.forEach(course => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-card-top">
        <span>${course.code}</span>
        <small>${course.status}</small>
      </div>
      <strong>${course.title}</strong>
      <p>${course.instructor}</p>
      <div class="course-media-summary" aria-label="Course media support">
        <span><b>Video:</b> ${course.media.video}</span>
        <span><b>Picture:</b> ${course.media.image}</span>
      </div>
      <footer>
        <div class="course-progress" aria-label="${course.progress}% complete">
          <span style="width: ${course.progress}%"></span>
        </div>
        <small>${course.progress}% complete</small>
        <em>${course.next}</em>
        <em>${profile.title}: ${profile.courseAdaptation}</em>
        <button type="button" class="course-open-lesson" data-open-course-lesson data-course-code="${course.code}" data-course-title="${escapeHTML(course.title)}" data-lesson-key="${getCourseLessonKey(course.code)}">${course.progress ? "Continue lesson" : "Open lesson"}</button>
      </footer>
    `;
    courseGrid.appendChild(card);
  });
}

const multimediaAssets = {
  teamPhoto: {
    src: "/flowstate/media/team-collaboration.jpg",
    title: "WLM international team meeting Vienna 2023-05-27 12",
    creator: "Manfred Werner (Tsui)",
    source: "https://commons.wikimedia.org/wiki/File:WLM_international_team_meeting_Vienna_2023-05-27_12.jpg"
  },
  classroomPhoto: {
    src: "/flowstate/media/classroom-workshop.jpg",
    title: "Wiki in schools 4",
    creator: "Lutarchitecture",
    source: "https://commons.wikimedia.org/wiki/File:Wiki_in_schools_4.jpg"
  },
  narration: {
    src: "/flowstate/media/reflection-practice.wav"
  }
};

const careerVideoRules = [
  { match: /tattoo|fine art|illustrat|paint|creative direction/i, soc: "27-1013.00", title: "Fine Artists, Including Painters, Sculptors, and Illustrators" },
  { match: /photograph|photo editor|visual storytelling/i, soc: "27-4021.00", title: "Photographers" },
  { match: /animat|3d artist|special effects/i, soc: "27-1014.00", title: "Special Effects Artists and Animators" },
  { match: /graphic design|visual design|brand identity/i, soc: "27-1024.00", title: "Graphic Designers" },
  { match: /interior design/i, soc: "27-1025.00", title: "Interior Designers" },
  { match: /fashion|costume/i, soc: "27-1022.00", title: "Fashion Designers" },
  { match: /floral/i, soc: "27-1023.00", title: "Floral Designers" },
  { match: /voice act|performing art|actor|drama|stage presence/i, soc: "27-2011.00", title: "Actors" },
  { match: /film director|video producer|event producer|director notes/i, soc: "27-2012.00", title: "Producers and Directors" },
  { match: /video edit/i, soc: "27-4032.00", title: "Film and Video Editors" },
  { match: /sound design|audio engineer|music producer|recording|podcast/i, soc: "27-4011.00", title: "Audio and Video Technicians" },
  { match: /journal|reporting|news/i, soc: "27-3023.00", title: "News Analysts, Reporters, and Journalists" },
  { match: /author|screenwriter|editor|content strateg|grant writ|writing|storytelling/i, soc: "27-3042.00", title: "Technical Writers" },
  { match: /public relations|social media|community manager/i, soc: "27-3031.00", title: "Public Relations Specialists" },
  { match: /translat|interpret|localization|language, culture/i, soc: "27-3091.00", title: "Interpreters and Translators" },
  { match: /librar/i, soc: "25-4022.00", title: "Librarians and Media Collections Specialists" },
  { match: /archive|museum|gallery/i, soc: "25-4012.00", title: "Curators" },
  { match: /teacher|tutor|instructional|learning and student|professor|education/i, soc: "25-9031.00", title: "Instructional Coordinators" },
  { match: /data scientist|ai engineer|ai tools|prompt engineer|machine learning|artificial intelligence|automation specialist/i, soc: "15-2051.00", title: "Data Scientists" },
  { match: /data analyst|business intelligence|product analyst|sports analyst/i, soc: "15-2051.00", title: "Data Scientists" },
  { match: /market research|marketing analyst/i, soc: "13-1161.00", title: "Market Research Analysts and Marketing Specialists" },
  { match: /ux research|user research|research assistant/i, soc: "19-4061.00", title: "Social Science Research Assistants" },
  { match: /software|frontend|game developer|web developer|coding|programming/i, soc: "15-1252.00", title: "Software Developers" },
  { match: /web design|ui designer|digital interface|accessibility specialist/i, soc: "15-1254.00", title: "Web Developers" },
  { match: /cyber|information security/i, soc: "15-1212.00", title: "Information Security Analysts" },
  { match: /network admin/i, soc: "15-1244.00", title: "Network and Computer Systems Administrators" },
  { match: /database|data engineer|pipeline/i, soc: "15-1242.00", title: "Database Administrators" },
  { match: /cloud support|it support|help desk|technical support/i, soc: "15-1232.00", title: "Computer User Support Specialists" },
  { match: /nurse/i, soc: "29-1141.00", title: "Registered Nurses" },
  { match: /certified nursing assistant|\bcna\b|home health aide/i, soc: "31-1131.00", title: "Nursing Assistants" },
  { match: /medical laboratory technician|specimen handling|lab safety, quality control/i, soc: "29-2012.00", title: "Medical and Clinical Laboratory Technicians" },
  { match: /physician assistant/i, soc: "29-1071.00", title: "Physician Assistants" },
  { match: /physician|doctor/i, soc: "29-1215.00", title: "Family Medicine Physicians" },
  { match: /medical assistant/i, soc: "31-9092.00", title: "Medical Assistants" },
  { match: /emt|paramedic|emergency medical/i, soc: "29-2041.00", title: "Emergency Medical Technicians and Paramedics" },
  { match: /radiolog|imaging/i, soc: "29-2034.00", title: "Radiologic Technologists and Technicians" },
  { match: /dental hygien/i, soc: "29-1292.00", title: "Dental Hygienists" },
  { match: /pharmacist/i, soc: "29-1051.00", title: "Pharmacists" },
  { match: /physical therapist/i, soc: "29-1123.00", title: "Physical Therapists" },
  { match: /occupational therapist/i, soc: "29-1122.00", title: "Occupational Therapists" },
  { match: /therapist|counselor|mental health/i, soc: "21-1011.00", title: "Substance Abuse and Behavioral Disorder Counselors" },
  { match: /social worker|community organizer|nonprofit|social impact/i, soc: "21-1022.00", title: "Healthcare Social Workers" },
  { match: /veterinar|animal|pet care/i, soc: "29-1131.00", title: "Veterinarians" },
  { match: /lawyer|legal|law and advocacy/i, soc: "23-1011.00", title: "Lawyers" },
  { match: /paralegal/i, soc: "23-2011.00", title: "Paralegals and Legal Assistants" },
  { match: /court reporter/i, soc: "43-9021.00", title: "Data Entry Keyers" },
  { match: /police|public safety/i, soc: "33-3051.01", title: "Police Patrol Officers" },
  { match: /firefighter/i, soc: "33-2011.00", title: "Firefighters" },
  { match: /correctional/i, soc: "33-3012.00", title: "Correctional Officers and Jailers" },
  { match: /electrician/i, soc: "47-2111.00", title: "Electricians" },
  { match: /electrical lineworker|power systems, climbing/i, soc: "49-9051.00", title: "Electrical Power-Line Installers and Repairers" },
  { match: /plumb/i, soc: "47-2152.00", title: "Plumbers, Pipefitters, and Steamfitters" },
  { match: /machinist|precision measurement, machining/i, soc: "51-4041.00", title: "Machinists" },
  { match: /roofer|roof systems/i, soc: "47-2181.00", title: "Roofers" },
  { match: /heavy equipment operator|equipment controls, site safety/i, soc: "47-2073.00", title: "Operating Engineers and Other Construction Equipment Operators" },
  { match: /telecommunications technician|cabling, network hardware/i, soc: "49-2022.00", title: "Telecommunications Equipment Installers and Repairers" },
  { match: /water and wastewater treatment|water-quality monitoring/i, soc: "51-8031.00", title: "Water and Wastewater Treatment Plant and System Operators" },
  { match: /weld/i, soc: "51-4121.00", title: "Welders, Cutters, Solderers, and Brazers" },
  { match: /hvac|heating|ventilation/i, soc: "49-9021.00", title: "Heating, Air Conditioning, and Refrigeration Mechanics and Installers" },
  { match: /mechanic|automotive|vehicle technician/i, soc: "49-3023.00", title: "Automotive Service Technicians and Mechanics" },
  { match: /solar/i, soc: "47-2231.00", title: "Solar Photovoltaic Installers" },
  { match: /carpenter|woodwork|woodshop/i, soc: "47-2031.00", title: "Carpenters" },
  { match: /skilled trades|maker apprentice|hands-on tools, building/i, soc: "47-2061.00", title: "Construction Laborers" },
  { match: /construction manager/i, soc: "11-9021.00", title: "Construction Managers" },
  { match: /architect/i, soc: "17-1011.00", title: "Architects" },
  { match: /civil engineer/i, soc: "17-2051.00", title: "Civil Engineers" },
  { match: /mechanical engineer|robotics/i, soc: "17-2141.00", title: "Mechanical Engineers" },
  { match: /electrical engineer/i, soc: "17-2071.00", title: "Electrical Engineers" },
  { match: /chemical engineer/i, soc: "17-2041.00", title: "Chemical Engineers" },
  { match: /aerospace engineer/i, soc: "17-2011.00", title: "Aerospace Engineers" },
  { match: /pilot/i, soc: "53-2011.00", title: "Airline Pilots, Copilots, and Flight Engineers" },
  { match: /flight attendant/i, soc: "53-2031.00", title: "Flight Attendants" },
  { match: /truck driver/i, soc: "53-3032.00", title: "Heavy and Tractor-Trailer Truck Drivers" },
  { match: /commercial driver|\bcdl\b/i, soc: "53-3032.00", title: "Heavy and Tractor-Trailer Truck Drivers" },
  { match: /bus driver|passenger safety, vehicle checks/i, soc: "53-3052.00", title: "Bus Drivers, School" },
  { match: /train conductor|rail operations/i, soc: "53-4031.00", title: "Railroad Conductors and Yardmasters" },
  { match: /logistics|supply chain/i, soc: "13-1081.00", title: "Logisticians" },
  { match: /real estate/i, soc: "41-9022.00", title: "Real Estate Sales Agents" },
  { match: /insurance agent/i, soc: "41-3021.00", title: "Insurance Sales Agents" },
  { match: /loan officer/i, soc: "13-2072.00", title: "Loan Officers" },
  { match: /accountant|accounting/i, soc: "13-2011.00", title: "Accountants and Auditors" },
  { match: /bookkeep/i, soc: "43-3031.00", title: "Bookkeeping, Accounting, and Auditing Clerks" },
  { match: /financial|finance|investment/i, soc: "13-2051.00", title: "Financial and Investment Analysts" },
  { match: /marketing|digital marketing/i, soc: "13-1161.00", title: "Market Research Analysts and Marketing Specialists" },
  { match: /human resources|people operations|recruiter/i, soc: "13-1071.00", title: "Human Resources Specialists" },
  { match: /project manager|project coordinator|scrum|operations analyst|product manager|product strategy|business strateg|entrepreneur|grant manager/i, soc: "13-1111.00", title: "Management Analysts" },
  { match: /customer success|customer service|client service/i, soc: "43-4051.00", title: "Customer Service Representatives" },
  { match: /environment|sustainability|climate/i, soc: "19-2041.00", title: "Environmental Scientists and Specialists" },
  { match: /urban planner/i, soc: "19-3051.00", title: "Urban and Regional Planners" },
  { match: /chemist/i, soc: "19-2031.00", title: "Chemists" },
  { match: /forensic/i, soc: "19-4092.00", title: "Forensic Science Technicians" },
  { match: /biolog|marine/i, soc: "19-1023.00", title: "Zoologists and Wildlife Biologists" },
  { match: /scientist|science and health research/i, soc: "19-4061.00", title: "Social Science Research Assistants" },
  { match: /park ranger|conservation/i, soc: "19-1031.00", title: "Conservation Scientists" },
  { match: /cosmetolog|beauty|salon/i, soc: "39-5012.00", title: "Hairdressers, Hairstylists, and Cosmetologists" },
  { match: /barber|hair cutting, sanitation/i, soc: "39-5011.00", title: "Barbers" },
  { match: /esthetician|skin care/i, soc: "39-5094.00", title: "Skincare Specialists" },
  { match: /massage therapist/i, soc: "31-9011.00", title: "Massage Therapists" },
  { match: /personal trainer|fitness|wellness/i, soc: "39-9031.00", title: "Exercise Trainers and Group Fitness Instructors" },
  { match: /chef|culinary|restaurant manager/i, soc: "35-1011.00", title: "Chefs and Head Cooks" },
  { match: /baker/i, soc: "51-3011.00", title: "Bakers" },
  { match: /event planner|event planning/i, soc: "13-1121.00", title: "Meeting, Convention, and Event Planners" },
  { match: /travel advisor|travel agent/i, soc: "41-3041.00", title: "Travel Agents" },
  { match: /hospitality|hotel/i, soc: "11-9081.00", title: "Lodging Managers" },
  { match: /funeral director/i, soc: "39-4031.00", title: "Morticians, Undertakers, and Funeral Arrangers" },
  { match: /faith|ministry|religious/i, soc: "21-2011.00", title: "Clergy" },
  { match: /policy analyst|political|public policy/i, soc: "19-4061.00", title: "Social Science Research Assistants" },
  { match: /military officer|military leadership/i, soc: "13-1111.00", title: "Management Analysts" },
  { match: /game|esports|qa tester|interactive experience/i, soc: "15-1252.00", title: "Software Developers" }
];

const jobTrainingVideoRules = [
  { match: /cashier|checkout/i, soc: "41-2031.00", title: "Retail Salespersons" },
  { match: /sales|retail|merchandis|fitting room|keyholder|grocery|produce clerk|personal shopper|thrift|cannabis|smoke shop|pop up|farmers market|street team/i, soc: "41-2031.00", title: "Retail Salespersons" },
  { match: /shift lead/i, soc: "41-1011.00", title: "First-Line Supervisors of Retail Sales Workers" },
  { match: /barista|coffee|boba|juice bar|ice cream|fast food|drive thru|counter associate|concession|food truck|cafeteria/i, soc: "35-3023.00", title: "Fast Food and Counter Workers" },
  { match: /restaurant server|banquet server|room service|catering assistant/i, soc: "35-3031.00", title: "Waiters and Waitresses" },
  { match: /restaurant host|front desk greeter/i, soc: "35-9031.00", title: "Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop" },
  { match: /line cook|pizza maker|prep cook/i, soc: "35-1011.00", title: "Chefs and Head Cooks" },
  { match: /food prep|deli counter|butcher shop|kitchen expo/i, soc: "35-2021.00", title: "Food Preparation Workers" },
  { match: /dishwasher|dishroom/i, soc: "35-9021.00", title: "Dishwashers" },
  { match: /busser|food runner/i, soc: "35-2021.00", title: "Food Preparation Workers" },
  { match: /bakery|baker/i, soc: "51-3011.00", title: "Bakers" },
  { match: /reception|appointment scheduler|front desk coordinator|spa front desk|intake clerk|dental front desk/i, soc: "43-9061.00", title: "Office Clerks, General" },
  { match: /customer service|call center|chat support|customer support|returns desk/i, soc: "43-4051.00", title: "Customer Service Representatives" },
  { match: /data entry|scanning clerk|spreadsheet assistant/i, soc: "43-9021.00", title: "Data Entry Keyers" },
  { match: /administrative assistant|office clerk|file clerk|records clerk|billing clerk|church office|mailroom|package room/i, soc: "43-9061.00", title: "Office Clerks, General" },
  { match: /medical records|insurance verification|hospital unit clerk/i, soc: "29-2072.00", title: "Medical Records Specialists" },
  { match: /bank teller/i, soc: "43-3071.00", title: "Tellers" },
  { match: /tax office/i, soc: "13-2082.00", title: "Tax Preparers" },
  { match: /bookkeep/i, soc: "43-3031.00", title: "Bookkeeping, Accounting, and Auditing Clerks" },
  { match: /insurance office/i, soc: "41-3021.00", title: "Insurance Sales Agents" },
  { match: /real estate|leasing|property management|open house/i, soc: "41-9022.00", title: "Real Estate Sales Agents" },
  { match: /warehouse|order picker|package handler|fulfillment|stocking|stocker|forklift|curbside pickup/i, soc: "53-7065.00", title: "Stockers and Order Fillers" },
  { match: /shipping|receiving|inventory auditor/i, soc: "43-5071.00", title: "Shipping, Receiving, and Inventory Clerks" },
  { match: /manufacturing|assembler|machine operator/i, soc: "51-9061.00", title: "Inspectors, Testers, Sorters, Samplers, and Weighers" },
  { match: /quality control inspector/i, soc: "51-9061.00", title: "Inspectors, Testers, Sorters, Samplers, and Weighers" },
  { match: /print shop|screen printing|sign shop|print production|print and copy/i, soc: "51-5112.00", title: "Printing Press Operators" },
  { match: /janitor|custodian|cleaning crew|window cleaning|pressure washing/i, soc: "37-2011.00", title: "Janitors and Cleaners" },
  { match: /housekeeping|hotel houseperson/i, soc: "37-2012.00", title: "Maids and Housekeeping Cleaners" },
  { match: /laundry|dry cleaning/i, soc: "51-6011.00", title: "Laundry and Dry-Cleaning Workers" },
  { match: /childcare|gym childcare|after school|camp counselor/i, soc: "39-9011.00", title: "Childcare Workers" },
  { match: /teacher aide|school lunch assistant|substitute teacher aide/i, soc: "25-9042.00", title: "Teaching Assistants, Preschool, Elementary, Middle, and Secondary School" },
  { match: /tutor/i, soc: "25-3041.00", title: "Tutors" },
  { match: /caregiver|home care|senior center|residential aide/i, soc: "31-1131.00", title: "Nursing Assistants" },
  { match: /patient transporter/i, soc: "31-1131.00", title: "Nursing Assistants" },
  { match: /behavior technician/i, soc: "29-2053.00", title: "Psychiatric Technicians" },
  { match: /pharmacy/i, soc: "29-2052.00", title: "Pharmacy Technicians" },
  { match: /dental assistant/i, soc: "31-9091.00", title: "Dental Assistants" },
  { match: /optical shop/i, soc: "29-2081.00", title: "Opticians, Dispensing" },
  { match: /lab assistant|lab courier/i, soc: "29-2011.00", title: "Medical and Clinical Laboratory Technologists" },
  { match: /pet|kennel|dog daycare|dog grooming|stable hand|veterinary reception/i, soc: "39-2021.00", title: "Animal Caretakers" },
  { match: /farm hand/i, soc: "37-3011.00", title: "Landscaping and Groundskeeping Workers" },
  { match: /landscap|lawn care|garden center|nursery assistant/i, soc: "37-3011.00", title: "Landscaping and Groundskeeping Workers" },
  { match: /pest control/i, soc: "37-2021.00", title: "Pest Control Workers" },
  { match: /pool cleaner|maintenance helper|maintenance porter/i, soc: "49-9071.00", title: "Maintenance and Repair Workers, General" },
  { match: /mover|furniture delivery|appliance delivery|route driver helper/i, soc: "53-7062.00", title: "Laborers and Freight, Stock, and Material Movers, Hand" },
  { match: /delivery driver|courier|rideshare/i, soc: "53-3033.00", title: "Light Truck Drivers" },
  { match: /bus aide|bus monitor/i, soc: "53-3022.00", title: "Bus Drivers, Transit and Intercity" },
  { match: /dispatcher/i, soc: "43-5032.00", title: "Dispatchers, Except Police, Fire, and Ambulance" },
  { match: /parking attendant|valet|lot porter/i, soc: "53-6021.00", title: "Parking Attendants" },
  { match: /car rental|reservation agent|travel desk|passenger service|ticketing/i, soc: "43-4181.00", title: "Reservation and Transportation Ticket Agents and Travel Clerks" },
  { match: /airport ramp|baggage service/i, soc: "53-6031.00", title: "Automotive and Watercraft Service Attendants" },
  { match: /car wash|auto detail|oil change|tire|auto lube|parts counter|body shop|tow truck/i, soc: "49-3023.00", title: "Automotive Service Technicians and Mechanics" },
  { match: /construction labor|trade apprentice|painter helper|drywall|roofing|flooring|tile helper|masonry|electrical helper|plumbing helper|hvac helper|solar installation|low voltage cable/i, soc: "47-2061.00", title: "Construction Laborers" },
  { match: /security|loss prevention/i, soc: "33-9032.00", title: "Security Guards" },
  { match: /crossing guard/i, soc: "33-9091.00", title: "Crossing Guards and Flaggers" },
  { match: /lifeguard/i, soc: "33-9092.00", title: "Lifeguards, Ski Patrol, and Other Recreational Protective Service Workers" },
  { match: /recreation center|amusement park|arcade|bowling alley|party host/i, soc: "39-3091.00", title: "Amusement and Recreation Attendants" },
  { match: /sports referee/i, soc: "27-2023.00", title: "Umpires, Referees, and Other Sports Officials" },
  { match: /gym.*desk|personal training sales|swim instructor/i, soc: "39-9031.00", title: "Exercise Trainers and Group Fitness Instructors" },
  { match: /library assistant|library page/i, soc: "25-4022.00", title: "Librarians and Media Collections Specialists" },
  { match: /museum attendant|gallery attendant|movie theater|box office|usher|visitor center/i, soc: "39-3031.00", title: "Ushers, Lobby Attendants, and Ticket Takers" },
  { match: /tour guide/i, soc: "39-7011.00", title: "Tour Guides and Escorts" },
  { match: /stagehand|lighting assistant|audio visual assistant/i, soc: "27-4011.00", title: "Audio and Video Technicians" },
  { match: /photo studio|photo assistant/i, soc: "27-4021.00", title: "Photographers" },
  { match: /video production|content creator/i, soc: "27-4032.00", title: "Film and Video Editors" },
  { match: /social media assistant/i, soc: "27-3031.00", title: "Public Relations Specialists" },
  { match: /podcast assistant/i, soc: "27-4011.00", title: "Audio and Video Technicians" },
  { match: /voiceover/i, soc: "27-2011.00", title: "Actors" },
  { match: /art studio|craft workshop/i, soc: "27-1013.00", title: "Fine Artists, Including Painters, Sculptors, and Illustrators" },
  { match: /florist/i, soc: "27-1023.00", title: "Floral Designers" },
  { match: /event setup|wedding assistant/i, soc: "13-1121.00", title: "Meeting, Convention, and Event Planners" },
  { match: /nonprofit|volunteer coordinator|community outreach|donation center/i, soc: "21-1093.00", title: "Social and Human Service Assistants" },
  { match: /junior qa tester/i, soc: "15-1253.00", title: "Software Quality Assurance Analysts and Testers" },
  { match: /help desk|computer lab/i, soc: "15-1232.00", title: "Computer User Support Specialists" },
  { match: /phone repair|electronics sales/i, soc: "49-2011.00", title: "Computer, Automated Teller, and Office Machine Repairers" },
  { match: /concierge|doorman|lobby attendant/i, soc: "39-6012.00", title: "Concierges" },
  { match: /hotel front desk|night auditor/i, soc: "39-6012.00", title: "Concierges" },
  { match: /flight passenger|airport|baggage/i, soc: "43-4181.00", title: "Reservation and Transportation Ticket Agents and Travel Clerks" },
  { match: /salon|beauty supply|makeup counter|beauty assistant/i, soc: "39-5012.00", title: "Hairdressers, Hairstylists, and Cosmetologists" },
  { match: /barber shop/i, soc: "39-5012.00", title: "Hairdressers, Hairstylists, and Cosmetologists" },
  { match: /nail salon/i, soc: "39-5092.00", title: "Manicurists and Pedicurists" },
  { match: /esthetician/i, soc: "39-5094.00", title: "Skincare Specialists" },
  { match: /massage clinic/i, soc: "31-9011.00", title: "Massage Therapists" }
];

function createCareerVideo(soc, title) {
  return {
    src: `https://cdn.careeronestop.org/OccVids/OccupationVideos/${soc}.mp4`,
    poster: `https://cdn.careeronestop.org/OccVids/OccupationVideos/${soc}.jpg`,
    captions: `https://cdn.careeronestop.org/CaptionFiles/${soc}.vtt`,
    title,
    provider: "CareerOneStop",
    source: `https://www.careeronestop.org/Videos/careeronestop-videos.aspx?videocode=${soc.replace(/\D/g, "")}`
  };
}

function getCareerVideo(context) {
  const careerText = `${state.activeCareer || ""} ${context.title || ""} ${context.focus || ""}`;
  const rule = careerVideoRules.find(option => option.match.test(careerText))
    || jobTrainingVideoRules.find(option => option.match.test(careerText))
    || { soc: "13-1111.00", title: "Management Analysts" };
  return createCareerVideo(rule.soc, rule.title);
}

function getJobTrainingVideo(job, selectedKey) {
  const jobText = `${selectedKey || ""} ${job.title || ""} ${job.mission || ""} ${job.first || ""}`;
  const rule = jobTrainingVideoRules.find(option => option.match.test(jobText))
    || careerVideoRules.find(option => option.match.test(jobText))
    || { soc: "43-4051.00", title: "Customer Service Representatives" };
  return createCareerVideo(rule.soc, rule.title);
}

let activeMediaReelTimer = null;

function buildMediaLibrary(context) {
  const hasProgram = hasAcademicProgram(context);
  const selectedSubjects = [
    ...(context.language ? [`${context.language} language`] : []),
    ...context.electives
  ];
  const subject = context.career
    ? context.title
    : hasProgram
      ? formatSelectionList(selectedSubjects)
      : "career exploration";
  const diagramFrames = context.career
    ? ["Core skill", "Guided practice", "Career proof"]
    : hasProgram
      ? ["Study goal", "Weekly practice", "Finished proof"]
      : ["Interest", "Testable skill", "Possible path"];
  const diagramSteps = context.career
    ? [
        `Choose one beginner skill used in ${context.title}.`,
        "Practice it in a small, repeatable workplace scenario.",
        "Save visible evidence and explain what improved."
      ]
    : hasProgram
      ? [
          `Choose one clear outcome for ${subject}.`,
          "Practice one small skill on a realistic weekly rhythm.",
          "Finish, label, and reflect on one piece of evidence."
        ]
      : [
          "Choose an interest that repeatedly holds your attention.",
          "Turn it into one skill you can test this week.",
          "Compare the skill with careers, job training, languages, and electives."
        ];
  const reelFrames = context.career
    ? ["Workplace need", "Your method", "Result and revision"]
    : hasProgram
      ? ["Why you chose it", "What you made", "How you grew"]
      : ["What pulls you", "What you tested", "What comes next"];
  const careerVideo = getCareerVideo(context);

  return [
    {
      kind: "video",
      type: "English career video",
      title: context.career ? `${context.title}: Career Video` : "Career Exploration Video",
      length: "Short official career overview",
      caption: context.career
        ? `Watch an English overview of ${careerVideo.title}, the closest occupational match for ${context.title}, with English captions available and on by default.`
        : `Watch an English career overview with English captions, then use it to compare daily work, skills, training, and work settings before choosing a path.`,
      frames: ["Daily work", "Skills", "Preparation"],
      steps: [
        `Watch for the daily tasks, people, tools, and work settings connected to ${context.career ? context.title : "the featured career"}.`,
        "Pause once and write down one skill you would enjoy practicing and one responsibility you want to research.",
        `Compare the video's education or training information with your ${subject} lesson plan and record one realistic next step.`
      ],
      video: careerVideo
    },
    {
      kind: "gallery",
      type: "Photographic observation lab",
      title: "Real Learning and Teamwork Environments",
      length: "2 full photographs",
      caption: `Inspect two real Creative Commons photographs and compare the physical setting, tools, communication, and collaboration that could matter in ${subject}.`,
      frames: ["Setting", "People", "Tools"],
      steps: [
        "Open each photograph and scan the foreground, background, tools, and body language.",
        `Name one environment detail that would help or challenge you while learning or doing ${subject}.`,
        "Connect one visible collaboration habit to your own preferred work style."
      ]
    },
    {
      kind: "diagram",
      type: "Interactive diagram lab",
      title: context.career ? `${context.title} Skill-to-Proof Map` : hasProgram ? "Study-to-Proof Map" : "Interest-to-Path Map",
      length: "3 interactive nodes",
      caption: `Select each diagram node to trace how ${subject} moves from curiosity or core skill to practice and visible evidence.`,
      frames: diagramFrames,
      steps: diagramSteps
    },
    {
      kind: "audio",
      type: "Narrated reflection lab",
      title: context.language ? `${context.language} Listen-Pause-Respond Practice` : "Listen-Pause-Respond Practice",
      length: "Playable audio",
      caption: context.language
        ? `Use the real narrated prompt to practice listening and reflection, then repeat the same response structure with a phrase or recording in ${context.language}.`
        : `Use the real narrated prompt to explain what you are learning, what changed after feedback, and what you will practice next in ${subject}.`,
      frames: ["Listen", "Pause", "Respond"],
      steps: [
        "Play the narrated prompt with the audio controls.",
        "Pause after a question and answer aloud before continuing.",
        context.language
          ? `Repeat your final answer or one key sentence in ${context.language}.`
          : "Record or write a 30-second response and listen or read it back once."
      ]
    },
    {
      kind: "reel",
      type: "Timed presentation",
      title: context.career ? `${context.title} Project Story` : hasProgram ? "Independent Study Showcase" : "First Student Story",
      length: "3-slide presentation",
      caption: `Run a timed visual presentation and rehearse a clear ${subject} story using context, process, evidence, and the next improvement.`,
      frames: reelFrames,
      steps: context.career
        ? [
            `Name the real problem or need your ${context.title} project addresses.`,
            "Explain the method, tools, choices, and feedback you used.",
            "Show the result, evidence, and one specific revision you would make."
          ]
        : hasProgram
          ? [
              `Explain why you selected ${subject}.`,
              "Show one piece of work and describe the process behind it.",
              "Name one improvement and the next challenge you want to attempt."
            ]
          : [
              "Say what naturally holds your attention.",
              "Describe one career, job, language, or elective experiment you tried.",
              "Explain what you learned and what you want to test next."
            ]
    }
  ];
}

function renderMediaPreviewMarkup(item) {
  const title = escapeHTML(item.title);
  if (item.kind === "gallery") {
    return `
      <div class="media-preview media-thumb-gallery" aria-label="${title} photograph preview">
        <img src="${multimediaAssets.teamPhoto.src}" alt="People collaborating around a table in a professional workspace" />
        <img src="${multimediaAssets.classroomPhoto.src}" alt="Students participating in a classroom workshop" />
        <span class="media-kind-badge">Photos</span>
      </div>
    `;
  }
  if (item.kind === "diagram") {
    return `
      <div class="media-preview media-thumb-diagram" aria-label="${title} diagram preview">
        ${item.frames.map((frame, index) => `
          <span class="media-thumb-node"><b>0${index + 1}</b>${escapeHTML(frame)}</span>
        `).join("")}
        <span class="media-kind-badge">Interactive</span>
      </div>
    `;
  }
  if (item.kind === "audio") {
    return `
      <div class="media-preview media-thumb-audio" aria-label="${title} audio preview">
        <div class="audio-waveform" aria-hidden="true">
          ${[2, 5, 8, 4, 9, 6, 3, 7, 5, 8, 4, 2].map(height => `<span style="--wave-height:${height}"></span>`).join("")}
        </div>
        <strong>Listen / pause / respond</strong>
        <span class="media-kind-badge">Audio</span>
      </div>
    `;
  }
  const isVideo = item.kind === "video";
  return `
    <div class="media-preview media-thumb-image" aria-label="${title} ${isVideo ? "video" : "presentation"} preview">
      <img src="${isVideo ? item.video.poster : multimediaAssets.teamPhoto.src}" alt="${isVideo ? `${escapeHTML(item.video.title)} career video preview` : "Collaborative work session used in the timed presentation"}" />
      <span class="media-kind-badge">${isVideo ? "English video" : "Slides"}</span>
      <span class="media-preview-action">${isVideo ? "Open career video" : "Run presentation"}</span>
    </div>
  `;
}

function renderMediaCreditsMarkup(item) {
  if (item.kind === "video") {
    return `
      <p class="media-credit">
        Official career video: <a href="${item.video.source}" target="_blank" rel="noreferrer">${escapeHTML(item.video.title)}</a>
        from CareerOneStop, sponsored by the U.S. Department of Labor.
      </p>
    `;
  }
  if (item.kind === "gallery" || item.kind === "reel") {
    return `
      <p class="media-credit">
        Photographs:
        <a href="${multimediaAssets.teamPhoto.source}" target="_blank" rel="noreferrer">${multimediaAssets.teamPhoto.title}</a>
        by ${multimediaAssets.teamPhoto.creator}, and
        <a href="${multimediaAssets.classroomPhoto.source}" target="_blank" rel="noreferrer">${multimediaAssets.classroomPhoto.title}</a>
        by ${multimediaAssets.classroomPhoto.creator}; both licensed CC BY-SA 4.0.
      </p>
    `;
  }
  if (item.kind === "audio") {
    return `<p class="media-credit">Narration produced for the University of FlowState reflection lab.</p>`;
  }
  return "";
}

function renderMediaStudio() {
  const mediaStudioGrid = document.querySelector("#mediaStudioGrid");
  if (!mediaStudioGrid) return;

  const profile = learningProfiles[state.learningProfile || "balanced"];
  const context = getActiveCareerPlanContext();
  const mediaLibrary = buildMediaLibrary(context);
  mediaStudioGrid.innerHTML = "";

  mediaLibrary.forEach(item => {
    const card = document.createElement("article");
    card.className = "media-card";
    card.innerHTML = `
      ${renderMediaPreviewMarkup(item)}
      <div class="media-card-body">
        <span>${escapeHTML(item.type)} | ${escapeHTML(item.length)}</span>
        <strong>${escapeHTML(item.title)}</strong>
        <p>${escapeHTML(item.caption)}</p>
        <small>${profile.title}: this lesson includes the actual medium plus readable context.</small>
        <button class="media-open" type="button" aria-controls="mediaLessonViewer">Open ${escapeHTML(item.kind)} lesson</button>
        <details class="media-access-details">
          <summary>Read context and practice steps</summary>
          <p>${escapeHTML(item.caption)}</p>
          <ul>
            ${item.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}
          </ul>
        </details>
      </div>
    `;
    card.querySelector(".media-open").addEventListener("click", () => renderMediaLesson(item, profile, context.title, true));
    mediaStudioGrid.appendChild(card);
  });

  renderMediaLesson(mediaLibrary[0], profile, context.title);
}

function renderMediaLessonBody(item) {
  if (item.kind === "video") {
    return `
      <div class="lesson-media-shell">
        <video class="lesson-video-player" controls playsinline preload="metadata" crossorigin="anonymous" poster="${item.video.poster}">
          <source src="${item.video.src}" type="video/mp4" />
          <track src="${item.video.captions}" kind="captions" srclang="en" label="English" default />
          Your browser cannot play this MP4 video. Use the official source link below.
        </video>
        <p class="media-language-note"><b>Language:</b> English audio with English captions on by default.</p>
        <div class="media-observation-strip">
          ${item.frames.map(frame => `<span>${escapeHTML(frame)}</span>`).join("")}
        </div>
      </div>
    `;
  }
  if (item.kind === "gallery") {
    return `
      <div class="real-photo-gallery">
        <figure>
          <a href="${multimediaAssets.teamPhoto.src}" target="_blank">
            <img src="${multimediaAssets.teamPhoto.src}" alt="Five people collaborating around a table with laptops in a professional workspace" />
          </a>
          <figcaption>Observe communication, tools, seating, shared attention, and informal team roles.</figcaption>
        </figure>
        <figure>
          <a href="${multimediaAssets.classroomPhoto.src}" target="_blank">
            <img src="${multimediaAssets.classroomPhoto.src}" alt="Students working together during a classroom training session" />
          </a>
          <figcaption>Observe the learning setup, materials, peer support, and connection between instruction and practice.</figcaption>
        </figure>
      </div>
    `;
  }
  if (item.kind === "diagram") {
    return `
      <div class="interactive-skill-map" aria-label="${escapeHTML(item.title)}">
        ${item.frames.map((frame, index) => `
          <button type="button" data-skill-node="${index}" aria-pressed="${index === 0 ? "true" : "false"}">
            <span>Step ${index + 1}</span>
            <strong>${escapeHTML(frame)}</strong>
          </button>
        `).join("")}
      </div>
      <div class="skill-map-detail" id="skillMapDetail" aria-live="polite">
        <span>Step 1</span>
        <strong>${escapeHTML(item.frames[0])}</strong>
        <p>${escapeHTML(item.steps[0])}</p>
      </div>
    `;
  }
  if (item.kind === "audio") {
    return `
      <div class="narration-player">
        <div>
          <span>Audio reflection</span>
          <strong>Use the controls to listen, pause, replay, and adjust volume.</strong>
        </div>
        <audio controls preload="metadata">
          <source src="${multimediaAssets.narration.src}" type="audio/wav" />
          Your browser cannot play this audio file.
        </audio>
      </div>
    `;
  }
  return `
    <div class="timed-reel" aria-label="${escapeHTML(item.title)} timed presentation">
      <img id="reelImage" src="${multimediaAssets.teamPhoto.src}" alt="Collaborative team workspace used as the first presentation slide" />
      <div class="reel-copy">
        <span id="reelCounter">Slide 1 of ${item.frames.length}</span>
        <strong id="reelTitle">${escapeHTML(item.frames[0])}</strong>
        <p id="reelText">${escapeHTML(item.steps[0])}</p>
      </div>
      <div class="reel-progress" aria-hidden="true"><span id="reelProgress"></span></div>
      <div class="reel-controls" aria-label="Presentation controls">
        <button type="button" id="reelPrevious">Previous</button>
        <button type="button" id="reelPlay">Play presentation</button>
        <button type="button" id="reelNext">Next</button>
      </div>
    </div>
  `;
}

function activateMediaLesson(item, viewer) {
  if (item.kind === "diagram") {
    const detail = viewer.querySelector("#skillMapDetail");
    viewer.querySelectorAll("[data-skill-node]").forEach((button, index) => {
      button.addEventListener("click", () => {
        viewer.querySelectorAll("[data-skill-node]").forEach(node => node.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");
        detail.innerHTML = `
          <span>Step ${index + 1}</span>
          <strong>${escapeHTML(item.frames[index])}</strong>
          <p>${escapeHTML(item.steps[index])}</p>
        `;
      });
    });
  }

  if (item.kind === "reel") {
    let slideIndex = 0;
    const images = [
      multimediaAssets.teamPhoto.src,
      multimediaAssets.classroomPhoto.src,
      multimediaAssets.teamPhoto.src
    ];
    const imageAlts = [
      "Collaborative team workspace used as the presentation context slide",
      "Classroom workshop used as the presentation process slide",
      "Collaborative team workspace used as the presentation evidence slide"
    ];
    const image = viewer.querySelector("#reelImage");
    const counter = viewer.querySelector("#reelCounter");
    const title = viewer.querySelector("#reelTitle");
    const text = viewer.querySelector("#reelText");
    const progress = viewer.querySelector("#reelProgress");
    const playButton = viewer.querySelector("#reelPlay");

    const showSlide = index => {
      slideIndex = (index + item.frames.length) % item.frames.length;
      image.src = images[slideIndex % images.length];
      image.alt = imageAlts[slideIndex % imageAlts.length];
      counter.textContent = `Slide ${slideIndex + 1} of ${item.frames.length}`;
      title.textContent = item.frames[slideIndex];
      text.textContent = item.steps[slideIndex];
      progress.style.width = `${((slideIndex + 1) / item.frames.length) * 100}%`;
    };
    const stopReel = () => {
      if (activeMediaReelTimer) clearInterval(activeMediaReelTimer);
      activeMediaReelTimer = null;
      playButton.textContent = "Play presentation";
    };

    viewer.querySelector("#reelPrevious").addEventListener("click", () => {
      stopReel();
      showSlide(slideIndex - 1);
    });
    viewer.querySelector("#reelNext").addEventListener("click", () => {
      stopReel();
      showSlide(slideIndex + 1);
    });
    playButton.addEventListener("click", () => {
      if (activeMediaReelTimer) {
        stopReel();
        return;
      }
      playButton.textContent = "Pause presentation";
      activeMediaReelTimer = setInterval(() => showSlide(slideIndex + 1), 3500);
    });
    showSlide(0);
  }
}

function renderMediaLesson(item, profile = learningProfiles[state.learningProfile || "balanced"], title = "your selected career", shouldFocus = false) {
  const viewer = document.querySelector("#mediaLessonViewer");
  if (!viewer) return;
  if (activeMediaReelTimer) {
    clearInterval(activeMediaReelTimer);
    activeMediaReelTimer = null;
  }

  if (!item) {
    viewer.innerHTML = `
      <span>Multimedia lesson player</span>
      <strong>Career exploration media is available</strong>
      <p>Use the playable video, audio, full photographs, interactive diagram, and timed presentation above before choosing a path.</p>
    `;
    return;
  }

  viewer.innerHTML = `
    <div class="media-viewer-heading">
      <span>${escapeHTML(item.type)} | ${escapeHTML(item.length)}</span>
      <strong>${escapeHTML(item.title)}</strong>
      <p>${escapeHTML(item.caption)}</p>
    </div>
    ${renderMediaLessonBody(item)}
    <details class="media-viewer-notes" open>
      <summary>Lesson context, accessibility notes, and practice</summary>
      <ol>
        ${item.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}
      </ol>
      <p><b>${profile.title}:</b> ${escapeHTML(profile.courseAdaptation)}</p>
      <p><b>Connection:</b> Apply this medium to ${escapeHTML(title)} or the study path currently selected in your portal.</p>
    </details>
    ${renderMediaCreditsMarkup(item)}
  `;
  activateMediaLesson(item, viewer);

  if (shouldFocus) {
    viewer.setAttribute("tabindex", "-1");
    viewer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    viewer.focus({ preventScroll: true });
  }
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";
  syncTasksToActiveCareer();

  state.tasks.forEach((task, index) => {
    const row = document.createElement("label");
    row.className = "task";
    row.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} aria-label="Mark ${task.title} complete" />
      <span><strong>${task.title}</strong><small>${task.detail}</small></span>
      <span class="tag">${task.type}</span>
    `;
    row.querySelector("input").addEventListener("change", event => {
      state.tasks[index].done = event.target.checked;
      renderCourseCatalog();
      updateProgress();
      updatePortalMode();
      saveState();
    });
    taskList.appendChild(row);
  });
}

function renderCard() {
  const context = getActiveCareerPlanContext();
  const dynamicCards = buildCareerFlashcards(context);
  const card = dynamicCards[cardIndex % dynamicCards.length];
  const panelTitle = document.querySelector("#japanese .panel-header h3");
  const panelPill = document.querySelector("#japanese .panel-header .pill");
  const fluencySummary = document.querySelector("#languageFluencySummary");
  const careerSummary = document.querySelector("#languageCareerSummary");
  if (panelTitle) {
    panelTitle.textContent = context.language
      ? `${context.language} language studio`
      : `${context.title} communication studio`;
  }
  if (panelPill) panelPill.textContent = context.language ? "Fluency + career" : "Optional track";
  if (fluencySummary) {
    fluencySummary.textContent = context.language
      ? `Learn ${context.language} for everyday conversation, listening, speaking, comprehension, culture, travel, relationships, media, and personal interests.`
      : "Choose a language to add everyday fluency, culture, listening, speaking, and practical conversation.";
  }
  if (careerSummary) {
    careerSummary.textContent = context.language && context.career
      ? `Connect ${context.language} to ${context.title} vocabulary, tools, people, workplace situations, interviews, and professional communication.`
      : context.language
        ? `No career is required. Your ${context.language} course remains a broad everyday fluency and culture program.`
      : `Your optional language can also be connected directly to ${context.title} without being limited to career phrases.`;
  }
  document.querySelector("#cardType").textContent = card.type;
  document.querySelector("#cardFront").textContent = card.front;
  document.querySelector("#cardBack").textContent = revealed ? card.back : "Click to reveal meaning";
}

function buildCareerFlashcards(context) {
  if (!hasAcademicProgram(context)) return cards;

  const careerTerms = [
    "Core tool",
    "Quality standard",
    "Client need",
    "Safety or ethics",
    "Portfolio proof",
    "Next step"
  ];

  if (!context.language) {
    if (!context.career) return cards;
    return careerTerms.map(term => ({
      type: "Career communication",
      front: `${context.title}: ${term}`,
      back: `Explain one ${context.title} example for ${term.toLowerCase()} in plain workplace language.`
    }));
  }

  const fluencyCards = [
    {
      type: `${context.language} - Everyday fluency`,
      front: "Introduce yourself",
      back: `Practice a natural ${context.language} greeting, name, background, interests, and one follow-up question.`
    },
    {
      type: `${context.language} - Everyday fluency`,
      front: "Daily needs",
      back: `Practice ${context.language} for food, shopping, transportation, time, directions, help, and polite requests.`
    },
    {
      type: `${context.language} - Listening and speaking`,
      front: "Hear it and say it",
      back: `Listen for key sounds and meaning in ${context.language}, repeat aloud, record yourself, and compare pronunciation or expression.`
    },
    {
      type: `${context.language} - Culture and context`,
      front: "Meaning beyond words",
      back: `Study how culture, tone, formality, gesture, and context change communication in ${context.language}.`
    },
    {
      type: `${context.language} - Personal expression`,
      front: "Life beyond work",
      back: `Use ${context.language} to discuss hobbies, family, media, travel, feelings, goals, and topics you genuinely care about.`
    }
  ];

  const careerCards = context.career ? careerTerms.map(term => ({
    type: `${context.language} - ${context.title}`,
    front: `${context.title}: ${term}`,
    back: `Apply ${context.language} to a realistic ${context.title.toLowerCase()} example involving ${term.toLowerCase()}, then explain the same idea in everyday language.`
  })) : [];

  return [...fluencyCards, ...careerCards];
}

function getCurrentCardDeck() {
  return buildCareerFlashcards(getActiveCareerPlanContext());
}

function updateProgress() {
  const progress = getAcademicProgress();
  const hasProgram = currentUser && hasAcademicProgram();
  document.querySelector("#dailyScore").textContent = hasProgram ? `${progress.readiness}%` : "Open";
  document.querySelector(".meter span").style.width = hasProgram ? `${progress.readiness}%` : "0%";
  const gradeRing = document.querySelector(".grade-ring");
  const gradeRingText = document.querySelector(".grade-ring strong");
  if (gradeRing) gradeRing.style.setProperty("--score", hasProgram ? progress.readiness : 0);
  if (gradeRingText) gradeRingText.textContent = hasProgram ? progress.readiness : 0;
}

function updateMetrics() {
  const totalRevenue = players.reduce((sum, player) => sum + player.revenue, 0);
  const churnPlayers = players.filter(isChurnRisk);

  document.querySelector("#totalRevenue")?.replaceChildren(`$${totalRevenue.toFixed(2)}`);
  document.querySelector("#arpu")?.replaceChildren(`$${(totalRevenue / players.length).toFixed(2)}`);
  document.querySelector("#churnRate")?.replaceChildren(`${Math.round((churnPlayers.length / players.length) * 100)}%`);
}

function renderCoursePlan() {
  const moduleGrid = document.querySelector("#moduleGrid");
  moduleGrid.innerHTML = "";
  const profile = learningProfiles[state.learningProfile || "balanced"];
  const workStyleProfile = getWorkStyleProfile();
  const plan = buildCareerCoursePlan();

  if (!plan.length) return;

  plan.forEach(module => {
    const card = document.createElement("article");
    card.className = "module-card";
    card.innerHTML = `
      <div class="module-card-header">
        <span>${module.module}</span>
        <strong>${module.title}</strong>
      </div>
      <p>${module.outcome}</p>
      <ol>
        ${module.lessons.map(lesson => `<li>${lesson}</li>`).join("")}
      </ol>
      <div class="module-footer">
        <span><strong>Deliverable:</strong> ${module.deliverable}</span>
        <span><strong>Elective:</strong> ${module.elective}</span>
        ${module.reading ? `<span><strong>Reading note:</strong> ${module.reading}</span>` : ""}
        <span><strong>Media:</strong> video lesson, picture example, diagram, and portfolio screenshot review</span>
        <span><strong>Learning mode:</strong> ${profile.courseAdaptation}</span>
        <span><strong>Work-style adaptation:</strong> ${workStyleProfile.courseAdaptation}</span>
        <span><strong>Workplace practice:</strong> ${workStyleProfile.workplacePreparation}</span>
      </div>
    `;
    moduleGrid.appendChild(card);
  });
}

function buildCareerTimelinePlan() {
  const context = getActiveCareerPlanContext();
  const title = context.title;
  const language = context.language;
  const elective = context.elective;

  if (!context.career && !hasAcademicProgram(context)) return timelinePlan;

  if (!context.career) {
    const subjects = [
      ...(language ? [`${language} language and culture`] : []),
      ...context.electives
    ];
    return [
      {
        period: "Month 1",
        title: "Independent study foundation",
        focus: `Set outcomes, quality standards, a learning strategy, and a weekly rhythm for ${formatSelectionList(subjects)}.`,
        workload: "45-75 minutes, 4 days per week.",
        milestone: "Personal learning plan, reference library, and project checklist."
      },
      {
        period: "Months 2-3",
        title: "Guided skill practice",
        focus: `Study examples, practice foundational skills, and complete early drafts across ${formatSelectionList(subjects)}.`,
        workload: "60-90 minutes, 4 days per week.",
        milestone: "Practice archive with visual, audio, written, or hands-on evidence."
      },
      {
        period: "Months 4-5",
        title: "Independent project studio",
        focus: "Complete one revised artifact for every selected elective and continue regular language practice when selected.",
        workload: "75-120 minutes, 4 days per week.",
        milestone: "Finished course projects with process notes and reflections."
      },
      {
        period: "Month 6",
        title: "Student showcase",
        focus: "Polish the strongest work, explain what changed after feedback, and choose the next course, career, or personal goal.",
        workload: "60-90 minutes, 4 days per week.",
        milestone: "Independent study showcase and next-term plan."
      }
    ];
  }

  return [
    {
      period: "Month 1",
      title: `${title} foundation term`,
      focus: `Learn what ${title} actually does, compare real job posts or client expectations, map required tools, credentials, standards, and beginner responsibilities.`,
      workload: "45-75 minutes, 4 days per week.",
      milestone: `${title} role map, readiness checklist, and weekly practice schedule.`
    },
    {
      period: "Month 2",
      title: `${title} skills term`,
      focus: `Practice the core beginner tasks, vocabulary, tools, quality standards, safety or ethics, and communication habits used in ${title}.`,
      workload: "60-90 minutes, 4 days per week.",
      milestone: `${title} core skills packet with notes, examples, and one revised practice artifact.`
    },
    {
      period: "Month 3",
      title: `${title} project term`,
      focus: `Build the first portfolio or training project for the chosen path: ${context.project}. No unrelated career assignments are included.`,
      workload: "60-90 minutes, 4-5 days per week.",
      milestone: `${title} Project 01 packaged with screenshots, photos, notes, or a clear walkthrough.`
    },
    {
      period: "Months 4-5",
      title: `${title} portfolio term`,
      focus: `Strengthen proof of skill with a second project, mock workplace scenarios, feedback cycles, and ${elective ? `${elective} work that supports the path` : "an applied elective that supports the path"}.`,
      workload: "75-120 minutes, 4 days per week.",
      milestone: `${title} portfolio, elective evidence, and polished career story.`
    },
    {
      period: "Month 6",
      title: `${title} launch term`,
      focus: `Prepare resume bullets, interview or client scripts, application targets, training records, and a realistic next-step plan for ${title}.`,
      workload: "60-90 minutes, 4 days per week plus one weekly career-action block.",
      milestone: `${title} ready kit: resume/profile language, portfolio proof, interview answers, and application tracker.`
    },
    {
      period: "Ongoing",
      title: language ? `${language} fluency and career connection` : "Retention and mastery track",
      focus: language
        ? `Develop ${language} for everyday life, culture, listening, speaking, comprehension, travel, relationships, and personal interests while adding a separate ${title} vocabulary and professional-scenario strand.`
        : `Use spaced review, short practice sessions, visual examples, audio explanation, and repetition to keep ${title} skills fresh.`,
      workload: "15-25 minutes daily when you have capacity.",
      milestone: language
        ? `${language} everyday conversation portfolio plus ${title} vocabulary and professional scenarios.`
        : `${title} review deck and practice archive.`
    }
  ];
}

function renderTimelinePlan() {
  const timelineGrid = document.querySelector("#timelineGrid");
  timelineGrid.innerHTML = "";
  const plan = buildCareerTimelinePlan();
  const workStyleProfile = getWorkStyleProfile();

  plan.forEach(item => {
    const card = document.createElement("article");
    card.className = "timeline-card";
    card.innerHTML = `
      <span>${item.period}</span>
      <strong>${item.title}</strong>
      <p>${item.focus}</p>
      <div><b>Weekly pace:</b> ${item.workload}</div>
      <div><b>Your work-style rhythm:</b> ${workStyleProfile.timelineRhythm}</div>
      <div><b>Milestone:</b> ${item.milestone}</div>
    `;
    timelineGrid.appendChild(card);
  });
}

function getSelectedPassions() {
  return [...document.querySelectorAll('input[name="passion"]:checked')].map(input => input.value);
}

function getInterestRecommendation(selected) {
  const profiles = selected.map(key => interestProfiles[key]).filter(Boolean);
  return {
    labels: profiles.map(profile => profile.label),
    careers: [...new Set(profiles.flatMap(profile => profile.careers))].slice(0, 10)
  };
}

function getSelectedCareerKey() {
  const selected = document.querySelector("#careerGoal").value;
  const customTitle = document.querySelector("#customCareerTitle").value.trim();
  if (selected === "custom" && customTitle) return `custom:${customTitle}`;
  if (selected === "custom") return "";
  return selected || "";
}

function getSelectedCareerKeyFromState() {
  if (state.selectedCareer === "custom" && state.customCareerTitle) {
    return `custom:${state.customCareerTitle}`;
  }
  if (state.selectedCareer === "custom") return "";
  return state.selectedCareer || state.activeCareer || "";
}

function getCareerByKey(key) {
  if (!key) return null;
  if (key.startsWith("custom:")) {
    const title = key.slice(7).trim() || state.customCareerTitle || "Custom Career";
    return {
      title,
      focus: `The skills, credentials, daily tasks, work environments, and advancement steps needed for ${title}`,
      project: `Create a ${title} career dossier with job postings, skill requirements, training options, portfolio proof, and a 90-day practice plan`
    };
  }
  return careerBlueprints[key] || null;
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function getCustomJobTrainingBlueprint(title) {
  const safeTitle = title.trim() || "Custom Job";
  return {
    title: safeTitle,
    mission: `Become dependable and valuable in ${safeTitle} by learning the workplace system, customer or client expectations, safety rules, tools, and quality standards.`,
    first: `Research ${safeTitle} postings, learn the daily duties, required training, dress code, tools, vocabulary, safety expectations, and who supervises the role.`,
    standout: "Arrive prepared, ask for standards, take notes, communicate early, protect safety, and turn feedback into visible improvement.",
    grow: `Track punctuality, training completed, supervisor feedback, customer or client wins, problems solved, and next credentials needed for advancement in ${safeTitle}.`
  };
}

function getWorkStyleAnswersFromForm() {
  const readValue = (id, fallback) => document.querySelector(`#${id}`)?.value || fallback;
  return {
    primary: readValue("workStyle", defaultWorkStyleDetails.primary),
    environment: readValue("workEnvironment", defaultWorkStyleDetails.environment),
    collaboration: readValue("collaborationStyle", defaultWorkStyleDetails.collaboration),
    pace: readValue("paceStyle", defaultWorkStyleDetails.pace),
    structure: readValue("structureStyle", defaultWorkStyleDetails.structure),
    feedback: readValue("feedbackStyle", defaultWorkStyleDetails.feedback),
    energy: readValue("energyPattern", defaultWorkStyleDetails.energy),
    values: [...document.querySelectorAll('input[name="workValue"]:checked')].map(input => input.value)
  };
}

function getWorkStyleProfile(details = state.selectedWorkStyleDetails || {}) {
  const normalized = {
    ...defaultWorkStyleDetails,
    ...details,
    primary: details.primary || state.selectedWorkStyle || defaultWorkStyleDetails.primary,
    values: Array.isArray(details.values) ? details.values : []
  };
  const environment = workStyleDimensions.environment[normalized.environment] || workStyleDimensions.environment.mixed;
  const collaboration = workStyleDimensions.collaboration[normalized.collaboration] || workStyleDimensions.collaboration.balanced;
  const pace = workStyleDimensions.pace[normalized.pace] || workStyleDimensions.pace.steady;
  const structure = workStyleDimensions.structure[normalized.structure] || workStyleDimensions.structure.clear;
  const feedback = workStyleDimensions.feedback[normalized.feedback] || workStyleDimensions.feedback.coaching;
  const energy = workStyleDimensions.energy[normalized.energy] || workStyleDimensions.energy["short-blocks"];
  const valueLabels = normalized.values
    .map(value => workStyleDimensions.values[value])
    .filter(Boolean);

  return {
    contribution: workStyleDimensions.primary[normalized.primary] || workStyleDimensions.primary.analytical,
    contributionGuidance: workStyleGuidance[normalized.primary] || workStyleGuidance.analytical,
    environment: environment.label,
    collaboration: collaboration.label,
    pace: pace.label,
    structure: structure.label,
    feedback: feedback.label,
    energy: energy.label,
    values: valueLabels.length ? formatSelectionList(valueLabels) : "Still deciding what matters most",
    studyStrategy: `${workStyleGuidance[normalized.primary] || workStyleGuidance.analytical} ${structure.guidance}`,
    courseAdaptation: `${energy.guidance} ${feedback.guidance}`,
    timelineRhythm: `${pace.study} ${energy.guidance}`,
    workplacePreparation: `${environment.guidance} ${collaboration.guidance}`
  };
}

function renderAdvisorPlan() {
  const selected = getSelectedPassions();
  const careerGoal = document.querySelector("#careerGoal").value;
  const customCareerTitle = document.querySelector("#customCareerTitle").value.trim();
  const language = document.querySelector("#languageTrack").value;
  const selectedElectives = getSelectedElectivesFromForm();
  const electiveLabel = formatSelectionList(selectedElectives);
  const workStyleDetails = getWorkStyleAnswersFromForm();
  const workStyleProfile = getWorkStyleProfile(workStyleDetails);
  state.selectedCareer = careerGoal;
  state.customCareerTitle = customCareerTitle;
  state.selectedLanguage = language;
  state.selectedElectives = selectedElectives;
  state.selectedElective = selectedElectives[0] || "None";
  state.selectedPassions = selected;
  state.selectedWorkStyle = workStyleDetails.primary;
  state.selectedWorkStyleDetails = workStyleDetails;
  const primaryKey = getSelectedCareerKey();
  const primary = getCareerByKey(primaryKey);
  if (primary && primaryKey !== state.activeCareer) {
    state.activeCareer = primaryKey;
    state.taskCareerKey = "";
  } else if (!primary && !careerGoal && state.activeCareer) {
    state.activeCareer = "";
    state.taskCareerKey = "";
  }
  const interestMatch = getInterestRecommendation(selected);
  const interestLine = interestMatch.labels.length
    ? `${interestMatch.labels.slice(0, 5).join(", ")}${interestMatch.labels.length > 5 ? `, and ${interestMatch.labels.length - 5} more` : ""}`
    : "No attention signals selected yet.";
  const careerShortlist = interestMatch.careers.length
    ? interestMatch.careers.join(", ")
    : "Answer the detailed interest choices or continue the guidance inquiry.";
  const languageLine = language === "None"
    ? `No language selected. No language course will be added to this plan.`
    : primary
      ? `${language} develops as a full language for everyday life, culture, listening, speaking, comprehension, travel, and personal interests, with a separate strand tied to ${primary.title} vocabulary and professional scenarios.`
      : `${language} develops as a full independent language program for everyday life, culture, listening, speaking, comprehension, travel, and personal interests.`;
  const electiveLine = selectedElectives.length
    ? `${electiveLabel}. Each selection becomes its own course, project, and completion record${primary ? ` connected to ${primary.title}` : ""}.`
    : `No elective studio selected.`;

  if (!primary) {
    const hasIndependentStudy = language !== "None" || selectedElectives.length > 0;
    document.querySelector("#advisorResult").innerHTML = `
      <span>Recommended pathway</span>
      <strong>${hasIndependentStudy ? "Independent study program" : "Still exploring"}</strong>
      <p>
        ${hasIndependentStudy
          ? "No career is required for this plan. Your selected language and elective courses will open as an academic portal with their own lessons, projects, and accurate completion tracking."
          : "No career is selected yet. Use the guidance inquiry, try job training, or browse the career menu without committing. Your portal will stay in exploration mode until you choose a study path."}
      </p>
      <div class="advisor-columns">
        <div><small>Your attention signals</small><b>${interestLine}</b></div>
        <div><small>Careers worth exploring</small><b>${careerShortlist}</b></div>
        <div><small>Language track</small><b>${languageLine}</b></div>
        <div><small>Elective courses</small><b>${electiveLine}</b></div>
        <div><small>Preferred contribution</small><b>${workStyleProfile.contribution}</b></div>
        <div><small>Best work setting</small><b>${workStyleProfile.environment}; ${workStyleProfile.collaboration.toLowerCase()}</b></div>
        <div><small>Learning and feedback rhythm</small><b>${workStyleProfile.pace}; ${workStyleProfile.feedback.toLowerCase()}</b></div>
        <div><small>Career values</small><b>${workStyleProfile.values}</b></div>
      </div>
    `;
    renderCareerSwitchPanel();
    updatePortalMode();
    saveState();
    return;
  }

  document.querySelector("#advisorResult").innerHTML = `
    <span>Recommended pathway</span>
    <strong>${primary.title}</strong>
    <p>
      Preview a custom career around ${primary.focus.toLowerCase()}. This plan is locked to ${primary.title}
      plus the language and elective choices selected below, without forcing unrelated classes.
    </p>
    <div class="advisor-columns">
      <div><small>Career focus</small><b>${primary.focus}</b></div>
      <div><small>Portfolio project</small><b>${primary.project}</b></div>
      <div><small>Language track</small><b>${languageLine}</b></div>
      <div><small>Elective courses</small><b>${electiveLine}</b></div>
      <div><small>Your attention signals</small><b>${interestLine}</b></div>
      <div><small>Related paths to compare</small><b>${careerShortlist}</b></div>
      <div><small>Preferred contribution</small><b>${workStyleProfile.contribution}</b></div>
      <div><small>Best work setting</small><b>${workStyleProfile.environment}; ${workStyleProfile.collaboration.toLowerCase()}</b></div>
      <div><small>Study strategy</small><b>${workStyleProfile.studyStrategy}</b></div>
      <div><small>Feedback and energy rhythm</small><b>${workStyleProfile.feedback}; ${workStyleProfile.energy.toLowerCase()}</b></div>
      <div><small>Career values</small><b>${workStyleProfile.values}</b></div>
      <div><small>Career package</small><b>Resume story, portfolio case study, project screenshots, and one interview explanation.</b></div>
    </div>
  `;
  renderCareerSwitchPanel();
  updatePortalMode();
  saveState();
}

function getLearningAnswers() {
  const answers = {};
  ["learnFirst", "retainBest", "confused"].forEach(name => {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    if (checked) answers[name] = checked.value;
  });
  return answers;
}

function calculateLearningProfile(answers) {
  const scores = { visual: 0, audio: 0, readwrite: 0, kinesthetic: 0 };
  Object.values(answers).forEach(value => {
    if (scores[value] !== undefined) scores[value] += 1;
  });
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!ranked[0] || ranked[0][1] === 0) return "";
  if (ranked[0][1] === ranked[1][1]) return "balanced";
  return ranked[0][0];
}

function careerUsesDatasetLab(career) {
  if (!career) return false;
  return /data|analyst|analytics|business intelligence|dashboard|metrics|game|product|research|cyber|software|ai|database|engineer|scientist|finance/i
    .test(`${career.title} ${career.focus}`);
}

function renderLearningProfile() {
  const profileKey = state.learningProfile;
  const result = document.querySelector("#learningResult");
  if (state.learningMode === "adaptive" && !profileKey) {
    result.innerHTML = `
      <span>Learning experience</span>
      <strong>Adaptive, multimodal learning</strong>
      <p>Your courses begin with visual examples, English-captioned video or audio, clear written guidance, and hands-on practice. The university adapts the mix as you complete lessons and show what helps you retain information.</p>
    `;
    return;
  }
  if (!profileKey || !learningProfiles[profileKey]) {
    result.innerHTML = `
      <span>Learning profile</span>
      <strong>Not assessed yet</strong>
      <p>Complete the quick assessment so University of FlowState can adapt courses, practice, and retention advice to how you learn.</p>
    `;
    return;
  }

  const profile = learningProfiles[profileKey];
  result.innerHTML = `
    <span>Learning profile</span>
    <strong>${profile.title}</strong>
    <p>${profile.courseAdaptation}</p>
    <div class="retention-plan">
      <small>Retention plan</small>
      <b>${profile.retention}</b>
    </div>
  `;
}

function saveLearningProfile(event) {
  const viewportAnchor = captureViewportAnchor(event?.currentTarget);
  const answers = getLearningAnswers();
  state.learningAnswers = answers;
  state.learningProfile = calculateLearningProfile(answers);
  renderLearningProfile();
  renderCourseCatalog();
  renderMediaStudio();
  renderCoursePlan();
  updatePortalMode();
  saveState();
  restoreViewportAnchor(viewportAnchor);
}

function updatePortalMode() {
  const context = getActiveCareerPlanContext();
  const activeCareer = getCareerByKey(state.activeCareer);
  const hasCareer = Boolean(activeCareer);
  const hasAcademicPath = hasAcademicProgram(context);
  const programTitle = hasCareer ? activeCareer.title : context.title;
  const progress = getAcademicProgress();
  const showDatasetLab = hasCareer && careerUsesDatasetLab(activeCareer);
  const language = context.language;
  const elective = formatSelectionList(context.electives);
  const learning = state.learningProfile ? learningProfiles[state.learningProfile] : null;

  document.querySelectorAll(".academic-only").forEach(element => {
    element.classList.toggle("hidden", !hasAcademicPath);
  });
  document.querySelectorAll(".career-only").forEach(element => {
    element.classList.toggle("hidden", !hasCareer);
  });
  document.querySelectorAll(".language-selection-only").forEach(element => {
    element.classList.toggle("hidden", !context.language);
  });
  document.querySelectorAll(".workforce-selection-only").forEach(element => {
    element.classList.toggle("hidden", !state.selectedJobTraining);
  });
  document.querySelector('#dataset')?.classList.toggle("hidden", !showDatasetLab);
  document.querySelector('a[href="#dataset"]')?.classList.toggle("hidden", !showDatasetLab);

  document.querySelector("#portalHeroTitle").textContent = hasCareer
    ? `${activeCareer.title} Academic Portal`
    : hasAcademicPath
      ? `${context.title} Academic Portal`
      : "Career Exploration Portal";

  document.querySelector("#portalHeroText").textContent = hasAcademicPath
    ? hasCareer
      ? `Your portal is an academic plan for ${activeCareer.title}${language ? ` with a full ${language} language track` : ""}${elective ? ` and ${elective}` : ""}${learning ? `, customized for a ${learning.title.toLowerCase()}` : ""}. Only the career, language, and elective courses you selected appear here.`
      : `Your portal is an independent academic plan for ${[language, elective].filter(Boolean).join(" and ")}${learning ? `, customized for a ${learning.title.toLowerCase()}` : ""}. Each selected subject has its own lessons, project, media, and completion record, with no career required.`
    : "Start with Raini Smith's guidance inquiry, explore job training, or choose a language and one or more electives. Select a career only when the fit feels real.";

  const heroActions = document.querySelectorAll(".hero-actions a");
  if (heroActions.length >= 2) {
    heroActions[0].textContent = hasAcademicPath ? "Enter classroom" : "Talk to Raini";
    heroActions[0].setAttribute("href", hasAcademicPath ? "#courses" : "#advisor");
    heroActions[1].textContent = hasAcademicPath ? "View study plan" : "Explore job training";
    heroActions[1].setAttribute("href", hasAcademicPath ? "#lesson-plan" : "#workforce");
  }

  document.querySelector(".metric-label").textContent = hasAcademicPath ? "Academic progress audit" : "Exploration status";
  document.querySelector("#dailyScore").textContent = hasAcademicPath ? `${progress.readiness}%` : "Open";
  document.querySelector(".meter span").style.width = hasAcademicPath ? `${progress.readiness}%` : "0%";
  document.querySelector(".hero-panel > span:nth-of-type(2)").textContent = hasAcademicPath
    ? `${progress.requirementsCompleted} of ${progress.requirementsTotal} requirements complete`
    : "No academic path chosen yet";
  const heroList = document.querySelectorAll(".hero-mini-list span");
  if (heroList.length >= 2) {
    heroList[0].textContent = "Raini Smith | Student Guidance";
    heroList[1].textContent = hasAcademicPath
      ? `${programTitle} work in progress`
      : "Job training paths available";
  }

  const campusCardTitle = document.querySelector(".campus-card-top strong");
  const campusCardText = document.querySelector(".campus-card p");
  const miniTranscriptCode = document.querySelector(".mini-transcript span");
  const miniTranscriptTitle = document.querySelector(".mini-transcript strong");
  const miniTranscriptMeta = document.querySelector(".mini-transcript small");
  if (campusCardTitle && campusCardText && miniTranscriptCode && miniTranscriptTitle && miniTranscriptMeta) {
    campusCardTitle.textContent = hasAcademicPath ? "Academic services" : "Exploration services";
    campusCardText.textContent = "Raini Smith | Guided inquiries for careers, course choices, learning support, language, electives, and path changes";
    miniTranscriptCode.textContent = hasAcademicPath ? "TERM 01" : "EXPLORE";
    miniTranscriptTitle.textContent = hasAcademicPath ? `${programTitle} plan` : "Choose your path";
    miniTranscriptMeta.textContent = hasAcademicPath ? "Academic portal active" : "No courses yet";
  }

  const termLabel = document.querySelector(".overview-grid article:nth-child(2) small");
  if (termLabel) termLabel.textContent = hasAcademicPath ? `${programTitle} Foundations` : "Career exploration";

  const overviewCards = document.querySelectorAll(".overview-grid article");
  if (overviewCards.length >= 5 && hasAcademicPath) {
    overviewCards[0].querySelector("strong").textContent = progress.status;
    overviewCards[0].querySelector("small").textContent = `${progress.courseCompletion}% course completion`;
    overviewCards[2].querySelector("strong").textContent = progress.readiness;
    overviewCards[2].querySelector("small").textContent = `${programTitle} progress review`;
    overviewCards[3].querySelector("strong").textContent = progress.creditsEarned;
    overviewCards[3].querySelector("small").textContent = `${progress.requirementsTotal} program credits required`;
    overviewCards[4].querySelector("small").textContent = hasCareer
      ? `${activeCareer.title} resume, interviews, and portfolio`
      : "Independent projects, reflections, and student showcase";
  }

  const gradeRing = document.querySelector(".grade-ring strong");
  const gradeRingShell = document.querySelector(".grade-ring");
  if (gradeRingShell) gradeRingShell.style.setProperty("--score", hasAcademicPath ? progress.readiness : 0);
  if (gradeRing) gradeRing.textContent = hasAcademicPath ? progress.readiness : 0;
  const gradeCardSmall = document.querySelector(".overview-grid article:nth-child(3) small");
  if (gradeCardSmall) gradeCardSmall.textContent = hasAcademicPath ? progress.gradeLabel : "No grade yet";

  const gradeRows = document.querySelectorAll(".grade-list div");
  if (gradeRows.length >= 4 && hasAcademicPath) {
    const stats = getTaskStats();
    const labProgress = getCourseProgress("SKILL 120").progress;
    const portfolioProgress = getCourseProgress("PORT 210").progress;
    const careerProgress = getCourseProgress("CAREER 400").progress;
    const electiveProgress = context.electives.length
      ? clampPercent(context.electives.reduce((sum, _, index) => sum + getCourseProgress(`ELECT ${251 + index}`).progress, 0) / context.electives.length)
      : 0;
    const languageProgress = context.language ? getCourseProgress("LANG 260").progress : 0;
    gradeRows[0].innerHTML = `<span>Assignments</span><strong>${stats.completed} / ${stats.total} complete</strong>`;
    gradeRows[1].innerHTML = hasCareer
      ? `<span>Practice labs</span><strong>${labProgress}% submitted</strong>`
      : `<span>Elective studios</span><strong>${electiveProgress}% complete</strong>`;
    gradeRows[2].innerHTML = hasCareer
      ? `<span>Portfolio</span><strong>${portfolioProgress}% complete</strong>`
      : `<span>Student showcase</span><strong>${progress.courseCompletion}% developing</strong>`;
    gradeRows[3].innerHTML = hasCareer
      ? `<span>Career studio</span><strong>${careerProgress}% ready</strong>`
      : `<span>Language track</span><strong>${context.language ? `${languageProgress}% complete` : "Not selected"}</strong>`;
  }

  const transcriptItems = document.querySelectorAll(".transcript-grid > div");
  if (transcriptItems.length >= 4 && hasAcademicPath) {
    transcriptItems[0].innerHTML = `
      <span>${hasCareer ? "Portfolio credits" : "Selected courses"}</span>
      <strong>${hasCareer ? `${getCourseProgress("PORT 210").progress}%` : buildCareerCourseCatalog().length}</strong>
      <small>${hasCareer ? `${activeCareer.title} proof and capstone progress` : `${formatSelectionList(context.electives) || context.language}`}</small>
    `;
    transcriptItems[1].innerHTML = `
      <span>${hasCareer ? "Practice labs" : "Assignments"}</span>
      <strong>${hasCareer ? `${getCourseProgress("SKILL 120").progress}%` : `${getTaskStats().completed}/${getTaskStats().total}`}</strong>
      <small>${hasCareer ? `${activeCareer.title} tools, scenarios, standards, and feedback cycles` : "Independent projects, practice, feedback, and revision"}</small>
    `;
    transcriptItems[2].innerHTML = `
      <span>${hasCareer ? "Career studio" : "Language and electives"}</span>
      <strong>${hasCareer ? `${getCourseProgress("CAREER 400").progress}%` : `${progress.courseCompletion}%`}</strong>
      <small>${hasCareer ? `${activeCareer.title} resume, profile, interview stories, and applications` : "Only the courses selected by the student are counted"}</small>
    `;
    transcriptItems[3].innerHTML = `
      <span>Capstone</span>
      <strong>${progress.requirementsCompleted}/${progress.requirementsTotal}</strong>
      <small>${progress.courseCompletion}% total course completion</small>
    `;
  }

  const datasetHeader = document.querySelector("#dataset .panel-header h3");
  const datasetEyebrow = document.querySelector("#dataset .panel-header .eyebrow");
  if (datasetHeader && datasetEyebrow && activeCareer) {
    datasetEyebrow.textContent = "Technical Lab";
    datasetHeader.textContent = `${activeCareer.title} Data Practice`;
  }

  const folders = document.querySelectorAll(".folder-list span");
  if (folders.length && activeCareer) {
    const pathLabel = sanitizePathLabel(activeCareer.title);
    folders[0].textContent = `01_${pathLabel}_Portfolio`;
    folders[1].textContent = `02_${pathLabel}_Practice_Labs`;
    folders[2].textContent = `03_${pathLabel}_Case_Studies`;
    folders[3].textContent = `04_${pathLabel}_Resume_Profile`;
    folders[4].textContent = `05_${pathLabel}_Interview_Practice`;
  }

  const roadmapItems = document.querySelectorAll(".roadmap > div");
  if (roadmapItems.length >= 5 && activeCareer) {
    roadmapItems[0].innerHTML = `<strong>Portfolio</strong><span>3 finished ${activeCareer.title} projects or training records with clear visuals and explanations</span>`;
    roadmapItems[1].innerHTML = `<strong>Tools</strong><span>${activeCareer.title} tools, workplace scenarios, quality standards, and beginner skill evidence</span>`;
    roadmapItems[2].innerHTML = `<strong>Career package</strong><span>${activeCareer.title} resume bullets, profile summary, portfolio proof, and application tracker</span>`;
    roadmapItems[3].innerHTML = `<strong>Interview readiness</strong><span>Mock explanations for ${activeCareer.title} choices, safety or ethics, client/team communication, and project decisions</span>`;
    roadmapItems[4].innerHTML = `<strong>Applications</strong><span>Weekly target list and tailored ${activeCareer.title} applications, apprenticeships, clients, or training opportunities</span>`;
  }

  const writingNotes = document.querySelectorAll(".analyst-note");
  if (writingNotes.length >= 2 && hasAcademicPath) {
    writingNotes[0].innerHTML = `
      <strong>${programTitle} insight</strong>
      <p>Your work should explain what you practiced, which standard or personal goal it served, what improved after feedback, and what the finished piece proves.</p>
    `;
    writingNotes[1].innerHTML = `
      <strong>${programTitle} next step</strong>
      <p>${hasCareer ? "Turn the project into one clear career action: apply, request feedback, build a stronger sample, contact a mentor, practice a workplace scenario, or prepare for training requirements." : "Choose one clear next action: revise the work, begin another selected project, deepen the language practice, ask for feedback, or add the artifact to your student showcase."}</p>
    `;
  }

  document.querySelector("#studentPortalMeta").textContent = currentUser
    ? `Office of Online Learning | ${currentUser.email} | ${hasAcademicPath ? programTitle : "Career Exploration"}`
    : "Office of Online Learning | Career Exploration";
  syncPortalViewAvailability();
  showPortalView(state.activePortalView || "dashboard", { saveSelection: false });
}

function renderCareerSwitchPanel() {
  const selectedKey = getSelectedCareerKey();
  const activeKey = state.activeCareer || "";
  const selectedCareer = getCareerByKey(selectedKey);
  const activeCareer = getCareerByKey(activeKey);
  const history = state.careerSwitchHistory || [];
  const isSame = selectedKey === activeKey;

  document.querySelector("#currentCareerStatus").innerHTML = `
    <span>Active career path</span>
    <strong>${activeCareer ? activeCareer.title : "Not chosen yet"}</strong>
    <p>${
      !selectedCareer
        ? "Choose a career above when you are ready, or keep using the advisor conversation first."
        : isSame
          ? "This is your current portal focus."
          : `Previewing ${selectedCareer.title}. Choose it when you want your portal to focus on this path.`
    }</p>
  `;

  document.querySelector("#switchCareerButton").textContent = !selectedCareer
    ? "Choose a career first"
    : isSame
      ? "Selected career is active"
      : activeCareer
        ? `Switch to ${selectedCareer.title}`
        : `Choose ${selectedCareer.title}`;
  document.querySelector("#switchCareerButton").disabled = !selectedCareer || isSame;

  const careerSaveStatus = document.querySelector("#careerSaveStatus");
  if (!activeCareer) {
    careerSaveStatus.textContent = "Choose a career to save it to your student account.";
  } else if (careerPathSaveStatus === "saving") {
    careerSaveStatus.textContent = `Saving ${activeCareer.title} to your student account...`;
  } else if (careerPathSaveStatus === "retrying") {
    careerSaveStatus.textContent = `${activeCareer.title} is saved on this device. Account sync will retry automatically.`;
  } else if (currentUser) {
    careerSaveStatus.textContent = `${activeCareer.title} is saved to ${currentUser.email}.`;
  } else {
    careerSaveStatus.textContent = `${activeCareer.title} will be saved when you create or sign in to an account.`;
  }

  document.querySelector("#careerHistory").innerHTML = history.length
    ? history.slice(-4).reverse().map(item => `
        <div>
          <small>${item.date}</small>
          <span>${item.from} to ${item.to}</span>
        </div>
      `).join("")
    : "<p>No career switches yet. Exploring does not erase your progress.</p>";
}

async function switchToSelectedCareer() {
  const viewportAnchor = captureViewportAnchor(
    document.querySelector("#switchCareerButton")
  );
  const selectedKey = getSelectedCareerKey();
  const activeKey = state.activeCareer || "";
  if (!selectedKey) return;
  if (selectedKey === activeKey) return;

  const previous = getCareerByKey(activeKey);
  const next = getCareerByKey(selectedKey);
  if (!next) return;
  state.careerSwitchHistory = state.careerSwitchHistory || [];
  state.careerSwitchHistory.push({
    from: previous ? previous.title : "Exploration",
    to: next.title,
    date: new Date().toLocaleDateString()
  });
  state.activeCareer = selectedKey;
  state.selectedCareer = document.querySelector("#careerGoal").value || selectedKey;
  state.customCareerTitle = document.querySelector("#customCareerTitle").value.trim();
  state.careerPathSavedAt = new Date().toISOString();
  careerPathSaveStatus = currentUser ? "saving" : "idle";
  renderAdvisorPlan();
  renderCourseCatalog();
  renderMediaStudio();
  renderCoursePlan();
  renderTimelinePlan();
  renderLesson();
  renderCard();
  renderTasks();
  updatePortalMode();
  showPortal("advisor", { preservePosition: true });
  saveState();
  restoreViewportAnchor(viewportAnchor);
  if (currentUser) await flushRemoteState();
  renderCareerSwitchPanel();
}

function scoreAdvisorThemes() {
  return scoreTextThemes(advisorChat.map(entry => entry.answer).join(" "));
}

const passionStudyOptions = {
  analytical: {
    languages: ["Japanese", "German", "Mandarin Chinese"],
    electives: ["AI tools and automation lab", "Psychology of motivation", "Entrepreneurship studio"]
  },
  creative: {
    languages: ["French", "Japanese", "Italian"],
    electives: ["Painting portfolio", "Photography lab", "Graphic design lab"]
  },
  performance: {
    languages: ["Japanese", "Spanish", "French"],
    electives: ["Voice acting project", "Drama club showcase", "Podcast production"]
  },
  service: {
    languages: ["American Sign Language", "Spanish", "Haitian Creole"],
    electives: ["Community leadership practicum", "Psychology of motivation", "Home economics and life skills"]
  },
  culture: {
    languages: ["Japanese", "Korean", "Spanish"],
    electives: ["Photography lab", "Creative writing workshop", "Podcast production"]
  },
  business: {
    languages: ["Spanish", "Mandarin Chinese", "Portuguese"],
    electives: ["Entrepreneurship studio", "Public speaking studio", "Debate and advocacy lab"]
  },
  technical: {
    languages: ["Japanese", "German", "Mandarin Chinese"],
    electives: ["AI tools and automation lab", "No-code app studio", "Robotics and maker lab"]
  },
  practical: {
    languages: ["Spanish", "American Sign Language", "French"],
    electives: ["Home economics and life skills", "Woodshop and practical making", "Community leadership practicum"]
  },
  science: {
    languages: ["Spanish", "Latin", "American Sign Language"],
    electives: ["Wellness and habit design", "Psychology of motivation", "Robotics and maker lab"]
  },
  trades: {
    languages: ["Spanish", "German", "American Sign Language"],
    electives: ["Woodshop and practical making", "Robotics and maker lab", "Entrepreneurship studio"]
  },
  wellness: {
    languages: ["Spanish", "American Sign Language", "French"],
    electives: ["Wellness and habit design", "Culinary culture project", "Home economics and life skills"]
  }
};

const advisorLanguageNames = [
  "Japanese", "Korean", "Spanish", "French", "Mandarin Chinese", "Cantonese", "Arabic", "German",
  "Dutch", "Swedish", "Norwegian", "Greek", "Hebrew", "Turkish", "Italian", "Portuguese", "Russian",
  "Polish", "Ukrainian", "Hindi", "Urdu", "Bengali", "Punjabi", "Vietnamese", "Tagalog", "Thai",
  "Indonesian", "Swahili", "Yoruba", "Haitian Creole", "American Sign Language", "Latin"
].sort(compareCatalogLabels);

function getPassionStudyRecommendations(themes = scoreAdvisorThemes()) {
  const top = themes.filter(theme => theme.score > 0).slice(0, 3);
  const answerText = advisorChat.map(entry => entry.answer).join(" ").toLowerCase();
  const explicitLanguages = advisorLanguageNames.filter(language =>
    answerText.includes(language.toLowerCase())
  );
  const themeOptions = top.map(theme => passionStudyOptions[theme.key]).filter(Boolean);
  const languages = [...new Set([
    ...explicitLanguages,
    ...themeOptions.flatMap(option => option.languages)
  ])].slice(0, 4);
  const electives = [...new Set(themeOptions.flatMap(option => option.electives))].slice(0, 6);

  return {
    languages: languages.length ? languages : ["Any language connected to your curiosity"],
    electives: electives.length ? electives : ["Choose electives after Raini identifies stronger interest patterns"]
  };
}

function buildAdvisorReflection(answer) {
  const scores = scoreAdvisorThemes();
  const top = scores.filter(theme => theme.score > 0).slice(0, 3);
  const nextQuestion = advisorQuestions[Math.min(Math.max(advisorChat.length - 1, 0), advisorQuestions.length - 1)];
  const inquiryKey = document.querySelector("#advisorInquiryType")?.value || state.selectedAdvisorInquiry || "career-discovery";
  const inquiryLabel = advisorInquiryLabels[inquiryKey] || advisorInquiryLabels["general-guidance"];
  const answerWords = answer.trim().split(/\s+/).filter(Boolean).length;
  const depthNote = answerWords < 18
    ? "I need a little more detail before I trust the pattern. Try giving me one real example, not just a career title."
    : "That gives me something real to work with.";

  if (!top.length) {
    return `${depthNote} I have this logged as ${inquiryLabel.toLowerCase()}. I am listening for repeated clues about careers, languages, cultures, and electives: what energizes you, what you protect, what you practice, and what kind of problems you keep returning to. ${nextQuestion}`;
  }

  const themeText = top.map(theme => theme.label.toLowerCase()).join(", ");
  const careerText = [...new Set(top.flatMap(theme => theme.careers))].slice(0, 5).join(", ");
  const studyRecommendations = getPassionStudyRecommendations(scores);
  return `${depthNote} For this ${inquiryLabel.toLowerCase()} inquiry, I am hearing signs of ${themeText}. Career possibilities: ${careerText}. Language possibilities: ${studyRecommendations.languages.join(", ")}. Elective possibilities: ${studyRecommendations.electives.join(", ")}. These are ideas to compare, not automatic selections. Now go one layer deeper: ${nextQuestion}`;
}

function renderAdvisorCaseStatus() {
  const count = advisorChat.length;
  const step = count === 0 ? 0 : count < 3 ? 1 : count < 5 ? 2 : 3;
  const status = ["Intake open", "Reflection in progress", "Options identified", "Action plan ready"][step];
  const next = [
    "Describe what brought you here",
    "Answer with specific life examples",
    "Compare career, language, and elective signals",
    "Choose a practical program mix"
  ][step];
  const caseId = `GUIDANCE-${String(state.advisorCaseNumber || 1).padStart(3, "0")}`;
  document.querySelector("#advisorCaseId").textContent = caseId;
  document.querySelector("#advisorCaseStatus").textContent = status;
  document.querySelector("#advisorCaseNext").textContent = next;
  document.querySelectorAll(".advisor-case-flow span").forEach((item, index) => {
    item.classList.toggle("active", index <= step);
  });
}

function renderAdvisorChat() {
  const log = document.querySelector("#advisorChatLog");
  log.innerHTML = `
    <div class="chat-message advisor">
      <span>Raini Smith | Student Guidance</span>
      <p>Welcome to Student Guidance. What would you like help understanding about your career direction, language interests, electives, or next path?</p>
    </div>
  `;

  advisorChat.forEach(entry => {
    const student = document.createElement("div");
    student.className = "chat-message student";
    student.innerHTML = `<span>You | ${escapeHTML(advisorInquiryLabels[entry.inquiryType] || advisorInquiryLabels["general-guidance"])}</span><p>${escapeHTML(entry.answer)}</p>`;
    log.appendChild(student);

    const advisor = document.createElement("div");
    advisor.className = "chat-message advisor";
    advisor.innerHTML = `<span>Raini Smith</span><p>${escapeHTML(entry.reply)}</p>`;
    log.appendChild(advisor);
  });

  log.scrollTop = log.scrollHeight;
  renderAdvisorCaseStatus();
}

function renderPassionProfile() {
  const scores = scoreAdvisorThemes();
  const top = scores.filter(theme => theme.score > 0).slice(0, 3);
  const profile = document.querySelector("#passionProfile");
  const selectedInterest = getInterestRecommendation(state.selectedPassions || []);

  if (!top.length) {
    if (selectedInterest.labels.length) {
      const selectedThemeScores = scoreTextThemes(selectedInterest.labels.join(" "));
      const studyRecommendations = getPassionStudyRecommendations(selectedThemeScores);
      profile.innerHTML = `
        <span>Detailed interest profile</span>
        <strong>${selectedInterest.labels.slice(0, 3).join(" + ")}</strong>
        <p>Your individual attention choices are now shaping career, language, and elective possibilities. The conversation will test which signals are strongest in real life.</p>
        <div class="passion-study-grid">
          <div>
            <small>Career possibilities</small>
            <div class="profile-tags">${selectedInterest.careers.slice(0, 6).map(career => `<span>${career}</span>`).join("")}</div>
          </div>
          <div>
            <small>Language possibilities</small>
            <div class="profile-tags">${studyRecommendations.languages.map(language => `<span>${language}</span>`).join("")}</div>
          </div>
          <div>
            <small>Elective possibilities</small>
            <div class="profile-tags">${studyRecommendations.electives.map(elective => `<span>${elective}</span>`).join("")}</div>
          </div>
        </div>
        <p class="passion-choice-note">Choose only what fits you in the study builder. Raini's suggestions never enroll you automatically.</p>
      `;
      return;
    }
    profile.innerHTML = `
      <span>Emerging passion profile</span>
      <strong>Not enough answers yet</strong>
      <p>Answer a few questions and Raini will look for career, language, and elective possibilities that fit your interests and goals.</p>
    `;
    return;
  }

  const primary = top[0];
  const supporting = top.slice(1).map(theme => theme.label).join(" + ") || "still developing";
  const careers = [...new Set([
    ...top.flatMap(theme => theme.careers),
    ...selectedInterest.careers
  ])].slice(0, 8);
  const studyRecommendations = getPassionStudyRecommendations(scores);

  profile.innerHTML = `
    <span>Emerging passion profile</span>
    <strong>${primary.label}</strong>
    <p>Your answers currently point toward <b>${primary.label.toLowerCase()}</b>, with supporting signals in ${supporting.toLowerCase()}.</p>
    <div class="passion-study-grid">
      <div>
        <small>Career possibilities</small>
        <div class="profile-tags">${careers.map(career => `<span>${career}</span>`).join("")}</div>
      </div>
      <div>
        <small>Language possibilities</small>
        <div class="profile-tags">${studyRecommendations.languages.map(language => `<span>${language}</span>`).join("")}</div>
      </div>
      <div>
        <small>Elective possibilities</small>
        <div class="profile-tags">${studyRecommendations.electives.map(elective => `<span>${elective}</span>`).join("")}</div>
      </div>
    </div>
    <p class="passion-choice-note">Choose only what fits you in the study builder. Raini's suggestions never enroll you automatically.</p>
  `;
}

function submitAdvisorAnswer(answer) {
  const cleanAnswer = answer.trim();
  if (!cleanAnswer) return;
  const inquiryType = document.querySelector("#advisorInquiryType").value;
  state.selectedAdvisorInquiry = inquiryType;

  advisorChat.push({
    answer: cleanAnswer,
    inquiryType,
    reply: ""
  });
  advisorChat[advisorChat.length - 1].reply = buildAdvisorReflection(cleanAnswer);

  renderAdvisorChat();
  renderPassionProfile();
  saveState();
}

function renderWorkforceTraining() {
  const selected = document.querySelector("#jobTrainingTrack").value;
  const customTitle = document.querySelector("#customJobTrainingTitle").value.trim();
  state.selectedJobTraining = selected;
  state.customJobTrainingTitle = customTitle;
  if (!selected) {
    document.querySelector("#workforceResult").innerHTML = `
      <span>Training plan</span>
      <strong>No job training selected</strong>
      <p>Add job training whenever it serves your goals. It will remain separate from your career, language, and elective choices.</p>
    `;
    saveState();
    return;
  }
  const job = selected === "customJob"
    ? getCustomJobTrainingBlueprint(customTitle)
    : jobTrainingBlueprints[selected] || jobTrainingBlueprints.sales;
  const jobVideo = getJobTrainingVideo(job, selected);

  document.querySelector("#workforceResult").innerHTML = `
    <span>Training plan</span>
    <strong>${escapeHTML(job.title)}</strong>
    <p>${escapeHTML(job.mission)}</p>
    <div class="workforce-steps">
      <div>
        <small>First 7 days</small>
        <b>${escapeHTML(job.first)}</b>
      </div>
      <div>
        <small>How to stand out</small>
        <b>${escapeHTML(job.standout)}</b>
      </div>
      <div>
        <small>Promotion proof</small>
        <b>${escapeHTML(job.grow)}</b>
      </div>
      <div>
        <small>Universal skill</small>
        <b>Be reliable, communicate early, stay coachable, and turn every shift into evidence of growth.</b>
      </div>
    </div>
    <div class="workforce-video">
      <div class="workforce-video-heading">
        <span>English job video</span>
        <strong>${escapeHTML(job.title)}: workplace overview</strong>
        <p>Watch the closest official occupational match, ${escapeHTML(jobVideo.title)}, to study daily work, expectations, skills, and workplace conditions.</p>
      </div>
      <video controls playsinline preload="metadata" crossorigin="anonymous" poster="${jobVideo.poster}">
        <source src="${jobVideo.src}" type="video/mp4" />
        <track src="${jobVideo.captions}" kind="captions" srclang="en" label="English" default />
        Your browser cannot play this MP4 video. Use the official source link below.
      </video>
      <p class="media-language-note"><b>Language:</b> English audio with English captions on by default.</p>
      <p class="media-credit">
        Official occupational video:
        <a href="${jobVideo.source}" target="_blank" rel="noreferrer">${escapeHTML(jobVideo.title)}</a>
        from CareerOneStop, sponsored by the U.S. Department of Labor.
      </p>
    </div>
  `;
  saveState();
}

function showDisclaimerIfNeeded() {
  const modal = document.querySelector("#disclaimerModal");
  if (!modal) return;
  modal.classList.toggle("hidden", localStorage.getItem(disclaimerKey) === "accepted");
}

function acceptDisclaimer() {
  localStorage.setItem(disclaimerKey, "accepted");
  document.querySelector("#disclaimerModal")?.classList.add("hidden");
}

function renderPortal() {
  ensureLatestSavedPlan();
  renderRows();
  renderCourseCatalog();
  renderMediaStudio();
  renderCoursePlan();
  renderTimelinePlan();
  renderLesson();
  renderTasks();
  renderCard();
  renderAdvisorPlan();
  renderLearningProfile();
  renderAdvisorChat();
  renderPassionProfile();
  renderWorkforceTraining();
  updateMetrics();
  updateProgress();
  updatePortalMode();
  renderFlowStateConnectionStatus();
}

document.querySelectorAll(".lesson-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".lesson-tab").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderLesson(button.dataset.lesson);
  });
});

document.querySelector("#currentLessonAction").addEventListener("click", event => {
  const button = event.target.closest("[data-open-current-lesson]");
  if (!button) return;
  const lessonKey = button.dataset.lessonKey || "day1";
  const courseCode = button.dataset.courseCode || "";
  const courseTitle = button.dataset.courseTitle || "Career exploration";
  launchCourseLesson(courseCode, courseTitle, lessonKey);
});

document.querySelector("#courseGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-open-course-lesson]");
  if (!button) return;
  launchCourseLesson(
    button.dataset.courseCode || "",
    button.dataset.courseTitle || "Current course",
    button.dataset.lessonKey || "day1"
  );
});

document.querySelector("#activeLessonSession").addEventListener("click", event => {
  if (!event.target.closest("[data-open-lesson-activity]")) return;
  openPortalTarget("assignments");
});

document.addEventListener("submit", event => {
  const form = event.target.closest("[data-lesson-assessment]");
  if (!form) return;
  event.preventDefault();
  const answer = form.querySelector('input[type="radio"]:checked');
  const feedback = form.querySelector(".lesson-assessment-feedback");
  if (!answer) {
    feedback.textContent = "Choose an answer before submitting the test.";
    return;
  }
  const checkKey = form.dataset.checkKey;
  const correctAnswer = Number(form.dataset.correctAnswer);
  const passed = Number(answer.value) === correctAnswer;
  state.lessonChecks = state.lessonChecks || {};
  state.lessonChecks[checkKey] = { passed, submittedAt: new Date().toISOString() };
  feedback.textContent = passed
    ? "Passed. You can now open the next activity and apply this lesson."
    : "Not yet. Re-read the lesson, then try the test again.";
  saveState();
});

document.querySelector("#flashcard").addEventListener("click", () => {
  revealed = !revealed;
  renderCard();
});

document.querySelector("#flashcard").addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealed = !revealed;
    renderCard();
  }
});

document.querySelector("#againCard").addEventListener("click", () => {
  revealed = false;
  cardIndex = (cardIndex + 1) % getCurrentCardDeck().length;
  renderCard();
  saveState();
});

document.querySelector("#knowCard").addEventListener("click", () => {
  revealed = false;
  state.knownCards += 1;
  cardIndex = (cardIndex + 1) % getCurrentCardDeck().length;
  renderCourseCatalog();
  renderCard();
  updateProgress();
  updatePortalMode();
  saveState();
});

document.querySelector("#resetPlan").addEventListener("click", () => {
  state.taskCareerKey = "";
  state.tasks = buildCareerTasks().map(task => ({ ...task, done: false }));
  state.knownCards = 0;
  syncTasksToActiveCareer();
  renderCourseCatalog();
  renderTasks();
  renderCard();
  updateProgress();
  updatePortalMode();
  saveState();
});

function refreshAdvisorProgram(anchorElement = document.activeElement) {
  const viewportAnchor = captureViewportAnchor(anchorElement);
  renderAdvisorPlan();
  renderCourseCatalog();
  renderMediaStudio();
  renderCoursePlan();
  renderTimelinePlan();
  renderLesson();
  renderTasks();
  updatePortalMode();
  saveState();
  updateElectiveCatalogStatus();
  restoreViewportAnchor(viewportAnchor);
}

renderElectiveCatalog();

document.querySelector("#advisorForm").addEventListener("submit", event => {
  event.preventDefault();
  refreshAdvisorProgram(event.submitter || event.currentTarget);
});

document.querySelector("#electiveSearch").addEventListener("input", event => {
  filterElectiveCatalog(event.currentTarget.value);
});

document.querySelector("#clearElectives").addEventListener("click", event => {
  document.querySelectorAll('input[name="elective"]:checked').forEach(input => {
    input.checked = false;
  });
  refreshAdvisorProgram(event.currentTarget);
});

document.querySelectorAll('#advisorForm input:not(#electiveSearch), #advisorForm select').forEach(control => {
  control.addEventListener("change", () => {
    refreshAdvisorProgram(control);
    renderPassionProfile();
    renderCard();
  });
});

document.querySelector("#switchCareerButton").addEventListener("click", switchToSelectedCareer);

document.querySelector("#learningForm").addEventListener("submit", event => {
  event.preventDefault();
  saveLearningProfile(event);
});

document.querySelectorAll('#learningForm input').forEach(control => {
  control.addEventListener("change", saveLearningProfile);
});

document.querySelector("#advisorChatForm").addEventListener("submit", event => {
  event.preventDefault();
  submitAdvisorAnswer(document.querySelector("#advisorAnswer").value);
  document.querySelector("#advisorAnswer").value = "";
});

document.querySelector("#resetAdvisorChat").addEventListener("click", () => {
  advisorChat = [];
  state.advisorCaseNumber = (state.advisorCaseNumber || 1) + 1;
  renderAdvisorChat();
  renderPassionProfile();
  saveState();
});

document.querySelector("#advisorInquiryType").addEventListener("change", event => {
  state.selectedAdvisorInquiry = event.target.value;
  saveState();
});

document.querySelector("#jobTrainingTrack").addEventListener("change", renderWorkforceTraining);
document.querySelector("#customJobTrainingTitle").addEventListener("input", renderWorkforceTraining);
document.querySelector("#acceptDisclaimer").addEventListener("click", acceptDisclaimer);
mobileCatalogMedia.addEventListener("change", syncElectiveCatalogDisclosure);

document.querySelectorAll(".mobile-account-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const actions = document.querySelector(`#${toggle.getAttribute("aria-controls")}`);
    if (!actions) return;
    const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    actions.classList.toggle("mobile-open", shouldOpen);
  });
});

document.querySelector("#portalApp").addEventListener("click", event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || !event.currentTarget.contains(link)) return;
  const targetId = link.getAttribute("href").slice(1);
  if (!portalTargetViews[targetId]) return;
  event.preventDefault();
  openPortalTarget(targetId);
});

document.querySelector("#mobilePortalNavigation").addEventListener("change", event => {
  showPortalView(event.currentTarget.value, { scrollToTop: true });
});

document.querySelector("#portalDashboardButton").addEventListener("click", () => {
  showPortalView("dashboard", { scrollToTop: true });
});

document.querySelector("#authPanel").addEventListener("submit", event => {
  event.preventDefault();
  signInAccount();
});

connectPasswordVisibility("showAuthPassword", "authPassword");
connectPasswordVisibility("showDeleteAccountPassword", "deleteAccountPassword");

document.querySelector("#createAccount").addEventListener("click", createAccount);

document.querySelector("#signOutButton").addEventListener("click", signOut);
document.querySelector("#introSignOut").addEventListener("click", signOut);
document.querySelector("#deleteAccountButton").addEventListener("click", openDeleteAccountDialog);
document.querySelector("#introDeleteAccount").addEventListener("click", openDeleteAccountDialog);
document.querySelector("#deleteAccountForm").addEventListener("submit", deleteCurrentAccount);
document.querySelector("#cancelDeleteAccount").addEventListener("click", closeDeleteAccountDialog);
document.querySelector("#accountDeleteModal").addEventListener("click", event => {
  if (event.target === event.currentTarget) closeDeleteAccountDialog();
});
document.querySelector("#importToFlowStateButton").addEventListener("click", openFlowStateConnectDialog);
document.querySelector("#introImportToFlowState").addEventListener("click", openFlowStateConnectDialog);
document.querySelector("#cancelFlowStateConnect").addEventListener("click", closeFlowStateConnectDialog);
document.querySelector("#openFlowStateApp").addEventListener("click", launchFlowStateConnection);
window.addEventListener("message", handleFlowStateImportMessage);
document.querySelector("#flowstateConnectModal").addEventListener("click", event => {
  if (event.target === event.currentTarget) closeFlowStateConnectDialog();
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!document.querySelector("#accountDeleteModal").classList.contains("hidden")) closeDeleteAccountDialog();
  if (!document.querySelector("#flowstateConnectModal").classList.contains("hidden")) closeFlowStateConnectDialog();
});

document.querySelector("#introContinue").addEventListener("click", event => {
  const targetId = event.currentTarget.dataset.target || "campus";
  showPortal(targetId, { restorePosition: targetId === "campus" });
});

document.querySelector("#introCareerPath").addEventListener("click", () => {
  document.querySelector("#pathIntroShell").dataset.initialCareer = "true";
  startEnrollment("career");
});

document.querySelector("#introLanguagePath").addEventListener("click", () => {
  document.querySelector("#pathIntroShell").dataset.initialCareer = "false";
  startEnrollment("language");
});

document.querySelector("#introElectivePath").addEventListener("click", () => {
  document.querySelector("#pathIntroShell").dataset.initialCareer = "false";
  startEnrollment("electives");
});

document.querySelector("#introJobPath").addEventListener("click", () => {
  document.querySelector("#pathIntroShell").dataset.initialCareer = "false";
  startEnrollment("job");
});

document.querySelector("#introPassionPath").addEventListener("click", () => {
  document.querySelector("#pathIntroShell").dataset.initialCareer = "false";
  document.querySelector("#advisorInquiryType").value = "career-discovery";
  enterPortal("advisor", "advisorAnswer");
});

document.querySelector("#enrollmentBack").addEventListener("click", () => {
  if (enrollmentStepIndex > 0) enrollmentStepIndex -= 1;
  renderEnrollmentStep();
});

document.querySelector("#enrollmentContinue").addEventListener("click", () => {
  if (!syncEnrollmentChoicesToPlan()) return;
  if (finishEnrollmentAfterCurrentStep && enrollmentSteps[enrollmentStepIndex] === "career") {
    finishEnrollment("adaptive");
    return;
  }
  if (enrollmentStepIndex < enrollmentSteps.length - 1) enrollmentStepIndex += 1;
  renderEnrollmentStep();
});

document.querySelector("#enrollmentSkip").addEventListener("click", () => {
  if (enrollmentSteps[enrollmentStepIndex] === "learning") {
    finishEnrollment("adaptive");
    return;
  }
  if (enrollmentStepIndex < enrollmentSteps.length - 1) enrollmentStepIndex += 1;
  renderEnrollmentStep();
});

document.querySelectorAll("[data-learning-mode]").forEach(button => {
  button.addEventListener("click", () => finishEnrollment(button.dataset.learningMode));
});

document.querySelector("#enrollmentElectiveSearch").addEventListener("input", event => {
  renderEnrollmentElectives(event.currentTarget.value);
});

function syncEnrollmentCustomCareerField() {
  const isCustom = document.querySelector("#enrollmentCareer").value === "custom";
  document.querySelector("#enrollmentCustomCareerField").classList.toggle("hidden", !isCustom);
  if (isCustom) document.querySelector("#enrollmentCustomCareer").focus();
}

document.querySelector("#enrollmentCareer").addEventListener("change", syncEnrollmentCustomCareerField);

document.querySelector("#enrollmentElectiveChoices").addEventListener("change", event => {
  const input = event.target.closest("[data-enrollment-elective]");
  if (!input) return;
  const advisorInput = [...document.querySelectorAll('input[name="elective"]')]
    .find(option => option.value === input.value);
  if (advisorInput) advisorInput.checked = input.checked;
});

document.querySelectorAll("[data-enrollment-action]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector("#pathIntroShell").dataset.initialCareer = "false";
    const action = event.currentTarget.dataset.enrollmentAction;
    startEnrollment(
      action === "language" ? "language"
        : action === "electives" ? "electives"
          : action === "job" ? "job"
            : action === "learning" ? "learning"
              : "career"
    );
  });
});

document.querySelector("#previewAdvisorForm").addEventListener("submit", event => {
  event.preventDefault();
  renderPreviewAdvisor(document.querySelector("#previewAdvisorAnswer").value);
});

document.querySelector("#skipToCareer").addEventListener("click", () => {
  document.querySelector("#authPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  setAuthMessage("Sign in or create an account, then your portal will open at Career Advisor.");
  sessionStorage.setItem("flowstate-university-login-target", "advisor");
});

document.querySelector("#skipToJobs").addEventListener("click", () => {
  document.querySelector("#authPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  setAuthMessage("Sign in or create an account, then your portal will open at Job Training.");
  sessionStorage.setItem("flowstate-university-login-target", "workforce");
});

window.addEventListener("pagehide", () => {
  capturePortalPosition();
  if (!currentUser || !pendingRemoteState || !navigator.sendBeacon) return;
  navigator.sendBeacon(
    "/api/portal-state",
    new Blob(
      [JSON.stringify({ portalState: pendingRemoteState })],
      { type: "application/json" }
    )
  );
});

window.addEventListener("online", () => {
  if (pendingRemoteState) flushRemoteState();
});

window.addEventListener("scroll", () => {
  if (
    suppressPortalScrollTracking
    || !currentUser
    || document.querySelector("#portalApp").classList.contains("hidden")
  ) {
    return;
  }
  window.clearTimeout(portalScrollSaveTimer);
  portalScrollSaveTimer = window.setTimeout(capturePortalPosition, 650);
}, { passive: true });

renderLesson("day1");
populateExpandedPathOptions();
showDisclaimerIfNeeded();
initializeAccountSession();
