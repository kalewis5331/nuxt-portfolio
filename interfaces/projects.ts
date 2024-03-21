export interface IClient {
  id: string
  clientImages: Array<{ img: string; title: string }>
  companyInfos: Array<{
    title: string
    details: string
  }>
}

export interface IProject {
  id: string
  title: string
  category: string
  img: string
  publishDate: Date
  link?: string
  details: string
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
  clientTitle: string
  detailsTitle: string
  techTitle: string
  socialTitle: string
  socialSharings: Array<{
    name: string
    icon: string
    url: string
  }>
  projects: Array<IProject>
}
