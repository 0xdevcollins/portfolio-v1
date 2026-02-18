import Section from "@/components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5">
                <p>
                    I’m Collins Ikechukwu Chikangwu, a full-stack and blockchain developer focused on building reliable products across web, backend, and smart-contract ecosystems. I work with React, Next.js, TypeScript, Node.js, and Rust/Soroban to ship practical solutions from idea to production.
                </p>
                <p className="mt-5">
                    I’m also an active open-source contributor. My work includes contributions across the Boundless ecosystem, from product-facing features to SDK and platform improvements, alongside collaborations in other public repositories.
                </p>
            </div>
        </Section>
    );
}