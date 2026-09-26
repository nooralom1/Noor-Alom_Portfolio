import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FiArrowLeft, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { PROJECTS_CARD, Project } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const getStaticPaths: GetStaticPaths = async () => ({ paths: PROJECTS_CARD.map(p => ({params:{slug:p.slug}})), fallback:false });
export const getStaticProps: GetStaticProps = async ({params}) => {
  const project = PROJECTS_CARD.find(p => p.slug === params?.slug);
  return project ? {props:{project}} : {notFound:true};
};

const contributions: Record<string,string[]> = {
  "edu-poribar": ["Built and maintain live classes, recorded courses and on-demand learning workflows.","Developed enrollment, video streaming, offline content access and MCQ/written examination flows.","Integrated REST APIs and improved reliability, performance and user experience.","Maintained a production app with 10K+ downloads and a 4.6 Google Play rating."],
  "beestera-soccer": ["Built structured video-based football learning experiences.","Developed practice submission and dynamic leaderboard workflows.","Contributed to responsive UI, backend integration, debugging and performance improvements.","Supported Android and iOS production releases."],
  "urban-koala": ["Developed location-based discovery for nearby service providers.","Integrated interactive map functionality and booking workflows.","Implemented real-time communication and payment gateway integration.","Improved responsiveness and user flow across location, booking and service features."],
  "sleep-cast": ["Built categorized audio streaming with smooth background playback.","Implemented sleep timer, offline listening and multi-provider authentication.","Integrated premium subscription workflows.","Optimized API handling, UI responsiveness and playback reliability."],
  "wood-machinery": ["Built structured product browsing and detailed product views.","Developed an intuitive purchase flow for machinery and industrial tools.","Integrated backend services for products, orders and user data.","Improved UI consistency and responsive shopping experiences."],
};

export default function ProjectDetails({project}:{project:Project}) {
  return <>
    <NextSeo title={`${project.name} | Md Noor-Alom Siddik`} description={project.description} canonical={`${siteMetadata.siteUrl}/projects/${project.slug}`} />
    <section className="relative isolate overflow-hidden px-6 pb-28 pt-10 sm:px-14 md:px-20 md:pt-16">
      <div className="pointer-events-none absolute right-[-8rem] top-10 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"/>
      <div className="mx-auto max-w-7xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-accent"><FiArrowLeft/> Back to Projects</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{project.category}</p>
            <h1 className="mt-3 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">{project.name}</h1>
            <p className="mt-6 text-base font-medium leading-7 text-muted-foreground">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map(t=><span key={t} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">{t}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">{project.links.map((l,i)=><a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={i===0?"inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-background":"inline-flex items-center gap-2 rounded-full border border-accent/25 px-5 py-3 text-sm font-bold text-accent"}>{l.label}<FiArrowUpRight/></a>)}</div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-accent/25 bg-muted shadow-2xl shadow-accent/10"><Image src={project.image || "/images/noor-alom-profile.png"} alt={`${project.name} preview`} fill className="object-cover" priority/></div>
        </div>
        <div className="mt-14 grid gap-8 rounded-[2rem] border border-accent/20 bg-accent/5 p-7 md:grid-cols-[0.7fr_1.3fr] md:p-10">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">My contribution</p><h2 className="mt-3 text-3xl font-bold tracking-tight">What I worked on</h2></div>
          <div className="grid gap-4">{(contributions[project.slug] || []).map(c=><div key={c} className="flex gap-3 text-sm font-semibold leading-6 text-muted-foreground"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-background"><FiCheck className="h-3.5 w-3.5"/></span>{c}</div>)}</div>
        </div>
      </div>
    </section>
  </>;
}
