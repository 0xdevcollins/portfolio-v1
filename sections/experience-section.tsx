import Section from "@/components/section";
import Image from "next/image";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/project-1.png",
            title: "Full-Stack & Blockchain Developer",
            company: "Boundless",
            location: "Remote",
            start: "2025",
            end: "Present",
            description: [
                "Building and shipping full-stack features across the Boundless platform.",
                "Working on blockchain-powered workflows and product infrastructure.",
            ],
        },
        {
            image: "/assets/project-2.png",
            title: "Full-Stack Developer",
            company: "Threadify",
            location: "Remote",
            start: "2024",
            end: "Present",
            description: [
                "Developing and maintaining end-to-end product features for the Threadify platform.",
                "Delivering frontend, backend, and database implementations for production use.",
            ],
        },
        {
            image: "/assets/project-1.png",
            title: "Full-Stack Developer",
            company: "Gridape",
            location: "Remote",
            start: "2024",
            end: "Present",
            description: [
                "Contributed to Gridape, an email marketing platform (gridape.com).",
                "Built and improved product features across the full stack.",
            ],
        },
        {
            image: "/assets/project-2.png",
            title: "Full-Stack Developer",
            company: "Oracus Digital Agency",
            location: "Remote",
            start: "2024",
            end: "Present",
            description: [
                "Worked as a full-stack developer on client and internal web products.",
                "Delivered scalable web solutions for the agency (oracus.ng).",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.company} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start ? `${experience.start} - ${experience.end}` : experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}