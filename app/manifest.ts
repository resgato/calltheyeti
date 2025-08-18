import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yeti Plumbing - Best Plumber in Arizona',
    short_name: 'Yeti Plumbing',
    description: 'Phoenix plumbers for custom homes, renovations, and service. Licensed • Insured • ROC360510.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#b91c1c',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
