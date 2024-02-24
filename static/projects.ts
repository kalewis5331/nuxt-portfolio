import type { IClient, IProjectState } from '~/interfaces/projects'
import { clients } from '~/static/clients'

const otaskuClient: IClient | undefined = clients.find(
  (client) => client.id === 'otasku',
)
export const projectsState = (): IProjectState => ({
  projectsHeading: 'Projects Portfolio',
  projectsDescription: `Other projects I've worked on (e.g., Private Repos, Archived Side Projects)`,
  socialSharings: [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/kevin-l-04a76581/',
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Otasku Spam Blocker',
      category: 'Mobile Application',
      img: '/images/OtaskuSpamBlocker.png',
      publishDate: 'Mar, 2020',
      tag: 'Mobile Application',
      clientTitle: 'About Client',
      detailsTitle: 'Details',
      details:
        'A small anime-styled Spam Blocker that blocks spam, unwanted, and unknown callers.',
      techTitle: 'Tools & Technologies',
      socialTitle: 'Share This',
      projectImages: [
        {
          title: 'Otasku Spam Blocker Icon',
          img: '/images/OtaskuSpamBlocker.png',
        },
      ],
      client: otaskuClient,
      technologies: ['Java', 'Kotlin', 'Maven', 'Gradle', 'Android Studios'],
    },
  ],
})
