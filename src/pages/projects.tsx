import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const capabilities = [
  "Responsive mobile UI",
  "REST API & Firebase",
  "Maps, payments & real-time features",
  "Play Store & App Store release",
];

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Flutter Projects | Md Noor-Alom Siddik"
        description="Explore production Flutter apps built by Md Noor-Alom Siddik for education, sports, travel, wellness, and e-commerce."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Flutter Projects by Md Noor-Alom Siddik",
          description:
            "Production Android and iOS applications built with Flutter.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Md Noor-Alom Siddik - Flutter Developer",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Flutter Developer, Dart, Android, iOS, Mobile Apps, Firebase, REST API",
          },
        ]}
      />

      <div className="relative isolate overflow-hidden px-6 pb-32 pt-10 sm:px-14 md:px-20 md:pb-40 md:pt-20">
        <div className="pointer-events-none absolute -right-32 top-24 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[45%] -z-10 h-96 w-96 rounded-full border-[65px] border-accent/5" />

        <div className="mx-auto max-w-7xl">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-accent/15 grid gap-10 border-b pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20 lg:pb-20"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Selected projects
                </p>
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl">
                Apps designed for{" "}
                <span className="bg-gradient-to-r from-accent to-lime-400 bg-clip-text text-transparent">
                  real-world impact.
                </span>
              </h1>
            </div>

            <div>
              <p className="text-base font-medium leading-7 text-muted-foreground">
                A selection of production mobile applications across education,
                sports, travel, wellness, and e-commerce—built from interface to
                store release.
              </p>
              <div className="mt-7 flex items-center gap-7">
                <div>
                  <strong className="block text-3xl font-bold text-foreground">
                    5+
                  </strong>
                  <span className="text-xs font-semibold text-muted-foreground">
                    Production apps
                  </span>
                </div>
                <div className="bg-accent/15 h-11 w-px" />
                <div>
                  <strong className="block text-3xl font-bold text-foreground">
                    2
                  </strong>
                  <span className="text-xs font-semibold text-muted-foreground">
                    App platforms
                  </span>
                </div>
              </div>
            </div>
          </motion.header>

          <section
            className="pt-16 md:pt-24"
            aria-labelledby="project-list-title"
          >
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Case highlights
                </p>
                <h2
                  id="project-list-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                >
                  Work I&apos;m proud of
                </h2>
              </div>
              <p className="max-w-md text-sm font-medium leading-6 text-muted-foreground">
                Each product presented a different challenge—from offline
                learning and streaming to maps, booking, and payments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {PROJECTS_CARD.map((card) => (
                <ProjectCard key={card.name} {...card} />
              ))}
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-accent/15 relative mt-20 overflow-hidden rounded-[2rem] border bg-accent/5 px-7 py-10 sm:px-10 md:mt-28 md:px-14 md:py-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[42px] border-accent/10" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  How I contribute
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
                  From product requirements to a dependable store release.
                </h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-3 text-sm font-semibold text-muted-foreground"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-background">
                        <FiCheck className="h-3.5 w-3.5" />
                      </span>
                      {capability}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:text-right">
                <p className="text-sm font-medium leading-6 text-muted-foreground">
                  Have a product in mind or looking for a Flutter Developer for
                  your team? I&apos;d be happy to hear about it.
                </p>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-accent/80"
                >
                  Discuss a project
                  <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
