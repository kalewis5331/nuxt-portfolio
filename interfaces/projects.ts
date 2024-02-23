export interface IClient {
  id?: number
  img: string
  title: string
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
  socialSharings: {
    id: string
    name: string
    icon: string
    url: string
  }[]
}
