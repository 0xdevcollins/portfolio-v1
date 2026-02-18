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

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                    <Link
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl"
                    >
                        <Image
                            className="rounded-t-xl h-42 object-fit"
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
                ))}
            </div>
        </Section>
    );
}