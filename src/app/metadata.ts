export const metadata = {
  title: {
    default: 'Joshitha Dantam - Futuristic AI Engineering Portfolio',
    template: '%s | Joshitha Dantam',
  },
  description:
    'Interactive 3D portfolio showcasing electronics engineering, AI innovation, and cutting-edge software solutions. Explore my projects, skills, and journey as an electronics engineer.',
  keywords: [
    'Electronics Engineer',
    'AI Innovator',
    'Web Developer',
    'Embedded Systems',
    'Portfolio',
    '3D Animation',
  ],
  authors: [{ name: 'Joshitha Dantam' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Joshitha Dantam - Futuristic AI Engineering Portfolio',
    description:
      'Interactive 3D portfolio showcasing electronics engineering and AI projects',
    url: 'https://joshitha-portfolio.com',
    siteName: 'Joshitha Dantam Portfolio',
    images: [
      {
        url: 'https://joshitha-portfolio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshitha Dantam - Futuristic AI Engineering Portfolio',
    description: 'Interactive 3D portfolio with cutting-edge engineering projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
