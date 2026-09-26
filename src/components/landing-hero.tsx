import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import heroProfileImg from "@/public/images/noor-alom-profile.png";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-16 sm:px-14 md:px-20">
      <div className="pointer-events-none absolute left-[-12rem] top-24 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-[-5rem] -z-10 h-96 w-96 rounded-full border-[70px] border-accent/5" />

      <div className="mx-auto grid min-h-[calc(100vh-210px)] max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10"
        >
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent sm:text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.55 }}
            className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground"
          >
            Flutter Developer · Android & iOS
          </motion.p>

          <motion.h1
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-4 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl xl:text-[5.5rem]"
          >
            I build mobile apps that feel{" "}
            <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
              fast, useful & effortless.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-7 max-w-2xl text-base font-medium leading-7 text-muted-foreground sm:text-lg"
          >
            I&apos;m Md Noor-Alom Siddik. I turn product ideas into scalable,
            production-ready Flutter applications with clean architecture,
            polished interfaces, and reliable integrations.
          </motion.p>

          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-accent/80"
            >
              Explore my work
              <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </Link>
            <a
              href="/MD_NOOR-ALOM_SIDDIK_Resume.pdf"
              download
              className="inline-flex items-center rounded-full border border-accent/25 bg-background/70 px-6 py-3.5 text-sm font-bold text-accent backdrop-blur transition hover:-translate-y-1 hover:bg-accent/10"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="border-accent/15 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-6"
          >
            <div>
              <strong className="block text-2xl font-bold text-foreground">
                3+
              </strong>
              <span className="text-xs font-semibold text-muted-foreground">
                Years of experience
              </span>
            </div>
            <div className="bg-accent/15 h-9 w-px" />
            <div>
              <strong className="block text-2xl font-bold text-foreground">
                5+
              </strong>
              <span className="text-xs font-semibold text-muted-foreground">
                Production apps
              </span>
            </div>
            <div className="bg-accent/15 hidden h-9 w-px sm:block" />
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <FiMapPin className="h-4 w-4 text-accent" />
              Dhaka, Bangladesh
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-accent/10" />
          <div className="shadow-accent/15 relative overflow-hidden rounded-[2.2rem] border border-accent/20 bg-zinc-200 shadow-2xl dark:bg-zinc-800">
            <Image
              src={heroProfileImg}
              alt="Md Noor-Alom Siddik, Flutter Developer"
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="via-zinc-950/55 absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent px-7 pb-7 pt-24 text-white">
              <p className="text-2xl font-bold">Md Noor-Alom Siddik</p>
              <p className="mt-1 text-sm font-semibold text-zinc-200">
                Building mobile products from idea to store release.
              </p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-5 top-12 rounded-2xl border border-accent/20 bg-background/90 px-4 py-3 shadow-xl backdrop-blur md:-left-12"
          >
            <p className="text-xs font-semibold text-muted-foreground">
              Specialized in
            </p>
            <p className="mt-1 font-bold text-accent">Flutter · Dart</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
