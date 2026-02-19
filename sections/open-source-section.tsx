import Section from "@/components/section";

const repositories = [
    "boundless-sdk",
    "akkuea",
    "clonable-backoffice",
    "smart-account-kit",
    "dApp-Trustless-Work",
    "streamfi-frontend",
    "frontend-SafeTrust",
    "safetrustrcr-frontend",
    "harmonia-dapp",
    "paystell-backend",
    "predictify-frontend",
    "crowdchain",
    "metamask-snap-avail",
    "backend-SafeTrust",
    "StarkFinder",
    "SRust-Soroban-examples",
    "TB-Backend",
    "Harmony",
    "adam-frontend",
    "MixMatch-Backend",
    "StellarMind",
    "stellopay-core",
    "backend",
    "SRust-Basic-Stellar-nextjs-npm",
    "Product",
    "SafeSwap",
    "docs",
    "Scaffold-Stellar-pnpm",
    "kindfi",
    "starkfarm-client",
    "seamlessui",
    "Citizen-of-Arcanis-Website",
    "peer-on-strk",
    "stark-tic-tac-toe",
    "bsv-ai",
    "Starkcade",
    "fuels-wallet",
    "transverse-frontend",
    "ss2-docs",
    "socialsphere",
    "cairo-book",
    "strapex",
    "spotnet",
    "Revolutionary_Farmers",
    "auto-swap",
    "api.starknet.id",
    "resolver_ccip",
    "bsv-faucet",
    "api.sales.starknet.id",
    "stellar-cli",
    "derisk-research",
    "spv-wallet-browser",
    "stone-packaging",
    "starkludo",
    "starknet.quest",
    "cairo-lint",
    "afk_monorepo",
    "joyboy",
];

export default function OpenSourceSection() {
    return (
        <Section title="Open Source">
            <div className="w-full">
                <p className="text-gray-500 mb-5">
                    Repositories I have contributed to and maintained in the open-source ecosystem ({repositories.length} projects).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {repositories.map((repo) => (
                        <a
                            key={repo}
                            href={`https://github.com/0xdevcollins/${repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50/80 hover:-translate-y-0.5 transition"
                        >
                            <p className="font-medium text-gray-800 truncate">{repo}</p>
                            <p className="text-xs text-gray-500 mt-1 truncate">github.com/0xdevcollins/{repo}</p>
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
