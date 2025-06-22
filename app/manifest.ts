import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NomineeJobs - UK Nominee Director Services',
    short_name: 'NomineeJobs',
    description: 'Join the UK\'s leading nominee director programme. Earn £600-£20,000+ annually providing professional nominee services to companies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'en-GB',
    orientation: 'portrait-primary',
  }
} 