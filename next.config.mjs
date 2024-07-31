import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            }
        ]
    },
};

const withMDX = createMDX({
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
});

export default withMDX(nextConfig);
