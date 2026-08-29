import {
  SiAndroidstudio,
  SiApple,
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglemaps,
  SiGoogleplay,
  SiPostman,
  SiSqlite,
  SiStripe,
  SiXcode,
} from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Mobile Development",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android", icon: SiAndroidstudio },
      { name: "iOS", icon: SiApple },
      { name: "Responsive UI", icon: SiFlutter },
    ],
  },
  {
    sectionName: "Architecture & State Management",
    skills: [
      { name: "Clean Architecture", icon: SiFlutter },
      { name: "GetX", icon: SiDart },
      { name: "Provider", icon: SiFlutter },
      { name: "BLoC", icon: SiDart },
      { name: "Reusable Components", icon: SiFlutter },
    ],
  },
  {
    sectionName: "Backend, Data & Integrations",
    skills: [
      { name: "REST APIs", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
      { name: "SQLite", icon: SiSqlite },
      { name: "Google Maps", icon: SiGooglemaps },
      { name: "Stripe", icon: SiStripe },
      { name: "Push Notifications", icon: SiFirebase },
    ],
  },
  {
    sectionName: "Tools & Deployment",
    skills: [
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Xcode", icon: SiXcode },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Google Play", icon: SiGoogleplay },
      { name: "App Store", icon: SiApple },
    ],
  },
];
