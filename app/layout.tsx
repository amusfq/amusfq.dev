import type {Metadata} from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "amusfq.dev – Achmad Musyaffa Taufiqi",
    description: "Portfolio, projects, and contact for Achmad Musyaffa Taufiqi.",
};

type Props = Readonly<{
    children: React.ReactNode;
}>

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <head>
            {/* Set initial theme before paint to avoid flash */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            (function(){
              try {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch (e) {}
            })();
          `,
                }}
            />
            {/* Google Font: Inter */}
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            {/* Phosphor Icons web bundle for <i class="ph ..."> */}
            <Script
                src="https://unpkg.com/@phosphor-icons/web"
                strategy="beforeInteractive"
            />
        </head>
        <body
            className={`antialiased bg-background dark:bg-background-dark bg-pattern text-slate-800 dark:text-slate-100 min-h-screen relative overflow-x-hidden transition-colors duration-300`}>
        {children}
        </body>
        </html>
    );
}
