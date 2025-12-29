export type Tech = { label: string; icon: string };

export type Project = {
    name: string;
    slug: string;
    company: string;
    period: { start: string; end: string };
    description: string;
    tech_stack: Tech[];
    skills: string[];
    assets: { thumbnail: string; gallery: string[] };
    url?: string;
};

export const projects: Project[] = [
    {
        "name": "Thalibul Ilmi",
        "slug": "thalibulilmi",
        "company": "thalibulilmi.com",
        "period": {"start": "2022-09", "end": "2022-11"},
        "description": "Independent educational and publishing platform carrying the spirit of \"Sharing is Caring\" and the principle that \"Knowledge is Hope\", aimed at expanding literacy and education access through digital solutions.",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs-icon"},
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Next.js", "Laravel", "Web Development"],
        "assets": {
            "thumbnail": "/assets/thalibulilmi.png",
            "gallery": []
        },
        "url": "https://thalibulilmi.com"
    },
    {
        "name": "U.id",
        "slug": "u-id",
        "company": "U.id",
        "period": {"start": "2022-05", "end": "2022-06"},
        "description": "Rebuilt the U.ID website using Next.js, TypeScript, and TailwindCSS to improve performance, maintainability, and user experience.",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs-icon"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Next.js", "TypeScript", "TailwindCSS"],
        "assets": {
            "thumbnail": "/assets/uid.png",
            "gallery": []
        },
        "url": "https://u.id"
    },
    {
        "name": "PANDI.id",
        "slug": "pandi-id",
        "company": "Pengelola Nama Domain Internet Indonesia (PANDI)",
        "period": {"start": "2022-01", "end": "2022-03"},
        "description": "Rebuilt the PANDI.ID website using Next.js, TypeScript, and TailwindCSS, including integration with U.ID Single Sign-On (SSO).",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs-icon"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Next.js", "TypeScript", "SSO Integration"],
        "assets": {
            "thumbnail": "/assets/pandi.png",
            "gallery": []
        },
        "url": "https://pandi.id"
    },
    {
        "name": "Torsi",
        "slug": "torsi",
        "company": "Torsi",
        "period": {"start": "2021-12", "end": "2022-02"},
        "description": "Marketplace for buying, selling, and listing heavy equipment.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Marketplace Development", "React.js", "React Native"],
        "assets": {
            "thumbnail": "/assets/torsi.png",
            "gallery": []
        }
    },
    {
        "name": "Cakrawala Data Nusantara",
        "slug": "cakrawala-data-nusantara",
        "company": "Cakrawala Data Nusantara",
        "period": {"start": "2020-02", "end": "2022-01"},
        "description": "Data intelligence platform for analyzing public conversations and supporting data-driven digital strategies, including public opinion monitoring, campaign impact measurement, and real-time decision making.",
        "features": [
            "Public discourse and conversation analysis",
            "Social sentiment analysis",
            "Hoax and misinformation tracking",
            "Integrated media monitoring",
            "Brand reputation indicators",
            "Social network and topic trend visualization",
            "Real-time analytics dashboards"
        ],
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs-icon"},
            {"label": "Nest.js", "icon": "nestjs"},
            {"label": "Python", "icon": "python"}
        ],
        "skills": ["Data Intelligence", "Sentiment Analysis", "Python", "Next.js"],
        "assets": {
            "thumbnail": "/assets/cakrawala.png",
            "gallery": []
        },
        "url": "https://cakrawala-dn.com"
    },
    {
        "name": "AWLR Monitoring System",
        "slug": "awlr",
        "company": "AWLR",
        "period": {"start": "2023-01", "end": "2024-06"},
        "description": "IoT-based Automatic Water Level Recorder system for real-time monitoring and historical analysis.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"}
        ],
        "skills": ["IoT", "Laravel", "Data Visualization"],
        "assets": {
            "thumbnail": "/assets/awlr.png",
            "gallery": []
        },
        "url": ""
    },
    {
        "name": "Carwash Management Mobile App",
        "slug": "carwash",
        "company": "Carwash",
        "period": {"start": "2023-03", "end": "2023-06"},
        "description": "Mobile carwash management application with automatic vehicle detection using CCTV-based computer vision.",
        "tech_stack": [
            {"label": "React Native", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"}
        ],
        "skills": ["React Native", "Computer Vision"],
        "assets": {
            "thumbnail": "/assets/carwash.png",
            "gallery": []
        },
        "url": "https://awlr-atab.pusair-pu.go.id"
    },
    {
        "name": "Diricare",
        "slug": "diricare",
        "company": "Diricare",
        "period": {"start": "2023-07", "end": "2024-01"},
        "description": "Developed and integrated an OTC (Over-the-Counter) module for the Diricare platform using Next.js, TypeScript, and TailwindCSS, enabling streamlined product transactions and responsive user interfaces.",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs-icon"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Next.js", "TypeScript", "SaaS Development"],
        "assets": {
            "thumbnail": "/assets/diricare.png",
            "gallery": []
        },
        "url": "https://diricare.com/hello"
    },
    {
        "name": "E-Kerjo Kediri Kab (Web)",
        "slug": "e-kerjo-web",
        "company": "Kediri Regency Government",
        "period": {"start": "2024-02", "end": "2024-07"},
        "description": "Government-initiated web platform designed to centralize job vacancy information and publish official employment updates from the Kediri Regency Department of Manpower.",
        "tech_stack": [
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Government Systems", "Laravel"],
        "assets": {
            "thumbnail": "/assets/e-kerjo.png",
            "gallery": []
        },
        "url": "https://e-kerjo.kedirikab.go.id"
    },
    {
        "name": "E-Kerjo Kediri Kab (Mobile)",
        "slug": "e-kerjo-mobile",
        "company": "Kediri Regency Government",
        "period": {"start": "2024-02", "end": "2024-07"},
        "description": "Mobile application version of E-Kerjo Kediri Kab, providing easy public access to job vacancy information and official manpower announcements.",
        "tech_stack": [
            {"label": "React Native", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Government Systems", "React Native", "Mobile App Development"],
        "assets": {
            "thumbnail": "/assets/e-kerjo_mobile.png",
            "gallery": []
        },
        "url": "https://play.google.com/store/apps/details?id=dev.amusfq.ekerjo&hl=id"
    },
    {
        "name": "KEDAS Order System",
        "slug": "kedas",
        "company": "KEDAS",
        "period": {"start": "2022-11", "end": "2023-07"},
        "description": "Order management system with role-based distribution flow, inventory control, and sales analytics dashboards.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Order Management", "Inventory Systems", "RBAC"],
        "assets": {
            "thumbnail": "/assets/kedas.png",
            "gallery": []
        }
    },
    {
        "name": "Shieldtech",
        "slug": "shieldtech",
        "company": "Shieldtech",
        "period": {"start": "2023-08", "end": "Present"},
        "description": "Integrated education management platform handling academic structure, teachers, students, and reporting.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "React Native", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"},
            {"label": "Lumen", "icon": "lumen"}
        ],
        "skills": ["Education Platforms", "Laravel", "React Native"],
        "assets": {
            "thumbnail": "/assets/shieldtech.png",
            "gallery": []
        },
        "url": "https://shieldtech.highscope.or.id"
    }
];
