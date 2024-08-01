import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/resume',
        '/portfolio',
        '/contact',
      ],
      disallow: ['/admin/', '/login'],
    },
    sitemap: 'https://amusfq.dev/sitemap.xml',
  }
}
