import { GitHubAPI } from './datasources/github-api'

export type DataSourceContext = {
  dataSources: {
    ghAPI: GitHubAPI
  }
}
