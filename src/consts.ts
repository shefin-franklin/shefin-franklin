import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "shefin's blog",
  description:
    'hi this is my personal website / blog. i write about computers and other stuff.',
  href: 'https://shefin-franklin.vercel.app',
  author: 'shefin',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/tools', label: 'tools' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/shefin-franklin', label: 'GitHub' },
  { href: 'https://twitter.com/shefin-franklin', label: 'Twitter' },
  { href: 'shefinfranklin@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
