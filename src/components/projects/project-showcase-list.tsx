import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { classNames } from "@/utility/classNames";

export type ProjectShowcaseListItem = {
  index: number;
  title: string;
  href: string;
  image?: string;
  tags: string[];
};

export interface ProjectShowcaseListProps {
  data: ProjectShowcaseListItem;
  activeProject: number;
  toggleList: (index: number) => void; //eslint-disable-line no-unused-vars
}

export default function ProjectShowcaseList(props: ProjectShowcaseListProps) {
  const isActive = props.activeProject === props.data.index;

  return (
    <motion.div
      className={classNames(
        "group relative flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors duration-300 sm:gap-6 sm:px-4",
        "hover:bg-accent/5",
      )}
      onHoverStart={() => props.toggleList(props.data.index)}
      onFocus={() => props.toggleList(props.data.index)}
    >
      {/* Index number */}
      <span
        className={classNames(
          "hidden shrink-0 text-6xl font-semibold tabular-nums transition-all duration-300 lg:block",
          isActive
            ? "translate-x-1 text-accent"
            : "text-accent/40 group-hover:text-accent/70",
        )}
      >
        {String(props.data.index + 1).padStart(2, "0")}
      </span>
      <span className="text-3xl font-semibold tabular-nums text-accent transition-colors duration-300 sm:text-4xl md:text-5xl lg:hidden">
        {String(props.data.index + 1).padStart(2, "0")}
      </span>

      {/* Title + tags */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <Link
          href={props.data.href}
          className="group/link relative flex max-w-max items-center gap-3"
        >
          <span
            className={classNames(
              "hidden text-5xl font-semibold tracking-[-0.02em] transition-all duration-300 lg:block",
              isActive
                ? "translate-x-1 text-accent"
                : "text-accent/70 group-hover:text-accent",
            )}
          >
            {props.data.title}
          </span>
          <span className="text-3xl font-semibold tracking-[-0.02em] text-accent transition-colors duration-300 sm:text-4xl md:text-5xl lg:hidden">
            {props.data.title}
          </span>

          <FiArrowUpRight
            className={classNames(
              "hidden h-7 w-7 shrink-0 text-accent transition-all duration-300 lg:block",
              isActive
                ? "translate-x-0 translate-y-0 opacity-100"
                : "-translate-x-1 translate-y-1 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100",
            )}
          />

          <span
            className={classNames(
              "absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-accent transition-[width] duration-300 lg:block",
              isActive ? "w-[calc(100%-2.5rem)]" : "w-0 group-hover:w-full",
            )}
          />
        </Link>

        <div className="flex flex-wrap gap-2">
          {props.data.tags.map((tag) => (
            <span
              key={tag}
              className={classNames(
                "border-accent/15 rounded-full border bg-accent/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent transition-colors duration-300",
                isActive && "bg-accent/10",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Thumbnail preview (fades in on hover/active, image field now used) */}
      {props.data.image && (
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 12 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-xl border border-accent/20 shadow-lg shadow-accent/10 sm:block md:h-28 md:w-44"
            >
              <Image
                src={props.data.image}
                alt={`${props.data.title} preview`}
                fill
                sizes="200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
