import Section from "@/components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">collinschristroa@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">GitHub:</td>
                        <td className="py-2 text-gray-500">github.com/0xdevcollins</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">LinkedIn:</td>
                        <td className="py-2 text-gray-500">linkedin.com/in/collins-ikechukwu-a5a75323a</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}