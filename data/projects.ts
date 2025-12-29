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
    features?: string[];
};

export const projects: Project[] = [
    {
        "name": "Thalibul Ilmi",
        "slug": "thalibulilmi",
        "company": "THALIBUL ILMI PUBLISHING & EDUCATION",
        "period": {"start": "2022-09", "end": "2022-11"},
        "description": "Independent educational and publishing platform carrying the spirit of \"Sharing is Caring\" and the principle that \"Knowledge is Hope\", aimed at expanding literacy and education access through digital solutions.",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs"},
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Next.js", "Laravel", "Web Development"],
        "assets": {
            "thumbnail": "thalibulilmi.png",
            "gallery": []
        },
        "url": "https://thalibulilmi.com",
        "features": [
            "Article publishing with categories and tags",
            "Search and archive for educational content",
            "Responsive UI with accessible typography",
            "Admin CMS for content and media management",
            "SEO-friendly routing and metadata"
        ]
    },
    {
        "name": "U.id",
        "slug": "u-id",
        "company": "Pengelola Nama Domain Internet Indonesia (PANDI)",
        "period": {"start": "2022-05", "end": "2022-06"},
        "description": "Rebuilt the U.ID website using Next.js, TypeScript, and TailwindCSS to improve performance, maintainability, and user experience.",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Next.js", "TypeScript", "TailwindCSS"],
        "assets": {
            "thumbnail": "uid.png",
            "gallery": []
        },
        "url": "https://u.id",
        "features": [
            "Rebuilt UI with type-safe components",
            "Improved Lighthouse performance and Core Web Vitals",
            "Responsive layouts with TailwindCSS",
            "Static generation and smart image optimization"
        ]
    },
    {
        "name": "PANDI.id",
        "slug": "pandi-id",
        "company": "Pengelola Nama Domain Internet Indonesia (PANDI)",
        "period": {"start": "2022-01", "end": "2022-03"},
        "description": "Rebuilt the PANDI.ID website using Next.js, TypeScript, and TailwindCSS, including integration with U.ID Single Sign-On (SSO).",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Next.js", "TypeScript", "SSO Integration"],
        "assets": {
            "thumbnail": "pandi.png",
            "gallery": []
        },
        "url": "https://pandi.id",
        "features": [
            "Integration with U.ID Single Sign-On (SSO)",
            "Dynamic content pages and news",
            "Caching and ISR for fast loads",
            "Accessible and responsive design"
        ]
    },
    {
        "name": "Torsi",
        "slug": "torsi",
        "company": "PT Vodjo Indonesia",
        "period": {"start": "2021-12", "end": "2022-02"},
        "description": "Marketplace for buying, selling, and listing heavy equipment.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Marketplace Development", "React.js", "React Native"],
        "assets": {
            "thumbnail": "torsi.png",
            "gallery": []
        }
        ,
        "features": [
            "Listing creation with rich media",
            "Advanced search and filtering",
            "Seller dashboard and lead capture",
            "Favorites and comparison",
            "Mobile-friendly responsive experience"
        ]
    },
    {
        "name": "Cakrawala Data Nusantara",
        "slug": "cakrawala-data-nusantara",
        "company": "amusfq.dev",
        "period": {"start": "2020-02", "end": "Present"},
        "description": "Data intelligence platform for analyzing public conversations and supporting data-driven digital strategies, including public opinion monitoring, campaign impact measurement, and real-time decision making.",
        "features": [
            "Public discourse and conversation analysis",
            "Social sentiment analysis",
            "Integrated media monitoring",
            "Brand reputation indicators",
            "Social network and topic trend visualization",
            "Real-time analytics dashboards"
        ],
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs"},
            {"label": "Nest.js", "icon": "nestjs"},
            {"label": "Python", "icon": "python"}
        ],
        "skills": ["Data Intelligence", "Sentiment Analysis", "Python", "Next.js"],
        "assets": {
            "thumbnail": "cakrawala.png",
            "gallery": []
        },
        "url": "https://cakrawala-dn.com"
    },
    {
        "name": "AWLR Monitoring System",
        "slug": "awlr",
        "company": "amusfq.dev",
        "period": {"start": "2025-08", "end": "2025-09"},
        "description": "IoT-based Automatic Water Level Recorder system for real-time monitoring and historical analysis.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"}
        ],
        "skills": ["IoT", "Laravel", "Data Visualization"],
        "assets": {
            "thumbnail": "awlr.png",
            "gallery": []
        },
        "url": "https://awlr-atab.pusair-pu.go.id",
        "features": [
            "Real-time water level charts",
            "Device telemetry and status monitoring",
            "Threshold alerts and notifications",
            "Historical trends and CSV export",
            "User roles for operations team"
        ]
    },
    {
        "name": "Carwash Management Mobile App",
        "slug": "carwash",
        "company": "amusfq.dev",
        "period": {"start": "2023-03", "end": "2023-06"},
        "description": "Mobile carwash management application with automatic vehicle detection using CCTV-based computer vision.",
        "tech_stack": [
            {"label": "React Native", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"}
        ],
        "skills": ["React Native", "Computer Vision"],
        "assets": {
            "thumbnail": "carwash.png",
            "gallery": []
        },
        "url": "",
        "features": [
            "Vehicle detection via CCTV computer vision",
            "Order and queue management",
            "Role-based access for admins and attendants",
            "Push notifications for updates",
            "Daily summary reports"
        ]
    },
    {
        "name": "Diricare",
        "slug": "diricare",
        "company": "PT Vodjo Indonesia",
        "period": {"start": "2023-07", "end": "2024-01"},
        "description": "Developed and integrated an OTC (Over-the-Counter) module for the Diricare platform using Next.js, TypeScript, and TailwindCSS, enabling streamlined product transactions and responsive user interfaces.",
        "tech_stack": [
            {"label": "Next.js", "icon": "nextjs"},
            {"label": "TypeScript", "icon": "typescript-icon"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Next.js", "TypeScript", "SaaS Development"],
        "assets": {
            "thumbnail": "diricare.png",
            "gallery": []
        },
        "url": "https://diricare.com/hello",
        "features": [
            "OTC product catalog and pricing",
            "Cart and order creation workflow"
        ]
    },
    {
        "name": "Sistem Informasi Kandang - Anugrah Farm",
        "slug": "anugrah-farm",
        "company": "amusfq.dev",
        "period": { "start": "2020-11", "end": "2021-01" },
        "description": "Web-based poultry farm management system developed to manage purchases, sales, stock inventory, and operational reports.",
        "features": [
            "Purchase management",
            "Sales transaction management",
            "Stock and inventory tracking",
            "Operational and financial reporting"
        ],
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Business Systems", "Laravel", "React.js", "Inventory Management"],
        "assets": {
            "thumbnail": "anugrah_farm.png",
            "gallery": []
        }
    },
    {
        "name": "E-Kerjo Kediri Kab (Web)",
        "slug": "e-kerjo-web",
        "company": "amusfq.dev",
        "period": {"start": "2024-02", "end": "2024-07"},
        "description": "Government-initiated web platform designed to centralize job vacancy information and publish official employment updates from the Kediri Regency Department of Manpower.",
        "tech_stack": [
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Government Systems", "Laravel"],
        "assets": {
            "thumbnail": "e-kerjo.png",
            "gallery": []
        },
        "url": "https://e-kerjo.kedirikab.go.id",
        "features": [
            "Job listings with advanced filters",
            "Employer posting and moderation",
            "Bookmarking and sharing vacancies",
            "Analytics for posting performance"
        ]
    },
    {
        "name": "E-Kerjo Kediri Kab (Mobile)",
        "slug": "e-kerjo-mobile",
        "company": "amusfq.dev",
        "period": {"start": "2024-02", "end": "2024-07"},
        "description": "Mobile application version of E-Kerjo Kediri Kab, providing easy public access to job vacancy information and official manpower announcements.",
        "tech_stack": [
            {"label": "React Native", "icon": "react"},
            {"label": "Laravel", "icon": "laravel"},
            {"label": "MySQL", "icon": "mysql"}
        ],
        "skills": ["Government Systems", "React Native", "Mobile App Development"],
        "assets": {
            "thumbnail": "e-kerjo_mobile.png",
            "gallery": []
        },
        "url": "https://play.google.com/store/apps/details?id=dev.amusfq.ekerjo&hl=id",
        "features": [
            "Mobile-first job browsing experience",
            "Push notifications for new vacancies",
            "Save and revisit favorite jobs",
            "Deep links to detail screens"
        ]
    },
    {
        "name": "KEDAS Order System",
        "slug": "kedas",
        "company": "PT Vodjo Indonesia",
        "period": {"start": "2022-11", "end": "2023-07"},
        "description": "Order management system with role-based distribution flow, inventory control, and sales analytics dashboards.",
        "tech_stack": [
            {"label": "React.js", "icon": "react"},
            {"label": "TailwindCSS", "icon": "tailwindcss-icon"}
        ],
        "skills": ["Order Management", "Inventory Systems", "RBAC"],
        "assets": {
            "thumbnail": "kedas.png",
            "gallery": []
        }
        ,
        "features": [
            "Role-based access control (RBAC)",
            "Order routing and fulfilment flow",
            "Inventory tracking",
            "Sales dashboards and exports"
        ]
    },
    {
        "name": "Shieldtech",
        "slug": "shieldtech",
        "company": "PT Halotec Indonesia",
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
            "thumbnail": "shieldtech.png",
            "gallery": []
        },
        "url": "https://shieldtech.highscope.or.id",
        "features": [
            "Academic structure management",
            "Students, teachers, and classes",
            "Attendance and grading",
            "Reports and insights",
            "Multi-tenant organization support"
        ]
    }
];
