import Link from "next/link";
import {Icon} from "@iconify/react";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-10 lg:pt-16 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Avatar */}
                <div className="flex md:block justify-center">
                    <div
                        className="relative h-24 w-24 md:h-28 md:w-28 rounded-full bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center text-primary font-bold text-2xl select-none">
                        <Image
                            fill
                            src='/me.jpg'
                            alt='Achmad Musyaffa Taufiqi'
                            className='aspect-square rounded-full w-full h-full'
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Achmad Musyaffa Taufiqi
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        Full‑stack engineer focused on building fast, reliable web and mobile experiences. I enjoy
                        taking
                        complex product requirements and shaping them into clean, maintainable interfaces backed by
                        solid
                        engineering.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Next.js",
                            "TypeScript",
                            "React (Web/Mobile)",
                            "TailwindCSS",
                            "Laravel",
                            "NestJS",
                            "PostgreSQL/MySQL",
                        ].map((s) => (
                            <span
                                key={s}
                                className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1 text-sm text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/50"
                            >
                {s}
              </span>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <a
                            href="mailto:mail@amusfq.dev"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-primary hover:bg-primary/5"
                        >
                            <Icon icon="logos:google-gmail"/> Email
                        </a>
                        <a
                            href="https://wa.me/+6289612890670"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-primary hover:bg-primary/5"
                        >
                            <Icon icon="logos:whatsapp-icon"/> WhatsApp
                        </a>
                        <Link
                            href="https://amusfq.dev"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60"
                        >
                            <Icon icon="logos:brave"/> amusfq.dev
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

