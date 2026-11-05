import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import MobileMenu from "@/components/utility/mobile-menu";
import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar({ routes }: NavbarProps) {
  const router = useRouter();
  const currentPath = router.asPath.split("?")[0];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 md:px-12 lg:px-16">
      <div className="border-accent/35 relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-2xl border bg-gradient-to-r from-accent/10 via-background/95 to-accent/10 px-3 py-2.5 shadow-xl shadow-accent/10 backdrop-blur-xl sm:px-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl pr-2"
          aria-label="Md Noor-Alom Siddik — Home"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-accent shadow-md shadow-accent/25 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/noor-alom-profile.png"
              alt="Md Noor-Alom Siddik"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>

          <span className="hidden xs:block">
            <span className="block text-xs font-extrabold leading-tight tracking-tight text-foreground sm:text-sm">
              Md Noor-Alom Siddik<span className="text-accent">.</span>
            </span>

            <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:text-[10px]">
              Flutter Developer
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ul className="flex items-center gap-1 rounded-full border border-accent/20 bg-background/90 p-1.5 text-sm font-semibold shadow-inner shadow-black/20 backdrop-blur-md">
            {routes.map((route) => {
              const active =
                route.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(route.href);

              return (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={classNames(
                      "relative isolate block rounded-full px-5 py-2 text-sm font-bold transition-all duration-200",
                      active
                        ? "text-background shadow-md shadow-accent/30"
                        : "hover:bg-accent/15 text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 z-0 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">{route.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hover:bg-accent/15 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-background text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:flex"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:bg-accent/15 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-background text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:flex"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          <div className="border-accent/15 hidden h-10 w-10 items-center justify-center rounded-full border bg-background text-accent transition hover:bg-accent/10 md:flex [&>button]:!m-0 [&>button]:!h-5 [&>button]:!w-5">
            <ThemeSwitch />
          </div>

          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold text-background shadow-md shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/80 lg:flex"
          >
            Let&apos;s talk
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>

          <AnimatePresence>
            <MenuLogo
              open={isModalOpen}
              toggle={() => setIsModalOpen((open) => !open)}
            />
          </AnimatePresence>
        </div>
      </div>

      <MobileMenu
        routes={routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
