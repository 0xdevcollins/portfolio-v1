import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <p>
                © {new Date().getFullYear()}{" "}
                <Link href="https://github.com/0xdevcollins/">
                    Collins Ikechukwu Chikangwu
                </Link>
                . All rights reserved.
            </p>
        </footer>
    );
}