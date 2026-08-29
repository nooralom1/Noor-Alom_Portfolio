import Link from "next/link";

import { FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";

import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const socialLinks = [
  {
    label: "GitHub",
    href: siteMetadata.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: siteMetadata.linkedin,
    icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-8 pt-16 sm:px-14 md:px-20 md:pt-16">
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="shadow-accent/15 mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-accent text-background shadow-2xl">
        <div className="relative grid gap-12 px-7 py-12 sm:px-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[52px] border-background/10" />
          <div className="pointer-events-none absolute bottom-[-8rem] right-1/3 h-56 w-56 rounded-full bg-background/5" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-background" />
              Let&apos;s work together
            </span>

            <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Have a mobile app idea? Let&apos;s make it real.
            </h2>
            <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-background/75 sm:text-base">
              I&apos;m open to Flutter opportunities, product collaborations,
              and ambitious mobile projects. Tell me what you&apos;re building
              I&apos;ll get back to you.
            </p>

            <a
              href={`mailto:${siteMetadata.email}`}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-bold text-accent shadow-lg transition hover:-translate-y-1 hover:bg-background/90"
            >
              Start a conversation
              <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </a>
          </div>

          <div className="lg:border-background/15 relative flex flex-col justify-end lg:border-l lg:pl-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-background/60">
              Contact details
            </p>

            <div className="mt-6 space-y-5">
              <a
                href={`mailto:${siteMetadata.email}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 transition group-hover:bg-background/20">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-background/60">
                    Email
                  </span>
                  <span className="text-sm font-bold sm:text-base">
                    {siteMetadata.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${siteMetadata.phone}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 transition group-hover:bg-background/20">
                  <FiPhone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-background/60">
                    Phone
                  </span>
                  <span className="text-sm font-bold sm:text-base">
                    {siteMetadata.phone}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10">
                  <FiMapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-background/60">
                    Based in
                  </span>
                  <span className="text-sm font-bold sm:text-base">
                    {siteMetadata.location}, Bangladesh
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-1 pb-2 pt-9 sm:px-2 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-extrabold text-foreground">
            Noor-Alom<span className="text-accent">.</span>
          </Link>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            Flutter Developer · Android & iOS
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground">
            <li>
              <Link className="transition hover:text-accent" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-accent" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-accent" href="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="border-accent/15 flex h-10 w-10 items-center justify-center rounded-full border text-accent transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-accent/10 px-1 pt-5 text-xs font-medium text-muted-foreground sm:px-2 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Md Noor-Alom Siddik. All rights reserved.</p>
        <p>Designed with intention. Built with care.</p>
      </div>
    </footer>
  );
}
