"use client";

import {useMemo, useState} from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent(`New message from ${name || "your website"}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name}${email ? ` <${email}>` : ""}`);
        return `mailto:mail@amusfq.dev?subject=${subject}&body=${body}`;
    }, [name, email, message]);

    const whatsappHref = useMemo(() => {
        const text = encodeURIComponent(`${message}\n\nFrom: ${name}${email ? ` <${email}>` : ""}`);
        // WhatsApp wa.me requires international number without '+'
        return `https://wa.me/6289612890670?text=${text}`;
    }, [name, email, message]);

    return (
        <form
            className="grid grid-cols-1 gap-4"
            onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref;
            }}
        >
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full min-h-32 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell me about your project..."
                    required
                />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white shadow-sm hover:opacity-95"
                >
                    <i className="ph ph-paper-plane-tilt"/> Send Email
                </button>
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-primary hover:bg-primary/5"
                >
                    <i className="ph ph-whatsapp-logo"/> WhatsApp
                </a>
            </div>
        </form>
    );
}
