"use client";

import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Boundless",
            description: "Decentralized crowdfunding and grants platform on Stellar with milestone-based escrow, wallet integrations, and open-source collaboration.",
            image: "/assets/project-1.png",
            url: "https://boundlessfi.xyz",
        },
        {
            title: "Threadify",
            description: "Creator commerce platform for launching custom merch stores, from storefront setup to order fulfillment.",
            image: "/assets/project-2.png",
            url: "https://threadify.store",
        },
    ];

    const loopedProjects = [...projects, ...projects];

    return (
        <Section title="Projects">
            <div className="w-full mr-auto overflow-hidden rounded-xl marquee-wrapper">
                <div className="marquee-track flex gap-4 w-max py-1">
                    {loopedProjects.map((project, index) => (
                        <div key={`${project.title}-${index}`} className="min-w-[18.75rem] max-w-75">
                            <Link
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:-translate-y-0.5 transition duration-300 border border-gray-200 rounded-xl"
                            >
                                <Image
                                    className="rounded-t-xl h-42 object-cover"
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={170}
                                />
                                <div className="p-4">
                                    <h3 className="text-base font-medium">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 mt-1">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .marquee-track {
                    animation: marquee 18s linear infinite;
                }

                .marquee-wrapper:hover .marquee-track {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </Section>
    );
}