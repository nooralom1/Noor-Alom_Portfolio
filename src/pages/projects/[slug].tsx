import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import {
  FiActivity,
  FiArrowLeft,
  FiArrowUpRight,
  FiCheck,
  FiCpu,
  FiDownload,
  FiLayers,
  FiShield,
  FiSmartphone,
  FiStar,
  FiZap,
} from "react-icons/fi";
import { SiApple, SiGoogleplay } from "react-icons/si";

import { PROJECTS_CARD, Project } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PROJECTS_CARD.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = PROJECTS_CARD.find((p) => p.slug === params?.slug);
  return project ? { props: { project } } : { notFound: true };
};

export default function ProjectDetails({ project }: { project: Project }) {
  const currentIndex = PROJECTS_CARD.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS_CARD[(currentIndex + 1) % PROJECTS_CARD.length];

  return (
    <>
      <NextSeo
        title={`${project.name} — Case Study | Md Noor-Alom Siddik`}
        description={project.description}
        canonical={`${siteMetadata.siteUrl}/projects/${project.slug}`}
        openGraph={{
          title: `${project.name} | Flutter Production Case Study`,
          description: project.description,
          url: `${siteMetadata.siteUrl}/projects/${project.slug}`,
          images: [
            {
              url: project.image || "/images/noor-alom-profile.png",
              alt: `${project.name} App Preview`,
            },
          ],
        }}
      />

      <article className="relative isolate overflow-hidden px-6 pb-28 pt-8 sm:px-14 md:px-20 md:pt-14">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute right-[-10rem] top-10 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute left-[-10rem] top-[40%] -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          {/* Top navigation */}
          <div className="border-accent/15 flex items-center justify-between border-b pb-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-accent"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
              <span>Back to all projects</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span>
                {currentIndex + 1} of {PROJECTS_CARD.length}
              </span>
              <span>·</span>
              <span className="text-accent">{project.category}</span>
            </div>
          </div>

          {/* Hero Header & Preview */}
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              {/* Store Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                {project.rating && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400">
                    <FiStar className="h-3.5 w-3.5 fill-amber-400" />
                    <span>{project.rating}</span>
                  </span>
                )}
                {project.downloads && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                    <FiDownload className="h-3.5 w-3.5" />
                    <span>{project.downloads}</span>
                  </span>
                )}
                {project.appCategory && (
                  <span className="rounded-full border border-accent/20 bg-muted/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {project.appCategory}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {project.name}
              </h1>

              {project.tagline && (
                <p className="mt-3 text-lg font-semibold text-accent sm:text-xl">
                  {project.tagline}
                </p>
              )}

              <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-bold text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Official Store Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.links.map((link) => {
                  const isPlayStore = link.label.toLowerCase().includes("play");
                  const isAppStore =
                    link.label.toLowerCase().includes("apple") ||
                    link.label.toLowerCase().includes("app store");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-accent/80"
                    >
                      {isPlayStore && <SiGoogleplay className="h-4 w-4" />}
                      {isAppStore && <SiApple className="h-4 w-4" />}
                      <span>{link.label}</span>
                      <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/80 px-5 py-3.5 text-sm font-bold text-foreground backdrop-blur transition hover:-translate-y-1 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <span>Inquire about this app</span>
                </Link>
              </div>
            </div>

            {/* App Mockup Card */}
            <div className="shadow-accent/15 relative aspect-[16/10] overflow-hidden rounded-[2.2rem] border border-accent/25 bg-muted shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={project.image || "/images/noor-alom-profile.png"}
                alt={`${project.name} full preview mockup`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Key Metrics & Stats Bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-accent/20 bg-background/60 p-6 shadow-xl backdrop-blur-md md:grid-cols-4 md:p-8">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center md:text-left">
                  <span className="block text-3xl font-extrabold text-foreground sm:text-4xl">
                    <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
                      {metric.value}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          {project.problemSolution && (
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-amber-500/25 bg-amber-500/5 p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-500/15 flex h-10 w-10 items-center justify-center rounded-xl text-amber-400">
                    <FiActivity className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      The Challenge
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      Problem Statement
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.problemSolution.problem}
                </p>
              </div>

              <div className="rounded-3xl border border-accent/30 bg-accent/5 p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <FiZap className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      The Engineering
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      Mobile Solution
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.problemSolution.solution}
                </p>
              </div>
            </div>
          )}

          {/* Full Overview Story */}
          {project.fullOverview && (
            <div className="mt-16 rounded-3xl border border-accent/20 bg-background/70 p-8 shadow-xl backdrop-blur-md md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Project Overview
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                About {project.name}
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                {project.fullOverview}
              </p>
            </div>
          )}

          {/* Core App Features (Play Store Style Breakdown) */}
          {project.features && project.features.length > 0 && (
            <div className="mt-16">
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Key Capabilities
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Features built for real users.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  High-performance features engineered to deliver reliable user
                  experiences.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-accent/20 bg-background/60 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-xs font-extrabold text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture & Highlights */}
          {project.technicalHighlights &&
            project.technicalHighlights.length > 0 && (
              <div className="mt-16 rounded-3xl border border-accent/25 bg-background/70 p-8 shadow-xl backdrop-blur-md md:p-10">
                <div className="flex items-center gap-3">
                  <span className="bg-accent/15 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 text-accent">
                    <FiCpu className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      Under The Hood
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      Technical Architecture & Highlights
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {project.technicalHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="border-accent/15 flex items-start gap-3 rounded-2xl border bg-accent/5 p-4 transition hover:border-accent/30"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-background">
                        <FiCheck className="h-3 w-3" />
                      </span>
                      <p className="text-sm font-medium leading-relaxed text-foreground/90">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* What I Worked On / Engineering Contribution */}
          {project.contributions && project.contributions.length > 0 && (
            <div className="mt-16 grid gap-8 rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-background/90 to-accent/5 p-8 shadow-2xl backdrop-blur-md lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Hands-On Role
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  What I engineered on this app
                </h2>
                <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                  Direct contributions made to the application architecture,
                  user experience, native integrations, and production release
                  pipeline.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
                      <FiSmartphone className="h-4 w-4" />
                    </span>
                    <span>Flutter Mobile Client</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
                      <FiLayers className="h-4 w-4" />
                    </span>
                    <span>Clean Architecture & State</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
                      <FiShield className="h-4 w-4" />
                    </span>
                    <span>Store Deployments & Maintenance</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.5">
                {project.contributions.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 rounded-2xl border border-accent/20 bg-background/80 p-4 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-background">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Store Download Banner & Next Project */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-accent/25 bg-background/80 p-8 text-center shadow-xl backdrop-blur-md md:flex-row md:p-10 md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Live on Stores
              </span>
              <h3 className="mt-1 text-2xl font-bold text-foreground">
                Experience {project.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Download the production app directly from the official store.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-bold text-background shadow-md shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/80"
                >
                  <span>{link.label}</span>
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background px-5 py-3 text-xs font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <span>Next: {nextProject.name}</span>
                <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
