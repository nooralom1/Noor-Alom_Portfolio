import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Md Noor-Alom Siddik | Flutter Developer"
        description="Meet Md Noor-Alom Siddik, a Flutter Developer with 3+ years of experience building and maintaining production Android and iOS applications."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Md Noor-Alom Siddik - Flutter Developer",
          description:
            "Flutter Developer focused on scalable architecture, responsive UI, integrations, and production delivery.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Md Noor-Alom Siddik - Flutter Developer",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Flutter Developer, Dart, Android Developer, iOS Developer, Mobile App Developer, Dhaka",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
