import {projects} from "../data/projects";
import LogoIcon from "../components/LogoIcon";

function formatYM(value?: string): string {
    if (!value) return "";
    const v = value.trim();
    if (/^present$/i.test(v)) return "Present";
    const m = v.match(/^(\d{4})-(\d{2})$/);
    if (!m) return v;
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const year = m[1];
    const monthIdx = Math.max(1, Math.min(12, parseInt(m[2], 10))) - 1;
    return `${monthNames[monthIdx]} ${year}`;
}

export default function ExportPage() {
    return (
        <div className="w-full">
            {/* No nav, no blobs, just content */}
            {projects.map((p, idx) => (
                <section key={p.slug} className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 lg:py-14">
                    {/* Top-right logo/brand */}
                    <a
                        href="https://amusfq.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-6 top-6 flex items-center gap-2 text-slate-600 dark:text-slate-300"
                    >
                        <img src="/logo.png" alt="amusfq.dev" width={32} height={32} className="opacity-80"/>
                    </a>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 xl:gap-14 items-start">
                        {/* Visual */}
                        <div className="relative w-full">
                            <div
                                className="aspect-video w-full rounded-xl overflow-hidden">
                                <img src={`/assets/small/${p.assets.thumbnail}`} alt={p.name}
                                     className="h-full w-full object-contain"/>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col space-y-6 lg:pl-6">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                                    {p.name}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400">
                                    {p.company} • {formatYM(p.period.start)} – {formatYM(p.period.end)}
                                </p>
                            </div>

                            {Array.isArray(p.tech_stack) && p.tech_stack.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Tech
                                        Stack</h3>
                                    <div className="flex flex-wrap gap-6 items-center">
                                        {p.tech_stack.slice(0, 8).map((t) => (
                                            <div key={t.label} className="flex flex-col items-center gap-2">
                                                <div
                                                    className="w-12 h-12 p-2 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 ring-1 ring-slate-200/70 dark:ring-slate-700">
                                                    <LogoIcon techName={t.label} icon={t.icon}/>
                                                </div>
                                                <span
                                                    className="text-xs font-medium text-slate-600 dark:text-slate-400">{t.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Description</h3>
                                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{p.description}</p>
                            </div>

                            {Array.isArray(p.features) && p.features.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Features</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                                        {p.features.map((f: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span
                                                    className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-primary"/>
                                                <span className="leading-relaxed">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {p.url && p.url.length > 0 ? (
                                <div className="pt-2">
                                    <a
                                        href={p.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary underline"
                                    >
                                        {p.url}
                                    </a>
                                </div>
                            ) : null}
                        </div>
                    </div>

                    {/* Footer contact info per page */}
                    <div
                        className="flex flex-row items-center justify-between mt-10 pt-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400 ">
                        <span>Portfolio - Fullstack Developer</span>
                        <div
                            className="flex flex-col sm:flex-row gap-2 sm:gap-6 sm:items-center">
                            <span>Achmad Musyaffa Taufiqi</span>
                            <a href="mailto:mail@amusfq.dev" className="underline">mail@amusfq.dev</a>
                            <a href="https://wa.me/+628961290670" target="_blank" rel="noopener noreferrer"
                               className="underline">089612890670</a>
                            <a href="https://amusfq.dev" target="_blank" rel="noopener noreferrer"
                               className="underline">amusfq.dev</a>
                        </div>
                    </div>

                    {/* Page break after each project except the last when printing */}
                    {idx < projects.length - 1 ? <div className="print-page"/> : null}

                </section>
            ))}
        </div>
    );
}
