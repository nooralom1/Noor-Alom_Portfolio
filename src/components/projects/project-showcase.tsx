import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowTopRight } from "@/components/icons";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-14 md:px-20 md:py-16">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Selected work
              </p>
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
              Apps made to solve
              <span className="text-accent"> real problems.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Production Flutter applications designed, developed, and shipped for
            people across education, sports, and everyday services.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.index * 0.08 }}
              className="border-accent/15 group overflow-hidden rounded-3xl border bg-background shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 dark:bg-zinc-900"
            >
              <Link href={project.href} className="block h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-700 to-zinc-950">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border-[32px] border-white/10" />
                      <span className="absolute bottom-5 right-6 text-6xl font-black text-white/10">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </>
                  )}
                  <div className="from-zinc-950/55 absolute" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-zinc-950/40 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    0{project.index + 1}
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-950 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowTopRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold tracking-[-0.025em] text-foreground">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <Link
          href="/projects"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-accent/20 px-5 py-3 text-sm font-bold text-accent transition hover:bg-accent hover:text-background"
        >
          View all five projects
          <ArrowTopRight className="h-5 w-5 rotate-45 transition-transform group-hover:rotate-0" />
        </Link>
      </div>
    </section>
  );
}
