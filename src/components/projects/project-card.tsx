import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export interface ProjectCardProps {
  name: string;
  slug: string;
  category: string;
  image?: string;
  description: string;
  technologies: string[];
  links: { label: string; href: string }[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.article
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-accent/15 group flex min-h-[500px] flex-col overflow-hidden rounded-3xl border bg-background shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 dark:bg-zinc-900"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-700 to-zinc-950">
        {props.image ? (
          <Image
            src={props.image}
            alt={`${props.name} project preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[34px] border-white/10" />
            <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full bg-white/10 blur-sm" />
            <span className="absolute bottom-5 right-7 text-6xl font-black tracking-tighter text-white/10">
              {props.name.slice(0, 2).toUpperCase()}
            </span>
          </>
        )}
        <div className="from-zinc-950/45 absolute" />
      </div>

      <div className="flex flex-1 flex-col p-6 text-foreground sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {props.category}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
          {props.name}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {props.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {props.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="border-accent/15 mt-auto flex flex-wrap gap-3 border-t pt-5">
          <Link
            href={`/projects/${props.slug}`}
            className="group/link inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-background transition hover:-translate-y-0.5 hover:bg-accent/80"
          >
            View Details
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
          {props.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`group/link inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5 ${"border border-accent/25 text-accent hover:bg-accent/10"}`}
            >
              {link.label}
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
