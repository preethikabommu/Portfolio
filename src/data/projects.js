const GITHUB_PROFILE = 'https://github.com/preethikabommu';

// Opens the profile's repository list filtered by name. Used for capstone
// repos whose exact URL isn't confirmed yet — swap in the direct repo URL
// (e.g. `${GITHUB_PROFILE}/FreshBasket`) once you have it.
const repoSearch = (name) => `${GITHUB_PROFILE}?tab=repositories&q=${encodeURIComponent(name)}`;

export const PROJECT_CATEGORIES = {
  capstone: 'Capstone Projects',
  personal: 'Personal Projects',
};

/**
 * hue      – drives the cover-art gradient of the card
 * features – key features (first three show on the card, all in the detail dialog)
 * live     – optional demo link
 */
export const projects = [
  // ---------------------------------------------------------------- Capstone
  {
    id: 'freshbasket',
    type: 'capstone',
    title: 'FreshBasket',
    category: 'Full-Stack Capstone',
    episode: 'CAPSTONE 01',
    description:
      'Full-stack online grocery platform where customers browse fresh produce, build a basket and check out, backed by a REST API and a managed catalogue.',
    features: [
      'Product catalogue with search and category filters',
      'Cart and order flow with secure user authentication',
      'REST API with an admin-managed inventory',
    ],
    tags: ['React.js', 'Spring Boot', 'PostgreSQL'],
    github: repoSearch('FreshBasket'),
    hue: 285,
  },
  {
    id: 'lendwise',
    type: 'capstone',
    title: 'LendWise',
    category: 'FinTech Capstone',
    episode: 'CAPSTONE 02',
    description:
      'Lending platform that helps borrowers compare loan options and track repayments, with clear dashboards for applications and balances.',
    features: [
      'Loan application and approval workflow',
      'Repayment schedule and balance tracking',
      'Role-based access for borrowers and lenders',
    ],
    tags: ['React.js', 'Spring Boot', 'MySQL'],
    github: repoSearch('LendWise'),
    hue: 305,
  },
  {
    id: 'meridian',
    type: 'capstone',
    title: 'Meridian',
    category: 'Capstone Project',
    episode: 'CAPSTONE 03',
    description:
      'End-to-end capstone application built with a modern full-stack architecture, from database design and APIs to a polished responsive interface.',
    features: [
      'Modular REST API with validated requests',
      'Responsive, accessible user interface',
      'Containerised for reliable cloud deployment',
    ],
    tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
    github: repoSearch('Meridian'),
    hue: 325,
  },

  // ---------------------------------------------------------------- Personal
  {
    id: 'careerly-ai',
    type: 'personal',
    title: 'Careerly AI',
    category: 'Intelligent Career Platform',
    episode: 'S01 E01',
    match: '99%',
    description:
      'AI-driven platform offering personalized industry insights, interview prep, and mock quizzes — with 50+ test users onboarded.',
    features: [
      'Personalized industry insights',
      'Interview preparation and mock quizzes',
      '50+ test users onboarded',
    ],
    tags: ['Next.js', 'AI API', 'REST APIs', 'MySQL'],
    github: 'https://github.com/preethikabommu/Careerly-AI',
    live: 'https://careerly-ai-nine.vercel.app/',
    hue: 270,
  },
  {
    id: 'holidayhive',
    type: 'personal',
    title: 'HolidayHive',
    category: 'Full-Stack Web Application',
    episode: 'S01 E02',
    match: '98%',
    description:
      'Airbnb-inspired property booking platform with authentication, listings, and booking workflows serving 100+ test users.',
    features: [
      'Authentication, listings and booking workflows',
      'REST APIs with image-upload support',
      'Booking confirmation and secure profile management',
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/preethikabommu/HolidayHive',
    live: 'https://holidayhive-live.onrender.com/',
    hue: 335,
  },
  {
    id: 'airfare-prediction',
    type: 'personal',
    title: 'AirFare Prediction System',
    category: 'Machine Learning & Analytics',
    episode: 'S01 E03',
    match: '97%',
    description:
      'Random Forest pricing model achieving high precision in airfare estimation with rich data visualizations.',
    features: [
      'Random Forest pricing model',
      'High-precision airfare estimation',
      'Rich data visualizations',
    ],
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/preethikabommu/AirFare_Prediction',
    hue: 295,
  },
  {
    id: 'credit-card-fraud',
    type: 'personal',
    title: 'Credit Card Fraud Detection',
    category: 'Machine Learning & Analytics',
    episode: 'S01 E04',
    match: '99%',
    description:
      'Logistic Regression fraud detector on imbalanced transaction data using under-sampling and feature scaling — 95% training, 91% test accuracy catching fraudulent payments early.',
    features: [
      'Logistic Regression on imbalanced transaction data',
      'Under-sampling and feature scaling',
      '95% training and 91% test accuracy',
    ],
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/preethikabommu/CreditcardFraud',
    hue: 315,
  },
];
