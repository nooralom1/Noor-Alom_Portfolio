import { useEffect, useState, type TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { classNames } from "@/utility/classNames";

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-scroll every 3.8 seconds when not hovered
  useEffect(() => {
    if (isHovered || projects.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered, projects.length]);

  const goToProject = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsHovered(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    setIsHovered(false);
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe threshold: 45px
    if (diff > 45) {
      // Swiped left -> next
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (diff < -45) {
      // Swiped right -> prev
      setDirection(-1);
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    }
    setTouchStart(null);
  };

  const currentProject = projects[currentIndex] ?? projects[0];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-14 md:px-20">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Selected work
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl">
            Apps made to solve
            <span className="text-accent"> real problems.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Production Flutter applications designed, developed, and shipped for
            people across education, sports, and everyday services.
          </p>
        </div>

        {/* Featured Project Showcase Card (Centered, One by One, Auto-Scrolled) */}
        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={currentProject.title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-background/85 group relative overflow-hidden rounded-3xl border border-accent/25 shadow-2xl shadow-accent/5 backdrop-blur-md transition-all duration-300 hover:border-accent hover:shadow-accent/10"
            >
              <Link href={currentProject.href} className="block">
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-emerald-950 via-zinc-900 to-black sm:aspect-[16/9]">
                  {currentProject.image ? (
                    <Image
                      src={currentProject.image}
                      alt={`${currentProject.title} preview`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 768px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : null}

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />

                  {/* Bottom Right: Circular Arrow Action */}
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/90">
                    <FiArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                        {currentProject.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-accent transition-transform duration-300 group-hover:translate-x-1 sm:text-sm">
                        View case study <FiArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    {currentProject.description && (
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {currentProject.description}
                      </p>
                    )}

                    {/* Tag Pills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots & View All Projects Button */}
        <div className="border-accent/15 mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-6 border-t pt-6 sm:flex-row">
          {/* Clickable Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => goToProject(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={classNames(
                  "h-2.5 rounded-full transition-all duration-300",
                  currentIndex === dotIdx
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
