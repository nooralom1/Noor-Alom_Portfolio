import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { classNames } from "@/utility/classNames";

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDiff = Infinity;
    children.forEach((child, i) => {
      const diff = Math.abs(
        child.offsetLeft - container.offsetLeft - scrollPosition,
      );
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const target = children[index];
    if (target) {
      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prevIdx = activeIndex > 0 ? activeIndex - 1 : projects.length - 1;
    scrollToIndex(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < projects.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(nextIdx);
  };

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-14 md:px-20">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Selected work
              </p>
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl">
              Apps made to solve
              <span className="text-accent"> real problems.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Production Flutter applications designed, developed, and shipped
              for people across education, sports, and everyday services.
            </p>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 rounded-full border border-accent/20 bg-background/80 px-3.5 py-1.5 text-xs font-bold text-accent shadow-sm">
              <span>0{activeIndex + 1}</span>
              <span className="text-muted-foreground/60">/</span>
              <span className="text-muted-foreground">0{projects.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-background text-foreground shadow-md shadow-accent/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-background active:scale-95"
              >
                <FiChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-background text-foreground shadow-md shadow-accent/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-background active:scale-95"
              >
                <FiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Smooth Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar mt-12 flex select-none snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.index * 0.08 }}
              className="border-accent/15 group w-[85vw] shrink-0 snap-start overflow-hidden rounded-3xl border bg-background shadow-md transition duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 dark:bg-zinc-900 sm:w-[380px] md:w-[440px] lg:w-[460px]"
            >
              <Link href={project.href} className="block h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-700 to-zinc-950">
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
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-zinc-950/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    0{project.index + 1}
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <FiArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold tracking-[-0.025em] text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
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

        {/* Bottom Pagination Dots & View All Button */}
        <div className="border-accent/15 mt-8 flex flex-col items-center justify-between gap-6 border-t pt-6 sm:flex-row">
          {/* Clickable Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={classNames(
                  "h-2.5 rounded-full transition-all duration-300",
                  activeIndex === dotIdx
                    ? "w-8 bg-accent shadow-sm shadow-accent/50"
                    : "w-2.5 bg-accent/25 hover:bg-accent/50",
                )}
              />
            ))}
          </div>

          {/* View All Projects Button */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-xs font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/80 sm:text-sm"
          >
            <span>View all projects</span>
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
