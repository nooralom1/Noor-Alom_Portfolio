import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import { siteMetadata } from "@/data/siteMetaData.mjs";
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
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 md:px-12 lg:px-16">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-2xl border border-accent/35 bg-gradient-to-r from-accent/10 via-background/95 to-accent/10 px-3 py-2.5 shadow-xl shadow-accent/10 backdrop-blur-xl sm:px-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl pr-2"
          aria-label="Md Noor-Alom Siddik — Home"
        >
          <span className="relative h-11 w-11 shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <AnimatedLogo />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-extrabold leading-none tracking-tight text-foreground">
              Noor-Alom<span className="text-accent">.</span>
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Flutter Developer
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ul className="flex items-center rounded-full border border-accent/10 bg-muted/60 p-1 text-sm font-semibold">
            {routes.map((route) => {
              const active = route.href === "/" ? pathName === "/" : pathName.startsWith(route.href);

              return (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={classNames(
                      "relative block rounded-full px-5 py-2.5 transition-colors duration-200",
                      active
                        ? "text-background"
                        : "text-muted-foreground hover:text-accent",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent shadow-md shadow-accent/20"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{route.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="border-accent/15 hidden h-10 w-10 items-center justify-center rounded-full border bg-background text-accent transition hover:bg-accent/10 md:flex [&>button]:!m-0 [&>button]:!h-5 [&>button]:!w-5">
            <ThemeSwitch />
          </div>
          <a
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold text-background shadow-md shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/80 lg:flex"
          >
            Let&apos;s talk
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
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
