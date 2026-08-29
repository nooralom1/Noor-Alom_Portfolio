import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import heroProfileImg from "@/public/images/noor-alom-profile.png";

const highlights = [
  {
    number: "01",
    title: "Product thinking",
    description: "I focus on real user needs, not just feature delivery.",
  },
  {
    number: "02",
    title: "Clean engineering",
    description: "Scalable architecture and maintainable code from day one.",
  },
  {
    number: "03",
    title: "Reliable delivery",
    description: "From responsive UI to production store release.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-12 sm:px-14 md:px-20 md:pb-32 md:pt-16">
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="border-accent/15 mb-12 flex flex-col gap-5 border-b pb-10 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              About me
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl">
              Building mobile products with purpose, precision, and care.
            </h1>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-muted-foreground">
            <FiMapPin className="h-4 w-4 text-accent" />
            Mohakhali, Dhaka · 🇧🇩
          </div>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[470px] lg:mx-0"
          >
            <div className="absolute -inset-4 -z-10 -rotate-3 rounded-[2.5rem] border border-accent/20 bg-accent/5" />
            <div className="shadow-accent/15 relative overflow-hidden rounded-[2.2rem] bg-zinc-200 shadow-2xl dark:bg-zinc-800">
              <Image
                src={heroProfileImg}
                alt="Md Noor-Alom Siddik"
                priority
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="border-white/15 absolute inset-x-5 bottom-5 rounded-2xl border bg-zinc-950/70 px-5 py-4 text-white shadow-lg backdrop-blur-md">
                <p className="font-bold">Md Noor-Alom Siddik</p>
                <p className="mt-1 text-xs font-medium text-zinc-300">
                  Flutter Developer · Android & iOS
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: [2, -2, 2], y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-10 rounded-2xl border border-accent/20 bg-background/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-9"
            >
              <span className="text-xl">✨</span>
              <p className="mt-1 text-xs font-bold text-accent">
                Detail-oriented
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-10">
              I&apos;m a results-driven Flutter Developer with around two years
              of hands-on experience creating scalable, high-performance apps
              for Android and iOS.
            </p>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-muted-foreground">
              My work spans the complete product lifecycle—from translating
              requirements into clean architecture and pixel-perfect interfaces
              to integrating APIs, Firebase, maps, payments, notifications, and
              shipping stable releases to app stores. I enjoy simplifying
              complex problems and turning them into experiences that feel
              natural to use.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.number}
                  className="border-accent/15 group rounded-2xl border bg-background p-5 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 dark:bg-zinc-900"
                >
                  <span className="text-xs font-bold text-accent/60">
                    {highlight.number}
                  </span>
                  <h2 className="mt-5 font-bold text-foreground">
                    {highlight.title}
                  </h2>
                  <p className="mt-2 text-xs font-medium leading-5 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-accent/80"
              >
                Explore my projects
                <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="/MD_NOOR-ALOM_SIDDIK_Resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-accent/25 px-6 py-3.5 text-sm font-bold text-accent transition hover:-translate-y-1 hover:bg-accent/10"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
