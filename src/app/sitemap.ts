import { MetadataRoute } from 'next'

const baseUrl = 'https://post-roaster.com'
const changeFrequency = 'monthly'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
  ]
}
