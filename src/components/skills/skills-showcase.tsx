import { FC, SVGProps } from "react";
import { motion } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";

export interface SkillCategory {
  sectionName: string;
  description?: string;
  categoryIcon?: FC<SVGProps<SVGSVGElement>>;
  skills: SkillPillProps[];
}

export interface SkillsShowcaseProps {
  skills: SkillCategory[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:px-14 md:px-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-[-12rem] top-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-10rem] -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Industry Skills & Expertise
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Modern technologies built for{" "}
            <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
              market-ready production.
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
            Proficient across the full mobile development lifecycle — clean
            architecture, enterprise state management, resilient offline-first
            data, and automated CI/CD deployments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((section, idx) => {
            const Icon = section.categoryIcon;
            return (
              <motion.div
                key={section.sectionName}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="hover:border-accent/45 group relative flex flex-col justify-between rounded-3xl border border-accent/20 bg-background/70 p-6 shadow-xl shadow-accent/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/20">
                          <Icon className="h-5 w-5" />
                        </span>
                      )}
                      <div>
                        <h3 className="text-base font-bold text-foreground">
                          {section.sectionName}
                        </h3>
                        {section.description && (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {section.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-accent/25 bg-accent/5 px-2.5 py-0.5 text-[11px] font-bold text-accent">
                      {section.skills.length}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {section.skills.map((pill) => (
                      <SkillPill key={pill.name} {...pill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
