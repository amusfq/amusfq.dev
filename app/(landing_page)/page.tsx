import AboutMe from "@/components/about/AboutMe";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Me – amusfq.dev",
    description: "About Achmad Musyaffa Taufiqi: full‑stack engineer crafting fast, reliable web and mobile apps.",
};

export default function Home() {
  return (
    <div className="relative">
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

      {/* About only */}
      <AboutMe />
    </div>
  );
}
