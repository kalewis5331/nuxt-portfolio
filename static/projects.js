import { v4 as uuidv4 } from 'uuid'
export const projectsState = () => ({
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
      tag: 'Mobile Application / Service',
      clientTitle: 'About Client',
      detailsTitle: 'Details',
      details:
        'A small anime-styled Spam Blocker that blocks spam, unwanted, and unknown callers.',
      techTitle: 'Tools & Technologies',
      socialTitle: 'Share This',
      projectImages: [
        {
          id: uuidv4(),
          title: 'Otasku Spam Blocker Icon',
          img: '/images/OtaskuSpamBlocker.png',
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Otasku',
        },
        {
          id: uuidv4(),
          title: 'Services',
          details: 'Android Application to block spam and unwanted calls.',
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://www.otasku.com/',
        },
      ],
      technologies: ['Java', 'Kotlin', 'Maven', 'Gradle', 'Android Studios'],
    },
  ],
})
