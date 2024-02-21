export interface IClient {
  id?: number
  img: string
  title: string
}

export interface IProject {
  id: string
  title: string
  category: string
  img: string
  publishDate: string
  tag: string
  clientTitle: string
  objectivesTitle: string
  objectivesDetails: string
  techTitle: string
  detailsTitle: string
  socialTitle: string
  projectImages: {
    id: string
    title: string
    img: string
  }[]
  companyInfos: {
    id: string
    title: string
    details: string
  }[]
  technologies: string[]
  projectDetails: {
    id: string
    details: string
  }[]
  socialSharings: {
    id: string
    name: string
    icon: string
    url: string
  }[]
}
