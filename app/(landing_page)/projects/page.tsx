import Showcase from "@/components/projects/Showcase";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Projects – amusfq.dev",
    description: "Selected projects by Achmad Musyaffa Taufiqi: web, mobile, and platform builds.",
};

export default function ProjectsPage() {
    return <Showcase/>
}
