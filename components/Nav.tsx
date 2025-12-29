import ThemeToggle from "./ThemeToggle";

export default function Nav() {
    return (
        <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Project Showcase
                </h1>
                <div className="h-1 w-16 bg-primary mt-2 rounded-full"/>
            </div>
            <div className="flex items-center gap-6">
                <ul className="flex space-x-8 text-lg font-medium text-slate-600 dark:text-slate-300">
                    <li className="flex items-center">
                        <a href="#" className="hover:text-primary transition-colors">
                            Home
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="#" className="hover:text-primary transition-colors">
                            Projects
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="#" className="hover:text-primary transition-colors">
                            About
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="#" className="hover:text-primary transition-colors">
                            Contact
                        </a>
                    </li>
                    <li>
                        <ThemeToggle/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
