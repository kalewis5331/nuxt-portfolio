import { v4 as uuidv4 } from 'uuid'
export const projectsState = () => ({
  projectsHeading: 'Projects Portfolio',
  projectsDescription: 'Some of the projects I have successfully completed',
  projects: [
    {
      id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdb',
      title: 'Google Health Platform',
      category: 'Web Application',
      img: 'images/web-project-2.jpg',
      publishDate: 'Nov 04, 2021',
      tag: 'UI / Frontend',
      clientTitle: 'About Client',
      objectivesTitle: 'Objective',
      objectivesDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
      techTitle: 'Tools & Technologies',
      detailsTitle: 'Challenge',
      socialTitle: 'Share This',
      projectImages: [
        {
          id: uuidv4(),
          title: 'Uber Project Management UI',
          img: '../images/ui-project-1.jpg',
        },
        {
          id: uuidv4(),
          title: 'Uber Project Management UI',
          img: '../images/web-project-1.jpg',
        },
        {
          id: uuidv4(),
          title: 'Uber Project Management UI',
          img: '../images/web-project-2.jpg',
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Company Ltd',
        },
        {
          id: uuidv4(),
          title: 'Services',
          details: 'UI Design & Frontend Development',
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://company.com',
        },
        {
          id: uuidv4(),
          title: 'Phone',
          details: '555 8888 888',
        },
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Nuxt.js',
        'TailwindCSS',
        'AdobeXD',
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
        },
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
        },
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
        },
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: 'LinkedIn',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/kevin-l-04a76581/',
        },
      ],
    },
  ],
})
