import type { Metadata, Viewport } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    manifest: "/site.webmanifest",
    title: {
        default: "Chikangwu Collins | Full-Stack & Blockchain Developer",
        template: "%s | Chikangwu Collins",
    },
    description: "Portfolio of Chikangwu Collins, a full-stack and blockchain developer building scalable web products with React, Next.js, Node.js, Rust, and Soroban.",
    keywords: [
        "Chikangwu Collins",
        "Collins Ikechukwu Chikangwu",
        "Full Stack Developer",
        "Blockchain Developer",
        "Next.js Developer",
        "React Developer",
        "Node.js Developer",
        "TypeScript",
        "Rust",
        "Soroban",
        "Portfolio",
    ],
    authors: [{ name: "Chikangwu Collins", url: "https://github.com/0xdevcollins/" }],
    creator: "Chikangwu Collins",
    publisher: "Chikangwu Collins",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Chikangwu Collins | Full-Stack & Blockchain Developer",
        description: "Explore projects, experience, and open-source contributions by Chikangwu Collins.",
        url: "/",
        siteName: "Chikangwu Collins Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Chikangwu Collins Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chikangwu Collins | Full-Stack & Blockchain Developer",
        description: "Portfolio of Chikangwu Collins featuring projects, experience, and technical expertise.",
        creator: "@devcollinss",
        images: ["/assets/profile.jpg"],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

export const viewport: Viewport = {
    themeColor: "#0f172a",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${sortsMillGoudy.variable}`}>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}
