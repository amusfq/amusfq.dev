'use client'

import {Icon, addCollection} from "@iconify/react";
import logos from "@iconify-json/logos/icons.json";

type Props = {
    techName: string;
    icon?: string; // explicit Iconify id (e.g., logos:react -> 'react')
    className?: string;
};

// Map common tech labels to Iconify logos ids
const NAME_TO_ID: Record<string, string> = {
    react: "react",
    "react.js": "react",
    "react native": "react",
    next: "nextjs-icon",
    "next.js": "nextjs-icon",
    nextjs: "nextjs-icon",
    typescript: "typescript-icon",
    tailwindcss: "tailwindcss-icon",
    tailwind: "tailwindcss-icon",
    node: "nodejs-icon",
    "node.js": "nodejs-icon",
    nodejs: "nodejs-icon",
    laravel: "laravel",
    python: "python",
    mysql: "mysql",
    mongodb: "mongodb-icon",
    nest: "nestjs",
    nestjs: "nestjs",
};

// Register local 'logos' collection for offline usage
addCollection(logos as any);

export default function LogoIcon({techName, icon, className}: Props) {
    const key = techName.toLowerCase().trim();
    const rawId = icon || NAME_TO_ID[key] || inferId(key);

    // Build the icon name for Iconify: default to 'logos' collection
    const iconName = rawId
        ? rawId.includes(":")
            ? rawId
            : `logos:${rawId}`
        : undefined;

    if (iconName) {
        return (
            <Icon
                icon={iconName}
                className={className || "h-full w-auto"}
                aria-hidden="true"
                height="100%"
            />
        );
    }

    // Fallback: initial letter badge
    return (
        <span
            className={
                className ||
                "inline-flex h-full w-full items-center justify-center rounded-md bg-slate-200 text-slate-700 text-xs font-semibold"
            }
            style={{display: "inline-flex"}}
            title={techName}
        >
            {techName.charAt(0).toUpperCase()}
        </span>
    );
}

function inferId(key: string): string | undefined {
    if (key.includes("react")) return "react";
    if (key.includes("next")) return "nextjs-icon";
    if (key.includes("type")) return "typescript-icon";
    if (key.includes("tailwind")) return "tailwindcss-icon";
    if (key.includes("node")) return "nodejs-icon";
    if (key.includes("laravel")) return "laravel";
    if (key.includes("python")) return "python";
    if (key.includes("mysql")) return "mysql";
    if (key.includes("mongo")) return "mongodb-icon";
    if (key.includes("nest")) return "nestjs";
    return undefined;
}
