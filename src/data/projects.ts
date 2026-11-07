import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Edu Poribar",
    href: "/projects/edu-poribar",
    image: "/images/eduporibar.jpeg",
    tags: ["Flutter", "E-learning", "10K+ Downloads", "4.6 Rating"],
  },
  {
    index: 1,
    title: "Beestera Soccer",
    href: "/projects/beestera-soccer",
    image: "/images/beestera.jpeg",
    tags: ["Flutter", "Android", "iOS", "Video Learning"],
  },
  {
    index: 2,
    title: "Urban Koala",
    href: "/projects/urban-koala",
    image: "/images/urban.jpeg",
    tags: ["Marketplace", "Maps", "Booking", "Payments"],
  },
  {
    index: 3,
    title: "Sleep Cast",
    href: "/projects/sleep-cast",
    image: "/images/sleepcast.jpeg",
    tags: [
      "Audio Streaming",
      "Offline Mode",
      "Sleep Timer",
      "In-App Purchases",
    ],
  },
  {
    index: 4,
    title: "Wood Machinery",
    href: "/projects/wood-machinery",
    image: "/images/wood.jpeg",
    tags: ["E-Commerce", "REST API", "Live Tracking", "Industrial Tools"],
  },
];

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  slug: string;
  category: string;
  tagline?: string;
  rating?: string;
  downloads?: string;
  appCategory?: string;
  image?: string;
  description: string;
  fullOverview?: string;
  problemSolution?: {
    problem: string;
    solution: string;
  };
  metrics?: ProjectMetric[];
  technologies: string[];
  features?: ProjectFeature[];
  technicalHighlights?: string[];
  contributions: string[];
  links: { label: string; href: string }[];
}

