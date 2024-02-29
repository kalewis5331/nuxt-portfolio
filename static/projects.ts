import type { IProjectState } from '~/interfaces/projects'
import { clients } from '~/static/clients'

export const projectsState = (): IProjectState => ({
  projectsHeading: 'Projects Portfolio',
  projectsDescription: `Other projects I've worked on (e.g., Private Repos, Archived Side Projects)`,
  clientTitle: 'About Client',
  detailsTitle: 'Details',
  techTitle: 'Tools & Technologies',
  socialTitle: 'Share This',
  socialSharings: [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/kalewis5331/',
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Nuxt Portfolio Website',
      category: 'Web Application',
      img: '/images/nuxtPortfolioLogo.png',
      publishDate: 'Mar, 2024',
      details:
        "A portfolio website leveraging Nuxt, featuring my github repos/contributions, as well as other projects I'm working on.",
      projectImages: [
        {
          title: 'Otasku Spam Blocker Icon',
          img: '/images/nuxtPortfolioLogo.png',
        },
      ],
      client: clients[1],
      technologies: [
        'Nuxt',
        'Vue',
        'Tailwindcss',
        'TypeScript',
        'JavaScript',
        'Pinia',
      ],
    },
    {
      id: '2',
      title: 'Otasku Spam Blocker',
      category: 'Mobile Application',
      img: '/images/OtaskuSpamBlocker.png',
      publishDate: 'Mar, 2020',
      details:
        'A small anime-styled Spam Blocker that blocks spam, unwanted, and unknown callers.',
      projectImages: [
        {
          title: 'Otasku Spam Blocker Icon',
          img: '/images/OtaskuSpamBlocker.png',
        },
      ],
      client: clients[0],
      technologies: ['Java', 'Kotlin', 'Maven', 'Gradle', 'Android Studios'],
    },
    {
      id: '3',
      title: 'Athstat',
      category: 'Web Application',
      img: '/images/athstat.png',
      publishDate: '2020',
      details:
        'ATHSTAT breaks down data barriers, providing AI-driven stats and insights to athletes, coaches and fans. Optimize Performance. Share Data. Monetize.',
      projectImages: [
        {
          title: 'Athstat Icon',
          img: '/images/athstat.png',
        },
      ],
      client: clients[2],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Material UI',
        'Node.js',
        'MongoDB',
        'Docker',
        'Amazon Web Services',
        'PostgresQL',
      ],
    },
    {
      id: '4',
      title: 'Athstat (Mobile)',
      category: 'Mobile Application',
      img: '/images/athstat.png',
      publishDate: '2022',
      details:
        'ATHSTAT breaks down data barriers, providing AI-driven stats and insights to athletes, coaches and fans. Optimize Performance. Share Data. Monetize.',
      projectImages: [
        {
          title: 'Athstat Icon',
          img: '/images/athstat.png',
        },
      ],
      client: clients[2],
      technologies: [
        'Java',
        'Kotlin',
        'Maven',
        'Gradle',
        'Android Studios',
        'Xcode',
        'AWS Farms',
      ],
    },
  ],
})
