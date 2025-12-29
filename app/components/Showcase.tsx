'use client'

import {projects} from "../data/projects";
import LogoIcon from "./LogoIcon";

import {useCallback, useEffect, useState} from "react";

// tech flatten no longer needed; using array of {label, icon}

export default function Showcase() {
    const [index, setIndex] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [paused, setPaused] = useState(false);

    const count = projects.length;
    const current = projects[index];
    const techs = current.tech_stack.slice(0, 6);

    const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
            if (e.key === "Escape") setLightbox(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prev, next, setLightbox]);

    // Touch swipe support
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
            if (dx > 0) prev();
            else next();
        }
        setTouchStartX(null);
    };

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
    ];

    function formatYM(value?: string): string {
        if (!value) return "";
        const v = value.trim();
        if (/^present$/i.test(v)) return "Present";
        const m = v.match(/^(\d{4})-(\d{2})$/);
        if (!m) return v;
        const year = m[1];
        const monthIdx = Math.max(1, Math.min(12, parseInt(m[2], 10))) - 1;
        return `${monthNames[monthIdx]} ${year}`;
    }

    // Auto-scroll carousel (pause on hover or when lightbox open)
    useEffect(() => {
        if (paused || lightbox) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % count);
        }, 5000);
        return () => clearInterval(id);
    }, [count, paused, lightbox]);

    return (
        <main
            className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 xl:gap-12 items-start">
            {/* Left: Carousel visual */}
            <div
                className="relative w-full"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className="aspect-video w-full rounded-xl overflow-hidden cursor-zoom-in"
                    onClick={() => setLightbox(true)}>
                    <div
                        className="flex h-full w-full transition-transform duration-500 ease-out"
                        style={{transform: `translateX(-${index * 100}%)`}}
                    >
                        {projects.map((p) => (
                            <div key={p.slug}
                                 className="min-w-full h-full flex items-center justify-center">
                                <img src={`/assets/small/${p.assets.thumbnail}`} alt={p.name}
                                     className="h-full w-full object-contain"/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <button
                    aria-label="Previous project"
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 shadow hover:bg-white dark:hover:bg-slate-900"
                >
                    <i className="ph ph-caret-left text-xl"/>
                </button>
                <button
                    aria-label="Next project"
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 shadow hover:bg-white dark:hover:bg-slate-900"
                >
                    <i className="ph ph-caret-right text-xl"/>
                </button>

                {/* Dots */}
                <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
                    {projects.map((p, i) => (
                        <button
                            key={p.slug}
                            aria-label={`Go to ${p.name}`}
                            onClick={() => setIndex(i)}
                            className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                i === index ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right: Text content updates with slide */}
            <div className="flex flex-col space-y-8 lg:pl-12">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                        {current.name}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-6">
                        {current.company} • {formatYM(current.period.start)} – {formatYM(current.period.end)}
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Tech Stack</h3>
                    <div
                        className="flex flex-wrap gap-8 items-center mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
                        {techs.map((t) => (
                            <div key={t.label} className="flex flex-col items-center gap-2 group cursor-default">
                                <div
                                    className="w-12 h-12 p-2 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 ring-1 ring-slate-200/70 dark:ring-slate-700 scale-100"
                                >
                                    <LogoIcon techName={t.label} icon={t.icon}/>
                                </div>
                                <span
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400">{t.label}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Description</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{current.description}</p>
                    {Array.isArray((current as any).features) && (current as any).features.length > 0 ? (
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-300">
                                {(current as any).features.map((f: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="mt-[3px] inline-flex h-2 w-2 rounded-full bg-primary"/>
                                        <span className="leading-relaxed">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                    {current.url && current.url.length > 0 ? (
                        <a
                            href={current.url}
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-primary dark:hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    ) : null}
                </div>
            </div>
            {/* Lightbox overlay */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setLightbox(false)}
                >
                    <button
                        aria-label="Close"
                        onClick={() => setLightbox(false)}
                        className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow hover:bg-white"
                    >
                        <i className="ph ph-x text-xl"/>
                    </button>
                    <button
                        aria-label="Previous project"
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow hover:bg-white"
                    >
                        <i className="ph ph-caret-left text-2xl"/>
                    </button>
                    <button
                        aria-label="Next project"
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow hover:bg-white"
                    >
                        <i className="ph ph-caret-right text-2xl"/>
                    </button>
                    <div
                        className="absolute inset-0 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                        style={{zIndex: 0}}
                    >
                        <img
                            src={`/assets/${current.assets.thumbnail}`}
                            alt={current.name}
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
