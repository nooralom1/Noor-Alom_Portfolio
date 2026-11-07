import { FC, SVGProps } from "react";
import { motion } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import { SOFT_SKILLS_DATA } from "@/data/skills";

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

        {/* Soft Skills Section */}
        <div className="border-accent/15 mt-20 border-t pt-16">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Professional Mindset
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Soft skills that drive{" "}
              <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
                collaborative success.
              </span>
            </h2>

            <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Beyond code and architecture, I bring structured communication,
              analytical problem-solving, and cross-functional leadership to
              fast-paced engineering teams.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOFT_SKILLS_DATA.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="hover:border-accent/45 group relative flex flex-col justify-between rounded-3xl border border-accent/20 bg-background/70 p-6 shadow-xl shadow-accent/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent shadow-md shadow-accent/10 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-5 text-lg font-bold text-foreground">
                      {skill.title}
                    </h3>

                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-accent/10 pt-4">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
