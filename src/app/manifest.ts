import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LaserCare Pro - Aesthetic Device Management System',
    short_name: 'LaserCare Pro',
    description: 'Save $50K+ annually on equipment management, reduce compliance risks by 90%, and boost staff productivity with our comprehensive platform for aesthetic clinics.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
