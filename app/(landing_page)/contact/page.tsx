import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact – amusfq.dev",
    description: "Get in touch with Achmad Musyaffa Taufiqi (amusfq)",
};

export default function ContactPage() {
    return (
        <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-4 md:py-10">
            <header className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Contact</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
                    I’m available for freelance and collaboration. Send me a brief about your project, and I’ll get back
                    to you.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Left: quick contacts */}
                <aside className="space-y-4 md:col-span-1">
                    <div
                        className="rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900 p-4">
                        <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Direct</h2>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                            <li>
                                <a className="underline" href="mailto:mail@amusfq.dev">mail@amusfq.dev</a>
                            </li>
                            <li>
                                <a className="underline" href="https://wa.me/628961290670" target="_blank"
                                   rel="noopener noreferrer">
                                    +62 896 1290 670
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="https://amusfq.dev" target="_blank"
                                   rel="noopener noreferrer">
                                    amusfq.dev
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900 p-4">
                        <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Elsewhere</h2>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                            <li>
                                <a className="underline" href="https://github.com/amusfq" target="_blank"
                                   rel="noopener noreferrer">GitHub</a>
                            </li>
                            <li>
                                <a className="underline" href="https://www.linkedin.com/in/amusfq" target="_blank"
                                   rel="noopener noreferrer">LinkedIn</a>
                            </li>
                            <li>
                                <a className="underline" href="https://instagram.com/amusfq" target="_blank"
                                   rel="noopener noreferrer">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className="text-sm text-primary underline inline-block">← Back to Home</Link>
                </aside>

                {/* Right: form */}
                <section className="md:col-span-2">
                    <div
                        className="rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-900 p-6">
                        <ContactForm/>
                    </div>
                </section>
            </div>
        </main>
    );
}
