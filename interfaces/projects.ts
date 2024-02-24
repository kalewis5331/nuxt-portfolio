export interface IClient {
  id: string
  clientImages: Array<{ img: string; title: string }>
  companyInfos: Array<{
    title: string
    details: string
  }>
}

export type LanguageTrending = {
  [language: string]: {
    color: string
    url: string
  }
}

export interface IProject {
  id: string
  title: string
  category: string
  img: string
  publishDate: string
  tag: string
  clientTitle: string
  detailsTitle: string
  techTitle: string
  details: string
  socialTitle: string
  projectImages: {
    title: string
    img: string
  }[]
  client?: IClient
  technologies: string[]
}

export interface IProjectState {
  projectsHeading: string
  projectsDescription: string
  socialSharings: Array<{
    name: string
    icon: string
    url: string
  }>
  projects: Array<IProject>
}
