import { FormEvent, useState } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
    window.location.href = `mailto:${siteMetadata.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <>
    <NextSeo title="Contact | Md Noor-Alom Siddik" description="Contact Md Noor-Alom Siddik for Flutter development opportunities and mobile app projects." canonical={`${siteMetadata.siteUrl}/contact`} />
    <section className="relative isolate overflow-hidden px-6 pb-28 pt-14 sm:px-14 md:px-20 md:pt-20">
      <div className="pointer-events-none absolute right-[-8rem] top-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Get in touch</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Let&apos;s build something <span className="text-accent">useful.</span></h1>
          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-muted-foreground">Have a Flutter role, product idea, or mobile app project? Send me the details and I&apos;ll get back to you.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a href={`mailto:${siteMetadata.email}`} className="rounded-2xl border border-accent/20 bg-accent/5 p-5 transition hover:border-accent/40"><FiMail className="h-5 w-5 text-accent"/><p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</p><p className="mt-1 text-sm font-bold">{siteMetadata.email}</p></a>
            <a href={`tel:${siteMetadata.phone}`} className="rounded-2xl border border-accent/20 bg-accent/5 p-5 transition hover:border-accent/40"><FiPhone className="h-5 w-5 text-accent"/><p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</p><p className="mt-1 text-sm font-bold">{siteMetadata.phone}</p></a>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:col-span-2"><FiMapPin className="h-5 w-5 text-accent"/><p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Location</p><p className="mt-1 text-sm font-bold">{siteMetadata.location}, Bangladesh</p></div>
          </div>
        </motion.div>
        <motion.form onSubmit={submit} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} className="rounded-[2rem] border border-accent/25 bg-background/80 p-6 shadow-2xl shadow-accent/10 backdrop-blur sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold">Your name<input name="name" required className="mt-2 w-full rounded-xl border border-accent/15 bg-muted/60 px-4 py-3.5 font-medium outline-none transition focus:border-accent" placeholder="Enter your name"/></label>
            <label className="text-sm font-bold">Your email<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-accent/15 bg-muted/60 px-4 py-3.5 font-medium outline-none transition focus:border-accent" placeholder="you@example.com"/></label>
          </div>
          <label className="mt-5 block text-sm font-bold">Subject<input name="subject" required className="mt-2 w-full rounded-xl border border-accent/15 bg-muted/60 px-4 py-3.5 font-medium outline-none transition focus:border-accent" placeholder="Flutter project / opportunity"/></label>
          <label className="mt-5 block text-sm font-bold">Message<textarea name="message" required rows={7} className="mt-2 w-full resize-none rounded-xl border border-accent/15 bg-muted/60 px-4 py-3.5 font-medium outline-none transition focus:border-accent" placeholder="Tell me about your project..."/></label>
          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-extrabold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent/80">Send Message <FiSend/></button>
          {sent && <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">Your email app should open with the message ready to send.</p>}
        </motion.form>
      </div>
    </section>
  </>;
}
