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
      id: '7',
      title: 'Otasku Web and Mobile Application ',
      category: 'Web Application',
      img: '/images/otasku.png',
      publishDate: '2019',
      details:
        'Main website for Otasku featuring anime-style task apps. Leverages React Native and Amplify.',
      projectImages: [
        {
          title: 'Otasku Icon',
          img: '/images/otasku.png',
        },
      ],
      client: clients[0],
      technologies: [
        'JavaScript',
        'TypeScript',
        'React Native',
        'React',
        'HTML',
        'CSS',
        'Amazon Web Services',
        'AWS Amplify',
        'AWS Cognito',
        'Java',
        'Kotlin',
        'Maven',
        'Gradle',
        'Android Studios',
        'Xcode',
        'Swift',
      ],
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
        'Swift',
        'AWS Farms',
      ],
    },
    {
      id: '5',
      title: 'Amazing Tasks',
      category: 'Mobile Application',
      img: '/images/amazingTasks.png',
      publishDate: '2017',
      details:
        'Otasku App that helps keep track of daily tasks, leveraging Android.',
      projectImages: [
        {
          title: 'AT Icon',
          img: '/images/amazingTasks.png',
        },
      ],
      client: clients[0],
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
    {
      id: '6',
      title: 'Finances with Blend-S',
      category: 'Mobile Application',
      img: '/images/fwbs.png',
      publishDate: '2017',
      details: 'An Otasku Android app that calculates tips and discounts.',
      projectImages: [
        {
          title: 'FWBS Icon',
          img: '/images/fwbs.png',
        },
      ],
      client: clients[0],
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