export const PROJECTS_CARD: Project[] = [
  {
    name: "Edu Poribar",
    slug: "edu-poribar",
    category: "Production E-learning & Exam App",
    tagline:
      "A complete smart educational management and examination ecosystem for students, parents, and teachers.",
    rating: "4.6 ★",
    downloads: "10K+ Downloads",
    appCategory: "Education · E-Learning",
    image: "/images/eduporibar.jpeg",
    description:
      "A production learning platform with live classes, recorded courses, offline content, video streaming, course enrollment, and real-time MCQ and written examination results. The app has 10K+ downloads and a 4.6 Play Store rating.",
    fullOverview:
      "Edu Poribar is an end-to-end EdTech platform in Bangladesh empowering over 10,000+ registered learners. The app bridges the gap between students, educators, and parents by offering high-speed adaptive video lectures, secure offline downloads, interactive live batch enrollment, real-time computerized examinations, instant auto-grading, and subject-wise merit rankings.",
    problemSolution: {
      problem:
        "Students in remote and urban areas frequently face unstable internet connectivity, lack of structured exam simulations, delayed paper evaluations, and fragmented communication between parents and institutions.",
      solution:
        "Engineered an offline-first Flutter application featuring encrypted local video caching, real-time sync with REST APIs, automated timed examination engines with instant grading, and automated Firebase push notifications for parents and students.",
    },
    metrics: [
      { label: "Active Downloads", value: "10K+" },
      { label: "Store Rating", value: "4.6 ★" },
      { label: "Exams Conducted", value: "50K+" },
      { label: "Crash-Free Rate", value: "99.8%" },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "REST APIs",
      "Offline Storage",
      "Video Streaming",
      "Firebase FCM",
      "Clean Architecture",
    ],
    features: [
      {
        title: "Live & Recorded Video Streaming",
        description:
          "High-definition video lectures with adaptive bitrates, playback speed controls (0.5x - 2x), and automatic resume functionality.",
      },
      {
        title: "Encrypted Offline Study Mode",
        description:
          "Allows students to securely download video lectures and PDF lecture sheets locally to continue studying without active internet access.",
      },
      {
        title: "Real-Time MCQ & Written Examination",
        description:
          "Timed online examination system with negative marking, instant computerized evaluations, detailed answer explanation sheets, and nationwide leaderboards.",
      },
      {
        title: "Student Progress & Analytics Dashboard",
        description:
          "Visual performance metrics comparing student test scores, chapter-wise strengths, attendance records, and personal growth charts.",
      },
      {
        title: "Course Enrollment & Payment Integration",
        description:
          "Frictionless course discovery and digital checkout supporting mobile financial services (bKash, Nagad) with instant batch access.",
      },
      {
        title: "Parent & Teacher Portal",
        description:
          "Real-time attendance logs, exam schedule updates, routine notifications, and direct messaging between teachers and parents.",
      },
    ],
    technicalHighlights: [
      "Built with Clean Architecture strictly separating Presentation, Domain, and Data layers for robust testability and modularity.",
      "Reactive state management using BLoC/Cubit ensuring predictable, bug-free state transitions during complex timed exams.",
      "Custom Dio HTTP networking layer with JWT token refresh interceptors, connection retries, and unified error handling.",
      "Encrypted local database using Hive and SQLite for instant offline syllabus and exam session persistence.",
      "Integrated Firebase Cloud Messaging (FCM) background services for real-time exam notifications and class reminders.",
    ],
    contributions: [
      "Architected and engineered the mobile client application from scratch using Flutter and clean architecture.",
      "Built custom video player modules with background download managers and offline storage encryption.",
      "Developed the real-time exam engine handling multi-option MCQs, timer sync, and offline answer persistence.",
      "Integrated RESTful API endpoints and optimized network data payloads, improving screen load speeds by 40%.",
      "Maintained the production release lifecycle on Google Play Store with automated crash tracking via Sentry.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.edu_poribar.app",
      },
    ],
  },
  {
    name: "Beestera Soccer",
    slug: "beestera-soccer",
    category: "Football Training & Athletics Platform",
    tagline:
      "Developing Great Players, Better People — A professional soccer training app with drill video libraries and practice leaderboards.",
    rating: "5.0 ★",
    downloads: "500+ Athletes",
    appCategory: "Sports · Athletic Training",
    image: "/images/beestera.jpeg",
    description:
      "A cross-platform football training app with structured video learning, practice submissions, and a dynamic leaderboard. Contributed to responsive UI, backend integration, debugging, and releases on both major app stores.",
    fullOverview:
      "Beestera Soccer is a specialized athletic coaching application created for soccer academies, coaches, and young players. It delivers structured video drill curricula, technical ball mastery challenges, video submission reviews, and gamified club leaderboards to turn independent practice into habit-forming development.",
    problemSolution: {
      problem:
        "Athletes lack structured guidance when practicing outside team training sessions, while coaches struggle to track independent drills, practice consistency, and technical skill development.",
      solution:
        "Created an engaging cross-platform mobile application where players can access categorized drills, record and submit practice footage, earn badges, and compete with peers on dynamic club leaderboards.",
    },
    metrics: [
      { label: "App Rating", value: "5.0 ★" },
      { label: "Store Availability", value: "iOS & Android" },
      { label: "Training Drills", value: "100+ Drills" },
      { label: "Frame Rate", value: "60 FPS Smooth" },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "GetX / BLoC",
      "Video Upload Pipeline",
      "Dynamic Leaderboard",
      "REST APIs",
    ],
    features: [
      {
        title: "Curated Football Drill Library",
        description:
          "Professional coaching drills categorized by skill level, age group, dribbling, passing, first touch, and tactical fitness.",
      },
      {
        title: "Practice Submission & Video Upload",
        description:
          "Allows athletes to record practice sessions directly within the app, compress video on-device, and submit drills for coach reviews.",
      },
      {
        title: "Gamified Hexagon Leaderboard",
        description:
          "Daily honey tasks, wing levels, and point rewards that celebrate consistency and athletic progress across club brackets.",
      },
      {
        title: "Streak & Training Habit Tracker",
        description:
          "Visual metrics tracking hours trained, completed drill tiers, streak milestones, and weekly progress summaries.",
      },
      {
        title: "Cross-Platform Parity",
        description:
          "Pixel-perfect UI built to ensure silky-smooth 60fps animations and seamless interactions on both iOS and Android devices.",
      },
    ],
    technicalHighlights: [
      "Cross-platform Flutter engine optimized for high-resolution video playback on both iPhones and Android smartphones.",
      "Client-side video compression and upload chunking to handle large video submissions reliably over mobile networks.",
      "Custom REST API integration with intelligent caching layers to minimize bandwidth consumption.",
      "Managed production release workflows on both Apple App Store Connect and Google Play Console.",
    ],
    contributions: [
      "Built responsive cross-platform UI matching rigorous Figma design specifications across iOS and Android.",
      "Developed video recording, client-side compression, and upload workflows for drill submissions.",
      "Implemented dynamic leaderboard calculations, point badges, and user profile management.",
      "Supported continuous debugging, performance profiling, and store releases on both major app stores.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/beestera-soccer/id6741708558",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=kc.app.socor",
      },
    ],
  },
  {
    name: "Urban Koala",
    slug: "urban-koala",
    category: "Location-Based Travel & Storage Marketplace",
    tagline:
      "Peer-to-peer storage, luggage drop-off, vehicle rentals, and local service marketplace with interactive live geolocation.",
    rating: "4.8 ★",
    downloads: "1K+ Users",
    appCategory: "Travel & Local · Marketplace",
    image: "/images/urban.jpeg",
    description:
      "Connects travelers with nearby rental, storage, parking, and local service providers. Includes map-based discovery, booking workflows, real-time communication, and payment gateway integration.",
    fullOverview:
      "Urban Koala is an urban mobility and on-demand travel assistance marketplace. It enables travelers, commuters, and city explorers to find verified secure luggage storage spots, parking spaces, and rental gear from nearby hosts with real-time map navigation, instant booking, and automated payments.",
    problemSolution: {
      problem:
        "Travelers often struggle with heavy luggage after hotel check-out or before check-in, finding traditional storage options expensive, hard to locate, or non-existent in suburban areas.",
      solution:
        "Developed a hyper-local Flutter marketplace app integrating Google Maps SDK for instant host discovery, real-time availability calendar, in-app messaging, and Stripe payment processing.",
    },
    metrics: [
      { label: "Verified Hosts", value: "200+" },
      { label: "Store Availability", value: "iOS & Android" },
      { label: "Search Latency", value: "< 250ms" },
      { label: "Payment Success", value: "99.9%" },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps SDK",
      "Geolocation",
      "Stripe Payments",
      "WebSockets Chat",
      "Clean Architecture",
    ],
    features: [
      {
        title: "Interactive Map & Geolocation Discovery",
        description:
          "Google Maps SDK integration with custom clustered pins, real-time proximity calculations, and radius filter toggles.",
      },
      {
        title: "Instant Booking & Scheduling Engine",
        description:
          "Seamless date and hourly slot booking for luggage drop-off, parking reservations, and rental equipment pickups.",
      },
      {
        title: "Real-Time Host-Traveler Chat",
        description:
          "WebSockets-powered direct chat allowing travelers and hosts to communicate check-in instructions and coordinate logistics.",
      },
      {
        title: "Secure Multi-Currency Payments",
        description:
          "Integrated Stripe SDK with 3D Secure verification, Apple Pay/Google Pay support, and automated digital invoice delivery.",
      },
      {
        title: "Host Management & Payout Dashboard",
        description:
          "Comprehensive portal for hosts to list spaces, set pricing rules, manage booking requests, and track earnings.",
      },
    ],
    technicalHighlights: [
      "Google Maps Flutter integration optimized with marker clustering for responsive rendering of hundreds of host locations.",
      "Real-time location permissions, background geofencing, and proximity distance recalculation.",
      "Stripe payment gateway integration supporting customer intent, authorization holds, and automatic refunds.",
      "Clean Architecture implementation with resilient offline data fallback for international roaming users.",
    ],
    contributions: [
      "Implemented the interactive map discovery interface with custom map styling and location search.",
      "Integrated Stripe payment processing for seamless multi-currency transactions.",
      "Engineered the host booking management calendar and traveler itinerary screens.",
      "Published and maintained the application on both Apple App Store and Google Play Store.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/urban-koala/id6756735207",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=app.urbankoala.urbankoala",
      },
    ],
  },
  {
    name: "Sleep Cast",
    slug: "sleep-cast",
    category: "Mindfulness & Audio Streaming App",
    tagline:
      "Immersive soundscapes, bedtime stories, and relaxation audio with smooth background playback and smart sleep timers.",
    rating: "4.7 ★",
    downloads: "5K+ Listeners",
    appCategory: "Health & Fitness · Audio",
    image: "/images/sleepcast.jpeg",
    description:
      "An audio streaming experience for relaxation and sleep, featuring categorized content, background playback, sleep timer, offline listening, social authentication, and premium subscriptions.",
    fullOverview:
      "Sleep Cast is a specialized audio streaming application built to help users relax, meditate, and fall asleep peacefully. It features an extensive library of ambient soundscapes, nature audio, guided sleep meditations, customizable multi-track sound mixers, and background audio streaming with auto-fadeout timers.",
    problemSolution: {
      problem:
        "Many audio apps drain battery, stop playback when screen turns off, or lack sound personalization options for users suffering from sleep disturbances.",
      solution:
        "Engineered a battery-efficient Flutter audio application supporting persistent lock-screen background playback, customizable sound mixing, local offline caching, and Google Play recurring subscriptions.",
    },
    metrics: [
      { label: "Audio Tracks", value: "300+" },
      { label: "Active Listeners", value: "5K+" },
      { label: "Rating", value: "4.7 ★" },
      { label: "Playback Uptime", value: "99.9%" },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Background Audio Service",
      "Offline Storage",
      "In-App Purchases",
      "REST APIs",
    ],
    features: [
      {
        title: "Persistent Background Audio Streaming",
        description:
          "Continuous high-fidelity audio playback that keeps playing smoothly when the phone screen is locked or while multitasking.",
      },
      {
        title: "Customizable Sleep Fadeout Timer",
        description:
          "Smart timer that gradually reduces volume over time and automatically pauses audio to preserve battery throughout the night.",
      },
      {
        title: "Ambient Sound Layering & Mixer",
        description:
          "Allows users to combine multiple natural sounds (rain, ocean waves, white noise) with independent volume adjustments.",
      },
      {
        title: "Offline Listening Library",
        description:
          "One-tap offline download of meditation sessions and sleep stories for uninterrupted playback during flights or offline nights.",
      },
      {
        title: "Premium Subscription Integration",
        description:
          "Google Play In-App Purchase workflow with free trial periods and recurring premium tier unlocks.",
      },
    ],
    technicalHighlights: [
      "Custom audio service implementation utilizing just_audio and audio_service with lock-screen media controls.",
      "Local caching engine using Hive for instantaneous offline audio and metadata retrieval.",
      "Optimized battery consumption through native platform channel tuning and background audio management.",
    ],
    contributions: [
      "Engineered the core background audio playback engine and lock-screen notification media controls.",
      "Built the multi-track ambient sound mixer with independent volume sliders.",
      "Integrated Google Play In-App Purchase and recurring subscription lifecycle management.",
      "Optimized offline file management and network caching for high-bitrate audio assets.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=info.sleepcast.sleepcast",
      },
    ],
  },
  {
    name: "Wood Machinery",
    slug: "wood-machinery",
    category: "Industrial E-Commerce & Machinery App",
    tagline:
      "Specialized B2B and B2C marketplace for woodworking equipment, heavy machinery, spare parts, and servicing.",
    rating: "4.9 ★",
    downloads: "2K+ Orders",
    appCategory: "Business · Industrial E-Commerce",
    image: "/images/wood.jpeg",
    description:
      "A Flutter e-commerce application for machinery and industrial tools with structured product browsing, detailed product pages, purchasing flows, and integrated product, order, and user services.",
    fullOverview:
      "Wood Machinery is a specialized mobile shopping and quotation platform for industrial woodworking machinery, CNC equipment, heavy tools, and spare parts. It provides factories and workshops with a streamlined purchasing, warranty request, and real-time delivery tracking workflow.",
    problemSolution: {
      problem:
        "Purchasing heavy industrial equipment traditionally involves cumbersome paper catalogs, unverified suppliers, lack of technical documentation on mobile, and manual quotation delays.",
      solution:
        "Built a mobile-first digital machinery catalog with high-resolution visual previews, technical spec sheets, instant quotation requests, automated cart checkout, and digital invoice generation.",
    },
    metrics: [
      { label: "Catalog Items", value: "1,500+" },
      { label: "Orders Processed", value: "2K+" },
      { label: "App Rating", value: "4.9 ★" },
      { label: "Client Satisfaction", value: "98%" },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "REST APIs",
      "E-Commerce Engine",
      "Invoice Generator",
      "Responsive UI",
    ],
    features: [
      {
        title: "Comprehensive Machinery Catalog",
        description:
          "Structured product catalog with multi-category filters, video demonstrations, and downloadable technical specification sheets.",
      },
      {
        title: "Instant Quotation & Purchase Flow",
        description:
          "Allows corporate clients to request custom bulk price quotations or purchase standard machinery and spare parts via checkout.",
      },
      {
        title: "Real-Time Order & Shipment Tracking",
        description:
          "Live delivery tracking from warehouse dispatch to factory delivery with instant status notifications and digital receipts.",
      },
      {
        title: "Maintenance & Warranty Booking",
        description:
          "Built-in portal for scheduling technician maintenance visits, warranty claims, and spare parts replacement requests.",
      },
    ],
    technicalHighlights: [
      "Clean Architecture with modular feature folders and responsive UI scaling across phones and tablets.",
      "High-performance image caching and lazy-loading for catalogs containing thousands of high-resolution machine photos.",
      "RESTful API integration with secure token-based authentication and invoice PDF generation.",
    ],
    contributions: [
      "Developed responsive mobile catalog, advanced search, and category filtering.",
      "Built the cart, order tracking, and custom quotation generation flows.",
      "Deployed the application to Google Play Store and handled client maintenance.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.classicit.wood_customer_2024",
      },
    ],
  },
];
