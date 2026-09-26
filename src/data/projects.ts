import { type ProjectCardProps } from "@/components/projects/project-card";
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
];

export type Project = ProjectCardProps;

export const PROJECTS_CARD: Project[] = [
  {
    name: "Edu Poribar",
    slug: "edu-poribar",
    category: "Production E-learning App",
    image: "/images/eduporibar.jpeg",
    description:
      "A production learning platform with live classes, recorded courses, offline content, video streaming, course enrollment, and real-time MCQ and written examination results. The app has 10K+ downloads and a 4.6 Play Store rating.",
    technologies: ["Flutter", "REST API", "Offline Access", "Video Streaming"],
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
    category: "Football Training Platform",
    image: "/images/beestera.jpeg",
    description:
      "A cross-platform football training app with structured video learning, practice submissions, and a dynamic leaderboard. Contributed to responsive UI, backend integration, debugging, and releases on both major app stores.",
    technologies: ["Flutter", "Android", "iOS", "Leaderboard"],
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
    category: "Location-based Marketplace",
    image: "/images/urban.jpeg",
    description:
      "Connects travelers with nearby rental, storage, parking, and local service providers. Includes map-based discovery, booking workflows, real-time communication, and payment gateway integration.",
    technologies: ["Flutter", "Google Maps", "Real-time Chat", "Payments"],
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
    category: "Audio & Wellness App",
    image: "/images/sleepcast.jpeg",
    description:
      "An audio streaming experience for relaxation and sleep, featuring categorized content, background playback, sleep timer, offline listening, social authentication, and premium subscriptions.",
    technologies: [
      "Flutter",
      "Audio Streaming",
      "Offline Mode",
      "Subscriptions",
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
    category: "Industrial E-commerce App",
    image: "/images/wood.jpeg",
    description:
      "A Flutter e-commerce application for machinery and industrial tools with structured product browsing, detailed product pages, purchasing flows, and integrated product, order, and user services.",
    technologies: ["Flutter", "E-commerce", "REST API", "Responsive UI"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.classicit.wood_customer_2024",
      },
    ],
  },
];
