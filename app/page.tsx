import type { Metadata } from "next";
import Footer from "@/components/footer";
import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import EducationSection from "@/sections/education-section";
import ExperienceSection from "@/sections/experience-section";
import HeroSection from "@/sections/hero-section";
import OpenSourceSection from "@/sections/open-source-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: "Full-Stack & Blockchain Developer Portfolio",
    description: "Chikangwu Collins is a full-stack and blockchain developer experienced in React, Next.js, Node.js, TypeScript, Rust, and Soroban.",
};

export default function Page() {
    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Chikangwu Collins",
        alternateName: "Collins Ikechukwu Chikangwu",
        url: siteUrl,
        image: `${siteUrl}/assets/profile.jpg`,
        jobTitle: "Full-Stack & Blockchain Developer",
        email: "mailto:collinschristroa@gmail.com",
        sameAs: [
            "https://github.com/0xdevcollins/",
            "https://x.com/devcollinss",
            "https://www.linkedin.com/in/collins-ikechukwu-a5a75323a/",
            "https://www.instagram.com/devcollinss/",
        ],
        knowsAbout: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Node.js",
            "Nestjs",
            "Rust",
            "Soroban",
            "PostgreSQL",
            "MySQL",
        ],
        worksFor: [
            { "@type": "Organization", name: "Boundless" },
            { "@type": "Organization", name: "Threadify" },
            { "@type": "Organization", name: "Gridape" },
            { "@type": "Organization", name: "Oracus Digital Agency" },
        ],
    };

    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Chikangwu Collins Portfolio",
        url: siteUrl,
        inLanguage: "en",
    };

    return (
        <main className="max-md:px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <OpenSourceSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}