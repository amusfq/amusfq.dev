import Nav from "@/components/ui/Nav";

type Props = Readonly<{
    children: React.ReactNode;
}>

export default function Layout({children}: Props) {
    return (

        <div className="relative">
            {/* Floating blobs background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal dark:bg-blue-500/10 opacity-70 animate-blob"/>
                <div
                    className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal dark:bg-purple-500/10 opacity-70 animate-blob"
                    style={{animationDelay: "2s"}}
                />
                <div
                    className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal dark:bg-indigo-500/10 opacity-70 animate-blob"
                    style={{animationDelay: "4s"}}
                />
            </div>

            {/* Subtle SVG pattern on the right */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none z-0">
                <svg
                    className="w-full h-full fill-none stroke-slate-200 dark:stroke-slate-700"
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M700,100 L400,300 L700,500 L800,300 Z" strokeWidth="1"></path>
                    <path d="M400,300 L100,200 L400,0 Z" strokeWidth="1"></path>
                    <path d="M400,300 L200,600 L600,700 Z" strokeWidth="1"></path>
                </svg>
            </div>

            <Nav/>
            {/* Content */}
            {children}
        </div>
    )
}